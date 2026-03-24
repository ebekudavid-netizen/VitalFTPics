import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Lock, Eye } from "lucide-react";

export default function AdminPredictions() {
  const predictions = [
    {
      id: 1,
      homeTeam: "Manchester United",
      awayTeam: "Liverpool",
      prediction: "Liverpool Win",
      confidence: 78,
      status: "Active",
      locked: false,
    },
    {
      id: 2,
      homeTeam: "Barcelona",
      awayTeam: "Real Madrid",
      prediction: "Barcelona Win",
      confidence: 65,
      status: "Active",
      locked: true,
    },
    {
      id: 3,
      homeTeam: "Bayern Munich",
      awayTeam: "Borussia Dortmund",
      prediction: "Draw",
      confidence: 52,
      status: "Active",
      locked: false,
    },
    {
      id: 4,
      homeTeam: "PSG",
      awayTeam: "Marseille",
      prediction: "PSG Win",
      confidence: 82,
      status: "Active",
      locked: true,
    },
    {
      id: 5,
      homeTeam: "Juventus",
      awayTeam: "AC Milan",
      prediction: "Juventus Win",
      confidence: 71,
      status: "Active",
      locked: false,
    },
  ];

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 75) return "text-primary";
    if (confidence >= 50) return "text-secondary";
    return "text-muted-foreground";
  };

  const getConfidenceLevel = (confidence: number) => {
    if (confidence >= 75) return "High";
    if (confidence >= 50) return "Medium";
    return "Low";
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar isAdmin />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Predictions</h2>
            <p className="text-muted-foreground">Manage and lock predictions</p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-sm text-muted-foreground mb-1">Total Predictions</div>
              <div className="text-3xl font-bold">{predictions.length}</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-sm text-muted-foreground mb-1">High Confidence</div>
              <div className="text-3xl font-bold text-primary">
                {predictions.filter((p) => p.confidence >= 75).length}
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-sm text-muted-foreground mb-1">Locked</div>
              <div className="text-3xl font-bold text-secondary">
                {predictions.filter((p) => p.locked).length}
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-sm text-muted-foreground mb-1">Active</div>
              <div className="text-3xl font-bold">
                {predictions.filter((p) => p.status === "Active").length}
              </div>
            </div>
          </div>

          {/* Predictions Table */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold">Match</th>
                    <th className="text-left p-4 font-semibold">Predicted Winner</th>
                    <th className="text-left p-4 font-semibold">Confidence</th>
                    <th className="text-left p-4 font-semibold">Level</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                    <th className="text-left p-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {predictions.map((prediction) => (
                    <tr
                      key={prediction.id}
                      className="border-t border-border hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-4 font-semibold">
                        {prediction.homeTeam} vs {prediction.awayTeam}
                      </td>
                      <td className="p-4">{prediction.prediction}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 max-w-[120px] bg-muted rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                              style={{ width: `${prediction.confidence}%` }}
                            ></div>
                          </div>
                          <span className={`font-semibold ${getConfidenceColor(prediction.confidence)}`}>
                            {prediction.confidence}%
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs ${
                            prediction.confidence >= 75
                              ? "bg-primary/20 text-primary"
                              : prediction.confidence >= 50
                              ? "bg-secondary/20 text-secondary"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {getConfidenceLevel(prediction.confidence)}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          {prediction.locked && (
                            <Lock size={16} className="text-primary" />
                          )}
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs ${
                              prediction.locked
                                ? "bg-primary/20 text-primary"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {prediction.locked ? "Locked" : "Unlocked"}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline">
                            <Eye size={16} className="mr-2" />
                            View
                          </Button>
                          <Button size="sm" variant={prediction.locked ? "outline" : "primary"}>
                            {prediction.locked ? "Unlock" : "Lock"}
                          </Button>
                        </div>
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
