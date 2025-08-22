/**
 * USWDS design system configuration with VA.gov enhancements
 * Contains all design tokens from the U.S. Web Design System
 * Enhanced with VA.gov patterns and best practices
 * @see https://designsystem.digital.gov/design-tokens/
 * @see https://design.va.gov/
 */
export const designTokens = {
  fonts: {
    sans: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
    serif: '"Merriweather", Georgia, "Times New Roman", serif',
    mono: '"Roboto Mono", "Courier New", monospace',
    // VA.gov specific font stacks
    bitter: '"Bitter", Georgia, "Times New Roman", serif',
  },
  
  breakpoints: {
    mobile: 320,
    mobileLg: 480,
    tablet: 640,
    desktop: 1024,
    desktopLg: 1200,
    widescreen: 1400,
  },
  
  colors: {
    // USWDS Primary colors (Blue family)
    primary: {
      lightest: '#f0f8ff',  // blue-5
      lighter: '#d9e8f6',   // blue-10
      light: '#73b3e7',     // blue-30
      DEFAULT: '#005ea2',   // blue-60v
      vivid: '#0050d8',     // blue-60
      dark: '#1a4480',      // blue-70
      darker: '#162e51',    // blue-80
      darkest: '#112f4e',   // blue-90
    },
    
    // USWDS Secondary colors (Red family)
    secondary: {
      lightest: '#fff5f5',  // red-5
      lighter: '#f4e3db',   // red-10
      light: '#f39268',     // red-30
      DEFAULT: '#d83933',   // red-50v
      vivid: '#fb5a47',     // red-50
      dark: '#b50909',      // red-60v
      darker: '#8b0a03',    // red-70v
      darkest: '#5c1111',   // red-80v
    },
    
    // USWDS Accent colors
    accent: {
      cool: {
        lightest: '#e1f3f8',  // cyan-5
        lighter: '#97d4ea',   // cyan-20
        light: '#00bde3',     // cyan-40v
        DEFAULT: '#00a8d7',   // cyan-50v
        dark: '#0081a1',      // cyan-60v
        darker: '#005e7a',    // cyan-70v
      },
      warm: {
        lightest: '#fff2e5',  // orange-5
        lighter: '#fdc086',   // orange-20
        light: '#fa9441',     // orange-40v
        DEFAULT: '#e66f0e',   // orange-50v
        dark: '#c05600',      // orange-60v
        darker: '#8c471c',    // orange-70v
      },
    },
    
    // USWDS Gray scale (base colors)
    base: {
      white: '#ffffff',      // white
      lightest: '#f0f0f0',   // gray-5
      lighter: '#dfe1e2',    // gray-10  
      light: '#a9aeb1',      // gray-30
      DEFAULT: '#71767a',    // gray-50
      dark: '#565c65',       // gray-60
      darker: '#3d4551',     // gray-70
      darkest: '#1b1b1b',    // gray-90
      black: '#000000',      // black
    },
    
    // State/Feedback colors
    info: {
      lightest: '#e7f6f8',  // cyan-5v
      lighter: '#99deea',   // cyan-20v
      light: '#00bde3',     // cyan-40v
      DEFAULT: '#00a8d7',   // cyan-50v
      dark: '#009ec1',      // cyan-60v
      darker: '#0081a1',    // cyan-70v
      darkest: '#005e7a',   // cyan-80v
    },
    
    success: {
      lightest: '#ecf3ec',  // green-5v
      lighter: '#94e4a0',   // green-20v
      light: '#70e17b',     // green-40v
      DEFAULT: '#00a91c',   // green-50v
      dark: '#008817',      // green-60v
      darker: '#216e1f',    // green-70v
      darkest: '#154c21',   // green-80v
    },
    
    warning: {
      lightest: '#fef2c0',  // gold-5v
      lighter: '#fee685',   // gold-20v
      light: '#ffbe2e',     // gold-30v
      DEFAULT: '#fdb81e',   // gold-40v
      dark: '#e5a000',      // gold-50v
      darker: '#c2850c',    // gold-60v
      darkest: '#936f38',   // gold-70v
    },
    
    error: {
      lightest: '#f4e3db',  // red-warm-10v
      lighter: '#f39268',   // red-warm-30v  
      light: '#ef5e25',     // red-warm-40v
      DEFAULT: '#d54309',   // red-warm-50v
      dark: '#b50909',      // red-warm-60v
      darker: '#8b0a03',    // red-warm-70v
      darkest: '#5c1111',   // red-warm-80v
    },
    
    emergency: {
      DEFAULT: '#9c3d10',   // red-warm-60
      dark: '#5c1111',      // red-warm-80v
    },
    
    disabled: {
      light: '#e6e6e6',
      DEFAULT: '#c9c9c9',
      dark: '#adadad',
    },
    
    // VA.gov specific colors
    va: {
      linkBlue: '#004795',      // VA link blue
      linkBlueHover: '#003068', // VA link blue hover
      backgroundGray: '#f1f1f1', // VA background gray
      borderGray: '#d6d7d9',    // VA border gray
      disabledGray: '#aeb0b5',  // VA disabled gray
      gibillAccent: '#fdb81e',  // GI Bill accent
      vadsGreen: '#2e8540',     // VADS green
      vadsGreenLight: '#4aa564', // VADS green light
    },
  },
  
  // USWDS Spacing units (based on 8px grid)
  spacing: {
    // Fractional units
    '05': '4px',     // 0.5 unit
    '1px': '1px',    // 1 pixel
    '2px': '2px',    // 2 pixels
    
    // Standard units
    1: '8px',        // 1 unit
    105: '12px',     // 1.5 units
    2: '16px',       // 2 units
    205: '20px',     // 2.5 units
    3: '24px',       // 3 units
    4: '32px',       // 4 units
    5: '40px',       // 5 units
    6: '48px',       // 6 units
    7: '56px',       // 7 units
    8: '64px',       // 8 units
    9: '72px',       // 9 units
    10: '80px',      // 10 units
    15: '120px',     // 15 units
    
    // Negative spacing
    'neg-05': '-4px',
    'neg-1': '-8px',
    'neg-105': '-12px',
    'neg-2': '-16px',
    'neg-205': '-20px',
    'neg-3': '-24px',
  },
  
  // USWDS Typography scale
  typography: {
    // Font sizes (aligned with USWDS type scale)
    size: {
      // Micro sizes
      '3xs': '10px',   // micro
      '2xs': '12px',   // 12px
      'xs': '13px',    // 13px
      'sm': '15px',    // 15px
      'md': '16px',    // 16px
      'base': '17px',  // body (default)
      'lg': '22px',    // 22px
      'xl': '28px',    // 28px
      '2xl': '32px',   // 32px
      '3xl': '36px',   // 36px
      '4xl': '40px',   // 40px
      '5xl': '48px',   // 48px
      '6xl': '56px',   // 56px
      
      // Display sizes
      'display': '80px',
      'display-lg': '93px',
      'display-xl': '120px',
    },
    
    // Line heights (unitless values)
    lineHeight: {
      1: '1',      // heading
      2: '1.15',   // tight
      3: '1.35',   // snug  
      4: '1.5',    // normal
      5: '1.62',   // relaxed
      6: '1.75',   // loose
      7: '2',      // double
    },
    
    // Font weights
    weight: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      heavy: 800,
      black: 900,
    },
    
    // Letter spacing
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    
    // Paragraph spacing
    measure: {
      narrow: '44ex',  // ~45 characters
      base: '64ex',    // ~65 characters
      wide: '77ex',    // ~78 characters
    },
  },
  
  // USWDS Border radius
  radius: {
    none: '0',
    sm: '2px',
    DEFAULT: '4px',
    md: '6px',
    lg: '8px',
    xl: '16px',
    pill: '9999px',
  },
  
  // Border widths
  borderWidth: {
    none: '0',
    '05': '1px',
    '1': '2px',
    '105': '3px',
    '2': '4px',
    '205': '5px',
    '3': '6px',
  },
  
  // USWDS Shadows
  shadow: {
    none: 'none',
    1: '0 1px 4px 0 rgba(0, 0, 0, 0.1)',
    2: '0 4px 8px 0 rgba(0, 0, 0, 0.1)',
    3: '0 8px 16px 0 rgba(0, 0, 0, 0.1)',
    4: '0 12px 24px 0 rgba(0, 0, 0, 0.1)',
    5: '0 16px 32px 0 rgba(0, 0, 0, 0.1)',
    // Focus shadows
    focus: '0 0 0 4px rgba(36, 145, 255, 0.5)',
    focusInset: 'inset 0 0 0 2px rgba(36, 145, 255, 0.5)',
  },
  
  // Opacity scale
  opacity: {
    0: '0',
    10: '0.1',
    20: '0.2',
    30: '0.3',
    40: '0.4',
    50: '0.5',
    60: '0.6',
    70: '0.7',
    80: '0.8',
    90: '0.9',
    100: '1',
  },
  
  // Z-index scale
  zIndex: {
    deep: -99999,
    default: 0,
    bottom: 100,
    dropdown: 200,
    sticky: 300,
    overlay: 400,
    modal: 500,
    popover: 600,
    tooltip: 700,
    notification: 800,
    top: 99999,
  },
  
  // Transitions
  transition: {
    fast: '150ms ease-in-out',
    base: '250ms ease-in-out',
    slow: '350ms ease-in-out',
    // VA.gov specific
    vaFast: '100ms ease-in-out',
    vaSlow: '500ms ease-in-out',
  },
  
  // Container widths
  container: {
    mobile: '320px',
    mobileLg: '480px',
    tablet: '640px',
    desktop: '1024px',
    widescreen: '1280px',
  },
};

