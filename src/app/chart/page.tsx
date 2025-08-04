"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { expenseData } from "@/mock/expense-data";
import { generateShades } from "@/utils/color-generator";

export const description = "A donut chart with text";

// const chartData = [
//   { expense: "chrome", amount: 275, fill: "var(--color-chrome)" },
//   { expense: "safari", amount: 200, fill: "var(--color-safari)" },
//   { expense: "firefox", amount: 287, fill: "var(--color-firefox)" },
//   { expense: "edge", amount: 173, fill: "var(--color-edge)" },
//   { expense: "other", amount: 190, fill: "var(--color-other)" },
// ];

const expenseChartData = {
  incomes: expenseData.incomes,
  expenses: expenseData.expneses,
};

const chartConfig = {
  spent: {
    label: "spent",
  },
  groceries: {
    label: "Groceries",
    color: "var(--chart-1)",
  },
  rent: {
    label: "Rent",
    color: "var(--chart-2)",
  },
  bills: {
    label: "Bills",
    color: "var(--chart-3)",
  },
  fuel: {
    label: "Fuel",
    color: "var(--chart-4)",
  },
  medics: {
    label: "Medics",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export default function ChartPieDonutText() {

    const getColors = generateShades("#193cb8", 10);

  const totalSpent = React.useMemo(() => {
    return expenseChartData.expenses.reduce((acc, curr) => acc + curr.spent, 0);
  }, [expenseChartData.expenses]);

  const totalIncome = React.useMemo(() => {
    return expenseChartData.incomes.reduce((acc, curr) => acc + curr.amount, 0);
  }, [expenseChartData.incomes]);

   const pieData = expenseChartData.expenses.map((expense, idx) => ({
    name: expense.title,
    spent: expense.spent,
    fill: getColors[idx] || "var(--default-color)",
  }));

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart</CardTitle>
        <CardDescription>Chart Description</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={pieData}
              dataKey="spent"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {(totalIncome - totalSpent).toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          available
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div>{`Total income: ${totalIncome.toString()} ; total Spent: ${totalSpent.toString()} ; total available: ${
          totalIncome - totalSpent
        }`}</div>
      </CardFooter>
    </Card>
  );
}
