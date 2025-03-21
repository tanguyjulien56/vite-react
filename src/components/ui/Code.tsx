import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export default function Code({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono border border-accent px-1 py-0 mx-1 rounded-sm hover:bg-accent/50 transition-colors",
        className
      )}
      {...props}
    />
  );
}
