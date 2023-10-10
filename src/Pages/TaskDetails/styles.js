import styled from "styled-components";
import { ListItem } from "../Dashboard/components/Task/styles";

export const TaskDetailContainer = styled(ListItem)`
  padding: 1.5rem;
  margin-top: 3rem;
  grid-template-columns: 1fr 600px 1fr 1fr;
  input {
    font-size: 1rem;
    background: none;
    border: none;
    color: #f2f2f2;
  }
`;
