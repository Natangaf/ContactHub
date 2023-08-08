import { StyledFormRegister } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useAuth } from "../../hooks/useAuth";
import { Inputs } from './../Inputs/index';
import { BiRename } from "react-icons/bi"
import { MdPassword } from "react-icons/md"
import { AiOutlineMail, AiFillPhone } from "react-icons/ai"
import { StyledButtons } from './../../styles/Buttons';
import { formSchema, TFormSchema } from './../../schemas/index';
import { zodResolver } from '@hookform/resolvers/zod';


const FormRegister = () => {
  const navigate = useNavigate();
  const { registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormSchema>({
    mode:"onChange",
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<TFormSchema> = (data) => {
    if (data.confirmation === data.password) {
      const { name, email, password, phone } = data;
      const user = {
        name: name,
        email: email,
        password: password,
        phone: phone,
      };
      registerUser(user);
      navigate("/")
    } else {
      toast.error("As senhas são diferentes");
    }
  };


  return (
    <StyledFormRegister onSubmit={handleSubmit(onSubmit)}>
      <Inputs name="name" register={register("name")} Icons={BiRename} />
      <span>{errors.name?.message}</span>
      <Inputs name="email" register={register("email")} Icons={AiOutlineMail} type="email" />
      <span>{errors.email?.message}</span>
      <Inputs name="phone" register={register("phone")} Icons={AiFillPhone} />
      <span>{errors.phone?.message}</span>
      <Inputs name="password" register={register("password")} Icons={MdPassword} type="password" />
      <span>{errors.password?.message}</span>
      <Inputs name="Password confirmation" register={register("confirmation")} Icons={MdPassword} type="password" />
      <span>{errors.confirmation?.message}</span>
      <StyledButtons nameButtons="buttonSend" type="submit">Sign Up</StyledButtons>
    </StyledFormRegister>
  );
};

export default FormRegister;
