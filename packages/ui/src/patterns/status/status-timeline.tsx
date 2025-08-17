"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { Check, Clock, AlertCircle, XCircle, Circle } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

const statusVariants = cva("", {
  variants: {
    status: {
      complete: "border-green-200 bg-green-50 text-green-600",
      current: "border-blue-200 bg-blue-50 text-blue-600",
      pending: "border-gray-200 bg-gray-50 text-gray-400",
      error: "border-red-200 bg-red-50 text-red-600",
      warning: "border-yellow-200 bg-yellow-50 text-yellow-600",
    },
  },
  defaultVariants: {
    status: "pending",
  },
});

export interface TimelineEvent {
  id: string;
  title: string;
  description?: string;
  date?: Date | string;
  status: "complete" | "current" | "pending" | "error" | "warning";
  metadata?: Record<string, unknown>;
  expandable?: boolean;
  expandedContent?: React.ReactNode;
}

export interface StatusTimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Timeline events */
  events: TimelineEvent[];
  /** Orientation of timeline */
  orientation?: "vertical" | "horizontal";
  /** Show connecting lines between events */
  showConnectors?: boolean;
  /** Compact mode with less spacing */
  compact?: boolean;
  /** Callback when event is clicked */
  onEventClick?: (event: TimelineEvent) => void;
  /** Analytics event prefix */
  analyticsPrefix?: string;
}

const StatusIcon: React.FC<{ status: TimelineEvent["status"] }> = ({ status }) => {
  const iconClass = "h-5 w-5";
  
  switch (status) {
    case "complete":
      return <Check className={iconClass} aria-label="Complete" />;
    case "current":
      return <Clock className={iconClass} aria-label="In Progress" />;
    case "error":
      return <XCircle className={iconClass} aria-label="Error" />;
    case "warning":
      return <AlertCircle className={iconClass} aria-label="Warning" />;
    case "pending":
    default:
      return <Circle className={iconClass} aria-label="Pending" />;
  }
};