/** 
 * USWDS BEM-style CSS class names
 * Enhanced with VA.gov patterns
 */
export const designClasses = {
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
  
  // VA.gov specific patterns
  va: {
    processStep: 'va-process-step',
    formProgress: 'va-form-progress',
    alertBox: 'va-alert-box',
    additionalInfo: 'va-additional-info',
    breadcrumbs: 'va-breadcrumbs',
    backToTop: 'va-back-to-top',
  },
  
  // Utility classes
  utility: {
    srOnly: 'usa-sr-only',
    clearfix: 'clearfix',
    visibilityHidden: 'visibility-hidden',
    displayNone: 'display-none',
    displayBlock: 'display-block',
    displayInline: 'display-inline',
    displayInlineBlock: 'display-inline-block',
    displayFlex: 'display-flex',
  },
};

/**
 * Generates USWDS class names with optional BEM modifiers
 * @param base - Base USWDS class name
 * @param modifiers - Object with modifier names and their active states
 * @returns Combined class string with active modifiers
 * @example getUSWDSClass("usa-button", \{ primary: true, large: size === "lg" \})
 */
export function getDesignClass(
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

/**
 * VA.gov specific utility functions
 */
export const govUtils = {
  /**
   * Format phone numbers in VA.gov style
   * @example formatPhone("8002738255") =\> "800-273-8255"
   */
  formatPhone: (phone: string): string => {
    const cleaned = phone.replace(/\D/g, '');
    const match = /^(\d{3})(\d{3})(\d{4})$/.exec(cleaned);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return phone;
  },
  
  /**
   * Format dates in VA.gov style
   * @example formatDate(new Date()) =\> "January 1, 2024"
   */
  formatDate: (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  },
};

export default designTokens;