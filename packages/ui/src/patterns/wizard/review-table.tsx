"use client";

import { Check, Edit2 } from "lucide-react";
import * as React from "react";
import { ButtonEnhanced } from "../../components/button/button-enhanced";
import { cn } from "../../lib/utils";

export interface ReviewField {
  /** Unique identifier for the field */
  id: string;
  /** Display label for the field */
  label: string;
  /** Current value of the field */
  value: unknown;
  /** Section this field belongs to */
  section?: string;
  /** Step number where this field can be edited */
  stepIndex?: number;
  /** Custom formatter for the value */
  formatter?: (value: unknown) => string;
  /** Whether this field is required */
  required?: boolean;
  /** Whether to hide this field if empty */
  hideIfEmpty?: boolean;
  /** Additional metadata */
  metadata?: Record<string, unknown>;
}

export interface ReviewTableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fields to display in review */
  fields: ReviewField[];
  /** Callback when edit is clicked */
  onEdit?: (field: ReviewField) => void;
  /** Group fields by section */
  groupBySection?: boolean;
  /** Show edit buttons */
  showEditButtons?: boolean;
  /** Compact mode with less spacing */
  compact?: boolean;
  /** Analytics event prefix */
  analyticsPrefix?: string;
  /** Custom empty value display */
  emptyValueText?: string;
  /** Show completion status */
  showCompletionStatus?: boolean;
}

