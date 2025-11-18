"use client";

import { cn } from "@/lib/utils";
import { Toaster } from "./ui/toaster";
import BackTopButton from "./BackTopButton";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className={cn("min-h-screen bg-background relative", className)}>
      {children}

      <Toaster />
      <BackTopButton />
    </div>
  );
}
