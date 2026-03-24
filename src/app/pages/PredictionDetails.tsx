import { useParams, Link } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { ArrowLeft, TrendingUp, BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function PredictionDetails() {
  const { id } = useParams();

  // Mock data - in real app, would fetch based on id
  const prediction = {
    id: id || "1",
    homeTeam: "Manchester United",
    awayTeam: "Liverpool",
    prediction: "Liverpool Win",
    confidence: 78,
    odds: { home: 2.1, draw: 3.4, away: 3.2 },
    league: "Premier League",
    date: "March 23, 2026",
    time: "15:00 GMT",
  };

  const teamStats = [
    { stat: "Goals Scored", home: 45, away: 58 },
    { stat: "Goals Conceded", home: 32, away: 24 },
    { stat: "Wins", home: 12, away: 18 },
    { stat: "Clean Sheets", home: 8, away: 14 },
  ];

  const formData = [
    { match: "5 games ago", home: 3, away: 2 },
    { match: "4 games ago", home: 1, away: 3 },
    { match: "3 games ago", home: 2, away: 3 },
    { match: "2 games ago", home: 1, away: 2 },
    { match: "Last game", home: 2, away: 4 },
  ];

  const algorithmFactors = [
    { factor: "Team Form", weight: 30, score: 85 },
    { factor: "Head-to-Head", weight: 20, score: 72 },
    { factor: "Home Advantage", weight: 15, score: 65 },
    { factor: "Odds Analysis", weight: 20, score: 80 },
    { factor: "Goals/Stats", weight: 15, score: 78 },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <Link
            to="/predictions"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Predictions
          </Link>

          {/* Match Header */}
          <div className="bg-card border border-border rounded-lg p-8 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1">{prediction.league}</div>
                <div className="text-sm text-muted-foreground">
                  {prediction.date} at {prediction.time}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground mb-1">Prediction ID</div>
                <div className="text-sm font-mono">#{prediction.id}</div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">
                {prediction.homeTeam} <span className="text-muted-foreground">vs</span>{" "}
                {prediction.awayTeam}
              </h1>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-8 text-center">
              <div className="text-sm text-muted-foreground mb-2">Final Prediction</div>
              <div className="text-4xl font-bold text-primary mb-4">
                {prediction.prediction}
              </div>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex-1 max-w-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Confidence</span>
                    <span className="text-sm font-semibold">{prediction.confidence}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all"
                      style={{ width: `${prediction.confidence}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm">
                High Confidence
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-background/50 rounded-lg p-4 text-center">
                <div className="text-sm text-muted-foreground mb-1">Home Win</div>
                <div className="text-2xl font-bold">{prediction.odds.home}</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4 text-center">
                <div className="text-sm text-muted-foreground mb-1">Draw</div>
                <div className="text-2xl font-bold">{prediction.odds.draw}</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4 text-center">
                <div className="text-sm text-muted-foreground mb-1">Away Win</div>
                <div className="text-2xl font-bold">{prediction.odds.away}</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Team Stats Comparison */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="text-primary" size={24} />
                <h2 className="text-xl font-semibold">Team Statistics</h2>
              </div>
              <div className="space-y-4">
                {teamStats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-2">
                      <span>{stat.stat}</span>
                      <div className="flex gap-8">
                        <span className="font-semibold">{stat.home}</span>
                        <span className="font-semibold text-primary">{stat.away}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div
                          className="bg-secondary h-2 rounded-full"
                          style={{
                            width: `${(stat.home / (stat.home + stat.away)) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{
                            width: `${(stat.away / (stat.home + stat.away)) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Form */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="text-primary" size={24} />
                <h2 className="text-xl font-semibold">Recent Form</h2>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={formData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="match" stroke="#94A3B8" fontSize={12} />
                  <YAxis stroke="#94A3B8" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1E293B",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="home" fill="#22D3EE" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="away" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary rounded"></div>
                  <span className="text-sm">{prediction.homeTeam}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded"></div>
                  <span className="text-sm">{prediction.awayTeam}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Algorithm Breakdown */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Algorithm Analysis</h2>
            <div className="space-y-6">
              {algorithmFactors.map((factor, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="font-semibold">{factor.factor}</span>
                      <span className="text-sm text-muted-foreground ml-2">
                        (Weight: {factor.weight}%)
                      </span>
                    </div>
                    <span className="font-semibold text-primary">{factor.score}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      style={{ width: `${factor.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-background/50 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Key Insights</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Liverpool has won 4 of their last 5 matches, demonstrating strong current
                    form
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Away form is exceptional with 70% win rate in last 10 away games</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Market odds favor Liverpool despite playing away, suggesting strong market
                    confidence
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Liverpool averages 2.3 goals per game compared to Manchester United's 1.4
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Head-to-head record favors Liverpool with 3 wins in last 5 meetings</span>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
