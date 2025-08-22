/**
 * VA.gov Design Patterns
 * Enhanced USWDS patterns inspired by VA.gov's implementation
 * Reference: https://design.va.gov/
 */

/**
 * VA.gov Form Patterns
 * Consistent form styling and behavior patterns
 */
export const vaFormPatterns = {
  // Form field spacing following VA.gov standards
  fieldSpacing: "usa-form-group",

  // Required field indicator
  requiredIndicator: "usa-hint usa-hint--required",

  // Error message styling
  errorMessage: "usa-error-message",

  // Success message styling
  successMessage: "usa-success-message",

  // Form hint text
  hintText: "usa-hint",

  // Fieldset styling for grouped fields
  fieldset: "usa-fieldset",

  // Legend styling for fieldsets
  legend: "usa-legend",
};

/**
 * VA.gov Alert Patterns
 * Enhanced alert components with VA-specific styling
 */
export const vaAlertPatterns = {
  // Alert with icon
  withIcon: "usa-alert--icon",

  // Alert variations used on VA.gov
  info: "usa-alert--info",
  warning: "usa-alert--warning",
  error: "usa-alert--error",
  success: "usa-alert--success",

  // Slim alert variant
  slim: "usa-alert--slim",

  // No icon variant
  noIcon: "usa-alert--no-icon",
};

/**
 * VA.gov Process List Pattern
 * Step-by-step process indicators
 */
export const vaProcessList = {
  container: "usa-process-list",
  item: "usa-process-list__item",
  heading: "usa-process-list__heading",
  label: "usa-process-list__label",
  labelText: "usa-process-list__label-text",
};

/**
 * VA.gov Summary Box Pattern
 * Highlighted summary information
 */
export const vaSummaryBox = {
  container: "usa-summary-box",
  heading: "usa-summary-box__heading",
  text: "usa-summary-box__text",
  list: "usa-list",
  listItem: "usa-list__item",
};

/**
 * VA.gov Step Indicator Pattern
 * Progress through multi-step forms
 */
export const vaStepIndicator = {
  container: "usa-step-indicator",
  segment: "usa-step-indicator__segment",
  segmentCurrent: "usa-step-indicator__segment--current",
  segmentComplete: "usa-step-indicator__segment--complete",
  header: "usa-step-indicator__header",
  heading: "usa-step-indicator__heading",
  headingCounter: "usa-step-indicator__heading-counter",
  headingText: "usa-step-indicator__heading-text",
  label: "usa-step-indicator__segment-label",
};

/**
 * VA.gov Collection Pattern
 * Groups of related content
 */
export const vaCollection = {
  container: "usa-collection",
  item: "usa-collection__item",
  heading: "usa-collection__heading",
  description: "usa-collection__description",
  meta: "usa-collection__meta",
  metaItem: "usa-collection__meta-item",
  calendar: "usa-collection__calendar-date",
  calendarMonth: "usa-collection__calendar-date-month",
  calendarDay: "usa-collection__calendar-date-day",
};

/**
 * VA.gov Site Alert Pattern
 * Full-width alert messages for important information
 */
export const vaSiteAlert = {
  container: "usa-site-alert",
  emergency: "usa-site-alert--emergency",
  info: "usa-site-alert--info",
  slim: "usa-site-alert--slim",
  noIcon: "usa-site-alert--no-icon",
};

/**
 * VA.gov Pagination Pattern
 * Navigation through multiple pages
 */
export const vaPagination = {
  container: "usa-pagination",
  list: "usa-pagination__list",
  item: "usa-pagination__item",
  link: "usa-pagination__link",
  current: "usa-pagination__link--current",
  previous: "usa-pagination__link--previous",
  next: "usa-pagination__link--next",
  ellipsis: "usa-pagination__overflow",
};

/**
 * VA.gov Search Pattern
 * Search input with submit button
 */
export const vaSearch = {
  container: "usa-search",
  small: "usa-search--small",
  big: "usa-search--big",
  input: "usa-input",
  button: "usa-button",
  submit: "usa-search__submit",
  submitText: "usa-search__submit-text",
};

/**
 * VA.gov Tag Pattern
 * Small labels for categorization
 */
export const vaTag = {
  base: "usa-tag",
  big: "usa-tag--big",
};

/**
 * VA.gov Identifier Pattern
 * Government site identification footer
 */
export const vaIdentifier = {
  container: "usa-identifier",
  section: "usa-identifier__section",
  masthead: "usa-identifier__section--masthead",
  requiredLinks: "usa-identifier__section--required-links",
  usagov: "usa-identifier__section--usagov",
  containerInner: "usa-identifier__container",
  identity: "usa-identifier__identity",
  logo: "usa-identifier__logo",
  identityText: "usa-identifier__identity-text",
  domain: "usa-identifier__identity-domain",
  disclaimer: "usa-identifier__identity-disclaimer",
  linksList: "usa-identifier__required-links-list",
  linksItem: "usa-identifier__required-links-item",
  link: "usa-identifier__required-link",
  usagovDescription: "usa-identifier__usagov-description",
};

