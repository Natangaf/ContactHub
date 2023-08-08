import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai"
import { MdPassword } from "react-icons/md"
import { useAuth } from "../../hooks/useAuth";
import { StyleLogin } from './styles';
import ContactHub from "../../assets/ContactHubtranparent.png"
import { Inputs } from "../../components/Inputs";
import { StyledButtons } from './../../styles/Buttons';
import { formSchemaLogin, TFormSchemaLogin } from "../../schemas";
import { zodResolver } from '@hookform/resolvers/zod';

export const Login = () => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit
  } = useForm<TFormSchemaLogin>({
    resolver:  zodResolver(formSchemaLogin),
  });
  const submit: SubmitHandler<TFormSchemaLogin> = async (data) => {
    signIn(data);
  };

  return (
    <StyleLogin>
      <div className="container">
        <img src={ContactHub} alt="" />
        <section>
          <form onSubmit={handleSubmit(submit)}>
            <Inputs name="email" register={register("email")} Icons={AiOutlineMail} />
            <Inputs name="password" register={register("password")} Icons={MdPassword} />
            <StyledButtons nameButtons="buttonSend" type="submit">Login</StyledButtons>
          </form>
          <div className="signUp">
            <p className="p">Don't have an account?</p>
            <Link to="/signup">SignUp</Link>
          </div>
        </section>
      </div>
    </StyleLogin>
  );
};
