/**
 * Reusable data-handling utilities: test data sets and small parsing helpers.
 * Keeping data here means test files stay readable and data can be reused
 * across multiple spec files.
 */

export const states = {
  valid: ['Kerala', 'Maharashtra', 'Delhi', 'Tamil Nadu'],
  invalid: ['Wakanda', 'Narnia'],
  numeric: ['12345'],
  blank: [''],
};

/** Strip commas/spaces from a number displayed as text and parse it, e.g. "1,234" -> 1234. */
export function parseDisplayedNumber(text: string | null): number {
  if (!text) return NaN;
  const cleaned = text.replace(/[^0-9.-]/g, '');
  return Number(cleaned);
}

/** Pick a random item from an array — handy for varying test data across runs. */
export function randomFrom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}
