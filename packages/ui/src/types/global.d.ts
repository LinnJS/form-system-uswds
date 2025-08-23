// Global type declarations for USWDS analytics

declare global {
  interface Window {
    __USWDS_ANALYTICS_HANDLER__?: (data: {
      event: string;
      element: string;
      metadata?: Record<string, any>;
    }) => void;
  }
}

export {};