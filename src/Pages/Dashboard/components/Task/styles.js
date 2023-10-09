import styled from "styled-components";

export const ListItem = styled.li`
  width: 100%;
  list-style: none;
  background: #262626;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 600px 1fr 1fr;
  align-items: center;
  gap: 1rem;
  border: 1px solid #333333;
  border-radius: 8px;
  & + li {
    margin-top: 0.75rem;
  }
  button {
    background: transparent;
    border: none;
    outline: none;
    color: #808080;
    cursor: pointer;
    &.check {
      color: #4ea8de;
    }
    &.normal {
      color: #808080;
    }

    &.delete {
      color: #808080;
      &:hover {
        color: #e25858;
      }
    }
  }
  &.checked {
    text-decoration: line-through;
    color: #808080;
  }
  &.noChecked {
    text-decoration: none;
    color: #f2f2f2;
  }
`;
