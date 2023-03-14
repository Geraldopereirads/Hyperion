import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUserRegister } from "../../../Providers/UserContext/@types";
import { UserContext } from "../../../Providers/UserContext/UserContext";
import { schemaRegister } from "../schemas/registerSchemas";
import { BaseInput } from "../Input";
import imagemLogin from "../../../assets/img/RegisterPage.svg";
import { StyledDivRegisterPage, StyledSectionRegister } from "./styled";
import { Overlay } from "../FormLogin/styled";
import { Link } from "react-router-dom";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(schemaRegister),
  });

  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IUserRegister> = (data) => {
    userRegister(data);
    reset();
  };

  return (
    <StyledSectionRegister>
      <StyledDivRegisterPage>
        <form onSubmit={handleSubmit(submit)}>
          <h1>Criar conta</h1>

          <BaseInput
            type="text"
            register={register("name")}
            error={errors.name}
            label={"Nome"}
            placeholder={"Digite seu nome"}
          />

          <BaseInput
            type="text"
            register={register("age")}
            error={errors.age}
            label={"Idade"}
            placeholder={"Digite sua idade"}
          />

          <BaseInput
            type="email"
            register={register("email")}
            error={errors.email}
            label={"Email"}
            placeholder={"Digite seu email"}
          />

          <BaseInput
            type="password"
            label="Senha"
            register={register("password")}
            error={errors.password}
            placeholder={"Digite uma senha"}
          />

          <BaseInput
            type="password"
            label="Confirmar Senha"
            register={register("confirmPassword")}
            error={errors.confirmPassword}
            placeholder={"Por favor confirme sua senha"}
          />
          <button type="submit">Cadastrar</button>
          <Link to={"/login"}>Já possui cadastro ?</Link>
        </form>
        <img src={imagemLogin} alt="imageRegister" className="imageRegister" />
      </StyledDivRegisterPage>

      <Overlay />
    </StyledSectionRegister>
  );
};
