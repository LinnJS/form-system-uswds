import * as React from "react";
import { FormProvider as RHFFormProvider, type UseFormReturn } from "react-hook-form";

interface FormProviderProps<TFieldValues extends Record<string, any> = Record<string, any>> {
  children: React.ReactNode;
  methods: UseFormReturn<TFieldValues>;
  onSubmit?: (data: TFieldValues) => void;
}

export function FormProvider<TFieldValues extends Record<string, any> = Record<string, any>>({
  children,
  methods,
  onSubmit,
}: FormProviderProps<TFieldValues>) {
  return (
    <RHFFormProvider {...methods}>
      <form onSubmit={onSubmit ? methods.handleSubmit(onSubmit) : undefined}>{children}</form>
    </RHFFormProvider>
  );
}
