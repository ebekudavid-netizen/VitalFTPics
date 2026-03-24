import { Link } from "react-router";
import { Button } from "../components/Button";
import {
  TrendingUp,
  Brain,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Landing() {
  const features = [
    {
      icon: TrendingUp,
      title: "Automated Predictions",
      description:
        "Our system automatically generates predictions for matches worldwide, updated in real-time.",
    },
    {
      icon: Brain,
      title: "Advanced Algorithm",
      description:
        "Powered by sophisticated algorithms analyzing odds, form, statistics, and historical data.",
    },
    {
      icon: BarChart3,
      title: "Clear Match Breakdown",
      description:
        "Every prediction comes with detailed analysis and confidence ratings for transparency.",
    },
    {
      icon: Users,
      title: "Consistent Results",
      description:
        "All users receive the same data-driven predictions - no manipulation, just pure analytics.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Data Collection",
      description: "Matches pulled from global football data APIs in real-time",
    },
    {
      number: "02",
      title: "Analysis",
      description: "Algorithm analyzes odds, form, stats, and historical patterns",
    },
    {
      number: "03",
      title: "Prediction",
      description: "Predictions generated automatically with confidence ratings",
    },
    {
      number: "04",
      title: "Results",
      description: "Users view results with detailed explanations and insights",
    },
  ];

  const pricing = [
    {
      name: "Day Pass",
      price: "₦100",
      period: "per day",
      features: [
        "Access to all predictions",
        "Detailed match analysis",
        "Confidence ratings",
        "24-hour access",
      ],
    },
    {
      name: "1 Month",
      price: "₦500",
      period: "per month",
      features: [
        "All Day Pass features",
        "Priority support",
        "Historical data access",
        "30-day access",
      ],
    },
    {
      name: "3 Months",
      price: "₦1,000",
      period: "3 months",
      features: [
        "All Monthly features",
        "Best value pricing",
        "Premium analytics",
        "90-day access",
      ],
      recommended: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg"></div>
            <span className="text-xl font-semibold">Vital FT Pics</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/predictions" className="text-muted-foreground hover:text-foreground">
              Predictions
            </Link>
            <Link to="/signin">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background footballer image with overlay */}
        <div className="absolute inset-0">
          {/* Background */}
<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/90 to-secondary/10"></div>
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/50 to-secondary/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Smarter Football Predictions Powered by Data
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Make informed decisions with our automated prediction system. We analyze
              thousands of data points to provide you with accurate, data-driven football
              predictions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/signup">
                <Button size="lg">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/predictions">
                <Button variant="outline" size="lg">
                  View Predictions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Vital FT Pics?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with comprehensive football data
              to deliver reliable predictions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our automated system works 24/7 to provide you with the most accurate
              predictions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight
                    className="hidden lg:block absolute top-8 -right-4 text-primary/30"
                    size={24}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options to suit your needs. Start with a day pass or save
              with our longer-term plans.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-card border rounded-lg p-8 relative ${
                  plan.recommended
                    ? "border-primary shadow-xl shadow-primary/20 scale-105"
                    : "border-border"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
                      Best Value
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.recommended ? "primary" : "outline"}
                  className="w-full"
                >
                  Subscribe Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-muted/50 border border-border rounded-lg p-6 mb-8">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Disclaimer:</strong> This platform provides informational predictions
              only. Predictions are generated by algorithms and do not guarantee outcomes. No
              guarantees are made regarding accuracy or results. Use at your own discretion.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg"></div>
              <span className="text-xl font-semibold">Vital FT Pics</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground">
                Privacy Policy
              </a>
              <Link to="/signin" className="hover:text-foreground">
                Login
              </Link>
              <Link to="/admin" className="hover:text-foreground">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}