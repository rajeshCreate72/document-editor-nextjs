import React from "react";
import { cn } from "@/lib/utils"; // Ensure this utility exists or replace it with className merging logic

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
    return <div className={cn("animate-pulse bg-gray-300 rounded-md", className)} {...props} />;
}
