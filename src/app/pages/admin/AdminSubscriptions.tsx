import { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { DollarSign } from "lucide-react";

export default function AdminSubscriptions() {
  const [pricing, setPricing] = useState({
    dayPass: 100,
    oneMonth: 500,
    threeMonths: 1000,
  });

  return (
    <div className="flex min-h-screen">
      <Sidebar isAdmin />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Subscription Control</h2>
            <p className="text-muted-foreground">Manage pricing and subscription plans</p>
          </div>

          <div className="max-w-4xl space-y-6">
            {/* Pricing Editor */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="text-primary" size={24} />
                <h3 className="text-xl font-semibold">Pricing Settings</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">Day Pass (₦)</label>
                  <input
                    type="number"
                    value={pricing.dayPass}
                    onChange={(e) =>
                      setPricing({ ...pricing, dayPass: parseInt(e.target.value) })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Current price: ₦{pricing.dayPass} per day
                  </p>
                </div>

                <div>
                  <label className="block text-sm mb-2">1 Month Plan (₦)</label>
                  <input
                    type="number"
                    value={pricing.oneMonth}
                    onChange={(e) =>
                      setPricing({ ...pricing, oneMonth: parseInt(e.target.value) })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Current price: ₦{pricing.oneMonth} per month
                  </p>
                </div>

                <div>
                  <label className="block text-sm mb-2">3 Months Plan (₦)</label>
                  <input
                    type="number"
                    value={pricing.threeMonths}
                    onChange={(e) =>
                      setPricing({ ...pricing, threeMonths: parseInt(e.target.value) })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Current price: ₦{pricing.threeMonths} for 3 months
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Button>Save Changes</Button>
              </div>
            </div>

            {/* Revenue Stats */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Revenue Overview</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg p-6">
                  <div className="text-sm text-muted-foreground mb-1">This Month</div>
                  <div className="text-3xl font-bold text-primary">₦125,000</div>
                  <div className="text-sm text-primary mt-2">+15.3%</div>
                </div>
                <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg p-6">
                  <div className="text-sm text-muted-foreground mb-1">Last Month</div>
                  <div className="text-3xl font-bold text-secondary">₦108,500</div>
                  <div className="text-sm text-secondary mt-2">+12.1%</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-lg p-6">
                  <div className="text-sm text-muted-foreground mb-1">Total (All Time)</div>
                  <div className="text-3xl font-bold text-purple-400">₦542,000</div>
                </div>
              </div>
            </div>

            {/* Subscription Distribution */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Subscription Distribution</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Day Pass</span>
                    <span className="font-semibold">45 users (18%)</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
                      style={{ width: "18%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>1 Month Plan</span>
                    <span className="font-semibold">128 users (52%)</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
                      style={{ width: "52%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>3 Months Plan</span>
                    <span className="font-semibold">74 users (30%)</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6">Recent Transactions</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">User</th>
                      <th className="text-left p-4 font-semibold">Plan</th>
                      <th className="text-left p-4 font-semibold">Amount</th>
                      <th className="text-left p-4 font-semibold">Date</th>
                      <th className="text-left p-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        user: "John Doe",
                        plan: "1 Month",
                        amount: "₦500",
                        date: "March 22, 2026",
                        status: "Completed",
                      },
                      {
                        user: "Jane Smith",
                        plan: "3 Months",
                        amount: "₦1,000",
                        date: "March 22, 2026",
                        status: "Completed",
                      },
                      {
                        user: "Michael Johnson",
                        plan: "Day Pass",
                        amount: "₦100",
                        date: "March 21, 2026",
                        status: "Completed",
                      },
                      {
                        user: "Sarah Williams",
                        plan: "1 Month",
                        amount: "₦500",
                        date: "March 21, 2026",
                        status: "Completed",
                      },
                    ].map((transaction, index) => (
                      <tr
                        key={index}
                        className="border-t border-border hover:bg-muted/30 transition-colors"
                      >
                        <td className="p-4 font-semibold">{transaction.user}</td>
                        <td className="p-4 text-sm">{transaction.plan}</td>
                        <td className="p-4 font-semibold text-primary">
                          {transaction.amount}
                        </td>
                        <td className="p-4 text-sm text-muted-foreground">
                          {transaction.date}
                        </td>
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
