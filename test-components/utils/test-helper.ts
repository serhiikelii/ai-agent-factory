/**
 * Test Helper Utilities
 *
 * Collection of utility functions for testing and development purposes.
 */

/**
 * Format a Date object to YYYY-MM-DD string format
 *
 * @param date - The date to format
 * @returns Formatted date string in YYYY-MM-DD format
 * @throws {Error} If the provided date is invalid
 *
 * @example
 * ```typescript
 * const date = new Date('2025-11-02');
 * const formatted = formatDate(date);
 * console.log(formatted); // "2025-11-02"
 * ```
 */
export function formatDate(date: Date): string {
  // Validate that the date is a valid Date object
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date provided. Expected a valid Date object.');
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

// Default export for convenience
export default formatDate;
