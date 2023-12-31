import { ClipboardText } from "phosphor-react";
import { Task } from "../Task";
import {
  CountersContainer,
  ListContainer,
  NoTaskContainer,
  TaskListContainer,
} from "./styles";

export function Tasklist({ tasklist }) {
  return (
    <TaskListContainer>
      <CountersContainer>
        <strong>
          Tarefas criadas<span>{tasklist.length}</span>
        </strong>
      </CountersContainer>
      {tasklist.length !== 0 ? (
        <ListContainer>
          {tasklist.map((item) => {
            return <Task key={item.id} task={item} />;
          })}
        </ListContainer>
      ) : (
        <div>
          <NoTaskContainer>
            <ClipboardText size={80} />
            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </NoTaskContainer>
        </div>
      )}
    </TaskListContainer>
  );
}
