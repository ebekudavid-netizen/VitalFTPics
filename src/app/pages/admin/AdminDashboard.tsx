import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Users, TrendingUp, DollarSign, Activity, ArrowUp, ArrowDown } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function AdminDashboard() {
  const stats = [
    {
      icon: Users,
      label: "Total Users",
      value: "1,234",
      change: "+12.5%",
      trend: "up",
      color: "from-primary to-primary/80",
    },
    {
      icon: TrendingUp,
      label: "Active Predictions",
      value: "456",
      change: "+8.2%",
      trend: "up",
      color: "from-secondary to-secondary/80",
    },
    {
      icon: DollarSign,
      label: "Monthly Revenue",
      value: "₦125,000",
      change: "+15.3%",
      trend: "up",
      color: "from-primary to-secondary",
    },
    {
      icon: Activity,
      label: "Success Rate",
      value: "73.4%",
      change: "-2.1%",
      trend: "down",
      color: "from-purple-500 to-purple-700",
    },
  ];

  const userGrowth = [
    { month: "Jan", users: 890 },
    { month: "Feb", users: 1020 },
    { month: "Mar", users: 1234 },
  ];

  const predictionStats = [
    { day: "Mon", predictions: 45, accurate: 33 },
    { day: "Tue", predictions: 52, accurate: 38 },
    { day: "Wed", predictions: 48, accurate: 35 },
    { day: "Thu", predictions: 61, accurate: 45 },
    { day: "Fri", predictions: 55, accurate: 41 },
    { day: "Sat", predictions: 72, accurate: 53 },
    { day: "Sun", predictions: 68, accurate: 49 },
  ];

  const recentActivity = [
    { action: "New user registered", time: "2 minutes ago", type: "user" },
    { action: "Prediction generated for Premier League", time: "15 minutes ago", type: "prediction" },
    { action: "User subscribed to 3-month plan", time: "1 hour ago", type: "subscription" },
    { action: "API sync completed", time: "2 hours ago", type: "system" },
    { action: "Algorithm weights updated", time: "3 hours ago", type: "system" },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar isAdmin />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Admin Overview</h2>
            <p className="text-muted-foreground">Monitor your platform performance</p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const TrendIcon = stat.trend === "up" ? ArrowUp : ArrowDown;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${stat.trend === "up" ? "text-primary" : "text-destructive"}`}>
                      <TrendIcon size={16} />
                      {stat.change}
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* User Growth Chart */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">User Growth</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={userGrowth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94A3B8" />
                  <YAxis stroke="#94A3B8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1E293B",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#10B981"
                    strokeWidth={3}
                    dot={{ fill: "#10B981", r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Prediction Stats */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Prediction Accuracy</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={predictionStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="day" stroke="#94A3B8" />
                  <YAxis stroke="#94A3B8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1E293B",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="predictions" fill="#22D3EE" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="accurate" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === "user" ? "bg-primary" :
                      activity.type === "prediction" ? "bg-secondary" :
                      activity.type === "subscription" ? "bg-purple-500" :
                      "bg-muted-foreground"
                    }`}></div>
                    <span>{activity.action}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
