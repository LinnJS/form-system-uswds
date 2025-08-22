/**
 * VA.gov-inspired patterns and components
 * These components provide enhanced functionality while maintaining USWDS compliance
 */

// Form Wizard components
export { FormStep, FormWizard, LocalStorageAdapter } from "./wizard/form-wizard";
export type { FormStepProps, FormWizardProps, StorageAdapter } from "./wizard/form-wizard";

// Review components
export { ReviewTable, createReviewFields } from "./wizard/review-table";
export type { ReviewField, ReviewTableProps } from "./wizard/review-table";

// Status components
export { ClaimStatus, StatusTimeline } from "./status/status-timeline";
export type {
  ClaimStatusProps,
  StatusTimelineProps,
  TimelineEvent,
} from "./status/status-timeline";
