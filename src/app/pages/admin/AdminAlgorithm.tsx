import { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Settings, TrendingUp, AlertCircle } from "lucide-react";

export default function AdminAlgorithm() {
  const [weights, setWeights] = useState({
    odds: 20,
    teamForm: 30,
    homeAdvantage: 15,
    headToHead: 20,
    goalsStats: 15,
  });

  const [thresholds, setThresholds] = useState({
    low: 50,
    medium: 65,
    high: 75,
  });

  const totalWeight = Object.values(weights).reduce((sum, val) => sum + val, 0);
  const isValidTotal = totalWeight === 100;

  const handleWeightChange = (key: keyof typeof weights, value: number) => {
    setWeights({ ...weights, [key]: value });
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar isAdmin />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Algorithm Settings</h2>
            <p className="text-muted-foreground">
              Configure prediction algorithm weights and parameters
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Settings */}
            <div className="lg:col-span-2 space-y-6">
              {/* Weight Configuration */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold">Algorithm Weights</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-semibold">Odds Weight</label>
                      <span className="text-primary font-semibold">{weights.odds}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={weights.odds}
                      onChange={(e) => handleWeightChange("odds", parseInt(e.target.value))}
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #10B981 0%, #10B981 ${weights.odds}%, #334155 ${weights.odds}%, #334155 100%)`,
                      }}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-semibold">Team Form Weight</label>
                      <span className="text-primary font-semibold">{weights.teamForm}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={weights.teamForm}
                      onChange={(e) => handleWeightChange("teamForm", parseInt(e.target.value))}
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #10B981 0%, #10B981 ${weights.teamForm}%, #334155 ${weights.teamForm}%, #334155 100%)`,
                      }}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-semibold">Home Advantage Weight</label>
                      <span className="text-primary font-semibold">
                        {weights.homeAdvantage}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={weights.homeAdvantage}
                      onChange={(e) =>
                        handleWeightChange("homeAdvantage", parseInt(e.target.value))
                      }
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #10B981 0%, #10B981 ${weights.homeAdvantage}%, #334155 ${weights.homeAdvantage}%, #334155 100%)`,
                      }}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-semibold">Head-to-Head Weight</label>
                      <span className="text-primary font-semibold">{weights.headToHead}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={weights.headToHead}
                      onChange={(e) =>
                        handleWeightChange("headToHead", parseInt(e.target.value))
                      }
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #10B981 0%, #10B981 ${weights.headToHead}%, #334155 ${weights.headToHead}%, #334155 100%)`,
                      }}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-semibold">Goals/Stats Weight</label>
                      <span className="text-primary font-semibold">{weights.goalsStats}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={weights.goalsStats}
                      onChange={(e) =>
                        handleWeightChange("goalsStats", parseInt(e.target.value))
                      }
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #10B981 0%, #10B981 ${weights.goalsStats}%, #334155 ${weights.goalsStats}%, #334155 100%)`,
                      }}
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <span className="font-semibold">Total Weight</span>
                  <span
                    className={`text-2xl font-bold ${
                      isValidTotal ? "text-primary" : "text-destructive"
                    }`}
                  >
                    {totalWeight}%
                  </span>
                </div>

                {!isValidTotal && (
                  <div className="mt-4 flex items-center gap-2 p-4 bg-destructive/20 border border-destructive/30 rounded-lg text-sm">
                    <AlertCircle size={20} className="text-destructive" />
                    <span>Total weight must equal 100%. Current total: {totalWeight}%</span>
                  </div>
                )}
              </div>

              {/* Confidence Thresholds */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold">Confidence Thresholds</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm mb-2">
                      Low Confidence (below this value)
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={thresholds.low}
                        onChange={(e) =>
                          setThresholds({ ...thresholds, low: parseInt(e.target.value) })
                        }
                        className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #22D3EE 0%, #22D3EE ${thresholds.low}%, #334155 ${thresholds.low}%, #334155 100%)`,
                        }}
                      />
                      <span className="text-secondary font-semibold w-12">
                        {thresholds.low}%
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">
                      Medium Confidence (between low and this value)
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={thresholds.medium}
                        onChange={(e) =>
                          setThresholds({ ...thresholds, medium: parseInt(e.target.value) })
                        }
                        className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #22D3EE 0%, #22D3EE ${thresholds.medium}%, #334155 ${thresholds.medium}%, #334155 100%)`,
                        }}
                      />
                      <span className="text-secondary font-semibold w-12">
                        {thresholds.medium}%
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">
                      High Confidence (above this value)
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={thresholds.high}
                        onChange={(e) =>
                          setThresholds({ ...thresholds, high: parseInt(e.target.value) })
                        }
                        className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #22D3EE 0%, #22D3EE ${thresholds.high}%, #334155 ${thresholds.high}%, #334155 100%)`,
                        }}
                      />
                      <span className="text-secondary font-semibold w-12">
                        {thresholds.high}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Button disabled={!isValidTotal} className="w-full">
                Save Algorithm Settings
              </Button>
            </div>

            {/* Preview Panel */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-8">
                <h3 className="font-semibold mb-4">Weight Distribution</h3>
                <div className="space-y-3">
                  {Object.entries(weights).map(([key, value]) => (
                    <div key={key}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </span>
                        <span>{value}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all"
                          style={{ width: `${value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-3">Confidence Levels</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Low:</span>
                      <span className="text-muted-foreground">&lt; {thresholds.low}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Medium:</span>
                      <span className="text-muted-foreground">
                        {thresholds.low}% - {thresholds.medium}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>High:</span>
                      <span className="text-muted-foreground">&gt; {thresholds.high}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
