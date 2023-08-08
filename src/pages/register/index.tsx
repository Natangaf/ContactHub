import FormRegister from "../../components/FormRegister";
import ContactHub from "../../assets/ContactHubtranparent.png"
import { StyleRegister } from "./styles";
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <StyleRegister>
      <div className="container">
        <img src={ContactHub} alt="" />
        <section>
          <FormRegister />
          <div className="footer">
            <h1 className="title">Sign Up</h1>
            <Link to="/">Return to Log In</Link>
          </div>
        </section>
      </div>
    </StyleRegister>
  );
};
