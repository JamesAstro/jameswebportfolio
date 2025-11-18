import { cn } from "@/lib/utils";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={cn(" max-w-[1370px] w-full mx-auto relative", className)}>
      {children}
    </div>
  );
};
