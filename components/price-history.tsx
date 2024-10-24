"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowLeft } from "lucide-react";

// Demo data - In real app, fetch from API
const generatePriceHistory = (basePrice: number) => {
  const last30Days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    return date.toISOString().split('T')[0];
  });

  return last30Days.map(date => ({
    date,
    amazon: basePrice + Math.floor(Math.random() * 2000 - 1000),
    flipkart: basePrice + Math.floor(Math.random() * 2000 - 1000),
    official: basePrice,
  }));
};

export function PriceHistoryDialog({ productName, basePrice }: { productName: string; basePrice: number }) {
  const priceHistory = generatePriceHistory(basePrice);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <TrendingUp className="mr-2 h-4 w-4" />
          Price History
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Price History - {productName}</DialogTitle>
          <DialogDescription>
            30-day price trend across different retailers
          </DialogDescription>
        </DialogHeader>
        <div className="h-[400px] w-full py-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceHistory}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="amazon" stroke="#ff9900" name="Amazon" />
              <Line type="monotone" dataKey="flipkart" stroke="#2874f0" name="Flipkart" />
              <Line type="monotone" dataKey="official" stroke="#000000" name="Official Store" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}