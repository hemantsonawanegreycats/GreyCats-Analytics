/**
 * Status color utilities for muted, subtle color tints
 * that blend with the black/grey theme while providing
 * visual distinction for important status indicators
 * Uses custom CSS variables for very light tints (similar to orange-juice-tints pattern)
 */

export type StatusType =
  | "Active"
  | "Paused"
  | "Delivered"
  | "Pending"
  | "In Review"
  | "Scheduled"
  | "Draft"
  | "default";

/**
 * Get status badge classes with muted colors
 * Uses very light tinted backgrounds (90 level) with darker text
 * to maintain the black/grey theme while adding subtle color hints
 */
export function getStatusBadgeClass(status: string): string {
  const normalizedStatus = status.trim();

  switch (normalizedStatus) {
    case "Active":
      // Very light green tint with darker green text
      return "bg-[var(--green-tint-90)] text-[var(--green-tint-text)] border border-[var(--green-tint-80)]";
    case "Paused":
      // Very light amber/yellow tint with darker amber text
      return "bg-[var(--amber-tint-90)] text-[var(--amber-tint-text)] border border-[var(--amber-tint-80)]";
    case "Delivered":
      // Very light blue tint with darker blue text
      return "bg-[var(--blue-tint-90)] text-[var(--blue-tint-text)] border border-[var(--blue-tint-80)]";
    case "Pending":
    case "In Review":
      // Very light orange tint with darker orange text (matching user's example)
      return "bg-[var(--orange-tint-90)] text-[var(--orange-tint-text)] border border-[var(--orange-tint-80)]";
    case "Scheduled":
      // Very light blue tint with darker blue text
      return "bg-[var(--blue-tint-90)] text-[var(--blue-tint-text)] border border-[var(--blue-tint-80)]";
    case "Draft":
      // Pure grey to match theme
      return "bg-zinc-100 text-zinc-700 border border-zinc-200";
    default:
      // Default grey
      return "bg-zinc-100 text-zinc-600 border border-zinc-200";
  }
}

/**
 * Get change indicator color classes
 * Uses muted colors that blend with grey theme
 */
export function getChangeIndicatorClass(isPositive: boolean): string {
  if (isPositive) {
    // Muted green for positive changes
    return "text-[var(--green-tint-text)]";
  } else {
    // Muted orange/red for negative changes (using orange tint text)
    return "text-[var(--orange-tint-text)]";
  }
}

/**
 * Get status badge classes for ReportBuilder
 * Matches the same muted color scheme using custom tints
 */
export function getReportStatusBadgeClass(status: string): string {
  const normalizedStatus = status.trim();

  switch (normalizedStatus) {
    case "Scheduled":
      return "border-[var(--blue-tint-80)] bg-[var(--blue-tint-90)] text-[var(--blue-tint-text)]";
    case "Delivered":
      return "border-[var(--green-tint-80)] bg-[var(--green-tint-90)] text-[var(--green-tint-text)]";
    case "Draft":
      return "border-zinc-200 bg-zinc-100 text-zinc-700";
    default:
      return "border-zinc-200 bg-zinc-100 text-zinc-700";
  }
}

