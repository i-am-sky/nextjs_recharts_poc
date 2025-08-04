import tinycolor from "tinycolor2";

interface Expense {
  title: string;
  category: string;
  limit: number;
  spent: number;
  updatedAt: string;
  note: string;
  showOnHome: boolean;
}

export function generateColorsBasedOnExpenses(expenses: Expense[]): string[] {
  const baseColor = "#193cb8";
  const differences = expenses.map((expense) => expense.limit - expense.spent);
  const minDifference = Math.min(...differences);
  const maxDifference = Math.max(...differences);

  return expenses.map((expense) => {
    const difference = expense.limit - expense.spent;
    const normalizedDifference =
      (difference - minDifference) / (maxDifference - minDifference);
    const brightnessAdjustment = normalizedDifference * 100; // Adjust the brightness based on the normalized difference
    const color = tinycolor(baseColor)
      .lighten(brightnessAdjustment)
      .toHexString();
    return color;
  });
}
