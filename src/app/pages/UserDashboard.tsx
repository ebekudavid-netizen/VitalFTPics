import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { PredictionCard } from "../components/PredictionCard";
import { TrendingUp, Calendar, Activity } from "lucide-react";

export default function UserDashboard() {
  const todayMatches = [
    {
      id: "1",
      homeTeam: "Manchester United",
      awayTeam: "Liverpool",
      prediction: "Liverpool Win",
      confidence: 78,
      odds: { home: 2.1, draw: 3.4, away: 3.2 },
      explanation: {
        teamForm: "Liverpool has won 4 of their last 5 matches, while Manchester United has won only 2.",
        homeAdvantage: "Liverpool's away form is strong with 70% win rate in last 10 away games.",
        oddsInsight: "Market odds favor Liverpool despite playing away, suggesting strong confidence.",
        statistics: "Liverpool averages 2.3 goals per game vs Man United's 1.4 goals per game.",
      },
    },
    {
      id: "2",
      homeTeam: "Barcelona",
      awayTeam: "Real Madrid",
      prediction: "Barcelona Win",
      confidence: 65,
      odds: { home: 2.3, draw: 3.1, away: 3.0 },
      explanation: {
        teamForm: "Barcelona on a 3-game winning streak at home.",
        homeAdvantage: "Barcelona has 85% win rate at home this season.",
        oddsInsight: "Close odds indicate a competitive match, but home advantage tilts favor.",
        statistics: "Barcelona dominates possession with 68% average vs Real Madrid's 58%.",
      },
    },
    {
      id: "3",
      homeTeam: "Bayern Munich",
      awayTeam: "Borussia Dortmund",
      prediction: "Draw",
      confidence: 52,
      odds: { home: 2.0, draw: 3.6, away: 3.5 },
      explanation: {
        teamForm: "Both teams evenly matched with similar recent form.",
        homeAdvantage: "Bayern's home advantage offset by Dortmund's defensive strength.",
        oddsInsight: "Draw odds offer value given the competitive nature of this fixture.",
        statistics: "Last 5 meetings resulted in 3 draws and 2 narrow wins.",
      },
    },
  ];

  const stats = [
    {
      icon: TrendingUp,
      label: "Predictions Today",
      value: "24",
      change: "+12%",
      color: "text-primary",
    },
    {
      icon: Calendar,
      label: "Subscription Days",
      value: "23",
      change: "Active",
      color: "text-secondary",
    },
    {
      icon: Activity,
      label: "Accuracy Rate",
      value: "73%",
      change: "+5%",
      color: "text-primary",
    },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <span className={`text-sm ${stat.color}`}>{stat.change}</span>
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Today's Matches */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Today's Matches</h2>
            <p className="text-muted-foreground mb-6">
              Top predictions for today's football matches
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {todayMatches.map((match) => (
              <PredictionCard key={match.id} {...match} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
