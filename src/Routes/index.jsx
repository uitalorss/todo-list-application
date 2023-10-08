import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "../Pages/Login";
import { SignUp } from "../Pages/SignUp";
import { ProtectedRoute } from "./ProtectedRoute";
import { TaskDetails } from "../Pages/TaskDetails";

export function Routes() {
  const routesForPublic = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ];

  const routesForAuthenticated = [
    {
      path: "/dashboard",
      element: <ProtectedRoute />,
    },
    { path: "/details", element: <TaskDetails /> },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...routesForAuthenticated,
  ]);

  return <RouterProvider router={router} />;
}
