"use client";

import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function ShareDialog({ productName }: { productName: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share {productName}</DialogTitle>
          <DialogDescription>
            Share this deal with your friends and family
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Input
            readOnly
            value={window.location.href}
          />
          <Button onClick={() => navigator.clipboard.writeText(window.location.href)}>
            Copy
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}