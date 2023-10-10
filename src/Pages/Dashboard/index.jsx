import logo from "../../../assets/logo.svg";
import { Content, DashboardContainer, Header, NewTask } from "./styles";
import { Tasklist } from "./components/TaskList";
import { useForm } from "react-hook-form";
import { PlusCircle } from "phosphor-react";
import { useEffect } from "react";
import axios from "axios";
import { useTask } from "../../hooks/UseTask";
import { useAuth } from "../../hooks/UseAuth";

export function Dashboard() {
  const { register, handleSubmit } = useForm();
  const { token, setAuthenticated } = useAuth();
  const { tasklist, setTasklist, handleCreateTask } = useTask();

  useEffect(() => {
    async function load() {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      try {
        const tasks = await axios.get(
          "https://todo-list-api-7llo.onrender.com/tasks"
        );
        setTasklist(tasks.data);
        setAuthenticated(tasks.status);
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
        <Tasklist tasklist={tasklist} />
      </Content>
    </DashboardContainer>
  );
}
