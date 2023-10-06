import { ListItem } from "./styles";
import { Circle, CheckCircle, Trash } from "phosphor-react";
export function Task({ task, handleDeleteTask, handleTaskStatus }) {
  return (
    <ListItem className={task.status ? "checked" : "noChecked"}>
      <button
        className={task.status ? "check" : "normal"}
        onClick={() => handleTaskStatus(task.id)}
      >
        {task.status ? <CheckCircle size={24} /> : <Circle size={24} />}
      </button>
      <p>{task.description}</p>
      <button className="delete" onClick={() => handleDeleteTask(task.id)}>
        <Trash size={24} />
      </button>
    </ListItem>
  );
}
