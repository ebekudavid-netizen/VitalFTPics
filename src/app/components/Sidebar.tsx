import { Link, useLocation } from "react-router";
import { LayoutDashboard, TrendingUp, CreditCard, Settings, User } from "lucide-react";

interface SidebarProps {
  isAdmin?: boolean;
}

export function Sidebar({ isAdmin = false }: SidebarProps) {
  const location = useLocation();

  const userLinks = [
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/predictions", icon: TrendingUp, label: "Predictions" },
    { to: "/subscription", icon: CreditCard, label: "Subscription" },
    { to: "/settings", icon: Settings, label: "Settings" },
  ];

  const adminLinks = [
    { to: "/admin", icon: LayoutDashboard, label: "Overview" },
    { to: "/admin/api-control", icon: Settings, label: "API Control Center" },
    { to: "/admin/algorithm", icon: TrendingUp, label: "Algorithm Settings" },
    { to: "/admin/matches", icon: TrendingUp, label: "Matches" },
    { to: "/admin/predictions", icon: TrendingUp, label: "Predictions" },
    { to: "/admin/users", icon: User, label: "Users" },
    { to: "/admin/subscriptions", icon: CreditCard, label: "Subscriptions" },
    { to: "/admin/settings", icon: Settings, label: "System Settings" },
  ];

  const links = isAdmin ? adminLinks : userLinks;

  return (
    <div className="w-64 bg-card border-r border-border h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b border-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg"></div>
          <span className="text-xl font-semibold">Vital FT Pics</span>
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon size={20} />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}