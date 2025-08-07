"use client";
import { EditDialog } from "@/components/edit-dialog";
import { useState } from "react";

export default function DialogPage() {
  const [expData, setExpData] = useState({
    title: "Groceries",
    category: "food",
    limit: 6000,
    spent: 5000,
    updatedAt: new Date().toLocaleDateString(),
    note: "include monthly ration and veggies",
    showOnHome: true,
  });
  return (
    <>
      <EditDialog setExpenseDarta={setExpData} />
    </>
  );
}
