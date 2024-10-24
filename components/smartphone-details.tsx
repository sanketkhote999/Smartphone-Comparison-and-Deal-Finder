"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ComparisonTable } from "./comparison-table";
import { PriceHistoryDialog } from "./price-history";
import { PriceAlertDialog } from "./price-alert-dialog";
import { ShareDialog } from "./share-dialog";
import { CompareDialog } from "./compare-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Star, Share2, Plus } from "lucide-react";

const specs = {
  ram: "8GB LPDDR5",
  storage: "256GB NVMe",
  processor: "A17 Pro",
  camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
  display: "6.1-inch Super Retina XDR OLED",
  battery: "3274 mAh",
  os: "iOS 17",
};

export function SmartphoneDetails() {
  const [rating] = useState(4.5);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1695048133142-1a20484d2569"
              alt="iPhone 15 Pro"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold">iPhone 15 Pro</h1>
                <div className="flex items-center mt-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2">{rating}/5</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <ShareDialog productName="iPhone 15 Pro" />
                <CompareDialog currentProduct={{
                  name: "iPhone 15 Pro",
                  specs
                }} />
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">₹76,999</p>
                  <p className="text-sm text-muted-foreground">Lowest price across stores</p>
                </div>
                <div className="space-x-2">
                  <PriceAlertDialog productName="iPhone 15 Pro" currentPrice={76999} />
                  <PriceHistoryDialog productName="iPhone 15 Pro" basePrice={76999} />
                </div>
              </div>
            </div>

            <Tabs defaultValue="specs" className="mt-6">
              <TabsList>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="deals">Best Deals</TabsTrigger>
              </TabsList>
              <TabsContent value="specs">
                <ComparisonTable specs={specs} />
              </TabsContent>
              <TabsContent value="deals">
                <div className="space-y-4">
                  {[
                    { store: "Amazon", price: "₹76,999", delivery: "Free, 2 days" },
                    { store: "Flipkart", price: "₹77,999", delivery: "Free, 3 days" },
                    { store: "Apple Store", price: "₹82,999", delivery: "Free, 1 day" },
                  ].map((deal) => (
                    <Card key={deal.store} className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">{deal.store}</h3>
                          <p className="text-sm text-muted-foreground">{deal.delivery}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold">{deal.price}</p>
                          <Button size="sm" className="mt-2">View Deal</Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </Card>
    </div>
  );
}