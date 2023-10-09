import axios from "axios";
import logo from "../../../assets/logo.svg";
import { useEffect, useState } from "react";
import { useAuth } from "../../Contexts/AuthProvider";
import { Content, DashboardContainer, Header, NewTask } from "./styles";
import { Tasklist } from "./components/TaskList";
import { useForm } from "react-hook-form";
import { PlusCircle } from "phosphor-react";

export function Dashboard() {
  const { token, setAuthenticated } = useAuth();
  const { register, handleSubmit } = useForm();
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
      setAuthenticated(deleteItem.status);
      if (deleteItem.status === 204) {
        setTaskList(taskList.filter((item) => item.id !== taskId));
      }
      return console.log(deleteItem);
    } catch (error) {
      setAuthenticated(error.response.status);
      console.log(error.response);
    }
  }

  async function handleTaskStatus(taskId) {
    try {
      const updateTaskStatus = await axios.patch(
        `https://todo-list-api-7llo.onrender.com/task/${taskId}`
      );
      setAuthenticated(updateTaskStatus.status);
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
      setAuthenticated(error.response.status);
      console.log(error.response);
    }
  }

  async function handleCreateTask(data) {
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const createTask = await axios.post(
        "https://todo-list-api-7llo.onrender.com/task",
        data,
        axiosConfig
      );
      if (createTask.status === 201) {
        const updateTaskList = [...taskList];
        updateTaskList.push(createTask.data[0]);
        setTaskList(updateTaskList);
      }
    } catch (error) {
      if (error.response.status === 400) {
        alert(error.response.data.message);
      }
      console.log(error.response);
    }
  }
  return (
    <DashboardContainer>
      <Header>
        <img src={logo} alt="" />
      </Header>
      <Content>
        <NewTask>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            {...register("descricao")}
          />
          <button onClick={() => handleSubmit(handleCreateTask)()}>
            Criar <PlusCircle size={24} />
          </button>
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
