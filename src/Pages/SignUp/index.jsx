import {
  ContentContainer,
  FormGroup,
  HomeContainer,
  SpanError,
} from "./styles";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import bg from "../../../assets/bg-signup.png";
import axios from "axios";
import { useState } from "react";
import { DefaultButton } from "../../styles/global";
import { motion } from "framer-motion";
export function SignUp() {
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
      await axios.post(
        "https://todo-list-api-7llo.onrender.com/user",
        data,
        axiosConfig
      );
      setErrorMessage("");
      alert("Usuário cadastrado com sucesso.");
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.outerWidth }}
    >
      <HomeContainer>
        <img src={bg} alt="" />

        <ContentContainer>
          <header>
            <h3>Faça seu Cadastro</h3>
            <p>
              Transforme sua vida em uma lista de conquistas. Cadastre-se agora
              e comece a traçar seu caminho para o sucesso!.
            </p>
            <p>
              Caso já tenha cadastro, faça o seu login <Link to="/">aqui</Link>.
            </p>
          </header>
          <div className="form">
            <FormGroup>
              <label htmlFor="">Nome</label>
              <input
                type="text"
                {...register("nome")}
                placeholder="digite o seu nome"
              />
            </FormGroup>
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
          <DefaultButton onClick={() => handleSubmit(onsubmit)()} type="submit">
            Cadastrar
          </DefaultButton>
          <SpanError className={errorMessage === "" ? "" : "active"}>
            {errorMessage}
          </SpanError>
        </ContentContainer>
      </HomeContainer>
    </motion.div>
  );
}
