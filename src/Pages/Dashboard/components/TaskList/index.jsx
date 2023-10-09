import { ClipboardText } from "phosphor-react";
import { Task } from "../Task";
import { CountersContainer, ListContainer, NoTaskContainer } from "./styles";

export function Tasklist({
  tasklist,
  handleDeleteTask,
  handleTaskStatus,
  handleDetailTask,
}) {
  return (
    <div>
      <CountersContainer>
        <strong>
          Tarefas criadas<span>{tasklist.length}</span>
        </strong>
      </CountersContainer>
      {tasklist.length !== 0 ? (
        <ListContainer>
          {tasklist.map((item) => {
            return (
              <Task
                key={item.id}
                task={item}
                handleDeleteTask={handleDeleteTask}
                handleTaskStatus={handleTaskStatus}
                handleDetailTask={handleDetailTask}
              />
            );
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
    </div>
  );
}