export const StatusTimeline = React.forwardRef<HTMLDivElement, StatusTimelineProps>(
  (
    {
      className,
      events,
      orientation = "vertical",
      showConnectors = true,
      compact = false,
      onEventClick,
      analyticsPrefix = "status_timeline",
      ...props
    },
    ref
  ) => {
    const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set());

    const handleEventClick = (event: TimelineEvent) => {
      if (event.expandable) {
        setExpandedItems(prev => {
          const newSet = new Set(prev);
          if (newSet.has(event.id)) {
            newSet.delete(event.id);
          } else {
            newSet.add(event.id);
          }
          return newSet;
        });
      }

      // Emit analytics
      if (window.__USWDS_ANALYTICS_HANDLER__) {
        window.__USWDS_ANALYTICS_HANDLER__({
          event: `${analyticsPrefix}_event_click`,
          element: "timeline_event",
          metadata: {
            eventId: event.id,
            status: event.status,
            ...event.metadata,
          },
        });
      }

      onEventClick?.(event);
    };

    const formatDate = (date: Date | string | undefined) => {
      if (!date) return null;
      const dateObj = typeof date === "string" ? new Date(date) : date;
      return dateObj.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
    };

    if (orientation === "horizontal") {
      return (
        <div
          ref={ref}
          className={cn("relative", className)}
          role="list"
          aria-label="Status timeline"
          {...props}
        >
          <div className="flex items-start space-x-8 overflow-x-auto pb-4">
            {events.map((event, index) => (
              <div
                key={event.id}
                role="listitem"
                className={cn(
                  "flex min-w-[150px] flex-col items-center",
                  compact ? "space-y-2" : "space-y-3"
                )}
              >
                {/* Connector line */}
                {showConnectors && index < events.length - 1 && (
                  <div
                    className="absolute top-6 h-0.5 w-full bg-gray-300"
                    style={{
                      left: `calc(${(index * 100) / events.length}% + 75px)`,
                      width: `calc(${100 / events.length}% - 75px)`,
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Status icon */}
                <button
                  type="button"
                  onClick={() => handleEventClick(event)}
                  className={cn(
                    "relative z-10 flex items-center justify-center rounded-full border-2 p-2 transition-colors",
                    statusVariants({ status: event.status }),
                    event.expandable && "cursor-pointer hover:ring-2 hover:ring-offset-2"
                  )}
                  aria-expanded={event.expandable ? expandedItems.has(event.id) : undefined}
                  aria-label={`${event.title} - ${event.status}`}
                >
                  <StatusIcon status={event.status} />
                </button>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-sm font-semibold">{event.title}</h3>
                  {event.date && (
                    <time className="text-xs text-gray-500" dateTime={event.date.toString()}>
                      {formatDate(event.date)}
                    </time>
                  )}
                  {event.description && (
                    <p className="mt-1 text-xs text-gray-600">{event.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Vertical orientation (default)
    return (
      <div
        ref={ref}
        className={cn("relative", className)}
        role="list"
        aria-label="Status timeline"
        {...props}
      >
        {events.map((event, index) => (
          <div
            key={event.id}
            role="listitem"
            className={cn(
              "relative flex items-start",
              compact ? "mb-4" : "mb-8",
              index === events.length - 1 && "mb-0"
            )}
          >
            {/* Connector line */}
            {showConnectors && index < events.length - 1 && (
              <div
                className={cn(
                  "absolute left-6 top-12 w-0.5 bg-gray-300",
                  compact ? "h-full" : "h-[calc(100%+2rem)]"
                )}
                aria-hidden="true"
              />
            )}

            {/* Status icon */}
            <button
              type="button"
              onClick={() => handleEventClick(event)}
              className={cn(
                "relative z-10 mr-4 flex items-center justify-center rounded-full border-2 p-3 transition-colors",
                statusVariants({ status: event.status }),
                event.expandable && "cursor-pointer hover:ring-2 hover:ring-offset-2"
              )}
              aria-expanded={event.expandable ? expandedItems.has(event.id) : undefined}
              aria-label={`${event.title} - ${event.status}`}
            >
              <StatusIcon status={event.status} />
            </button>

            {/* Content */}
            <div className="flex-1 pt-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-semibold">{event.title}</h3>
                  {event.description && (
                    <p className="mt-1 text-sm text-gray-600">{event.description}</p>
                  )}
                </div>
                {event.date && (
                  <time
                    className="ml-4 whitespace-nowrap text-sm text-gray-500"
                    dateTime={event.date.toString()}
                  >
                    {formatDate(event.date)}
                  </time>
                )}
              </div>

              {/* Expanded content */}
              {event.expandable && expandedItems.has(event.id) && event.expandedContent && (
                <div className="mt-4 rounded-md border border-gray-200 bg-gray-50 p-4">
                  {event.expandedContent}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
);

StatusTimeline.displayName = "StatusTimeline";

// Example usage component for VA.gov-style claim status
export interface ClaimStatusProps {
  claimId: string;
  claimType: string;
  currentPhase: number;
  phases: Array<{
    name: string;
    description: string;
    estimatedDays?: number;
  }>;
  events: TimelineEvent[];
}

export const ClaimStatus: React.FC<ClaimStatusProps> = ({
  claimId,
  claimType,
  currentPhase,
  phases,
  events,
}) => {
  const phaseEvents: TimelineEvent[] = phases.map((phase, index) => ({
    id: `phase-${index}`,
    title: phase.name,
    description: phase.description,
    status: index < currentPhase ? "complete" : index === currentPhase ? "current" : "pending",
    expandable: true,
    expandedContent: phase.estimatedDays && (
      <div className="text-sm">
        <p className="font-medium">Estimated time: {phase.estimatedDays} days</p>
      </div>
    ),
  }));

  return (
    <div className="space-y-6">
      <div className="rounded-md border border-blue-200 bg-blue-50 p-4">
        <h2 className="text-lg font-bold text-blue-900">Claim Status</h2>
        <dl className="mt-2 space-y-1">
          <div className="flex">
            <dt className="mr-2 font-medium text-gray-600">Claim ID:</dt>
            <dd className="text-gray-900">{claimId}</dd>
          </div>
          <div className="flex">
            <dt className="mr-2 font-medium text-gray-600">Type:</dt>
            <dd className="text-gray-900">{claimType}</dd>
          </div>
          <div className="flex">
            <dt className="mr-2 font-medium text-gray-600">Current Phase:</dt>
            <dd className="text-gray-900">
              {phases[currentPhase]?.name} ({currentPhase + 1} of {phases.length})
            </dd>
          </div>
        </dl>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Claim Progress</h3>
        <StatusTimeline events={phaseEvents} />
      </div>

      {events.length > 0 && (
        <div>
          <h3 className="mb-4 text-lg font-semibold">Recent Activity</h3>
          <StatusTimeline events={events} compact />
        </div>
      )}
    </div>
  );
};