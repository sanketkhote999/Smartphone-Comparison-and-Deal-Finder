"use client";

import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SmartphoneFilter() {
  return (
    <Card className="p-6 space-y-6">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search models..." className="pl-8" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider
            defaultValue={[10000, 150000]}
            max={150000}
            min={1000}
            step={1000}
          />
          <div className="flex justify-between text-sm">
            <span>₹1,000</span>
            <span>₹150,000</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Brand</h3>
        <div className="space-y-2">
          {["Apple", "Samsung", "Google", "OnePlus", "Xiaomi"].map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox id={brand} />
              <Label htmlFor={brand}>{brand}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">RAM</h3>
        <div className="space-y-2">
          {["4GB", "6GB", "8GB", "12GB", "16GB"].map((ram) => (
            <div key={ram} className="flex items-center space-x-2">
              <Checkbox id={ram} />
              <Label htmlFor={ram}>{ram}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Storage</h3>
        <div className="space-y-2">
          {["64GB", "128GB", "256GB", "512GB", "1TB"].map((storage) => (
            <div key={storage} className="flex items-center space-x-2">
              <Checkbox id={storage} />
              <Label htmlFor={storage}>{storage}</Label>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}