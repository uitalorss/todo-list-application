import { useNavigate } from "react-router-dom";
import { ListItem } from "./styles";
import { Circle, CheckCircle, Trash, Pencil } from "phosphor-react";
import { useTask } from "../../../../hooks/UseTask";

export function Task({ task }) {
  const navigate = useNavigate();
  const { handleDeleteTask, handleTaskStatus } = useTask();

  return (
    <ListItem className={task.status ? "checked" : "noChecked"}>
      <button
        className={task.status ? "check" : "normal"}
        onClick={() => handleTaskStatus(task.id)}
      >
        {task.status ? <CheckCircle size={24} /> : <Circle size={24} />}
      </button>
      <p>{task.description}</p>
      <button onClick={() => navigate(`/dashboard/${task.id}`)}>
        <Pencil size={24} />
      </button>
      <button className="delete" onClick={() => handleDeleteTask(task.id)}>
        <Trash size={24} />
      </button>
    </ListItem>
  );
}
