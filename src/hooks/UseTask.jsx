import { useContext } from "react";
import { TaskContext } from "../Contexts/TaskProvider";

export const useTask = () => {
  return useContext(TaskContext);
};
