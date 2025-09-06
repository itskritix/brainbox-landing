"use client"

import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted/60", className)}
      {...props}
    />
  )
}

function SkeletonCard() {
  return (
    <div className="border-2 border-border/40 rounded-lg bg-gradient-to-br from-background to-muted/20 p-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    </div>
  )
}

function SkeletonStat() {
  return (
    <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 border border-border/40">
      <Skeleton className="w-2 h-2 rounded-full" />
      <Skeleton className="w-4 h-4" />
      <Skeleton className="h-4 w-16" />
    </div>
  )
}

export { Skeleton, SkeletonCard, SkeletonStat }