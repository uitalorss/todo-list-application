import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100vw;
  background: #f2f2f2;

  img {
    height: 100vh;
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 50vw;
  width: 60%;
  margin: 0 auto;
  header {
    margin-bottom: 2.5rem;
    h3 {
      font-weight: 700;
      line-height: 2rem;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: right;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 70%;
  label {
    font-weight: 500;
  }
  input {
    padding: 1rem 0.75rem;
    border-radius: 10px;
    border: 1px solid #c0c0c0;
  }
`;

export const ButtonLogin = styled.button`
  width: 70%;
  padding: 1rem 0.75rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

export const SpanError = styled.span`
  &.active {
    width: 70%;
    padding: 1rem;
    background: #ff525220;
    color: #c0392b;
    border-radius: 10px;
    text-align: center;
  }
`;
