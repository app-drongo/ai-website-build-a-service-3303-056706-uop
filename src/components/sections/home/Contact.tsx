'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  Star,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    supportTeamSize: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handleStartTrial = () => {
    router.push('/');
  };
  const handleContactSales = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Support consultation request:', formData);
    handleStartTrial();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'Live Chat Support',
      description: 'Connect with our support experts instantly',
      contact: 'Average response: 2 minutes',
      action: 'Start Live Chat',
      badge: '24/7 Available',
    },
    {
      icon: Phone,
      title: 'Sales Consultation',
      description: 'Speak with our customer success team',
      contact: '+1 (888) ZENDESK',
      action: 'Schedule Call',
      badge: 'Free Demo',
    },
    {
      icon: Mail,
      title: 'Enterprise Support',
      description: 'Dedicated support for large teams',
      contact: 'enterprise@zendesk.com',
      action: 'Contact Enterprise',
      badge: 'Priority Response',
    },
  ];

  const supportStats = [
    { label: 'Support Teams Served', value: '200,000+' },
    { label: 'Customer Satisfaction', value: '4.8/5' },
    { label: 'Average Setup Time', value: '< 30 mins' },
    { label: 'Uptime Guarantee', value: '99.9%' },
  ];

  const testimonials = [
    {
      quote:
        'Zendesk transformed our customer support. Setup was incredibly smooth and their team guided us every step of the way.',
      author: 'Sarah Chen',
      role: 'Head of Customer Success',
      company: 'TechFlow',
      rating: 5,
    },
    {
      quote:
        'The implementation support was outstanding. We went from chaos to organized support in just two weeks.',
      author: 'Marcus Rodriguez',
      role: 'Support Manager',
      company: 'CloudScale',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Social Proof */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Star className="size-3 mr-1 fill-primary text-primary" />
            Trusted by 200,000+ Support Teams
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Customer Support?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Join companies like Shopify and Airbnb who've revolutionized their customer experience
            with Zendesk. Get expert guidance to implement the perfect support solution for your
            team.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {supportStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                Get Your Custom Support Solution
              </CardTitle>
              <CardDescription>
                Tell us about your support needs and we'll create a tailored implementation plan.
                <span className="text-primary font-medium"> Free 14-day trial included.</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Sarah Chen"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="sarah@techflow.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="TechFlow Inc."
                    />
                  </div>
                  <div>
                    <label htmlFor="supportTeamSize" className="block text-sm font-medium mb-2">
                      Support Team Size
                    </label>
                    <select
                      id="supportTeamSize"
                      name="supportTeamSize"
                      value={formData.supportTeamSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">Select team size</option>
                      <option value="1-5">1-5 agents</option>
                      <option value="6-20">6-20 agents</option>
                      <option value="21-100">21-100 agents</option>
                      <option value="100+">100+ agents</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Current Support Challenges *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your current support setup, ticket volume, main pain points, or specific features you need..."
                  />
                </div>

                <div className="space-y-3">
                  <Button type="submit" className="w-full text-base py-6 group">
                    Start Free 14-Day Trial
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full text-base py-6"
                    onClick={handleContactSales}
                  >
                    Schedule Demo with Sales Team
                  </Button>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="size-4 text-primary" />
                  No credit card required • Setup in under 30 minutes
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Social Proof */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                Get Expert Support Guidance
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold">{method.title}</h4>
                              <Badge variant="secondary" className="text-xs">
                                {method.badge}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Customer Testimonials */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Star className="size-5 text-primary fill-primary" />
                What Our Customers Say
              </h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="size-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <blockquote className="text-sm mb-4 italic">"{testimonial.quote}"</blockquote>
                      <div>
                        <div className="font-semibold text-sm">{testimonial.author}</div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Support Hours & Guarantee */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Support & Implementation
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Implementation Support</span>
                    <Badge variant="secondary">24/7 Available</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Average Setup Time</span>
                    <span className="font-medium">Under 30 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Onboarding Support</span>
                    <span className="font-medium">Dedicated specialist</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Migration Assistance</span>
                    <span className="font-medium">Free data import</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Users className="size-4" />
                    99.9% uptime SLA with 24/7 enterprise support
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
