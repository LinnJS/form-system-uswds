"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Alert } from "../components/alert";
import { ButtonEnhanced } from "../components/button/button-enhanced";
import { Input } from "../components/form";
import { Form, FormField, FormItem } from "../components/form/form";
import { FormLabel } from "../components/form/form-label";
import { FormMessage } from "../components/form/form-message";
import { DateInput, PhoneInput, SSNInput, ZIPInput } from "../components/form/masked-input";
import { ClaimStatus } from "../patterns/status/status-timeline";
import { FormStep, FormWizard } from "../patterns/wizard/form-wizard";
import { ReviewTable, createReviewFields } from "../patterns/wizard/review-table";

// Example schema for a VA benefits application
const BenefitsApplicationSchema = z.object({
  // Personal Information
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  middleName: z.string().optional(),
  dateOfBirth: z.string().min(8, "Date of birth is required"),
  ssn: z.string().length(9, "SSN must be 9 digits"),

  // Contact Information
  email: z.string().email("Invalid email address"),
  phone: z.string().length(10, "Phone number must be 10 digits"),
  streetAddress: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().length(2, "State must be 2 characters"),
  zipCode: z.string().length(5, "ZIP code must be 5 digits"),

  // Military Service
  branch: z.enum(["army", "navy", "airforce", "marines", "coastguard", "spaceforce"]),
  serviceStartDate: z.string().min(8, "Service start date is required"),
  serviceEndDate: z.string().min(8, "Service end date is required"),
  dischargeType: z.enum(["honorable", "general", "other"]),

  // Benefits Selection
  benefitType: z.enum(["disability", "education", "healthcare", "pension"]),
  additionalInfo: z.string().optional(),

  // Agreement
  certifyInfo: z.boolean().refine((val) => val === true, {
    message: "You must certify that the information is accurate",
  }),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type BenefitsApplicationValues = z.infer<typeof BenefitsApplicationSchema>;

export function VAInspiredDemo() {
  const [submitted, setSubmitted] = React.useState(false);
  const [applicationId, setApplicationId] = React.useState<string | null>(null);

  const form = useForm<BenefitsApplicationValues>({
    resolver: zodResolver(BenefitsApplicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      phone: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      additionalInfo: "",
      certifyInfo: false,
      agreeTerms: false,
    },
  });

  const handleSubmit = async (_values: BenefitsApplicationValues) => {
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const id = `VA-${Date.now()}`;
    setApplicationId(id);
    setSubmitted(true);
    // Application submitted: values
  };

  if (submitted && applicationId) {
    return <ApplicationStatus applicationId={applicationId} />;
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Apply for VA Benefits</h1>
        <p className="text-lg text-gray-600">
          Complete this form to apply for Veterans Affairs benefits. Your progress is automatically
          saved.
        </p>
      </div>

      <Alert variant="info" className="mb-6">
        <strong>Before you start:</strong> Make sure you have your DD-214 or other discharge papers,
        Social Security number, and contact information ready.
      </Alert>

      <FormWizard
        form={form}
        storageKey="va-benefits-application"
        onSubmit={handleSubmit}
        showProgress
        showSaveIndicator
        analyticsPrefix="va_benefits"
      >
        <FormStep title="Personal Information" description="Tell us about yourself">
          <Form {...form}>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <Input {...field} required />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <Input {...field} required />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <DateInput
                      {...field}
                      label="Date of Birth"
                      required
                      onValueChange={(value) => field.onChange(value)}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ssn"
                render={({ field }) => (
                  <FormItem>
                    <SSNInput
                      {...field}
                      required
                      onValueChange={(value) => field.onChange(value)}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </Form>
        </FormStep>

        <FormStep title="Contact Information" description="How can we reach you?">
          <Form {...form}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <Input {...field} type="email" required />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <PhoneInput
                      {...field}
                      required
                      onValueChange={(value) => field.onChange(value)}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="streetAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Address</FormLabel>
                    <Input {...field} required />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <Input {...field} required />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <Input {...field} maxLength={2} required />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <ZIPInput
                        {...field}
                        required
                        onValueChange={(value) => field.onChange(value)}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </Form>
        </FormStep>

        <FormStep
          title="Review and Submit"
          description="Please review your information before submitting"
        >
          <ReviewTable
            fields={createReviewFields(form.getValues(), {
              labels: {
                firstName: "First Name",
                lastName: "Last Name",
                middleName: "Middle Name",
                dateOfBirth: "Date of Birth",
                ssn: "Social Security Number",
                email: "Email Address",
                phone: "Phone Number",
                streetAddress: "Street Address",
                city: "City",
                state: "State",
                zipCode: "ZIP Code",
                branch: "Military Branch",
                serviceStartDate: "Service Start Date",
                serviceEndDate: "Service End Date",
                dischargeType: "Discharge Type",
                benefitType: "Benefit Type",
                additionalInfo: "Additional Information",
                certifyInfo: "Information Certified",
                agreeTerms: "Terms Agreed",
              },
              sections: {
                firstName: "Personal Information",
                lastName: "Personal Information",
                middleName: "Personal Information",
                dateOfBirth: "Personal Information",
                ssn: "Personal Information",
                email: "Contact Information",
                phone: "Contact Information",
                streetAddress: "Contact Information",
                city: "Contact Information",
                state: "Contact Information",
                zipCode: "Contact Information",
                branch: "Military Service",
                serviceStartDate: "Military Service",
                serviceEndDate: "Military Service",
                dischargeType: "Military Service",
                benefitType: "Benefits",
                additionalInfo: "Benefits",
                certifyInfo: "Agreement",
                agreeTerms: "Agreement",
              },
              required: [
                "firstName",
                "lastName",
                "dateOfBirth",
                "ssn",
                "email",
                "phone",
                "streetAddress",
                "city",
                "state",
                "zipCode",
              ],
            })}
            onEdit={(_field) => {
              // Navigate to appropriate step based on field
              // Edit field: field
            }}
          />

          <div className="mt-6 space-y-4">
            <Alert variant="warning">
              By submitting this application, you certify that all information provided is true and
              accurate to the best of your knowledge.
            </Alert>
          </div>
        </FormStep>
      </FormWizard>
    </div>
  );
}

// Application status component showing timeline
function ApplicationStatus({ applicationId }: { applicationId: string }) {
  const claimPhases = [
    {
      name: "Application Received",
      description: "We've received your application",
      estimatedDays: 1,
    },
    {
      name: "Initial Review",
      description: "Reviewing your submitted information",
      estimatedDays: 5,
    },
    {
      name: "Evidence Gathering",
      description: "Collecting supporting documents",
      estimatedDays: 30,
    },
    {
      name: "Review & Decision",
      description: "Making a decision on your claim",
      estimatedDays: 60,
    },
    {
      name: "Notification",
      description: "Preparing your decision letter",
      estimatedDays: 7,
    },
  ];

  const events = [
    {
      id: "1",
      title: "Application submitted",
      description: "Your benefits application has been received",
      date: new Date(),
      status: "complete" as const,
    },
    {
      id: "2",
      title: "Initial review started",
      description: "A claims processor has been assigned",
      date: new Date(Date.now() + 86400000),
      status: "current" as const,
    },
  ];

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Application Submitted Successfully
        </h1>
        <p className="text-lg text-gray-600">
          Your application ID is: <strong>{applicationId}</strong>
        </p>
      </div>

      <ClaimStatus
        claimId={applicationId}
        claimType="VA Benefits Application"
        currentPhase={1}
        phases={claimPhases}
        events={events}
      />

      <div className="mt-8 flex gap-4">
        <ButtonEnhanced variant="default">Download Confirmation</ButtonEnhanced>
        <ButtonEnhanced variant="outline">Return to Dashboard</ButtonEnhanced>
      </div>
    </div>
  );
}
