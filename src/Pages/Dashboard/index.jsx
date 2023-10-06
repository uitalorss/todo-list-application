import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../Contexts/AuthProvider";
import { Content, DashboardContainer, Header, NewTask } from "./styles";
import { Tasklist } from "./components/TaskList";

export function Dashboard() {
  const { token, setAuthenticated } = useAuth();
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    async function load() {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const tasks = await axios.get(
          "https://todo-list-api-7llo.onrender.com/tasks"
        );
        setAuthenticated(tasks.status);
        setTaskList(tasks.data);
        console.log(tasks);
      } catch (error) {
        console.log(error.response);
      }
    }
    load();
  }, []);

  async function handleDeleteTask(taskId) {
    try {
      const deleteItem = await axios.delete(
        `https://todo-list-api-7llo.onrender.com/task/${taskId}`
      );
      if (deleteItem.status === 204) {
        setTaskList(taskList.filter((item) => item.id !== taskId));
      }
      return console.log(deleteItem);
    } catch (error) {
      console.log(error.response);
    }
  }

  async function handleTaskStatus(taskId) {
    try {
      const updateTaskStatus = await axios.patch(
        `https://todo-list-api-7llo.onrender.com/task/${taskId}`
      );
      if (updateTaskStatus.status === 204) {
        const updateItem = [...taskList];
        updateItem.map((item) => {
          if (item.id === taskId) {
            item.status = !item.status;
          }
        });
        setTaskList(updateItem);
      }
    } catch (error) {
      console.log(error.response);
    }
  }
  return (
    <DashboardContainer>
      <Content>
        <Header>
          <h3>todo-list</h3>
        </Header>
        <NewTask>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>Criar</button>
        </NewTask>
        <Tasklist
          tasklist={taskList}
          handleDeleteTask={handleDeleteTask}
          handleTaskStatus={handleTaskStatus}
        />
      </Content>
    </DashboardContainer>
  );
}
