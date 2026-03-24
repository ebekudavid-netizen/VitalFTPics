import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Search, Filter } from "lucide-react";

export default function AdminUsers() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      subscription: "1 Month",
      status: "Active",
      expiresAt: "April 15, 2026",
      joinedAt: "January 15, 2026",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      subscription: "3 Months",
      status: "Active",
      expiresAt: "June 10, 2026",
      joinedAt: "February 10, 2026",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.j@example.com",
      subscription: "Day Pass",
      status: "Expired",
      expiresAt: "March 20, 2026",
      joinedAt: "March 19, 2026",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah.w@example.com",
      subscription: "1 Month",
      status: "Active",
      expiresAt: "April 22, 2026",
      joinedAt: "February 22, 2026",
    },
    {
      id: 5,
      name: "David Brown",
      email: "david.brown@example.com",
      subscription: "3 Months",
      status: "Active",
      expiresAt: "May 5, 2026",
      joinedAt: "January 5, 2026",
    },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar isAdmin />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Users</h2>
            <p className="text-muted-foreground">Manage user accounts and subscriptions</p>
          </div>

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
                  placeholder="Search users..."
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="relative">
                <Filter
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={20}
                />
                <select className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Expired</option>
                </select>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-sm text-muted-foreground mb-1">Total Users</div>
              <div className="text-3xl font-bold">{users.length}</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-sm text-muted-foreground mb-1">Active</div>
              <div className="text-3xl font-bold text-primary">
                {users.filter((u) => u.status === "Active").length}
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-sm text-muted-foreground mb-1">Expired</div>
              <div className="text-3xl font-bold text-destructive">
                {users.filter((u) => u.status === "Expired").length}
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-sm text-muted-foreground mb-1">This Month</div>
              <div className="text-3xl font-bold text-secondary">
                {users.filter((u) => u.joinedAt.includes("March")).length}
              </div>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold">Name</th>
                    <th className="text-left p-4 font-semibold">Email</th>
                    <th className="text-left p-4 font-semibold">Subscription</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                    <th className="text-left p-4 font-semibold">Expires At</th>
                    <th className="text-left p-4 font-semibold">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="border-t border-border hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-4 font-semibold">{user.name}</td>
                      <td className="p-4 text-sm text-muted-foreground">{user.email}</td>
                      <td className="p-4 text-sm">{user.subscription}</td>
                      <td className="p-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs ${
                            user.status === "Active"
                              ? "bg-primary/20 text-primary"
                              : "bg-destructive/20 text-destructive"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm">{user.expiresAt}</td>
                      <td className="p-4 text-sm text-muted-foreground">{user.joinedAt}</td>
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
