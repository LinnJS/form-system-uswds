/**
 * VA.gov-inspired patterns and components
 * These components provide enhanced functionality while maintaining USWDS compliance
 */

// Form Wizard components
export { FormWizard, FormStep, LocalStorageAdapter } from "./wizard/form-wizard";
export type { FormWizardProps, FormStepProps, StorageAdapter } from "./wizard/form-wizard";

// Review components
export { ReviewTable, createReviewFields } from "./wizard/review-table";
export type { ReviewTableProps, ReviewField } from "./wizard/review-table";

// Status components
export { StatusTimeline, ClaimStatus } from "./status/status-timeline";
export type { StatusTimelineProps, TimelineEvent, ClaimStatusProps } from "./status/status-timeline";