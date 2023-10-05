import { Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";
import { Dashboard } from "../Pages/Dashboard";

export const ProtectedRoute = () => {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return <Navigate to="/" />;
  }
  return <Dashboard />;
};
