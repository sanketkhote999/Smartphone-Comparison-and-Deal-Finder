"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ComparisonTable } from "./comparison-table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Specs {
  ram: string;
  storage: string;
  processor: string;
  camera: string;
  display: string;
  battery: string;
  os: string;
}

interface Product {
  name: string;
  specs: Specs;
}

const compareProducts: Product[] = [
  {
    name: "Samsung S24 Ultra",
    specs: {
      ram: "12GB LPDDR5X",
      storage: "512GB UFS 4.0",
      processor: "Snapdragon 8 Gen 3",
      camera: "200MP Main + 12MP Ultra + 50MP Telephoto",
      display: "6.8-inch Dynamic AMOLED 2X",
      battery: "5000 mAh",
      os: "Android 14",
    },
  },
  {
    name: "Google Pixel 8 Pro",
    specs: {
      ram: "12GB LPDDR5",
      storage: "256GB UFS 3.1",
      processor: "Google Tensor G3",
      camera: "50MP Main + 48MP Ultra + 48MP Telephoto",
      display: "6.7-inch LTPO OLED",
      battery: "5050 mAh",
      os: "Android 14",
    },
  },
];

export function CompareDialog({ currentProduct }: { currentProduct: Product }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Compare Smartphones</DialogTitle>
          <DialogDescription>
            Compare specifications with other smartphones
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <Select onValueChange={(value) => {
            const product = compareProducts.find(p => p.name === value);
            if (product) setSelectedProduct(product);
          }}>
            <SelectTrigger>
              <SelectValue placeholder="Select a phone to compare" />
            </SelectTrigger>
            <SelectContent>
              {compareProducts.map((product) => (
                <SelectItem key={product.name} value={product.name}>
                  {product.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedProduct && (
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-4">{currentProduct.name}</h3>
              <ComparisonTable specs={currentProduct.specs} />
            </div>
            <div>
              <h3 className="font-semibold mb-4">{selectedProduct.name}</h3>
              <ComparisonTable specs={selectedProduct.specs} />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}