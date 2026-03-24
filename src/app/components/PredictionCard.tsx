import { useState } from "react";
import { ChevronDown, ChevronUp, Calendar, Activity } from "lucide-react";
import { Link } from "react-router";

interface PredictionCardProps {
  id: string;
  homeTeam: string;
  awayTeam: string;
  prediction: string;
  confidence: number;
  matchDate?: string;
  odds: {
    home: number;
    draw: number;
    away: number;
  };
  explanation?: {
    teamForm: string;
    homeAdvantage: string;
    oddsInsight: string;
    statistics: string;
  };
}

export function PredictionCard({
  id,
  homeTeam,
  awayTeam,
  prediction,
  confidence,
  matchDate,
  odds,
  explanation,
}: PredictionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getConfidenceLevel = (conf: number) => {
    if (conf >= 75) return { label: "High", color: "bg-primary" };
    if (conf >= 50) return { label: "Medium", color: "bg-secondary" };
    return { label: "Low", color: "bg-muted-foreground" };
  };

  const confidenceLevel = getConfidenceLevel(confidence);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1.5 bg-secondary/10 border border-secondary/20 rounded-full px-2 py-0.5">
                <Activity size={12} className="text-secondary" />
                <span className="text-xs text-secondary font-semibold">Live Data</span>
              </div>
            </div>
            <h3 className="text-lg mb-1">
              {homeTeam} vs {awayTeam}
            </h3>
            {matchDate && (
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-2">
                <Calendar size={14} />
                <span>{matchDate}</span>
              </div>
            )}
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs ${confidenceLevel.color} text-white`}
            >
              {confidenceLevel.label} Confidence
            </span>
          </div>
          <Link
            to={`/prediction/${id}`}
            className="text-primary hover:text-primary/80 text-sm"
          >
            View Details
          </Link>
        </div>

        <div className="bg-background/50 rounded-lg p-4 mb-4">
          <div className="text-sm text-muted-foreground mb-1">Prediction</div>
          <div className="text-2xl font-semibold text-primary mb-2">{prediction}</div>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${confidence}%` }}
              ></div>
            </div>
            <span className="text-sm font-semibold">{confidence}%</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-background/30 rounded-lg p-3 text-center">
            <div className="text-xs text-muted-foreground mb-1">Home</div>
            <div className="font-semibold">{odds.home.toFixed(2)}</div>
          </div>
          <div className="bg-background/30 rounded-lg p-3 text-center">
            <div className="text-xs text-muted-foreground mb-1">Draw</div>
            <div className="font-semibold">{odds.draw.toFixed(2)}</div>
          </div>
          <div className="bg-background/30 rounded-lg p-3 text-center">
            <div className="text-xs text-muted-foreground mb-1">Away</div>
            <div className="font-semibold">{odds.away.toFixed(2)}</div>
          </div>
        </div>

        {explanation && (
          <>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-between w-full text-left text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <span>View Analysis</span>
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {isExpanded && (
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <div className="text-muted-foreground mb-1">Team Form Analysis</div>
                  <div>{explanation.teamForm}</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Home vs Away Performance</div>
                  <div>{explanation.homeAdvantage}</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Odds-Based Probability Insight</div>
                  <div>{explanation.oddsInsight}</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Final Reasoning Summary</div>
                  <div>{explanation.statistics}</div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}