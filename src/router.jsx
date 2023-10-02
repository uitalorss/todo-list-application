import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Tasks } from "./Pages/Tasks";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/tasks" element={<Tasks />} />
      {/* <Route path="/signup" element={<SignUp />} />
       */}
    </Routes>
  );
}
