import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Shield,
  Database,
  MessageSquare,
  FileText,
  Zap,
  Users,
  Lock,
  Code,
  Download,
  Star,
  GitFork,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ExpandableFeature } from "@/components/ui/expandable-feature"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/BrainboxLogo.png" 
              alt="BrainBox Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8"
            />
            <span className="font-bold text-xl">BrainBox</span>
            <Badge variant="secondary" className="ml-2">
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
            <Link href="#docs" className="text-sm font-medium hover:text-primary transition-colors">
              Docs
            </Link>
            <Link
              href="https://github.com/itskritix/brainbox"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              GitHub
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
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
                Developer-First
              </Badge>
              <Badge
                variant="outline"
                className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
              >
                <Shield className="w-3 h-3 mr-1" />
                Privacy-Focused
              </Badge>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
              Your Data, Your Rules.
              <span className="text-primary block">Complete Control.</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              BrainBox is an open-source collaboration platform that puts you in control. Real-time chat, rich
              documents, and custom databases—all running on your infrastructure.
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
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <GitFork className="w-4 h-4 text-green-600" />
                <span className="font-medium">
                  <AnimatedCounter end={1} suffix=" deployments" />
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
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Everything You Need to Collaborate</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for teams who value privacy, control, and seamless collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ExpandableFeature
              icon={<MessageSquare className="w-6 h-6" />}
              title="Real-Time Chat"
              description="Instant messaging with threads, reactions, and file sharing. All conversations stay on your servers."
              details={[
                "Threaded conversations for organized discussions",
                "Rich emoji reactions and custom reactions",
                "Drag-and-drop file sharing with preview",
                "Message search across all channels",
                "Markdown support for formatted messages",
                "Voice and video call integration"
              ]}
            />

            <ExpandableFeature
              icon={<FileText className="w-6 h-6" />}
              title="Rich Documents"
              description="Collaborative editing with blocks, tables, and media. Create wikis, notes, and documentation."
              details={[
                "Real-time collaborative editing with conflict resolution",
                "Rich text blocks: headings, lists, quotes, code blocks",
                "Embed images, videos, and interactive media",
                "Table creation with sorting and filtering",
                "Document templates for consistent formatting",
                "Export to PDF, Markdown, and HTML formats"
              ]}
            />

            <ExpandableFeature
              icon={<Database className="w-6 h-6" />}
              title="Custom Databases"
              description="Build structured data with custom fields, views, and relationships. Perfect for project management."
              details={[
                "Custom field types: text, numbers, dates, files, relations",
                "Multiple views: table, kanban, calendar, gallery",
                "Advanced filtering and sorting options",
                "Cross-database relationships and lookups",
                "Automated workflows and triggers",
                "API access for external integrations"
              ]}
            />

            <ExpandableFeature
              icon={<Zap className="w-6 h-6" />}
              title="Offline-First"
              description="Work seamlessly offline. Changes sync automatically when you're back online."
              details={[
                "Local-first architecture with automatic sync",
                "Conflict resolution for simultaneous edits",
                "Progressive web app for mobile offline access",
                "Smart caching of frequently accessed content",
                "Background sync with connection recovery",
                "Offline indicators and sync status updates"
              ]}
            />

            <ExpandableFeature
              icon={<Shield className="w-6 h-6" />}
              title="Privacy by Design"
              description="End-to-end encryption, zero tracking, and complete data ownership. Your privacy is guaranteed."
              details={[
                "AES-256 encryption for data at rest and in transit",
                "Zero-knowledge architecture - we can't read your data",
                "No telemetry, analytics, or user behavior tracking",
                "GDPR and SOC2 compliant deployment options",
                "Self-hosted means your data never leaves your servers",
                "Regular security audits and vulnerability assessments"
              ]}
            />

            <ExpandableFeature
              icon={<Code className="w-6 h-6" />}
              title="Open Source"
              description="Fully transparent, community-driven development. Contribute, customize, and extend as needed."
              details={[
                "Apache 2.0 license for maximum flexibility",
                "Full source code available on GitHub",
                "Plugin architecture for custom extensions",
                "Community-driven roadmap and feature requests",
                "Docker containers for easy deployment",
                "Regular releases with community contributions"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Your Data Stays Yours</h2>
              <p className="text-xl text-muted-foreground">
                Unlike cloud platforms that monetize your data, BrainBox gives you complete control.
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
                <h3 className="text-xl font-semibold mb-4">Why Choose BrainBox?</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    No vendor lock-in or data silos
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    GDPR and SOC2 compliant by design
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    No usage limits or per-user pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Full control over updates and features
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Open source means no hidden costs. Pay only for what you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Open Source</h3>
                  <div className="text-3xl font-bold mb-1">Free</div>
                  <p className="text-sm text-muted-foreground">Forever</p>
                </div>
                <ul className="space-y-3 text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Self-hosted deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Unlimited users
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Community support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Apache 2.0 license
                  </li>
                </ul>
                <Link href="https://github.com/itskritix/brainbox" className="block">
                  <Button className="w-full bg-transparent" variant="outline">
                    <Download className="mr-2 w-4 h-4" />
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary hover:border-primary/60 transition-colors relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Professional</h3>
                  <div className="text-3xl font-bold mb-1">TBD</div>
                  <p className="text-sm text-muted-foreground">free for now</p>
                </div>
                <ul className="space-y-3 text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Everything in Open Source
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Priority support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Advanced integrations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Custom branding
                  </li>
                </ul>
                <Link href="https://brainbox.3pe1x.xyz/" className="block">
                  <Button className="w-full">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Take Control?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of teams who've chosen data sovereignty over convenience.
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
                  src="/BrainboxLogo.png" 
                  alt="BrainBox Logo" 
                  width={24} 
                  height={24} 
                  className="w-6 h-6"
                />
                <span className="font-bold">BrainBox</span>
              </div>
              <p className="text-sm text-muted-foreground">Open-source collaboration platform by 3pe1x</p>
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
            <p>&copy; 2024 3pe1x. Open source under Apache 2.0 license.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
