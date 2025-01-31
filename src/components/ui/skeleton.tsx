import React from "react";
import { cn } from "@/lib/utils"; // Ensure this utility exists or replace it with className merging logic

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("animate-pulse bg-gray-300 rounded-md", className)} {...props} />;
}
