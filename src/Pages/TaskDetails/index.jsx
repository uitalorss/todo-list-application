import { Check, Circle, Trash } from "phosphor-react";
import { Content, DashboardContainer, Header } from "../Dashboard/styles";
import { TaskDetailContainer } from "./styles";
import logo from "../../../assets/logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthProvider";
import { useForm } from "react-hook-form";
import { useTask } from "../../Contexts/TaskProvider";

export function TaskDetails() {
  const { taskId } = useParams();
  const { handleUpdateTask } = useTask();

  const [task, setTask] = useState({
    id: "",
    description: "",
    status: false,
    customer_id: "",
    created_at: "",
  });
  const { token, setAuthenticated } = useAuth();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: taskId,
    },
  });

  useEffect(() => {
    async function load() {
      try {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const taskContent = await axios.get(
          `https://todo-list-api-7llo.onrender.com/task/${taskId}`
        );
        setAuthenticated(taskContent.status);
        setTask({ ...taskContent.data });
      } catch (error) {
        console.log(error.response);
      }
    }
    load();
  }, []);

  return (
    <DashboardContainer>
      <Header>
        <img src={logo} alt="" />
      </Header>
      <Content>
        <TaskDetailContainer>
          <button className="normal">
            <Circle size={24} />
          </button>
          <input
            type="text"
            {...register("descricao")}
            defaultValue={task.description}
          />
          <button
            onClick={() => handleSubmit(handleUpdateTask)()}
            className="normal"
          >
            <Check size={24} />
          </button>
          <button className="delete">
            <Trash size={24} />
          </button>
        </TaskDetailContainer>
      </Content>
    </DashboardContainer>
  );
}
