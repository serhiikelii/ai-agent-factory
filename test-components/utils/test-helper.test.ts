/**
 * Unit tests for test-helper utilities
 */

import { formatDate } from './test-helper';

describe('formatDate', () => {
  describe('normal cases', () => {
    it('should format a date correctly to YYYY-MM-DD', () => {
      const date = new Date('2025-11-02');
      const result = formatDate(date);
      expect(result).toBe('2025-11-02');
    });

    it('should pad single-digit months with zero', () => {
      const date = new Date('2025-01-15');
      const result = formatDate(date);
      expect(result).toBe('2025-01-15');
    });

    it('should pad single-digit days with zero', () => {
      const date = new Date('2025-12-05');
      const result = formatDate(date);
      expect(result).toBe('2025-12-05');
    });
  });

  describe('edge cases', () => {
    it('should handle leap year dates', () => {
      const date = new Date('2024-02-29');
      const result = formatDate(date);
      expect(result).toBe('2024-02-29');
    });

    it('should handle year boundaries', () => {
      const date = new Date('2024-12-31');
      const result = formatDate(date);
      expect(result).toBe('2024-12-31');
    });

    it('should handle first day of year', () => {
      const date = new Date('2025-01-01');
      const result = formatDate(date);
      expect(result).toBe('2025-01-01');
    });
  });

  describe('error cases', () => {
    it('should throw error for invalid date', () => {
      const invalidDate = new Date('invalid-date');
      expect(() => formatDate(invalidDate)).toThrow('Invalid date provided');
    });

    it('should throw error for non-Date objects', () => {
      // @ts-expect-error Testing runtime validation
      expect(() => formatDate('2025-11-02')).toThrow('Invalid date provided');
    });

    it('should throw error for null', () => {
      // @ts-expect-error Testing runtime validation
      expect(() => formatDate(null)).toThrow('Invalid date provided');
    });

    it('should throw error for undefined', () => {
      // @ts-expect-error Testing runtime validation
      expect(() => formatDate(undefined)).toThrow('Invalid date provided');
    });
  });
});
