import { Navigate } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";
import { useAuth } from "../hooks/UseAuth";

export const ProtectedRoute = () => {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return <Navigate to="/" />;
  }
  return <Dashboard />;
};
