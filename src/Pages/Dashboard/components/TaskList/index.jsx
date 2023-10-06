import { Task } from "../Task";
import { ListContainer } from "./styles";

export function Tasklist({ tasklist, handleDeleteTask }) {
  return (
    <ListContainer>
      {tasklist.map((item) => {
        return (
          <Task key={item.id} task={item} handleDeleteTask={handleDeleteTask} />
        );
      })}
    </ListContainer>
  );
}
