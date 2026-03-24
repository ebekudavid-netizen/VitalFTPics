import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { CheckCircle2, Clock, Calendar } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function UserSubscription() {
  const { hasSubscription, subscribe } = useAuth();

  const handleSubscribe = () => {
    subscribe();
  };

  const currentPlan = {
    name: "1 Month Plan",
    price: "₦500",
    expiresAt: "April 15, 2026",
    daysLeft: 23,
  };

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
      current: true,
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
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Subscription</h2>
            <p className="text-muted-foreground">Manage your subscription plan</p>
          </div>

          {/* Current Subscription */}
          {hasSubscription ? (
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-lg p-8 mb-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Current Plan</div>
                  <h3 className="text-3xl font-bold mb-2">{currentPlan.name}</h3>
                  <div className="text-2xl font-semibold text-primary">
                    {currentPlan.price}/month
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm">
                  Active
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background/50 rounded-lg p-4 flex items-center gap-4">
                  <Calendar className="text-primary" size={24} />
                  <div>
                    <div className="text-sm text-muted-foreground">Expires On</div>
                    <div className="font-semibold">{currentPlan.expiresAt}</div>
                  </div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 flex items-center gap-4">
                  <Clock className="text-secondary" size={24} />
                  <div>
                    <div className="text-sm text-muted-foreground">Days Remaining</div>
                    <div className="font-semibold">{currentPlan.daysLeft} days</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button variant="outline" className="w-full md:w-auto">
                  Cancel Subscription
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-2">No Active Subscription</h3>
              <p className="text-muted-foreground mb-4">
                Subscribe to a plan below to start accessing predictions and analysis.
              </p>
            </div>
          )}

          {/* Available Plans */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Available Plans</h3>
            <p className="text-muted-foreground mb-6">
              Upgrade or change your subscription plan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`bg-card border rounded-lg p-6 relative ${
                  plan.recommended
                    ? "border-primary shadow-xl shadow-primary/20"
                    : plan.current
                    ? "border-secondary shadow-lg shadow-secondary/10"
                    : "border-border"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
                      Best Value
                    </span>
                  </div>
                )}
                {plan.current && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm">
                      Current Plan
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2 text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2
                        size={18}
                        className="text-primary flex-shrink-0 mt-0.5"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.current && hasSubscription ? "outline" : plan.recommended ? "primary" : "outline"}
                  className="w-full"
                  disabled={plan.current && hasSubscription}
                  onClick={handleSubscribe}
                >
                  {plan.current && hasSubscription ? "Current Plan" : "Subscribe"}
                </Button>
              </div>
            ))}
          </div>

          {/* Billing History */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-6">Billing History</h3>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 text-sm font-semibold">Date</th>
                      <th className="text-left p-4 text-sm font-semibold">Plan</th>
                      <th className="text-left p-4 text-sm font-semibold">Amount</th>
                      <th className="text-left p-4 text-sm font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        date: "March 15, 2026",
                        plan: "1 Month",
                        amount: "₦500",
                        status: "Paid",
                      },
                      {
                        date: "February 15, 2026",
                        plan: "1 Month",
                        amount: "₦500",
                        status: "Paid",
                      },
                      {
                        date: "January 15, 2026",
                        plan: "1 Month",
                        amount: "₦500",
                        status: "Paid",
                      },
                    ].map((transaction, index) => (
                      <tr key={index} className="border-t border-border">
                        <td className="p-4 text-sm">{transaction.date}</td>
                        <td className="p-4 text-sm">{transaction.plan}</td>
                        <td className="p-4 text-sm font-semibold">{transaction.amount}</td>
                        <td className="p-4">
                          <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}