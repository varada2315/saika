/**
 * Shared INR currency configuration and formatting utilities.
 */
export const FREE_SHIPPING_THRESHOLD = 499;
export const GIFT_WRAP_FEE = 60;

const defaultInrFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const decimalInrFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/**
 * Format a numeric amount in Indian Rupees (INR).
 * Set `decimals: true` to always include two decimal places (e.g. cart totals).
 */
export function formatCurrency(amount, { decimals = false } = {}) {
  const numericAmount = Number(amount);
  const safeAmount = Number.isFinite(numericAmount) ? numericAmount : 0;
  return (decimals ? decimalInrFormatter : defaultInrFormatter).format(safeAmount);
}

