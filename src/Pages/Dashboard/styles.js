import styled from "styled-components";

export const DashboardContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: #1a1a1a;
  color: #f2f2f2;
  --webkit-font-smoothing: antialiased;
`;

export const Header = styled.header`
  background: #0d0d0d;
  padding: 3rem 0 5rem 0;
  margin: 0 auto;
  text-align: center;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 780px;
  @media (max-width: 480px) {
    width: 100vw;
  }
`;

export const NewTask = styled.section`
  display: flex;
  justify-content: center;
  margin-top: -1.5rem;
  margin-bottom: 4rem;
  gap: 1rem;

  input {
    font-size: 1rem;
    padding: 1rem;
    width: 100%;
    background: #262626;
    border: none;
    outline: none;
    color: #d9d9d9;
    line-height: 1.6;
    border-radius: 8px;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 1rem 1.25rem;
    background: #1e6f9f;
    border: none;
    border-radius: 8px;
    color: #f2f2f2;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;

    transition: background-color 0.1s;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: calc(100% - 2rem);
    margin: -2rem 1rem 3rem 1rem;

    input {
      width: 100%;
    }

    button {
      width: 100%;
      justify-content: center;
    }
  }
`;
