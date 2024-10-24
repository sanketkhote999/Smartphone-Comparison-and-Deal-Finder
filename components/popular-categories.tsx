"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Crown, TrendingUp, Calendar } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    title: "Most Searched",
    icon: TrendingUp,
    phones: [
      {
        name: "iPhone 15 Pro",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=60",
        price: "₹134,900"
      },
      {
        name: "Samsung S24 Ultra",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&auto=format&fit=crop&q=60",
        price: "₹129,999"
      },
      {
        name: "Google Pixel 8 Pro",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=60",
        price: "₹106,999"
      }
    ]
  },
  {
    title: "King of the Year",
    icon: Crown,
    phones: [
      {
        name: "iPhone 15 Pro Max",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=60",
        price: "₹159,900"
      },
      {
        name: "Samsung S24 Ultra",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&auto=format&fit=crop&q=60",
        price: "₹129,999"
      },
      {
        name: "OnePlus 12",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=60",
        price: "₹64,999"
      }
    ]
  },
  {
    title: "Most Bought This Month",
    icon: Calendar,
    phones: [
      {
        name: "Samsung A54 5G",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&auto=format&fit=crop&q=60",
        price: "₹34,999"
      },
      {
        name: "Redmi Note 13 Pro",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=60",
        price: "₹24,999"
      },
      {
        name: "OnePlus Nord CE 3",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&auto=format&fit=crop&q=60",
        price: "₹24,999"
      }
    ]
  }
];

export function PopularCategories() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category.title} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <category.icon className="h-5 w-5" />
                <h2 className="text-xl font-semibold">{category.title}</h2>
              </div>
              <Button variant="ghost" className="text-sm">
                See More <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.phones.map((phone) => (
                <Card key={phone.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={phone.image}
                      alt={phone.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{phone.name}</h3>
                    <p className="text-sm text-muted-foreground">From {phone.price}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}