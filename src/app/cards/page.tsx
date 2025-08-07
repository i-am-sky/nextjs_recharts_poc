"use client";

import CustomCard from "@/components/custom-card";
import { expenseData } from "@/mock/expense-data";

export default function CardContainer() {
  const allExpenses = expenseData.expneses;
  return (
    <>
      <div className="p-2">
        {allExpenses.map((expense) => (
          <CustomCard expense={expense} />
        ))}
      </div>
    </>
  );
}
