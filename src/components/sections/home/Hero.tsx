'use client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import {
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  MessageCircle,
  Ticket,
  BookOpen,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // Start free trial
  };

  const handleSecondaryAction = () => {
    router.push('/'); // View customer stories
  };
  // ACTION_PLACEHOLDER_END

  const socialProof = {
    testimonials: [
      {
        name: 'Marcus Chen',
        role: 'Support Director',
        company: 'Shopify',
        image: 'MC',
        quote:
          'Zendesk reduced our response time by 75% and increased customer satisfaction to 98%',
      },
      {
        name: 'Sarah Williams',
        role: 'Customer Success',
        company: 'Airbnb',
        image: 'SW',
        quote: 'The AI-powered ticketing system handles 60% of our inquiries automatically',
      },
      {
        name: 'David Rodriguez',
        role: 'Operations Lead',
        company: 'Spotify',
        image: 'DR',
        quote: "Best support platform we've used. Our team productivity increased 3x",
      },
      {
        name: 'Emma Thompson',
        role: 'Head of Support',
        company: 'Slack',
        image: 'ET',
        quote: "Zendesk's knowledge base reduced repetitive tickets by 80%",
      },
    ],
    stats: [
      { icon: Users, value: '200,000+', label: 'Support agents worldwide' },
      { icon: Award, value: '4.8/5', label: 'G2 customer rating' },
      { icon: TrendingUp, value: '40%', label: 'Faster resolution time' },
    ],
    companies: ['Shopify', 'Airbnb', 'Spotify', 'Slack', 'Uber', 'Zendesk'],
    features: [
      {
        icon: Ticket,
        title: 'Smart Ticketing',
        description: 'AI-powered ticket routing and prioritization',
      },
      {
        icon: MessageCircle,
        title: 'Live Chat',
        description: 'Real-time customer conversations with chatbots',
      },
      {
        icon: BookOpen,
        title: 'Knowledge Base',
        description: 'Self-service portal with intelligent search',
      },
    ],
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Trusted by 200,000+ support teams
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
              Customer support that
              <span className="text-primary"> customers love</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join industry leaders using Zendesk's complete customer service solution. Deliver
              exceptional support with AI-powered ticketing, live chat, and self-service tools.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="group text-base px-8 bg-primary hover:bg-primary/90"
                onClick={handlePrimaryAction}
              >
                Start free trial
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-primary/20 hover:bg-primary/5"
                onClick={handleSecondaryAction}
              >
                See customer stories
              </Button>
            </div>
          </div>

          {/* Core Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {socialProof.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 text-center bg-card/50 backdrop-blur border-muted">
                  <Icon className="size-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Social proof grid */}
          <div className="grid gap-8 mb-12">
            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {socialProof.stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="p-6 text-center bg-card border-muted">
                    <Icon className="size-6 text-primary mx-auto mb-3" />
                    <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </Card>
                );
              })}
            </div>

            {/* Customer Testimonials */}
            <Card className="p-8 bg-card/50 backdrop-blur border-muted">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Loved by support teams worldwide
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    See how leading companies transform their customer experience
                  </p>
                </div>
                <div className="flex -space-x-2">
                  {socialProof.testimonials.map((person, index) => (
                    <Avatar
                      key={index}
                      className="size-10 border-2 border-background bg-primary text-primary-foreground text-xs font-semibold"
                    >
                      {person.image}
                    </Avatar>
                  ))}
                  <div className="size-10 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                    <span className="text-xs font-semibold text-muted-foreground">+5K</span>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {socialProof.testimonials.slice(0, 2).map((testimonial, index) => (
                  <div key={index} className="space-y-3">
                    <blockquote className="text-sm text-muted-foreground italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <Avatar className="size-8 bg-primary text-primary-foreground text-xs font-semibold">
                        {testimonial.image}
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Company logos */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6">
              Powering customer support for industry leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
              {socialProof.companies.map((company, index) => (
                <div
                  key={index}
                  className="text-sm font-semibold text-muted-foreground"
                  aria-label={`${company} logo`}
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
