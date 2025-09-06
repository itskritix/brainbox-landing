import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Shield,
  Database,
  Zap,
  Users,
  Lock,
  Code,
  Download,
  Star,
  GitFork,
  Brain,
  Palette,
  Puzzle,
  Rocket,
  FolderOpen,
  Building,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ExpandableFeature } from "@/components/ui/expandable-feature"
import { InteractiveFeatures } from "@/components/ui/interactive-features"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/BrainBox.png" 
              alt="BrainBox Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8"
            />
            <span className="font-bold text-xl">BrainBox</span>
            <Badge variant="secondary" className="ml-2 hidden sm:inline-flex">
              Open Source
            </Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#privacy" className="text-sm font-medium hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
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
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/5 rotate-12"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-32 bg-primary/20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                <Code className="w-3 h-3 mr-1" />
                AI-Powered
              </Badge>
              <Badge
                variant="outline"
                className="bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
              >
                <Database className="w-3 h-3 mr-1" />
                Local-First
              </Badge>
              <Badge
                variant="outline"
                className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
              >
                <Shield className="w-3 h-3 mr-1" />
                Open Source
              </Badge>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
              Your Data, Your Rules.
              <span className="text-primary block">Complete Control.</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              The open-source workspace that combines Notion + Slack with privacy-first design. 
              Real-time collaboration, rich documents, and customizable databases—all local-first and self-hosted.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="https://brainbox.3pe1x.xyz/">
                <Button size="lg" className="text-lg px-8">
                  Start Instantly
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="https://github.com/itskritix/brainbox">
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Start Self-Hosting
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* GitHub Stats */}
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 border border-border/40">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <Star className="w-4 h-4 text-yellow-600" />
                <span className="font-medium">
                  <AnimatedCounter end={1} suffix=" stars" />
                </span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 border border-border/40">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <Users className="w-4 h-4 text-blue-600" />
                <span className="font-medium">
                  <AnimatedCounter end={0} suffix=" forks" />
                </span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2 border border-border/40">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <GitFork className="w-4 h-4 text-purple-600" />
                <span className="font-medium">
                  Forked from Colanode
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Geometric Grid Background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="border border-primary/10"></div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <InteractiveFeatures />
          
          {/* Additional Features Grid */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Complete Feature Set</h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Beyond the core features, BrainBox includes everything you need for complete team collaboration.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ExpandableFeature
                icon={<Shield className="w-6 h-6" />}
                title="Privacy by Design"
                description="End-to-end encryption, zero tracking, and complete data ownership."
                details={[
                  "AES-256 encryption for data at rest and in transit",
                  "Zero-knowledge architecture",
                  "No telemetry or behavior tracking",
                  "GDPR and SOC2 compliant deployment",
                  "Self-hosted data control",
                  "Regular security audits"
                ]}
              />

              <ExpandableFeature
                icon={<FolderOpen className="w-6 h-6" />}
                title="File Management"
                description="Secure S3-compatible file storage with advanced permissions."
                details={[
                  "S3-compatible storage backends",
                  "Advanced file permissions",
                  "File versioning and backups",
                  "Drag-and-drop uploads",
                  "Document preview generation",
                  "Bulk operations support"
                ]}
              />

              <ExpandableFeature
                icon={<Building className="w-6 h-6" />}
                title="Team Workspaces"
                description="Multi-tenant workspaces with role-based access control."
                details={[
                  "Multi-tenant architecture",
                  "Role-based access control",
                  "Team and project organization",
                  "Workspace customization",
                  "Cross-workspace collaboration",
                  "Activity feeds and notifications"
                ]}
              />

              <ExpandableFeature
                icon={<Code className="w-6 h-6" />}
                title="Developer Ready"
                description="Open source with modern architecture and comprehensive APIs."
                details={[
                  "Apache 2.0 license",
                  "TypeScript throughout",
                  "Modern React + Fastify stack",
                  "Docker/Kubernetes ready",
                  "Comprehensive API docs",
                  "Active contribution community"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What's Coming Next</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exciting AI-powered features in development to make BrainBox your ultimate learning companion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20 relative">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-700 border-yellow-500/30">
                  Coming Soon
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Brain className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">AI Learning Assistant</h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  Your personal AI that helps you learn faster, understand complex topics, and connect knowledge across your documents.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20 relative">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-700 border-yellow-500/30">
                  Coming Soon
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Palette className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Custom Themes</h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  Personalize your workspace with custom themes, colors, and layouts that match your style and workflow.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 bg-gradient-to-br from-background to-muted/20 relative">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-700 border-yellow-500/30">
                  Coming Soon
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Puzzle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Tool Integrations</h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  Free integrations with Slack, Gmail, and other essential tools to streamline your workflow.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-muted/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Built by <Link href="https://x.com/itskritix" className="text-primary hover:underline">@kritix</Link></h3>
              <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                Solo developer passionate about minimal design and making the best software free. 
                Part of the <span className="text-primary font-medium">3pe1x</span> mission to make learning, developing, and documenting better for everyone.
              </p>
              
              <div className="bg-background/50 rounded-xl p-4 mb-6 border border-border/40">
                <p className="text-sm text-muted-foreground">
                  🙏 <strong>Special thanks to the Colanode team</strong> for creating the amazing foundation that made BrainBox possible. 
                  This project builds upon their excellent work and takes it in new directions with AI-powered features and enhanced collaboration.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  BrainBox is a fork of Colanode, improved with additional features, AI integration, and a focus on learning workflows.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2 bg-background/50 rounded-lg p-3">
                  <Code className="w-4 h-4 text-primary" />
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center justify-center gap-2 bg-background/50 rounded-lg p-3">
                  <Rocket className="w-4 h-4 text-primary" />
                  <span>React + Fastify</span>
                </div>
                <div className="flex items-center justify-center gap-2 bg-background/50 rounded-lg p-3">
                  <Database className="w-4 h-4 text-primary" />
                  <span>PostgreSQL</span>
                </div>
                <div className="flex items-center justify-center gap-2 bg-background/50 rounded-lg p-3">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>Local-First</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border/40">
                <p className="text-xs text-muted-foreground italic">
                  "Making learning, developing, and documenting experiences better — one commit at a time."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Your Second Brain, Your Rules</h2>
              <p className="text-xl text-muted-foreground">
                Unlike cloud platforms that monetize your knowledge, BrainBox keeps your second brain truly private and under your control.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lock className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Self-Hosted</h3>
                      <p className="text-muted-foreground text-sm">
                        Deploy on your own servers or cloud infrastructure
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">End-to-End Encryption</h3>
                      <p className="text-muted-foreground text-sm">All data encrypted in transit and at rest</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Open Source</h3>
                      <p className="text-muted-foreground text-sm">Transparent code you can audit and modify</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Perfect for Everyone</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2"><Code className="w-4 h-4" /> Developers</h4>
                    <p className="text-muted-foreground text-xs">Code docs, project notes, API references</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2"><Users className="w-4 h-4" /> Teams</h4>
                    <p className="text-muted-foreground text-xs">Collaborative wikis, shared knowledge</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2"><Brain className="w-4 h-4" /> Students</h4>
                    <p className="text-muted-foreground text-xs">Study notes, research, assignments</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2"><Building className="w-4 h-4" /> Enterprises</h4>
                    <p className="text-muted-foreground text-xs">Secure documentation, compliance</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border/40">
                  <h4 className="font-medium mb-3">Why BrainBox vs Notion?</h4>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      AI-powered learning assistant (coming soon)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Local-first, works offline
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Free forever, no user limits
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Your data never leaves your servers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Section */}
      <section id="deployment" className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 border-2 border-primary/10 rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/5 rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Deploy Anywhere, Own Everything</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Free beta now available. Self-host with Docker/Kubernetes for complete control over your data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Try Free Beta</h3>
                  <p className="text-sm text-muted-foreground">Experience BrainBox instantly</p>
                </div>
                <ul className="space-y-3 text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <Zap className="w-3 h-3 text-blue-500" />
                    Hosted at brainbox.3pe1x.xyz
                  </li>
                  <li className="flex items-center gap-2">
                    <Rocket className="w-3 h-3 text-blue-500" />
                    No setup required
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-3 h-3 text-blue-500" />
                    Full feature access
                  </li>
                  <li className="flex items-center gap-2">
                    <Palette className="w-3 h-3 text-blue-500" />
                    Perfect for testing and demos
                  </li>
                </ul>
                <Link href="https://brainbox.3pe1x.xyz/" className="block">
                  <Button className="w-full">
                    Try Free Beta
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 border-primary/40">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Self-Host</h3>
                  <p className="text-sm text-muted-foreground">Complete control & privacy</p>
                </div>
                <ul className="space-y-3 text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <Database className="w-3 h-3 text-green-500" />
                    Docker & Kubernetes ready
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="w-3 h-3 text-green-500" />
                    PostgreSQL + Redis + S3
                  </li>
                  <li className="flex items-center gap-2">
                    <FolderOpen className="w-3 h-3 text-green-500" />
                    Apache 2.0 license
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-3 h-3 text-green-500" />
                    Unlimited users forever
                  </li>
                </ul>
                <Link href="https://github.com/itskritix/brainbox" className="block">
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 w-4 h-4" />
                    Self-Host Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-muted/50 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold mb-4">System Requirements</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-medium mb-2 text-primary">Database</h4>
                  <p className="text-muted-foreground">PostgreSQL 14+ with pgvector extension</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-primary">Cache & Queue</h4>
                  <p className="text-muted-foreground">Redis 6+ for sessions and real-time features</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-primary">File Storage</h4>
                  <p className="text-muted-foreground">S3-compatible storage (AWS S3, MinIO, etc.)</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border/40">
                <p className="text-xs text-muted-foreground">
                  💡 <strong>Professional plans coming soon</strong> with managed hosting, priority support, and advanced enterprise features
                </p>
              </div>
            </div>
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Build Your Second Brain?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join developers, teams, and students building better workflows with privacy-first collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://github.com/itskritix/brainbox">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Download className="mr-2 w-5 h-5" />
                Self-Host Now
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <Link href="#features" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
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
