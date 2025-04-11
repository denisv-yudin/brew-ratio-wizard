
/**
 * Calculates the amount of water needed based on coffee amount and brew ratio
 * @param coffeeAmount - Amount of coffee in grams
 * @param ratio - Brew ratio (e.g., 15 for 1:15 ratio)
 * @returns Amount of water in ml
 */
export const calculateWater = (coffeeAmount: number, ratio: number): number => {
  return coffeeAmount * ratio;
};

// Common coffee-to-water brew ratios
export const commonRatios = [
  { value: 12, label: '1:12 (Stronger)' },
  { value: 14, label: '1:14' },
  { value: 15, label: '1:15 (Standard)' },
  { value: 16, label: '1:16' },
  { value: 17, label: '1:17' },
  { value: 18, label: '1:18 (Lighter)' }
];
