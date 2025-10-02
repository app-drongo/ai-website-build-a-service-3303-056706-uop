'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Users, MessageSquare, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  const handleEnterpriseContact = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Team Essentials',
      description: 'Perfect for small support teams getting started',
      price: '$19',
      period: '/agent/month',
      badge: null,
      features: [
        'Up to 5 support agents',
        'Email ticketing system',
        'Basic knowledge base',
        'Standard live chat widget',
        'Mobile app access',
        'Email support',
      ],
      cta: 'Start Free Trial',
      popular: false,
      testimonial: 'Reduced our response time by 60% in the first month',
      company: 'TechFlow Solutions',
    },
    {
      name: 'Professional',
      description: 'Advanced features for growing support operations',
      price: '$49',
      period: '/agent/month',
      badge: 'Most Popular',
      features: [
        'Unlimited support agents',
        'Advanced ticket automation',
        'AI-powered knowledge base',
        'Omnichannel live chat',
        'Custom reporting dashboard',
        'Phone & chat support',
        'Social media integration',
        'SLA management tools',
      ],
      cta: 'Start Free Trial',
      popular: true,
      testimonial: 'Customer satisfaction increased 40% since switching to Zendesk',
      company: 'GlobalTech Inc',
    },
    {
      name: 'Enterprise Plus',
      description: 'Complete solution for large-scale support operations',
      price: 'Custom',
      period: '',
      badge: 'White Glove Setup',
      features: [
        'Everything in Professional',
        'Advanced AI automation',
        'Custom integrations',
        'Dedicated success manager',
        '24/7 priority support',
        'Advanced security controls',
        'Custom training program',
        '99.9% uptime SLA',
      ],
      cta: 'Contact Sales Team',
      popular: false,
      testimonial: 'Handles 10,000+ tickets daily with 99.2% customer satisfaction',
      company: 'Enterprise Corp',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Users className="size-3 mr-2" />
            Trusted by 100,000+ Support Teams
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Customer Support That
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Scales With You
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Join industry leaders who've transformed their customer experience with our
            comprehensive support platform. No setup fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly Billing
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual Billing
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Customer Testimonial */}
                <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary/30">
                  <p className="text-sm italic text-muted-foreground mb-2">"{plan.testimonial}"</p>
                  <p className="text-xs font-medium text-primary">— {plan.company}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Feature Icons */}
                <div className="flex justify-center gap-4 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MessageSquare className="size-3" />
                    Live Chat
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="size-3" />
                    Ticketing
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <BookOpen className="size-3" />
                    Knowledge Base
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={
                    plan.name === 'Enterprise Plus' ? handleEnterpriseContact : handlePrimaryAction
                  }
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name !== 'Enterprise Plus' && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No credit card required • Setup in 5 minutes
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100K+</div>
              <div className="text-sm text-muted-foreground">Support Teams</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50M+</div>
              <div className="text-sm text-muted-foreground">Tickets Resolved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
              <div className="text-sm text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Customer Support?</h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of companies who've improved their customer satisfaction scores by an
            average of 35% with our comprehensive support platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleScheduleDemo} variant="outline" size="lg">
              Schedule Live Demo
            </Button>
            <Button onClick={handleSecondaryAction} size="lg">
              Start Free Trial Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
