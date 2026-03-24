import { useState } from "react";
import { PredictionsHeader } from "../components/PredictionsHeader";
import { PredictionCard } from "../components/PredictionCard";
import { Search, Filter, RefreshCw, AlertCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router";
import { Button } from "../components/Button";

export default function UserPredictions() {
  const { hasSubscription } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("all");

  const predictions = [
    {
      id: "1",
      homeTeam: "Manchester United",
      awayTeam: "Liverpool",
      prediction: "Liverpool Win",
      confidence: 78,
      league: "Premier League",
      matchDate: "March 24, 2026 15:00",
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
      league: "La Liga",
      matchDate: "March 24, 2026 20:00",
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
      league: "Bundesliga",
      matchDate: "March 25, 2026 17:30",
      odds: { home: 2.0, draw: 3.6, away: 3.5 },
      explanation: {
        teamForm: "Both teams evenly matched with similar recent form.",
        homeAdvantage: "Bayern's home advantage offset by Dortmund's defensive strength.",
        oddsInsight: "Draw odds offer value given the competitive nature of this fixture.",
        statistics: "Last 5 meetings resulted in 3 draws and 2 narrow wins.",
      },
    },
    {
      id: "4",
      homeTeam: "PSG",
      awayTeam: "Marseille",
      prediction: "PSG Win",
      confidence: 82,
      league: "Ligue 1",
      matchDate: "March 25, 2026 21:00",
      odds: { home: 1.5, draw: 4.2, away: 6.5 },
      explanation: {
        teamForm: "PSG unbeaten in last 8 matches across all competitions.",
        homeAdvantage: "PSG has won 12 of last 15 home matches.",
        oddsInsight: "Heavy favorites with bookmakers backing strong home victory.",
        statistics: "PSG's attack averaging 3.1 goals per game this season.",
      },
    },
    {
      id: "5",
      homeTeam: "Juventus",
      awayTeam: "AC Milan",
      prediction: "Juventus Win",
      confidence: 71,
      league: "Serie A",
      matchDate: "March 26, 2026 19:45",
      odds: { home: 2.2, draw: 3.3, away: 3.1 },
      explanation: {
        teamForm: "Juventus showing improved form with 3 consecutive wins.",
        homeAdvantage: "Strong home record with only 2 losses at home this season.",
        oddsInsight: "Odds favor home team with defensive strength as key factor.",
        statistics: "Juventus has conceded only 0.8 goals per game at home.",
      },
    },
  ];

  const leagues = [
    "all",
    "Premier League",
    "La Liga",
    "Bundesliga",
    "Serie A",
    "Ligue 1",
  ];

  const filteredPredictions = predictions.filter((pred) => {
    const matchesSearch =
      pred.homeTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pred.awayTeam.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLeague =
      selectedLeague === "all" || pred.league === selectedLeague;
    return matchesSearch && matchesLeague;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <PredictionsHeader />
      <main className="flex-1 p-8">
        {/* Subscription Alert */}
        {!hasSubscription && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-destructive flex-shrink-0 mt-0.5" size={20} />
              <div className="flex-1">
                <h3 className="font-semibold text-destructive mb-1">
                  Subscription Required
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  You need an active subscription to view predictions. Subscribe now to
                  access all predictions and analysis.
                </p>
                <Link to="/subscription">
                  <Button size="sm" variant="primary">
                    View Subscription Plans
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-semibold">Predictions</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-semibold">Live Data</span>
              </div>
              <button className="flex items-center gap-2 hover:text-foreground transition-colors">
                <RefreshCw size={16} />
                <span>Refresh</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Last updated: March 23, 2026 at 10:45 AM</span>
          </div>
        </div>

        {/* Only show filters and predictions if subscribed */}
        {hasSubscription && (
          <>
            {/* Filters */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search teams..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="relative">
                  <Filter
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    size={20}
                  />
                  <select
                    value={selectedLeague}
                    onChange={(e) => setSelectedLeague(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                  >
                    {leagues.map((league) => (
                      <option key={league} value={league}>
                        {league === "all" ? "All Leagues" : league}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-4 text-sm text-muted-foreground">
              Showing {filteredPredictions.length} predictions
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {filteredPredictions.map((prediction) => (
                <PredictionCard key={prediction.id} {...prediction} />
              ))}
            </div>

            {filteredPredictions.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No predictions found matching your criteria
                </p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}