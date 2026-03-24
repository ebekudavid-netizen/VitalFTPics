import { useAuth } from "../context/AuthContext";
import Landing from "./Landing";
import UserPredictions from "./UserPredictions";

export default function HomePage() {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <UserPredictions /> : <Landing />;
}
