import { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Plus, Edit, Trash2, RefreshCw, CheckCircle, XCircle } from "lucide-react";

export default function AdminAPIControl() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [apis, setApis] = useState([
    {
      id: 1,
      name: "Football Data API",
      url: "https://api.football-data.org/v4",
      key: "••••••••••••••••",
      status: true,
      refreshInterval: 15,
      lastSync: "2 minutes ago",
    },
    {
      id: 2,
      name: "API Sports",
      url: "https://api-football-v1.api-sports.io/v3",
      key: "••••••••••••••••",
      status: true,
      refreshInterval: 30,
      lastSync: "5 minutes ago",
    },
    {
      id: 3,
      name: "Odds API",
      url: "https://api.the-odds-api.com/v4",
      key: "••••••••••••••••",
      status: false,
      refreshInterval: 60,
      lastSync: "1 hour ago",
    },
  ]);

  const toggleAPIStatus = (id: number) => {
    setApis(apis.map(api => api.id === id ? { ...api, status: !api.status } : api));
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar isAdmin />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h2 className="text-2xl font-semibold">API Control Center</h2>
                <p className="text-muted-foreground mt-1">Manage data source APIs</p>
              </div>
              <Button onClick={() => setShowAddModal(true)}>
                <Plus size={20} className="mr-2" />
                Add New API
              </Button>
            </div>
          </div>

          {/* API Table */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold">Name</th>
                    <th className="text-left p-4 font-semibold">URL</th>
                    <th className="text-left p-4 font-semibold">API Key</th>
                    <th className="text-left p-4 font-semibold">Refresh (min)</th>
                    <th className="text-left p-4 font-semibold">Last Sync</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                    <th className="text-left p-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {apis.map((api) => (
                    <tr key={api.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-semibold">{api.name}</td>
                      <td className="p-4 text-sm text-muted-foreground max-w-xs truncate">
                        {api.url}
                      </td>
                      <td className="p-4">
                        <code className="px-3 py-1 bg-background rounded text-sm font-mono">
                          {api.key}
                        </code>
                      </td>
                      <td className="p-4">
                        <input
                          type="number"
                          value={api.refreshInterval}
                          className="w-20 px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            setApis(apis.map(a => a.id === api.id ? { ...a, refreshInterval: value } : a));
                          }}
                        />
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">{api.lastSync}</td>
                      <td className="p-4">
                        <button
                          onClick={() => toggleAPIStatus(api.id)}
                          className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                            api.status
                              ? "bg-primary/20 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {api.status ? (
                            <>
                              <CheckCircle size={16} />
                              Active
                            </>
                          ) : (
                            <>
                              <XCircle size={16} />
                              Inactive
                            </>
                          )}
                        </button>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <button
                            className="p-2 hover:bg-muted rounded-lg transition-colors"
                            title="Sync Now"
                          >
                            <RefreshCw size={18} />
                          </button>
                          <button
                            className="p-2 hover:bg-muted rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            className="p-2 hover:bg-destructive/20 text-destructive rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add API Modal */}
          {showAddModal && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-card border border-border rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <h3 className="text-2xl font-semibold mb-6">Add New API</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">API Name</label>
                    <input
                      type="text"
                      placeholder="e.g., Football Data API"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">API URL</label>
                    <input
                      type="url"
                      placeholder="https://api.example.com/v1"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">API Key</label>
                    <input
                      type="text"
                      placeholder="Enter your API key"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Refresh Interval (minutes)</label>
                    <input
                      type="number"
                      defaultValue={15}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button onClick={() => setShowAddModal(false)}>Add API</Button>
                  <Button variant="outline" onClick={() => setShowAddModal(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
