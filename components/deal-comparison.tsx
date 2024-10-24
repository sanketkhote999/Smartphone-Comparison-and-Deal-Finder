"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Bell, TrendingDown } from "lucide-react";

const priceData = [
  { date: "Jan", amazon: 79999, flipkart: 81999, official: 84999 },
  { date: "Feb", amazon: 78999, flipkart: 79999, official: 84999 },
  { date: "Mar", amazon: 77999, flipkart: 78999, official: 82999 },
  { date: "Apr", amazon: 76999, flipkart: 77999, official: 82999 },
];

export function DealComparison() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">iPhone 15 Pro</h2>
            <p className="text-muted-foreground">Best price: ₹76,999</p>
          </div>
          <div className="space-x-2">
            <Button variant="outline">
              <Bell className="mr-2 h-4 w-4" />
              Set Alert
            </Button>
            <Button>
              <TrendingDown className="mr-2 h-4 w-4" />
              Price History
            </Button>
          </div>
        </div>

        <div className="h-[300px] mt-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="amazon" stroke="var(--chart-1)" name="Amazon" />
              <Line type="monotone" dataKey="flipkart" stroke="var(--chart-2)" name="Flipkart" />
              <Line type="monotone" dataKey="official" stroke="var(--chart-3)" name="Official Store" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {[
            { store: "Amazon", price: "₹76,999", delivery: "Free, 2 days" },
            { store: "Flipkart", price: "₹77,999", delivery: "Free, 3 days" },
            { store: "Apple Store", price: "₹82,999", delivery: "Free, 1 day" },
          ].map((deal) => (
            <Card key={deal.store} className="p-4">
              <h3 className="font-semibold">{deal.store}</h3>
              <p className="text-xl font-bold my-2">{deal.price}</p>
              <p className="text-sm text-muted-foreground">{deal.delivery}</p>
              <Button className="w-full mt-2">View Deal</Button>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}