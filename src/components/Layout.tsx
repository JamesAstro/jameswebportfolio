"use client";

import { cn } from "@/lib/utils";
import { Toaster } from "./ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div
      className={cn("min-h-screen bg-gray-900 text-white relative", className)}
    >
      {children}

      <Toaster />
    </div>
  );
}
