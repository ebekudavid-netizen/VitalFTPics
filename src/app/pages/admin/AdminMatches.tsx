import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Play, Calendar, Filter } from "lucide-react";

export default function AdminMatches() {
  const matches = [
    {
      id: 1,
      homeTeam: "Manchester United",
      awayTeam: "Liverpool",
      league: "Premier League",
      date: "March 23, 2026",
      time: "15:00",
      status: "Pending",
    },
    {
      id: 2,
      homeTeam: "Barcelona",
      awayTeam: "Real Madrid",
      league: "La Liga",
      date: "March 23, 2026",
      time: "18:00",
      status: "Processed",
    },
    {
      id: 3,
      homeTeam: "Bayern Munich",
      awayTeam: "Borussia Dortmund",
      league: "Bundesliga",
      date: "March 23, 2026",
      time: "17:30",
      status: "Pending",
    },
    {
      id: 4,
      homeTeam: "PSG",
      awayTeam: "Marseille",
      league: "Ligue 1",
      date: "March 24, 2026",
      time: "20:00",
      status: "Processed",
    },
    {
      id: 5,
      homeTeam: "Juventus",
      awayTeam: "AC Milan",
      league: "Serie A",
      date: "March 24, 2026",
      time: "19:45",
      status: "Pending",
    },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar isAdmin />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h2 className="text-2xl font-semibold">Matches</h2>
                <p className="text-muted-foreground mt-1">
                  Manage upcoming and processed matches
                </p>
              </div>
              <Button>
                <Play size={20} className="mr-2" />
                Run Prediction Engine
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Calendar
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={20}
                />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="relative">
                <Filter
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={20}
                />
                <select className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
                  <option>All Leagues</option>
                  <option>Premier League</option>
                  <option>La Liga</option>
                  <option>Bundesliga</option>
                  <option>Serie A</option>
                  <option>Ligue 1</option>
                </select>
              </div>
              <div className="relative">
                <Filter
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={20}
                />
                <select className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>Processed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-sm text-muted-foreground mb-1">Total Matches</div>
              <div className="text-3xl font-bold text-primary">{matches.length}</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-sm text-muted-foreground mb-1">Pending</div>
              <div className="text-3xl font-bold text-secondary">
                {matches.filter((m) => m.status === "Pending").length}
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-sm text-muted-foreground mb-1">Processed</div>
              <div className="text-3xl font-bold">
                {matches.filter((m) => m.status === "Processed").length}
              </div>
            </div>
          </div>

          {/* Matches Table */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold">Teams</th>
                    <th className="text-left p-4 font-semibold">League</th>
                    <th className="text-left p-4 font-semibold">Date</th>
                    <th className="text-left p-4 font-semibold">Time</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                    <th className="text-left p-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {matches.map((match) => (
                    <tr
                      key={match.id}
                      className="border-t border-border hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-4 font-semibold">
                        {match.homeTeam} vs {match.awayTeam}
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">{match.league}</td>
                      <td className="p-4 text-sm">{match.date}</td>
                      <td className="p-4 text-sm">{match.time}</td>
                      <td className="p-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs ${
                            match.status === "Processed"
                              ? "bg-primary/20 text-primary"
                              : "bg-secondary/20 text-secondary"
                          }`}
                        >
                          {match.status}
                        </span>
                      </td>
                      <td className="p-4">
                        {match.status === "Pending" ? (
                          <Button size="sm">Generate Prediction</Button>
                        ) : (
                          <Button size="sm" variant="outline">
                            View Prediction
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
