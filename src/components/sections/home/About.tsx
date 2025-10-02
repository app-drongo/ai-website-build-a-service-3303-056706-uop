'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
  MessageSquare,
  Ticket,
  BookOpen,
  Shield,
  Clock,
  CheckCircle,
} from 'lucide-react';

export default function About() {
  const handleLearnMore = () => {
    console.log('Learn more about Zendesk clicked');
  };

  const handleStartTrial = () => {
    console.log('Start free trial clicked');
  };

  const handleViewTeam = () => {
    console.log('View all team members clicked');
  };

  const values = [
    {
      icon: Target,
      title: 'Customer-First Mission',
      description:
        "We're committed to transforming customer support experiences and making exceptional service accessible to businesses of all sizes.",
    },
    {
      icon: Lightbulb,
      title: 'AI-Powered Innovation',
      description:
        'We constantly push the boundaries of customer service technology, bringing intelligent automation and insights to your support team.',
    },
    {
      icon: Heart,
      title: 'Support Team Obsessed',
      description:
        "Your agents' success is our success. We build every feature with support professionals' workflows and challenges at the center.",
    },
    {
      icon: Globe,
      title: 'Global Support Impact',
      description:
        "From startups to Fortune 500 companies, we're helping 200,000+ support agents worldwide deliver exceptional customer experiences.",
    },
  ];

  const stats = [
    { value: '2007', label: 'Founded', icon: Award },
    { value: '200K+', label: 'Support Agents', icon: Users },
    { value: '99.9%', label: 'Platform Uptime', icon: TrendingUp },
    { value: '160+', label: 'Countries Served', icon: Globe },
  ];

  const team = [
    {
      name: 'Mikkel Svane',
      role: 'CEO & Co-Founder',
      image: 'MS',
      bio: "Pioneering customer service innovation since 2007. Leading Zendesk's mission to democratize support.",
    },
    {
      name: 'Adrian McDermott',
      role: 'President of Products',
      image: 'AM',
      bio: 'Former Salesforce executive. Expert in scaling customer experience platforms globally.',
    },
    {
      name: 'Shawn Wiora',
      role: 'Chief Revenue Officer',
      image: 'SW',
      bio: '20+ years in SaaS growth. Passionate about helping businesses scale their support operations.',
    },
    {
      name: 'Colleen Berube',
      role: 'Chief Marketing Officer',
      image: 'CB',
      bio: 'Former Adobe marketing leader. Focused on customer success and support team empowerment.',
    },
  ];

  const coreFeatures = [
    {
      icon: Ticket,
      title: 'Smart Ticketing System',
      description:
        'AI-powered ticket routing and prioritization that reduces response times by 40%',
    },
    {
      icon: MessageSquare,
      title: 'Omnichannel Live Chat',
      description: 'Seamless conversations across web, mobile, and social channels in one platform',
    },
    {
      icon: BookOpen,
      title: 'Self-Service Knowledge Base',
      description: 'Intelligent help center that deflects 60% of tickets with instant answers',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Zendesk
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Customer Support
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Since 2007
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're the world's leading customer service platform, trusted by 200,000+ support agents
            to deliver exceptional experiences that build lasting customer relationships.
          </p>
        </div>

        {/* Core Features Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {coreFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 hover:border-primary/40 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Customer Support Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2007 in a Copenhagen loft, Zendesk began with a simple mission: make
                customer service software that's actually easy to use and affordable for any
                business.
              </p>
              <p>
                We saw support teams struggling with complex, expensive systems that hindered rather
                than helped. So we built something different - intuitive, powerful, and designed for
                the modern support professional.
              </p>
              <p>
                Today, we power over 50 million customer conversations monthly, helping businesses
                like Shopify, Airbnb, and Spotify deliver the exceptional support experiences their
                customers expect.
              </p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 text-primary fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium">4.8/5 on G2 (10,000+ reviews)</span>
            </div>
            <Button onClick={handleLearnMore} className="group">
              Learn About Our Platform
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4 p-6">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Great customer service shouldn't be a luxury. Every business deserves tools
                      that help them care for their customers."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - Mikkel Svane, CEO & Founder
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Support Values</h3>
            <p className="text-muted-foreground">
              The principles that guide our mission to make customer service better for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Leadership Team</h3>
            <p className="text-muted-foreground">
              The experienced leaders driving Zendesk's mission to revolutionize customer support
              worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button onClick={handleViewTeam} variant="outline" className="group">
              View Executive Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Customer Success Story */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-5 text-primary fill-current" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="ml-2">
                      Customer Success
                    </Badge>
                  </div>
                  <blockquote className="text-xl lg:text-2xl font-medium mb-6">
                    "Zendesk transformed our support operations completely. We've seen a 65%
                    improvement in customer satisfaction and our agents are more productive than
                    ever."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                      SC
                    </div>
                    <div>
                      <div className="font-semibold">Sarah Chen</div>
                      <div className="text-sm text-muted-foreground">
                        Head of Customer Success, TechFlow
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="size-5 text-primary" />
                    <span className="text-sm">50M+ tickets resolved monthly</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="size-5 text-primary" />
                    <span className="text-sm">40% faster response times</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="size-5 text-primary" />
                    <span className="text-sm">Enterprise-grade security</span>
                  </div>
                  <Button onClick={handleStartTrial} className="w-full mt-6">
                    Start Free 14-Day Trial
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
