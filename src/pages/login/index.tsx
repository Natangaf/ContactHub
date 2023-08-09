import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import { useAuth } from "../../hooks/useAuth";
import { StyleLogin } from './styles';
import ContactHub from "../../assets/ContactHubtranparent.png";
import { Inputs } from "../../components/Inputs";
import { StyledButtons } from './../../styles/Buttons';
import { formSchemaLogin, TFormSchemaLogin } from "../../schemas";
import { zodResolver } from '@hookform/resolvers/zod';

const Login = () => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormSchemaLogin>({
    mode: "onChange",
    resolver: zodResolver(formSchemaLogin),
  });

  const onSubmit: SubmitHandler<TFormSchemaLogin> = async (data) => {
    signIn(data);
  }
  return (
    <StyleLogin>
      <div className="container">
        <img src={ContactHub} alt="ContactHub Logo" />
        <section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Inputs name="email" type="email" register={register("email")} Icons={AiOutlineMail} />
            <Inputs name="password" register={register("password")} Icons={MdPassword} />
            <StyledButtons type="submit" disabled={!!(errors.email || errors.password)} >
              Login
            </StyledButtons>
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

  export default Login;
