import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Accordion, AccordionButton, AccordionContent, AccordionItem } from "./accordion";

const meta = {
  title: "USWDS/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "USWDS-compliant Accordion component for organizing and presenting collapsible content sections.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    multiselectable: {
      control: "boolean",
      description: "Allow multiple sections to be expanded simultaneously",
    },
    bordered: {
      control: "boolean",
      description: "Show borders around accordion",
    },
    defaultExpanded: {
      control: "object",
      description: "Array of item IDs that should be expanded by default",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionItem id="item-1">
        <AccordionButton>First Amendment</AccordionButton>
        <AccordionContent>
          <p>
            Congress shall make no law respecting an establishment of religion, or prohibiting the
            free exercise thereof; or abridging the freedom of speech, or of the press; or the right
            of the people peaceably to assemble, and to petition the Government for a redress of
            grievances.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-2">
        <AccordionButton>Second Amendment</AccordionButton>
        <AccordionContent>
          <p>
            A well regulated Militia, being necessary to the security of a free State, the right of
            the people to keep and bear Arms, shall not be infringed.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-3">
        <AccordionButton>Third Amendment</AccordionButton>
        <AccordionContent>
          <p>
            No Soldier shall, in time of peace be quartered in any house, without the consent of the
            Owner, nor in time of war, but in a manner to be prescribed by law.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiselectable: Story = {
  render: () => (
    <Accordion multiselectable>
      <AccordionItem id="multi-1">
        <AccordionButton>Benefits</AccordionButton>
        <AccordionContent>
          <ul className="list-disc pl-5">
            <li>Health insurance coverage</li>
            <li>Retirement savings plan</li>
            <li>Paid time off</li>
            <li>Professional development</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="multi-2">
        <AccordionButton>Requirements</AccordionButton>
        <AccordionContent>
          <ul className="list-disc pl-5">
            <li>Bachelor's degree or equivalent</li>
            <li>3-5 years of experience</li>
            <li>Strong communication skills</li>
            <li>Ability to work in a team</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="multi-3">
        <AccordionButton>Application Process</AccordionButton>
        <AccordionContent>
          <ol className="list-decimal pl-5">
            <li>Submit online application</li>
            <li>Complete assessment test</li>
            <li>Phone screening interview</li>
            <li>In-person interview</li>
            <li>Reference checks</li>
          </ol>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const DefaultExpanded: Story = {
  render: () => (
    <Accordion defaultExpanded={["faq-1"]}>
      <AccordionItem id="faq-1">
        <AccordionButton>What is the U.S. Web Design System?</AccordionButton>
        <AccordionContent>
          <p>
            The U.S. Web Design System (USWDS) is a design system for the federal government. It
            provides principles, guidance, and code to help agencies build accessible,
            mobile-friendly government websites.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="faq-2">
        <AccordionButton>Who can use USWDS?</AccordionButton>
        <AccordionContent>
          <p>
            While USWDS is primarily designed for U.S. federal government websites, it's open source
            and can be used by state and local governments, as well as any organization looking to
            create accessible, user-friendly websites.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="faq-3">
        <AccordionButton>Is USWDS accessible?</AccordionButton>
        <AccordionContent>
          <p>
            Yes! USWDS is built with accessibility in mind and follows Section 508 standards and
            WCAG 2.1 AA guidelines. All components are tested with screen readers and keyboard
            navigation.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Borderless: Story = {
  render: () => (
    <Accordion bordered={false}>
      <AccordionItem id="border-1">
        <AccordionButton>Service Information</AccordionButton>
        <AccordionContent>
          <p>
            Our services are available Monday through Friday, 8:00 AM to 5:00 PM EST. Emergency
            support is available 24/7.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="border-2">
        <AccordionButton>Contact Details</AccordionButton>
        <AccordionContent>
          <p>Phone: 1-800-CALL-GOV</p>
          <p>Email: info@agency.gov</p>
          <p>Mail: 1234 Government St, Washington, DC 20001</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const ComplexContent: Story = {
  render: () => (
    <Accordion multiselectable defaultExpanded={["complex-1"]}>
      <AccordionItem id="complex-1">
        <AccordionButton>Application Requirements</AccordionButton>
        <AccordionContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2">Required Documents</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Completed application form (SF-86)</li>
                <li>Valid government-issued ID</li>
                <li>Proof of citizenship or legal residency</li>
                <li>Educational transcripts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Eligibility Criteria</h3>
              <p className="mb-2">Applicants must meet the following requirements:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Be at least 18 years of age</li>
                <li>Pass background investigation</li>
                <li>Meet physical requirements</li>
              </ul>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="complex-2">
        <AccordionButton>Processing Timeline</AccordionButton>
        <AccordionContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="font-bold text-blue-600">Week 1-2:</span>
              <span>Application review and initial screening</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-blue-600">Week 3-4:</span>
              <span>Background investigation begins</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-blue-600">Week 5-8:</span>
              <span>Interviews and assessments</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-bold text-blue-600">Week 9-10:</span>
              <span>Final decision and notification</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
