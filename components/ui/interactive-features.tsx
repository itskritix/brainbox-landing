"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  MessageSquare,
  FileText,
  Database,
  Zap,
  Code,
  Users,
  Clock,
  Shield,
  Blocks,
  Search,
  Globe,
  BarChart3,
  Filter,
  Wifi,
  HardDrive,
  RefreshCw
} from "lucide-react"

const features = [
  {
    id: "chat",
    icon: MessageSquare,
    title: "Real-Time Chat",
    subtitle: "Slack-like messaging",
    description: "WebSocket-powered instant messaging with CRDTs for seamless concurrent editing and offline-first architecture.",
    keyBenefits: [
      { icon: Users, title: "Team Communication", description: "Replace Slack with privacy-focused messaging" },
      { icon: Wifi, title: "Real-Time Sync", description: "WebSocket-powered instant updates" },
      { icon: Search, title: "Global Search", description: "Find any message across all channels" }
    ],
    details: [
      "WebSocket-powered real-time messaging",
      "Threaded conversations with advanced organization", 
      "File sharing with S3-compatible storage",
      "Message search with full-text indexing",
      "Markdown support and code syntax highlighting",
      "Offline-first with automatic sync when online",
      "CRDT conflict resolution for concurrent edits"
    ]
  },
  {
    id: "documents",
    icon: FileText,
    title: "Rich Text Pages",
    subtitle: "Notion-like editor",
    description: "Block-based editor with real-time collaboration. Create wikis, documentation, and knowledge bases with advanced formatting.",
    keyBenefits: [
      { icon: Blocks, title: "Block Editor", description: "Drag-and-drop content blocks like Notion" },
      { icon: Users, title: "Live Collaboration", description: "Real-time editing with team members" },
      { icon: Clock, title: "Version History", description: "Track changes and restore previous versions" }
    ],
    details: [
      "Block-based editor with drag-and-drop functionality",
      "Real-time collaborative editing via CRDTs",
      "Rich media: images, videos, embeds, code blocks",
      "Database integration within documents",
      "Template system for consistent documentation",
      "Version history and change tracking",
      "Export to multiple formats (PDF, Markdown, HTML)"
    ]
  },
  {
    id: "database",
    icon: Database,
    title: "Customizable Databases",
    subtitle: "PostgreSQL powered",
    description: "Powerful databases with multiple views and PostgreSQL backend with pgvector for AI embeddings.",
    keyBenefits: [
      { icon: BarChart3, title: "Multiple Views", description: "Table, kanban, calendar, gallery views" },
      { icon: Filter, title: "Advanced Filtering", description: "Sort, filter, and group data easily" },
      { icon: Globe, title: "API Access", description: "Full REST API for integrations" }
    ],
    details: [
      "Multiple field types: text, number, date, file, relation",
      "Dynamic views: table, kanban, calendar, gallery",
      "Advanced filtering, sorting, and grouping",
      "Cross-database relations and computed fields",
      "PostgreSQL with pgvector for AI-powered search",
      "Real-time collaboration on database records",
      "API endpoints for external integrations"
    ]
  },
  {
    id: "local",
    icon: Zap,
    title: "Local-First Architecture", 
    subtitle: "SQLite + sync",
    description: "Work offline seamlessly with SQLite local storage and automatic server synchronization using CRDTs.",
    keyBenefits: [
      { icon: HardDrive, title: "Local Storage", description: "SQLite database runs on your device" },
      { icon: RefreshCw, title: "Auto Sync", description: "Seamless sync when back online" },
      { icon: Shield, title: "Conflict Resolution", description: "CRDT-based automatic conflict handling" }
    ],
    details: [
      "SQLite for local data storage and performance",
      "Automatic sync with PostgreSQL server",
      "CRDT-based conflict resolution (Yjs)",
      "Works completely offline with full functionality",
      "Intelligent sync strategies and batching",
      "Real-time sync status and connection indicators",
      "Progressive Web App for mobile offline access"
    ]
  }
]

export function InteractiveFeatures() {
  const [activeFeature, setActiveFeature] = useState(features[0])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('interactive-features')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])


  return (
    <div id="interactive-features" className="relative">
      {/* Enhanced Geometric Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/10 rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-primary/5 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-2 bg-primary/10 animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-2 h-40 bg-primary/5"></div>
        
        {/* Flowing geometric grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 gap-8 h-full transform rotate-12">
            {Array.from({ length: 32 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-primary/5"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animation: 'pulse 4s infinite'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Everything You Need to Learn & Collaborate
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for developers, teams, students, and enterprises who want to learn faster and collaborate smarter.
          </p>
        </div>

        {/* Clean Feature Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const isActive = activeFeature.id === feature.id
              
              return (
                <Card
                  key={feature.id}
                  className={cn(
                    "cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group",
                    isActive ? "border-primary/50 shadow-lg shadow-primary/5" : "hover:border-primary/30",
                    isVisible && "animate-in slide-in-from-bottom",
                  )}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                  onClick={() => setActiveFeature(feature)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300",
                      isActive ? "bg-primary/20 scale-110" : "bg-muted/30 group-hover:bg-primary/10"
                    )}>
                      <Icon className={cn("w-6 h-6 transition-colors duration-300", 
                        isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                      )} />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.subtitle}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Feature Details */}
          <Card className="border-2 border-border/40">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  {React.createElement(activeFeature.icon, { className: "w-8 h-8 text-primary" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{activeFeature.title}</h3>
                  <p className="text-muted-foreground">{activeFeature.description}</p>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {activeFeature.keyBenefits?.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {React.createElement(benefit.icon, { className: "w-4 h-4 text-primary" })}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">{benefit.title}</h4>
                      <p className="text-xs text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Details */}
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Technical Features
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {activeFeature.details.map((detail, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}