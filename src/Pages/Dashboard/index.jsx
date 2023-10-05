import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../Contexts/AuthProvider";

export function Dashboard() {
  const { token, setAuthenticated } = useAuth();
  useEffect(() => {
    async function load() {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const tasks = await axios.get(
          "https://todo-list-api-7llo.onrender.com/tasks"
        );
        setAuthenticated(tasks.status);
        console.log(tasks.data);
      } catch (error) {
        console.log(error.response);
      }
    }
    load();
  });
  return (
    <div>
      <h1>Tô aqui</h1>
    </div>
  );
}