/**
 * VA.gov In-Page Navigation Pattern
 * Navigation within a single page
 */
export const vaInPageNav = {
  container: "usa-in-page-nav",
  nav: "usa-in-page-nav__nav",
  heading: "usa-in-page-nav__heading",
  list: "usa-in-page-nav__list",
  item: "usa-in-page-nav__item",
  link: "usa-in-page-nav__link",
  current: "usa-in-page-nav__link--current",
};

/**
 * VA.gov Time Picker Pattern
 * Time selection interface
 */
export const vaTimePicker = {
  container: "usa-time-picker",
  input: "usa-input",
  label: "usa-label",
  hint: "usa-hint",
};

/**
 * VA.gov File Input Pattern
 * File upload interface
 */
export const vaFileInput = {
  container: "usa-file-input",
  target: "usa-file-input__target",
  box: "usa-file-input__box",
  instructions: "usa-file-input__instructions",
  preview: "usa-file-input__preview",
  previewHeading: "usa-file-input__preview-heading",
  input: "usa-file-input__input",
  dragText: "usa-file-input__drag-text",
  choose: "usa-file-input__choose",
};

/**
 * VA.gov Character Count Pattern
 * Character limit indicator for text inputs
 */
export const vaCharacterCount = {
  container: "usa-character-count",
  input: "usa-character-count__field",
  message: "usa-character-count__message",
  messageInvalid: "usa-character-count__message--invalid",
};

/**
 * VA.gov Combo Box Pattern
 * Select with typeahead functionality
 */
export const vaComboBox = {
  container: "usa-combo-box",
  input: "usa-combo-box__input",
  inputButtonGroup: "usa-combo-box__input-button-group",
  list: "usa-combo-box__list",
  listOption: "usa-combo-box__list-option",
  listOptionFocused: "usa-combo-box__list-option--focused",
  listOptionSelected: "usa-combo-box__list-option--selected",
  toggle: "usa-combo-box__toggle-list",
  clear: "usa-combo-box__clear-input",
  status: "usa-combo-box__status",
};

/**
 * Helper function to combine VA patterns with custom classes
 */
export function applyVAPattern(pattern: string | string[], customClasses?: string): string {
  const patterns = Array.isArray(pattern) ? pattern : [pattern];
  const classes = [...patterns];

  if (customClasses) {
    classes.push(customClasses);
  }

  return classes.join(" ");
}

/**
 * VA.gov Accessibility Patterns
 * ARIA and screen reader helpers
 */
export const vaA11y = {
  // Screen reader only text
  srOnly: "usa-sr-only",

  // Focus management
  focusable: "usa-focus",

  // Skip navigation
  skipnav: "usa-skipnav",

  // Assistive text
  hint: "usa-hint",

  // Required field
  required: 'aria-required="true"',

  // Invalid field
  invalid: 'aria-invalid="true"',

  // Described by for hints
  describedBy: (id: string) => `aria-describedby="${id}"`,

  // Label for form elements
  labelledBy: (id: string) => `aria-labelledby="${id}"`,
};

/**
 * VA.gov Form Validation Patterns
 * Consistent validation messaging
 */
export const vaValidation = {
  // Field-level validation
  fieldError: "usa-input--error",
  fieldSuccess: "usa-input--success",

  // Message styling
  errorMessage: "usa-error-message",
  successMessage: "usa-success-message",
  warningMessage: "usa-warning-message",

  // Form-level validation
  formError: "usa-form--error",
  formSuccess: "usa-form--success",

  // Validation icons
  errorIcon: "usa-icon usa-icon--error",
  successIcon: "usa-icon usa-icon--success",
  warningIcon: "usa-icon usa-icon--warning",
};

/**
 * VA.gov Layout Patterns
 * Grid and spacing utilities
 */
export const vaLayout = {
  // Grid system
  grid: "grid-container",
  gridFull: "grid-container-full",
  row: "grid-row",
  col: (size?: number) => (size ? `grid-col-${size}` : "grid-col"),
  colAuto: "grid-col-auto",
  colFill: "grid-col-fill",

  // Spacing utilities
  marginTop: (size: number) => `margin-top-${size}`,
  marginBottom: (size: number) => `margin-bottom-${size}`,
  marginY: (size: number) => `margin-y-${size}`,
  paddingTop: (size: number) => `padding-top-${size}`,
  paddingBottom: (size: number) => `padding-bottom-${size}`,
  paddingY: (size: number) => `padding-y-${size}`,

  // Display utilities
  displayNone: "display-none",
  displayBlock: "display-block",
  displayInline: "display-inline",
  displayInlineBlock: "display-inline-block",
  displayFlex: "display-flex",
};
