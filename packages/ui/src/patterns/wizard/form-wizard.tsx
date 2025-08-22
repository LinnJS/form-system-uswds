"use client";

import { Check, ChevronLeft, ChevronRight, Save } from "lucide-react";
import * as React from "react";
import { type UseFormReturn } from "react-hook-form";
import { ButtonEnhanced } from "../../components/button/button-enhanced";
import { cn } from "../../lib/utils";

export interface StorageAdapter {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export class LocalStorageAdapter implements StorageAdapter {
  async getItem(key: string): Promise<string | null> {
    return localStorage.getItem(key);
  }

  async setItem(key: string, value: string): Promise<void> {
    localStorage.setItem(key, value);
  }

  async removeItem(key: string): Promise<void> {
    localStorage.removeItem(key);
  }
}

export interface FormWizardProps<
  TFieldValues extends Record<string, unknown> = Record<string, unknown>,
> {
  /** React Hook Form instance */
  form: UseFormReturn<TFieldValues>;
  /** Storage key for save-in-progress */
  storageKey: string;
  /** Storage adapter (defaults to localStorage) */
  storageAdapter?: StorageAdapter;
  /** Auto-save interval in ms (defaults to 30000 - 30 seconds) */
  autoSaveInterval?: number;
  /** Callback when form is submitted */
  onSubmit: (values: TFieldValues) => void | Promise<void>;
  /** Callback when step changes */
  onStepChange?: (step: number, direction: "next" | "prev") => void;
  /** Children should be FormStep components */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Show progress indicator */
  showProgress?: boolean;
  /** Show save indicator */
  showSaveIndicator?: boolean;
  /** Analytics event prefix */
  analyticsPrefix?: string;
}

export interface FormStepProps {
  /** Step title */
  title: string;
  /** Step description */
  description?: string;
  /** Validation function for this step */
  validate?: () => Promise<boolean> | boolean;
  /** Step content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const FormStep: React.FC<FormStepProps> = ({ children, className }) => {
  return <div className={cn("space-y-6", className)}>{children}</div>;
};

FormStep.displayName = "FormStep";

export function FormWizard<TFieldValues extends Record<string, unknown> = Record<string, unknown>>({
  form,
  storageKey,
  storageAdapter = new LocalStorageAdapter(),
  autoSaveInterval = 30000,
  onSubmit,
  onStepChange,
  children,
  className,
  showProgress = true,
  showSaveIndicator = true,
  analyticsPrefix = "form_wizard",
}: FormWizardProps<TFieldValues>) {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [lastSaved, setLastSaved] = React.useState<Date | null>(null);
  const [isSaving, setIsSaving] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [visitedSteps, setVisitedSteps] = React.useState<Set<number>>(new Set([0]));

  const steps = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<FormStepProps> =>
      React.isValidElement(child) && child.type === FormStep
  );

  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  // Load saved progress on mount
  React.useEffect(() => {
    const loadProgress = async () => {
      try {
        const saved = await storageAdapter.getItem(storageKey);
        if (saved) {
          const data = JSON.parse(saved) as {
            values: TFieldValues;
            currentStep?: number;
            visitedSteps?: number[];
            lastSaved: string;
          };
          form.reset(data.values);
          setCurrentStep(data.currentStep ?? 0);
          setVisitedSteps(new Set(data.visitedSteps ?? [0]));
          setLastSaved(new Date(data.lastSaved));
        }
      } catch (error) {
        console.error("Failed to load saved progress:", error);
      }
    };
    void loadProgress();
  }, [storageKey, storageAdapter, form]);

  // Auto-save functionality
  const saveProgress = React.useCallback(async () => {
    setIsSaving(true);
    try {
      const data = {
        values: form.getValues(),
        currentStep,
        visitedSteps: Array.from(visitedSteps),
        lastSaved: new Date().toISOString(),
      };
      await storageAdapter.setItem(storageKey, JSON.stringify(data));
      setLastSaved(new Date());

      // Emit analytics event
      if (window.__USWDS_ANALYTICS_HANDLER__) {
        window.__USWDS_ANALYTICS_HANDLER__({
          event: `${analyticsPrefix}_save`,
          element: "form_wizard",
          metadata: {
            step: currentStep,
            stepTitle: steps[currentStep]?.props.title,
          },
        });
      }
    } catch (error) {
      console.error("Failed to save progress:", error);
    } finally {
      setIsSaving(false);
    }
  }, [form, currentStep, visitedSteps, storageKey, storageAdapter, analyticsPrefix, steps]);

  // Auto-save interval
  React.useEffect(() => {
    const interval = setInterval(() => void saveProgress(), autoSaveInterval);
    return () => clearInterval(interval);
  }, [saveProgress, autoSaveInterval]);

  // Navigation handlers
  const handleNext = async () => {
    const currentStepElement = steps[currentStep];

    // Validate current step if validation function provided
    if (currentStepElement?.props.validate) {
      const isValid = await currentStepElement.props.validate();
      if (!isValid) return;
    }

    // Trigger form validation for current step
    const isValid = await form.trigger();
    if (!isValid) return;

    if (isLastStep) {
      setIsLoading(true);
      try {
        await onSubmit(form.getValues());
        await storageAdapter.removeItem(storageKey);
      } finally {
        setIsLoading(false);
      }
    } else {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setVisitedSteps((prev) => new Set([...prev, nextStep]));
      onStepChange?.(nextStep, "next");
      await saveProgress();
    }
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      onStepChange?.(prevStep, "prev");
    }
  };

  const goToStep = (step: number) => {
    if (visitedSteps.has(step) || step === 0) {
      setCurrentStep(step);
    }
  };

  const currentStepElement = steps[currentStep];
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className={cn("space-y-6", className)}>
      {/* Progress indicator */}
      {showProgress && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Step {currentStep + 1} of {steps.length}
            </h2>
            {showSaveIndicator && lastSaved && (
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                {isSaving ? (
                  <>
                    <Save className="size-4 animate-pulse" />
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <Check className="size-4 text-green-600" />
                    <span>Saved {lastSaved.toLocaleTimeString()}</span>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Progress bar */}
          <div className="relative">
            <div className="h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
                role="progressbar"
                aria-valuenow={currentStep + 1}
                aria-valuemin={1}
                aria-valuemax={steps.length}
              />
            </div>
          </div>

          {/* Step indicators */}
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToStep(index)}
                disabled={!visitedSteps.has(index) && index !== 0}
                className={cn(
                  "text-sm font-medium transition-colors",
                  index === currentStep && "text-blue-600",
                  visitedSteps.has(index) &&
                    index !== currentStep &&
                    "text-gray-600 hover:text-blue-600",
                  !visitedSteps.has(index) && "cursor-not-allowed text-gray-400"
                )}
                aria-current={index === currentStep ? "step" : undefined}
              >
                {step.props.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Current step content */}
      <div className="border-t pt-6">
        {currentStepElement && (
          <div>
            <h3 className="mb-2 text-xl font-bold">{currentStepElement.props.title}</h3>
            {currentStepElement.props.description && (
              <p className="mb-6 text-gray-600">{currentStepElement.props.description}</p>
            )}
            {currentStepElement}
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between border-t pt-6">
        <ButtonEnhanced
          type="button"
          variant="outline"
          onClick={handlePrev}
          disabled={isFirstStep}
          leftIcon={<ChevronLeft className="size-4" />}
          analyticsEvent={`${analyticsPrefix}_prev`}
        >
          Previous
        </ButtonEnhanced>

        <div className="flex gap-2">
          <ButtonEnhanced
            type="button"
            variant="secondary"
            onClick={saveProgress}
            disabled={isSaving}
            leftIcon={<Save className="size-4" />}
            analyticsEvent={`${analyticsPrefix}_manual_save`}
          >
            Save Progress
          </ButtonEnhanced>

          <ButtonEnhanced
            type="button"
            onClick={handleNext}
            isLoading={isLoading}
            rightIcon={!isLastStep && <ChevronRight className="size-4" />}
            analyticsEvent={`${analyticsPrefix}_${isLastStep ? "submit" : "next"}`}
          >
            {isLastStep ? "Submit" : "Next"}
          </ButtonEnhanced>
        </div>
      </div>
    </div>
  );
}
