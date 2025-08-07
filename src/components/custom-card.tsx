"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function CustomCard({ expense }: any) {
  const calcSpentPercentile = (expense.spent / expense.limit) * 100;
  return (
    <div>
      <Card className="w-full max-w-sm p-5 pb-2 max-h-[12rem] m-2 gap-4">
        <CardHeader className="flex justify-start items-baseline gap-2 px-1 h-[2.25rem] w-full">
          <CardTitle className="text-2xl">{expense.title}</CardTitle>
          <CardDescription>{expense.category}</CardDescription>
        </CardHeader>
        <CardContent className="p-0 grow">
          <div className="flex justify-between align-middle gap-2">
            <div className="container max-w-[60%] ">
              {expense.note ? (
                <p>
                  Note:{" "}
                  {"Lorem ipsum dolor sit amet consectetur adipisicing elit".slice(
                    0,
                    42
                  ) + "..."}
                </p>
              ) : (
                <p>Note: -</p>
              )}
            </div>
            <div className="container max-w-[40%] pt-[0.75rem]">
              <Progress
                value={calcSpentPercentile <= 100 ? calcSpentPercentile : 100}
                className="h-[25px]"
              />
              <div className="w-full flex justify-end">
                <p>{`${expense.spent} / ${expense.limit}`}</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col w-full p-0">
          <p className="w-full text-xs text-gray-500 text-right">
            {expense.updatedAt}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
