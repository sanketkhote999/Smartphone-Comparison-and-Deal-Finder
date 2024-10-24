"use client";

import { useState } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PriceAlertDialog({ productName, currentPrice }: { productName: string; currentPrice: number }) {
  const [targetPrice, setTargetPrice] = useState(currentPrice);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Bell className="mr-2 h-4 w-4" />
          Set Price Alert
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Set Price Alert</DialogTitle>
          <DialogDescription>
            Get notified when {productName} price drops below your target price.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="target-price">Target Price (₹)</Label>
            <Input
              id="target-price"
              type="number"
              value={targetPrice}
              onChange={(e) => setTargetPrice(Number(e.target.value))}
              max={currentPrice}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Set Alert</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}