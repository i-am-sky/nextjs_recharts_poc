"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";

export function EditDialog({ setExpenseDarta }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [limit, setLimit] = useState("");
  const [spent, setSpent] = useState("");
  const [showInHome, setShowInHome] = useState(false);

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Expense</DialogTitle>
            <DialogDescription>Edit your expense details.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Eg: Groceries"
              />
            </div>

            <div className="flex gap-5">
              <div className="grid gap-3">
                <Label htmlFor="limit">Limit</Label>
                <Input
                  type="number"
                  id="limit"
                  name="limit"
                  value={limit}
                  onChange={(e) => setLimit(e.target.value)}
                  placeholder="Eg: 3000"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="spent">Spent</Label>
                <Input
                  type="number"
                  id="spent"
                  name="spent"
                  value={spent}
                  onChange={(e) => setSpent(e.target.value)}
                  placeholder="Eg: 2500"
                />
              </div>
            </div>

            <div className="grid gap-3">
              <Label htmlFor="username-1">Note (Optional)</Label>
              <Input
                id="username-1"
                name="username"
                placeholder="dont forget the milk"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-3">
              <Checkbox
                id="shortcut"
                onChange={(e) => {console.log("e.target.addEventListener",e.target)}}
              />
              <Label htmlFor="shortcut">Show In Home Screen</Label>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
