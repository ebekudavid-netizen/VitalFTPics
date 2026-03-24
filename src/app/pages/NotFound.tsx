import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button>
              <Home size={20} className="mr-2" />
              Go Home
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft size={20} className="mr-2" />
            Go Back
          </Button>
        </div>

        <div className="mt-12 p-6 bg-card border border-border rounded-lg">
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <div className="space-y-2 text-sm">
            <Link to="/dashboard" className="block text-primary hover:underline">
              User Dashboard
            </Link>
            <Link to="/predictions" className="block text-primary hover:underline">
              View Predictions
            </Link>
            <Link to="/admin" className="block text-primary hover:underline">
              Admin Panel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
