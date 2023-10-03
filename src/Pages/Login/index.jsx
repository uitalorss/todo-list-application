import {
  ButtonLogin,
  ContentContainer,
  FormGroup,
  HomeContainer,
  SpanError,
} from "./styles";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import bg from "../../../assets/bg.png";
import axios from "axios";
import { useState } from "react";

export function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const onsubmit = async (data) => {
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const login = await axios.post(
        "https://todo-list-api-7llo.onrender.com/login",
        data,
        axiosConfig
      );
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${login.data.token}`;
      console.log(login.data.token);
      setErrorMessage("");
      navigate("/tasks");
    } catch (error) {
      setErrorMessage(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <HomeContainer>
      <ContentContainer>
        <header>
          <h3>Acesse a plataforma</h3>
          <p>
            Faça o login ou <Link to="/signup">registre-se</Link> para começar a
            organizar a sua vida.
          </p>
        </header>
        <div className="form">
          <FormGroup>
            <label htmlFor="">E-mail</label>
            <input
              type="text"
              {...register("email")}
              placeholder="digite o seu e-mail"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="">Senha</label>
            <input
              type="password"
              {...register("senha")}
              placeholder="Digite a sua senha"
            />
          </FormGroup>
        </div>
        <ButtonLogin onClick={() => handleSubmit(onsubmit)()} type="submit">
          Login
        </ButtonLogin>
        <SpanError className={errorMessage === "" ? "" : "active"}>
          {errorMessage}
        </SpanError>
      </ContentContainer>
      <img src={bg} alt="" />
    </HomeContainer>
  );
}