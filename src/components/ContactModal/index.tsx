import { SubmitHandler, useForm } from "react-hook-form";
import { useContact } from "../../hooks/useContact";
import { BackGround, DivModal } from "./styles";
import { useOutClick } from "../../hooks/useOutclick";
import { contactSchema, TContactData } from "../../schemas";
import { zodResolver } from '@hookform/resolvers/zod';

export const ContactModal = () => {
  const { setOpenModal } = useContact();
  const { postContact } = useContact();
  const {
    register,
    handleSubmit } = useForm<TContactData>({
    resolver
    : zodResolver(contactSchema),
  });
  const submit: SubmitHandler<TContactData> = async (data) => {
    postContact(data);
  };
  const clickRef = useOutClick(() => setOpenModal(false));
  return (
    <BackGround >
      <DivModal ref={clickRef}>
        <div className="containerheaderContactModal">
          <h1>Register new contacts</h1>
          <button
            className="closeBtn"
            onClick={() => setOpenModal(false)}
          ></button>
          <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" {...register("name")} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} />
            <label htmlFor="phone">Phone</label>
            <input type="phone" id="phone" {...register("phone")} />
            <button type="submit" className="buttonSubmit">
              Register
            </button>
          </form>
        </div>
      </DivModal>
    </BackGround>
  );
};
