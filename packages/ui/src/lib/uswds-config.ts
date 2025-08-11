/**
 * USWDS Configuration for React Components
 * This file configures USWDS settings and provides utilities for using USWDS with React
 */

// Import USWDS styles - this will be handled by the build process
// In production, you'd import the compiled CSS
// import '@uswds/uswds/css/uswds.min.css';

/**
 * USWDS Configuration object
 * These settings align with USWDS design tokens
 */
export const uswdsConfig = {
  // Font families from USWDS
  fonts: {
    sans: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
    serif: '"Merriweather", Georgia, "Times New Roman", serif',
    mono: '"Roboto Mono", "Courier New", monospace',
  },
  
  // USWDS Breakpoints (in pixels)
  breakpoints: {
    mobile: 320,
    mobileLg: 480,
    tablet: 640,
    desktop: 1024,
    desktopLg: 1200,
    widescreen: 1400,
  },
  
  // USWDS Color system
  colors: {
    // Primary colors
    primary: {
      lighter: '#d9e8f6',
      light: '#73b3e7',
      DEFAULT: '#005ea2',
      dark: '#1a4480',
      darker: '#162e51',
    },
    // Secondary colors
    secondary: {
      lighter: '#f2938c',
      light: '#e95f5e',
      DEFAULT: '#d83933',
      dark: '#b50909',
      darker: '#8b0a03',
    },
    // Base colors
    base: {
      lightest: '#f0f0f0',
      lighter: '#dfe1e2',
      light: '#a9aeb1',
      DEFAULT: '#71767a',
      dark: '#565c65',
      darker: '#3d4551',
      darkest: '#1b1b1b',
    },
    // State colors
    info: {
      lighter: '#e7f6f8',
      light: '#99deea',
      DEFAULT: '#00bde3',
      dark: '#009ec1',
      darker: '#0081a1',
    },
    success: {
      lighter: '#ecf3ec',
      light: '#70e17b',
      DEFAULT: '#00a91c',
      dark: '#008817',
      darker: '#216e1f',
    },
    warning: {
      lighter: '#fef2c0',
      light: '#fee685',
      DEFAULT: '#ffbe2e',
      dark: '#e5a000',
      darker: '#c2850c',
    },
    error: {
      lighter: '#f4e3db',
      light: '#f39268',
      DEFAULT: '#d54309',
      dark: '#b50909',
      darker: '#6f3331',
    },
    disabled: {
      light: '#e6e6e6',
      DEFAULT: '#c9c9c9',
      dark: '#adadad',
    },
  },
  
  // USWDS Spacing units (based on 8px grid)
  spacing: {
    '05': '4px',
    1: '8px',
    105: '12px',
    2: '16px',
    205: '20px',
    3: '24px',
    4: '32px',
    5: '40px',
    6: '48px',
    7: '56px',
    8: '64px',
    9: '72px',
    10: '80px',
    15: '120px',
  },
  
  // USWDS Typography scale
  typography: {
    // Font sizes
    size: {
      '3xs': '10px',
      '2xs': '12px',
      xs: '14px',
      sm: '15px',
      base: '17px',
      lg: '22px',
      xl: '28px',
      '2xl': '32px',
      '3xl': '36px',
      '4xl': '40px',
      '5xl': '48px',
      '6xl': '56px',
    },
    // Line heights
    lineHeight: {
      1: '1',
      2: '1.15',
      3: '1.35',
      4: '1.5',
      5: '1.62',
      6: '1.75',
    },
    // Font weights
    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  
  // USWDS Border radius
  radius: {
    none: '0',
    sm: '2px',
    DEFAULT: '4px',
    md: '6px',
    lg: '8px',
    pill: '9999px',
  },
  
  // USWDS Shadows
  shadow: {
    none: 'none',
    1: '0 1px 4px 0 rgba(0, 0, 0, 0.1)',
    2: '0 4px 8px 0 rgba(0, 0, 0, 0.1)',
    3: '0 8px 16px 0 rgba(0, 0, 0, 0.1)',
    4: '0 12px 24px 0 rgba(0, 0, 0, 0.1)',
    5: '0 16px 32px 0 rgba(0, 0, 0, 0.1)',
  },
  
  // Z-index scale
  zIndex: {
    deep: -99999,
    default: 1,
    dropdown: 1000,
    sticky: 1100,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600,
    top: 99999,
  },
};

/**
 * USWDS CSS Classes
 * These are the actual USWDS class names we'll use
 */
export const uswdsClasses = {
  // Grid
  grid: {
    container: 'grid-container',
    containerWidescreen: 'grid-container-widescreen',
    row: 'grid-row',
    col: 'grid-col',
    gap: 'grid-gap',
  },
  
  // Typography
  typography: {
    sans: 'usa-font-sans',
    serif: 'usa-font-serif',
    mono: 'usa-font-mono',
    heading: 'usa-heading',
    body: 'usa-body',
    lead: 'usa-intro',
    prose: 'usa-prose',
  },
  
  // Components
  button: {
    base: 'usa-button',
    secondary: 'usa-button--secondary',
    accentCool: 'usa-button--accent-cool',
    accentWarm: 'usa-button--accent-warm',
    baseStyle: 'usa-button--base',
    outline: 'usa-button--outline',
    inverse: 'usa-button--inverse',
    unstyled: 'usa-button--unstyled',
    big: 'usa-button--big',
  },
  
  alert: {
    base: 'usa-alert',
    info: 'usa-alert--info',
    success: 'usa-alert--success',
    warning: 'usa-alert--warning',
    error: 'usa-alert--error',
    emergency: 'usa-alert--emergency',
    slim: 'usa-alert--slim',
    noIcon: 'usa-alert--no-icon',
    heading: 'usa-alert__heading',
    body: 'usa-alert__body',
    text: 'usa-alert__text',
  },
  
  accordion: {
    base: 'usa-accordion',
    bordered: 'usa-accordion--bordered',
    multiselectable: 'usa-accordion--multiselectable',
    heading: 'usa-accordion__heading',
    button: 'usa-accordion__button',
    content: 'usa-accordion__content',
  },
  
  badge: {
    base: 'usa-tag',
    big: 'usa-tag--big',
    identifier: 'usa-identifier',
  },
  
  card: {
    base: 'usa-card',
    group: 'usa-card-group',
    container: 'usa-card__container',
    header: 'usa-card__header',
    heading: 'usa-card__heading',
    media: 'usa-card__media',
    img: 'usa-card__img',
    body: 'usa-card__body',
    footer: 'usa-card__footer',
    headerFirst: 'usa-card--header-first',
    mediaRight: 'usa-card--media-right',
    flag: 'usa-card--flag',
    exdent: 'usa-card__media--exdent',
    inset: 'usa-card__media--inset',
  },
  
  form: {
    group: 'usa-form-group',
    label: 'usa-label',
    input: 'usa-input',
    textarea: 'usa-textarea',
    select: 'usa-select',
    checkbox: 'usa-checkbox',
    radio: 'usa-radio',
    fieldset: 'usa-fieldset',
    legend: 'usa-legend',
    hint: 'usa-hint',
    errorMessage: 'usa-error-message',
    inputError: 'usa-input--error',
    inputSuccess: 'usa-input--success',
  },
  
  link: {
    base: 'usa-link',
    external: 'usa-link--external',
  },
  
  list: {
    unstyled: 'usa-list--unstyled',
  },
  
  srOnly: 'usa-sr-only',
};

/**
 * Helper to get USWDS class with optional modifiers
 */
export function getUSWDSClass(
  base: string,
  modifiers?: Record<string, boolean | undefined>
): string {
  const classes = [base];
  
  if (modifiers) {
    Object.entries(modifiers).forEach(([modifier, isActive]) => {
      if (isActive) {
        classes.push(`${base}--${modifier}`);
      }
    });
  }
  
  return classes.join(' ');
}

export default uswdsConfig;