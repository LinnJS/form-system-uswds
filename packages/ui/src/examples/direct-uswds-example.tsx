"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button, ButtonGroup } from "../components/button/button-direct";
import { Input, Textarea } from "../components/form/input-direct";
import { FormField, Form, Fieldset } from "../components/form/form-field-direct";
import { Accordion, AccordionItem } from "../components/accordion/accordion-direct";
import { Alert, SiteAlert } from "../components/alert/alert-direct";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  contactMethod: string;
  topics: string[];
  agreeToTerms: boolean;
}

/**
 * Example: Direct USWDS Components with Maximum Accessibility
 * 
 * This example demonstrates:
 * - Direct use of USWDS HTML structure
 * - Enhanced with Tailwind utilities (twClass prop)
 * - Full react-hook-form integration
 * - WCAG 2.1 AA compliance
 * - Proper ARIA attributes
 */
export function DirectUSWDSExample() {
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      contactMethod: "",
      topics: [],
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", data);
  };

  return (
    <div className="grid-container">
      {/* Site Alert */}
      <SiteAlert variant="info" className="margin-bottom-4">
        This form demonstrates direct USWDS components with maximum accessibility.
      </SiteAlert>

      <h1 className="usa-display">Direct USWDS Components Demo</h1>

      {/* Accordion with information */}
      <Accordion bordered multiselectable className="margin-bottom-4">
        <AccordionItem heading="About This Form" headingLevel={2}>
          <p>
            This form uses direct USWDS HTML structure with React enhancements:
          </p>
          <ul className="usa-list">
            <li>All USWDS CSS classes are preserved</li>
            <li>Tailwind utilities can be added via twClass prop</li>
            <li>Full ARIA support for screen readers</li>
            <li>Keyboard navigation works as expected</li>
            <li>Form validation with react-hook-form</li>
          </ul>
        </AccordionItem>
        <AccordionItem heading="Accessibility Features" headingLevel={2}>
          <ul className="usa-list">
            <li>Semantic HTML structure</li>
            <li>Proper heading hierarchy</li>
            <li>ARIA labels and descriptions</li>
            <li>Focus management</li>
            <li>Error announcements</li>
            <li>Required field indicators</li>
          </ul>
        </AccordionItem>
      </Accordion>

      {/* Main Form */}
      <Form onSubmit={handleSubmit(onSubmit)} className="margin-bottom-4">
        <Fieldset legend="Personal Information" hint="All fields marked with * are required">
          
          {/* Text inputs with Tailwind enhancements */}
          <div className="grid-row grid-gap">
            <div className="grid-col-6">
              <FormField
                control={control}
                name="firstName"
                rules={{ required: "First name is required" }}
                inputProps={{
                  label: "First Name",
                  required: true,
                  hint: "Enter your legal first name",
                  twClass: "max-w-full",
                }}
              />
            </div>
            <div className="grid-col-6">
              <FormField
                control={control}
                name="lastName"
                rules={{ required: "Last name is required" }}
                inputProps={{
                  label: "Last Name",
                  required: true,
                  hint: "Enter your legal last name",
                  twClass: "max-w-full",
                }}
              />
            </div>
          </div>

          {/* Email with validation */}
          <FormField
            control={control}
            name="email"
            type="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            inputProps={{
              label: "Email Address",
              required: true,
              hint: "We'll only use this to respond to your message",
              prefix: "@",
              characterCount: true,
              maxLength: 100,
            }}
          />

          {/* Phone with input mask */}
          <FormField
            control={control}
            name="phone"
            type="tel"
            inputProps={{
              label: "Phone Number",
              hint: "10-digit US phone number",
              placeholder: "(123) 456-7890",
            }}
          />
        </Fieldset>

        <Fieldset legend="Your Message">
          {/* Radio buttons */}
          <FormField
            control={control}
            name="contactMethod"
            type="radio"
            rules={{ required: "Please select a contact method" }}
            inputProps={{
              label: "Preferred Contact Method",
              required: true,
            }}
            choices={[
              { value: "email", label: "Email", hint: "Fastest response time" },
              { value: "phone", label: "Phone", hint: "Business hours only" },
              { value: "mail", label: "Postal Mail", hint: "5-7 business days" },
            ]}
          />

          {/* Checkboxes */}
          <FormField
            control={control}
            name="topics"
            type="checkbox"
            inputProps={{
              label: "Topics of Interest",
              hint: "Select all that apply",
            }}
            choices={[
              { value: "accessibility", label: "Accessibility" },
              { value: "performance", label: "Performance" },
              { value: "security", label: "Security" },
              { value: "design", label: "Design Systems" },
            ]}
          />

          {/* Textarea with character count */}
          <FormField
            control={control}
            name="message"
            type="textarea"
            rules={{
              required: "Message is required",
              minLength: { value: 10, message: "Message must be at least 10 characters" },
            }}
            inputProps={{
              label: "Your Message",
              required: true,
              hint: "Please provide details about your inquiry",
              characterCount: true,
              maxLength: 500,
              rows: 5,
            }}
          />
        </Fieldset>

        {/* Standalone checkbox for terms */}
        <div className="usa-checkbox">
          <input
            id="agree-terms"
            className="usa-checkbox__input"
            type="checkbox"
            required
          />
          <label className="usa-checkbox__label" htmlFor="agree-terms">
            I agree to the terms and conditions *
          </label>
        </div>

        {/* Form actions with loading state */}
        <ButtonGroup className="margin-top-4">
          <Button 
            type="submit" 
            loading={isSubmitting}
            twClass="min-w-[120px]"
          >
            Submit
          </Button>
          <Button
            type="button"
            variant="outline"
            twClass="min-w-[120px]"
            onClick={() => console.log("Cancel")}
          >
            Cancel
          </Button>
          <Button
            type="reset"
            variant="unstyled"
            twClass="text-red-600 hover:text-red-700"
          >
            Clear Form
          </Button>
        </ButtonGroup>
      </Form>

      {/* Success Alert (shown after submission) */}
      {false && (
        <Alert 
          variant="success" 
          heading="Success!" 
          dismissible
          twClass="margin-top-4"
        >
          Your form has been submitted successfully. We'll respond within 2 business days.
        </Alert>
      )}

      {/* Examples of direct Input usage without form */}
      <div className="margin-top-8">
        <h2 className="usa-heading">Standalone Input Examples</h2>
        
        <Input
          label="Search"
          hint="Enter search terms"
          prefix={
            <svg className="usa-icon" aria-hidden="true" focusable="false" role="img">
              <use xlinkHref="#search"></use>
            </svg>
          }
          twClass="max-w-lg"
        />

        <Input
          label="Price"
          prefix="$"
          suffix=".00"
          type="number"
          twClass="max-w-xs margin-top-4"
        />

        <Textarea
          label="Comments"
          hint="Optional feedback"
          characterCount
          maxLength={200}
          twClass="max-w-lg margin-top-4"
        />
      </div>
    </div>
  );
}