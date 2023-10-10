import axios from "axios";
import { createContext, useMemo, useState } from "react";
import { useAuth } from "../hooks/UseAuth";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const { setAuthenticated } = useAuth();
  const [tasklist, setTasklist_] = useState([]);

  const setTasklist = (data) => {
    setTasklist_(data);
  };

  async function handleDeleteTask(taskId) {
    try {
      const deleteItem = await axios.delete(
        `https://todo-list-api-7llo.onrender.com/task/${taskId}`
      );
      setAuthenticated(deleteItem.status);
      if (deleteItem.status === 204) {
        setTasklist(tasklist.filter((item) => item.id !== taskId));
      }
      return console.log(deleteItem);
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
        const updateTaskList = [...tasklist];
        updateTaskList.push(createTask.data[0]);
        setTasklist(updateTaskList);
      }
    } catch (error) {
      if (error.response.status === 400) {
        alert(error.response.data.message);
      }
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
        const updateItem = [...tasklist];
        updateItem.map((item) => {
          if (item.id === taskId) {
            item.status = !item.status;
          }
        });
        setTasklist(updateItem);
      }
    } catch (error) {
      setAuthenticated(error.response.status);
      console.log(error.response);
    }
  }

  async function handleUpdateTask(data) {
    const descData = {
      descricao: data.descricao,
    };
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const updateTaskDescription = await axios.put(
        `https://todo-list-api-7llo.onrender.com/task/${data.id}`,
        descData,
        axiosConfig
      );
      setAuthenticated(updateTaskDescription.status);
      if (updateTaskDescription.status === 204) {
        alert("Tarefa atualizada com sucesso!!");
      }
    } catch (error) {
      setAuthenticated(error.response.status);
      console.log(error.response);
    }
  }

  const requestValue = useMemo(
    () => ({
      tasklist,
      setTasklist,
      handleDeleteTask,
      handleCreateTask,
      handleTaskStatus,
      handleUpdateTask,
    }),
    [tasklist]
  );

  return (
    <TaskContext.Provider value={requestValue}>{children}</TaskContext.Provider>
  );
};
