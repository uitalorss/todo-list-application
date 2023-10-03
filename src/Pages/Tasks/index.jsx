import axios from "axios";
import { useEffect } from "react";

export function Tasks() {
  useEffect(() => {
    async function load() {
      try {
        const tasks = await axios.get(
          "https://todo-list-api-7llo.onrender.com/tasks"
        );
        console.log(tasks);
      } catch (error) {
        console.log(error.response.data.message);
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
