import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserDashboard from "./pages/UserDashboard";
import UserPredictions from "./pages/UserPredictions";
import UserSubscription from "./pages/UserSubscription";
import UserSettings from "./pages/UserSettings";
import PredictionDetails from "./pages/PredictionDetails";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminAPIControl from "./pages/admin/AdminAPIControl";
import AdminAlgorithm from "./pages/admin/AdminAlgorithm";
import AdminMatches from "./pages/admin/AdminMatches";
import AdminPredictions from "./pages/admin/AdminPredictions";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminSubscriptions from "./pages/admin/AdminSubscriptions";
import AdminSettings from "./pages/admin/AdminSettings";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/landing",
    Component: Landing,
  },
  {
    path: "/signin",
    Component: SignIn,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/dashboard",
    Component: UserDashboard,
  },
  {
    path: "/predictions",
    Component: UserPredictions,
  },
  {
    path: "/prediction/:id",
    Component: PredictionDetails,
  },
  {
    path: "/subscription",
    Component: UserSubscription,
  },
  {
    path: "/settings",
    Component: UserSettings,
  },
  {
    path: "/admin",
    Component: AdminDashboard,
  },
  {
    path: "/admin/api-control",
    Component: AdminAPIControl,
  },
  {
    path: "/admin/algorithm",
    Component: AdminAlgorithm,
  },
  {
    path: "/admin/matches",
    Component: AdminMatches,
  },
  {
    path: "/admin/predictions",
    Component: AdminPredictions,
  },
  {
    path: "/admin/users",
    Component: AdminUsers,
  },
  {
    path: "/admin/subscriptions",
    Component: AdminSubscriptions,
  },
  {
    path: "/admin/settings",
    Component: AdminSettings,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);