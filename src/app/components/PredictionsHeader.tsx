import { useState } from "react";
import { Menu, Bell, User } from "lucide-react";
import { Button } from "./Button";
import { DashboardModal } from "./DashboardModal";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

export function PredictionsHeader() {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const { hasSubscription, subscribe, unsubscribe } = useAuth();

  return (
    <>
      <header className="bg-card border-b border-border px-6 py-4 sticky top-0 z-30">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg"></div>
            <span className="text-xl font-semibold">Vital FT Pics</span>
          </Link>
          <div className="flex items-center gap-4">
            {/* Testing Toggle - Remove in production */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => hasSubscription ? unsubscribe() : subscribe()}
              className="text-xs"
            >
              {hasSubscription ? "🔓 Subscribed" : "🔒 Not Subscribed"}
            </Button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsDashboardOpen(true)}
              className="flex items-center gap-2"
            >
              <Menu size={18} />
              <span>Dashboard</span>
            </Button>
            <div className="flex items-center gap-3 pl-4 border-l border-border">
              <div className="text-right">
                <div className="text-sm">John Doe</div>
                <div className="text-xs text-muted-foreground">
                  {hasSubscription ? "Premium User" : "Free User"}
                </div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <User size={20} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <DashboardModal
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
      />
    </>
  );
}