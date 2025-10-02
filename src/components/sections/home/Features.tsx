'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Ticket,
  MessageCircle,
  BookOpen,
  Users,
  Clock,
  TrendingUp,
  Zap,
  Shield,
  Globe,
} from 'lucide-react';

export default function Features() {
  const handleStartTrial = () => {
    window.location.href = '/signup';
  };

  const handleViewDemo = () => {
    window.location.href = '/demo';
  };

  const features = [
    {
      icon: Ticket,
      title: 'Smart Ticketing System',
      description:
        'Automatically route, prioritize, and track customer issues with AI-powered ticket management that reduces resolution time by 40%.',
      badge: 'Core Feature',
      stats: '40% faster resolution',
    },
    {
      icon: MessageCircle,
      title: 'Omnichannel Live Chat',
      description:
        'Connect with customers across web, mobile, social media, and messaging apps from one unified inbox.',
      badge: 'Communication',
      stats: '8 channels supported',
    },
    {
      icon: BookOpen,
      title: 'Self-Service Knowledge Base',
      description:
        'Empower customers to find answers instantly with searchable articles, FAQs, and video tutorials that deflect 60% of tickets.',
      badge: 'Self-Service',
      stats: '60% ticket deflection',
    },
    {
      icon: Users,
      title: 'Team Collaboration Hub',
      description:
        'Enable seamless collaboration between support agents, sales, and product teams with shared context and internal notes.',
      badge: 'Collaboration',
      stats: 'Cross-team visibility',
    },
    {
      icon: Clock,
      title: '24/7 Automated Responses',
      description:
        'Never miss a customer inquiry with intelligent chatbots and automated workflows that handle routine requests instantly.',
      badge: 'Automation',
      stats: 'Round-the-clock coverage',
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description:
        'Track CSAT scores, response times, and agent productivity with comprehensive dashboards and custom reporting.',
      badge: 'Analytics',
      stats: 'Real-time insights',
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description:
        'Streamline repetitive tasks with custom triggers, macros, and SLA management that boost agent efficiency by 35%.',
      badge: 'Efficiency',
      stats: '35% productivity gain',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Protect sensitive customer data with SOC 2 compliance, end-to-end encryption, and advanced access controls.',
      badge: 'Security',
      stats: 'SOC 2 certified',
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description:
        'Support customers worldwide with multi-language capabilities, timezone management, and 99.99% uptime guarantee.',
      badge: 'Scale',
      stats: '99.99% uptime',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            Trusted by 100,000+ Support Teams
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Complete Customer Support
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Platform Built for Scale
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Everything your team needs to deliver exceptional customer experiences. From ticketing
            to live chat to knowledge management - all in one powerful platform.
          </p>

          {/* Social Proof Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>4.8/5 customer rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>50M+ tickets resolved</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>160+ countries served</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-muted/50">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 mb-2">
                    {feature.title}
                  </CardTitle>
                  <div className="text-sm font-medium text-primary/80 mb-2">{feature.stats}</div>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Customer Testimonial Integration */}
        <div className="bg-card border border-border/50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-6">
            <div className="flex justify-center items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 text-primary">
                  ★
                </div>
              ))}
            </div>
            <blockquote className="text-xl font-medium text-foreground mb-4">
              "Zendesk transformed our customer support operations. We've seen a 65% improvement in
              customer satisfaction and our team is more efficient than ever."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Sarah Chen</div>
                <div className="text-sm text-muted-foreground">
                  Head of Customer Success, TechFlow
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6 text-lg">
            Join thousands of companies already delivering exceptional customer support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartTrial}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Start Free 14-Day Trial
            </button>
            <button
              onClick={handleViewDemo}
              className="px-8 py-4 border border-border rounded-lg font-semibold hover:bg-accent transition-colors"
            >
              Watch Product Demo
            </button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • Setup in under 5 minutes • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
