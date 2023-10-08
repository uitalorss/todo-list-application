import { Check, Circle, Trash } from "phosphor-react";
import { Content, DashboardContainer, Header } from "../Dashboard/styles";
import { TaskDetailContainer } from "./styles";
import logo from "../../../assets/logo.svg";

export function TaskDetails() {
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
          <p>Teste</p>
          <button className="normal">
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
