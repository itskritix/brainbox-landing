import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Circle,
  Clock,
  Star,
  Heart,
  Users,
  BarChart3,
  Calendar,
  Eye,
  Share2,
  Lock,
  Palette,
  Brush,
  Database,
  Settings,
  Zap,
  Sparkles,
  Map,
  Target,
  Rocket,
  Download,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ExpandableFeature } from "@/components/ui/expandable-feature"

const phases = [
  {
    id: 1,
    title: "Personalization & Quick Access",
    status: "in-progress",
    timeline: "Current Focus",
    description: "Make BrainBox truly yours with personalized spaces and quick access to your most important content.",
    features: [
      {
        icon: <Heart className="w-6 h-6" />,
        title: "Favorite Documents/Pages",
        description: "Create a dedicated 'Favorites' space pinned at the top (above Home).",
        details: [
          "One-click favorite/unfavorite for any document or page",
          "Dedicated Favorites section pinned above Home",
          "Smart sorting by last accessed and manual reordering",
          "Quick access shortcuts with keyboard navigation",
          "Visual indicators for favorited items across the app",
          "Bulk favorite operations for efficient organization"
        ]
      },
      {
        icon: <Settings className="w-6 h-6" />,
        title: "Sortable Spaces",
        description: "Allow users to reorder spaces manually for better organization.",
        details: [
          "Drag-and-drop reordering of spaces in the sidebar",
          "Custom space grouping and nested organization",
          "Quick space switching with keyboard shortcuts",
          "Space templates for consistent workspace setup",
          "Recent spaces tracking and quick access",
          "Workspace layouts saved per user preference"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Views & Layouts",
    status: "planned",
    timeline: "Next",
    description: "Powerful new ways to visualize and interact with your data and content.",
    features: [
      {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Gantt View for Databases",
        description: "Provide Gantt view as an alternative layout (alongside table, kanban, etc.).",
        details: [
          "Interactive timeline visualization for project management",
          "Drag-and-drop task scheduling and dependencies",
          "Critical path analysis and milestone tracking",
          "Resource allocation and workload visualization",
          "Export to popular project management formats",
          "Real-time collaboration on project timelines",
          "Custom date ranges and zoom levels"
        ]
      },
      {
        icon: <Eye className="w-6 h-6" />,
        title: "Full Width Page Option",
        description: "Add a simple toggle to display pages in full-width layout.",
        details: [
          "One-click toggle for full-width page viewing",
          "Optimized typography for wide-screen reading",
          "Preserved sidebar access with hover or pin options",
          "Per-page layout preference memory",
          "Distraction-free reading mode",
          "Responsive design for all screen sizes"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Sharing & Collaboration",
    status: "planned",
    timeline: "Later",
    description: "Break down silos with powerful sharing and enterprise-grade collaboration features.",
    features: [
      {
        icon: <Share2 className="w-6 h-6" />,
        title: "Public Page Sharing",
        description: "Share a page via public link without requiring an account.",
        details: [
          "Generate secure, time-limited public links",
          "Granular permission controls (view, comment, edit)",
          "Password protection for sensitive content",
          "Custom branding for shared pages",
          "Analytics for shared content engagement",
          "Embed options for external websites",
          "Automatic link expiration and management"
        ]
      },
      {
        icon: <Lock className="w-6 h-6" />,
        title: "Single Sign-On (SSO)",
        description: "Integrate SSO for enterprise and team users.",
        details: [
          "SAML 2.0 and OpenID Connect support",
          "Popular providers: Google, Microsoft, Okta, Auth0",
          "Just-in-time user provisioning",
          "Role mapping from identity provider",
          "Multi-tenant SSO configuration",
          "Audit logs for compliance requirements",
          "Fallback authentication options"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Customization",
    status: "planned",
    timeline: "Future",
    description: "Make BrainBox truly yours with deep customization options and theming capabilities.",
    features: [
      {
        icon: <Palette className="w-6 h-6" />,
        title: "Custom Themes",
        description: "Allow users to customize fonts, text styles, and colors.",
        details: [
          "Built-in light and dark themes with variants",
          "Custom color palette creation and sharing",
          "Typography controls: font family, size, line height",
          "Advanced theme editor with live preview",
          "Community theme marketplace",
          "Import/export theme configurations",
          "Per-space theme customization options"
        ]
      },
      {
        icon: <Brush className="w-6 h-6" />,
        title: "Advanced Styling",
        description: "Basic themes (light/dark) plus advanced theme overrides.",
        details: [
          "CSS custom properties for deep customization",
          "Component-level styling overrides",
          "Responsive design controls",
          "Animation and transition preferences",
          "Accessibility-focused theme options",
          "High contrast and reduced motion modes",
          "Theme inheritance and cascading rules"
        ]
      }
    ]
  }
]

const futureIdeas = [
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Calendar View",
    description: "Timeline-based visualization for time-sensitive data"
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Gallery View",
    description: "Visual grid layout perfect for media-rich databases"
  },
  {
    icon: <Map className="w-5 h-5" />,
    title: "Timeline View",
    description: "Chronological data representation with event mapping"
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Enhanced Permissions",
    description: "Granular sharing options and advanced access controls"
  },
  {
    icon: <Brush className="w-5 h-5" />,
    title: "Custom CSS",
    description: "Power user customization with full CSS override support"
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Advanced Automation",
    description: "Workflow automation and intelligent content suggestions"
  }
]

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header - Reused from home page */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/BrainBox.png" 
                alt="BrainBox Logo" 
                width={32} 
                height={32} 
                className="w-8 h-8"
              />
              <span className="font-bold text-xl">BrainBox</span>
            </Link>
            <Badge variant="secondary" className="ml-2 hidden sm:inline-flex">
              Open Source
            </Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/#privacy" className="text-sm font-medium hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/roadmap" className="text-sm font-medium text-primary">
              Roadmap
            </Link>
            <Link href="https://github.com/itskritix/brainbox" className="text-sm font-medium hover:text-primary transition-colors">
              Docs
            </Link>
            <Link
              href="https://github.com/itskritix/brainbox"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://x.com/3pe1x"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Twitter
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="https://brainbox.3pe1x.xyz/">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Enhanced Geometric Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-primary/10 rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-32 h-2 bg-primary/10"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-40 bg-primary/20"></div>
          
          {/* Roadmap-themed geometric elements */}
          <div className="absolute top-32 left-1/2 w-16 h-16 border-2 border-primary/10 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute bottom-32 right-1/4 w-20 h-20 bg-gradient-to-br from-primary/5 to-primary/10 rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                <Map className="w-3 h-3 mr-1" />
                Product Roadmap
              </Badge>
              <Badge variant="outline" className="bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20">
                <Target className="w-3 h-3 mr-1" />
                2025 Vision
              </Badge>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
              Building the Future of
              <span className="text-primary block">Collaborative Workspaces</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Our roadmap outlines the exciting journey ahead. From personalized experiences to advanced customization,
              discover what's coming to make BrainBox your ultimate productivity companion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="https://brainbox.3pe1x.xyz/">
                <Button size="lg" className="text-lg px-8">
                  Try Current Version
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="https://github.com/itskritix/brainbox">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Star className="mr-2 w-5 h-5" />
                  Follow Progress
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 border border-border/40">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <Rocket className="w-4 h-4 text-blue-600" />
                <span className="font-medium">4 Major Phases</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 border border-border/40">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="font-medium">10+ Features</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 border border-border/40">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="font-medium">Community Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Geometric Grid Background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="grid grid-cols-8 gap-8 h-full">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="border border-primary/5"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Development Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A clear path forward with quarterly releases bringing powerful new capabilities to BrainBox.
            </p>
          </div>

          {/* Timeline Visualization */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/10"></div>

              {/* Phase Cards */}
              <div className="space-y-12">
                {phases.map((phase, index) => (
                  <div key={phase.id} className="relative flex items-start gap-8">
                    {/* Timeline Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full border-4 border-background flex items-center justify-center ${
                        phase.status === 'in-progress' ? 'bg-primary' : 
                        phase.status === 'completed' ? 'bg-green-500' : 'bg-muted'
                      }`}>
                        {phase.status === 'completed' ? (
                          <CheckCircle className="w-6 h-6 text-white" />
                        ) : phase.status === 'in-progress' ? (
                          <Clock className="w-6 h-6 text-primary-foreground animate-pulse" />
                        ) : (
                          <Circle className="w-6 h-6 text-muted-foreground" />
                        )}
                      </div>
                      <div className="absolute -top-2 -right-2">
                        <Badge variant="secondary" className="text-xs font-mono">
                          {phase.timeline}
                        </Badge>
                      </div>
                    </div>

                    {/* Phase Content */}
                    <Card className="flex-1 group border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <Badge variant="outline">
                                Phase {phase.id}
                              </Badge>
                              <Badge variant={phase.status === 'in-progress' ? 'default' : 'secondary'}>
                                {phase.status === 'in-progress' ? 'In Progress' : 
                                 phase.status === 'completed' ? 'Completed' : 'Planned'}
                              </Badge>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {phase.title}
                            </h3>
                            <p className="text-muted-foreground mb-6">{phase.description}</p>
                          </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                          {phase.features.map((feature, featureIndex) => (
                            <ExpandableFeature
                              key={featureIndex}
                              icon={feature.icon}
                              title={feature.title}
                              description={feature.description}
                              details={feature.details}
                              className="h-full"
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Ideas */}
      <section className="py-20 relative overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 border border-primary/10 rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-2 bg-primary/5 rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Future Exploration</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ideas we're exploring for the future. These features will be developed based on community feedback and demand.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {futureIdeas.map((idea, index) => (
                <Card key={index} className="group border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {idea.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {idea.title}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      {idea.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Help Shape the Roadmap</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  BrainBox is community-driven. Your feedback, feature requests, and contributions directly influence our development priorities.
                  Join our community and help build the future of collaborative workspaces.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="https://github.com/itskritix/brainbox/discussions">
                    <Button size="lg" className="text-lg px-8">
                      <Users className="mr-2 w-5 h-5" />
                      Join Discussions
                    </Button>
                  </Link>
                  <Link href="https://github.com/itskritix/brainbox/issues">
                    <Button variant="outline" size="lg" className="text-lg px-8">
                      <Target className="mr-2 w-5 h-5" />
                      Request Features
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Geometric Accent Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 border border-primary-foreground/20 rotate-45"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-primary-foreground/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-2 bg-primary-foreground/10"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Build the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start using BrainBox today and be part of our journey to create the ultimate collaborative workspace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://brainbox.3pe1x.xyz/">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Rocket className="mr-2 w-5 h-5" />
                Try BrainBox Now
              </Button>
            </Link>
            <Link href="https://github.com/itskritix/brainbox">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Download className="mr-2 w-5 h-5" />
                Self-Host Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Reused from home page */}
      <footer className="py-12 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image 
                  src="/BrainBox.png" 
                  alt="BrainBox Logo" 
                  width={24} 
                  height={24} 
                  className="w-6 h-6"
                />
                <span className="font-bold">BrainBox</span>
              </div>
              <p className="text-sm text-muted-foreground">Open-source collaboration platform by <Link href="https://x.com/itskritix" className="hover:text-foreground transition-colors">kritix</Link> / 3pe1x</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/#features" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="hover:text-foreground transition-colors text-primary">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#docs" className="hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    About 3pe1x
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/itskritix/brainbox" className="hover:text-foreground transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 kritix / 3pe1x. Open source under Apache 2.0 license.</p>
            <p className="mt-2 text-xs">
              Built upon the excellent foundation of <span className="text-foreground font-medium">Colanode</span>. 
              Thanks to their amazing team for the inspiration and solid architecture.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}