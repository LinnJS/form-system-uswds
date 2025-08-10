"use client";

import {
  Form,
  FormDescription,
  FormField,
  FormInput,
  FormItem,
  FormLabel,
  FormMessage,
} from "@acme/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define validation schema using Zod
const formSchema = z
  .object({
    email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain uppercase, lowercase, and number"
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    age: z
      .string()
      .min(1, "Age is required")
      .regex(/^\d+$/, "Age must be a number")
      .refine((val) => parseInt(val) >= 18, "You must be at least 18 years old")
      .refine((val) => parseInt(val) <= 120, "Please enter a valid age"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof formSchema>;

export default function ValidationDemoPage() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      age: "",
    },
  });

  const onSubmit = (data: FormData) => {
    // Form submission logic would go here
    alert(`Form is valid!\n\nEmail: ${data.email}\nAge: ${data.age}`);
  };

  return (
    <div className="container mx-auto max-w-md p-8">
      <Link href="/" className="mb-4 inline-block text-blue-600 hover:underline">
        ← Back to Home
      </Link>
      <h1 className="mb-6 text-2xl font-bold">Form Validation Demo</h1>
      <p className="mb-6 text-gray-600">Using react-hook-form with Zod validation</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Email</FormLabel>
                <FormInput type="email" placeholder="Enter your email" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Password</FormLabel>
                <FormInput type="password" placeholder="Enter your password" {...field} />
                <FormDescription>
                  Must be at least 8 characters with uppercase, lowercase, and number
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Confirm Password</FormLabel>
                <FormInput type="password" placeholder="Confirm your password" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel required>Age</FormLabel>
                <FormInput type="number" placeholder="Enter your age" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Submitting..." : "Submit"}
            </button>

            <button
              type="button"
              onClick={() => form.reset()}
              className="flex-1 rounded bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Reset
            </button>
          </div>
        </form>
      </Form>

      <div className="mt-8 rounded bg-gray-100 p-4">
        <h2 className="mb-2 font-semibold">Form State:</h2>
        <pre className="overflow-auto text-xs">
          {JSON.stringify(
            {
              values: form.watch(),
              errors: form.formState.errors,
              isDirty: form.formState.isDirty,
              isValid: form.formState.isValid,
              isSubmitting: form.formState.isSubmitting,
            },
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
}
