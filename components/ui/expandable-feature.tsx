"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ExpandableFeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  details: string[]
  className?: string
}

export function ExpandableFeature({
  icon,
  title,
  description,
  details,
  className,
}: ExpandableFeatureProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className={cn(
      "group border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20",
      className
    )}>
      <CardContent className="p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
            <div className="group-hover:scale-110 transition-transform duration-300 text-primary">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 mb-3">
            {description}
          </p>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
          >
            {isExpanded ? (
              <>
                <ChevronDown className="w-4 h-4" />
                Less details
              </>
            ) : (
              <>
                <ChevronRight className="w-4 h-4" />
                More details
              </>
            )}
          </button>
          
          <div className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isExpanded ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
          )}>
            <div className="border-t border-border/40 pt-3">
              <ul className="space-y-2">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}