import styled from "styled-components";

export const ListContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  gap: 1rem;
  font-size: 1.125rem;
  svg {
    color: #808080;
  }
  div {
    color: #808080;
    text-align: center;
  }
`;

export const CountersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  strong {
    font-size: 1rem;
    font-weight: 700;
    color: #8284fa;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  span {
    color: #f2f2f2;
    background: #333333;
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
  }
`;