export const ReviewTable = React.forwardRef<HTMLDivElement, ReviewTableProps>(
  (
    {
      className,
      fields,
      onEdit,
      groupBySection = true,
      showEditButtons = true,
      compact = false,
      analyticsPrefix = "review_table",
      emptyValueText = "Not provided",
      showCompletionStatus = true,
      ...props
    },
    ref
  ) => {
    const formatValue = (field: ReviewField): string => {
      const { value, formatter } = field;

      if (value === null || value === undefined || value === "") {
        return emptyValueText;
      }

      if (formatter) {
        return formatter(value);
      }

      // Default formatters for common types
      if (typeof value === "boolean") {
        return value ? "Yes" : "No";
      }

      if (Array.isArray(value)) {
        return value.length > 0 ? value.join(", ") : emptyValueText;
      }

      if (typeof value === "object" && value !== null) {
        return JSON.stringify(value, null, 2);
      }

      // Safe string conversion for primitives
      if (value === null || value === undefined) {
        return "";
      }
      
      // Handle different primitive types explicitly
      if (typeof value === "string") {
        return value;
      }
      
      if (typeof value === "number" || typeof value === "boolean") {
        return String(value);
      }
      
      // Fallback for any other type (should not reach here based on our type system)
      return JSON.stringify(value);
    };

    const handleEdit = (field: ReviewField) => {
      // Emit analytics
      if (typeof window !== 'undefined' && (window as any).__USWDS_ANALYTICS_HANDLER__) {
        (window as any).__USWDS_ANALYTICS_HANDLER__({
          event: `${analyticsPrefix}_edit`,
          element: "review_field",
          metadata: {
            fieldId: field.id,
            section: field.section,
            stepIndex: field.stepIndex,
            ...field.metadata,
          },
        });
      }

      onEdit?.(field);
    };

    // Group fields by section if requested
    const sections = React.useMemo(() => {
      if (!groupBySection) {
        return [{ name: null, fields }];
      }

      const grouped = fields.reduce<Record<string, ReviewField[]>>((acc, field) => {
        const section = field.section ?? "General Information";
        acc[section] ??= [];
        acc[section].push(field);
        return acc;
      }, {});

      return Object.entries(grouped).map(([name, sectionFields]) => ({
        name,
        fields: sectionFields,
      }));
    }, [fields, groupBySection]);

    // Calculate completion status
    const completionStats = React.useMemo(() => {
      const requiredFields = fields.filter((f) => f.required);
      const completedRequired = requiredFields.filter(
        (f) => f.value !== null && f.value !== undefined && f.value !== ""
      );
      const totalFields = fields.filter((f) => !f.hideIfEmpty || f.value);
      const completedTotal = totalFields.filter(
        (f) => f.value !== null && f.value !== undefined && f.value !== ""
      );

      return {
        required: {
          completed: completedRequired.length,
          total: requiredFields.length,
          percentage:
            requiredFields.length > 0
              ? Math.round((completedRequired.length / requiredFields.length) * 100)
              : 100,
        },
        all: {
          completed: completedTotal.length,
          total: totalFields.length,
          percentage:
            totalFields.length > 0
              ? Math.round((completedTotal.length / totalFields.length) * 100)
              : 100,
        },
      };
    }, [fields]);

    return (
      <div ref={ref} className={cn("space-y-6", className)} {...props}>
        {/* Completion status */}
        {showCompletionStatus && (
          <div className="rounded-md border border-blue-200 bg-blue-50 p-4">
            <h3 className="mb-2 font-semibold text-blue-900">Form Completion</h3>
            <div className="space-y-2">
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-gray-600">Required fields</span>
                  <span className="font-medium">
                    {completionStats.required.completed} of {completionStats.required.total}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-blue-600 transition-all"
                    style={{ width: `${completionStats.required.percentage}%` }}
                    role="progressbar"
                    aria-valuenow={completionStats.required.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>

              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-gray-600">All fields</span>
                  <span className="font-medium">
                    {completionStats.all.completed} of {completionStats.all.total}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-green-600 transition-all"
                    style={{ width: `${completionStats.all.percentage}%` }}
                    role="progressbar"
                    aria-valuenow={completionStats.all.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Review sections */}
        {sections.map((section, sectionIndex) => (
          <div key={section.name ?? sectionIndex} className="overflow-hidden rounded-md border">
            {section.name && (
              <div className="border-b bg-gray-50 px-4 py-3">
                <h3 className="font-semibold text-gray-900">{section.name}</h3>
              </div>
            )}

            <div className={cn("divide-y divide-gray-200")}>
              {section.fields
                .filter((field) => !field.hideIfEmpty || field.value)
                .map((field) => {
                  const value = formatValue(field);
                  const isEmpty = value === emptyValueText;

                  return (
                    <div
                      key={field.id}
                      className={cn(
                        "flex items-start justify-between",
                        compact ? "px-4 py-2" : "px-4 py-3"
                      )}
                    >
                      <div className="min-w-0 flex-1">
                        <dt className="text-sm font-medium text-gray-900">
                          {field.label}
                          {field.required && (
                            <abbr
                              title="required"
                              className="ml-1 text-red-500"
                              aria-label="required"
                            >
                              *
                            </abbr>
                          )}
                        </dt>
                        <dd
                          className={cn(
                            "mt-1 text-sm",
                            isEmpty ? "italic text-gray-400" : "text-gray-600"
                          )}
                        >
                          {value}
                        </dd>
                      </div>

                      {showEditButtons && onEdit && (
                        <ButtonEnhanced
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(field)}
                          leftIcon={<Edit2 className="size-4" />}
                          className="ml-4"
                          analyticsEvent={`${analyticsPrefix}_edit_click`}
                          analyticsMetadata={{ fieldId: field.id }}
                        >
                          Edit
                        </ButtonEnhanced>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        ))}

        {/* Summary */}
        {completionStats.required.percentage === 100 && (
          <div className="flex items-center rounded-md border border-green-200 bg-green-50 p-4">
            <Check className="mr-2 size-5 text-green-600" />
            <span className="font-medium text-green-900">
              All required information has been provided
            </span>
          </div>
        )}
      </div>
    );
  }
);

ReviewTable.displayName = "ReviewTable";

// Helper function to create review fields from form data
export function createReviewFields<T extends Record<string, unknown>>(
  data: T,
  config: {
    labels?: Partial<Record<keyof T, string>>;
    sections?: Partial<Record<keyof T, string>>;
    formatters?: Partial<Record<keyof T, (value: unknown) => string>>;
    required?: Array<keyof T>;
    hidden?: Array<keyof T>;
  }
): ReviewField[] {
  const { labels, sections, formatters, required = [], hidden = [] } = config;

  return Object.entries(data)
    .filter(([key]) => {
      // Type guard to check if key is a valid property
      if (key in data) {
        return !hidden.includes(key as keyof T);
      }
      return true;
    })
    .map(([key, value]) => {
      const typedKey = key as keyof T; // Safe after filter
      return {
        id: key,
        label: labels?.[typedKey] ?? key,
        value,
        section: sections?.[typedKey],
        formatter: formatters?.[typedKey],
        required: required.includes(typedKey),
        hideIfEmpty: false,
      };
    });
}
