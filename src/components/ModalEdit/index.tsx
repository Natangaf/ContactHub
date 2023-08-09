import { useForm } from "react-hook-form";
import { BackGround, DivModal } from "./styles";
import { ContactSchemaUpdate, TContactData, TContactSchemaUpdate } from "../../schemas";
import { useOutClick } from "../../hooks/useOutclick";
import { useContact } from "./../../hooks/useContact";
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useEffect } from 'react';


export const ModalEdit = () => {
  const contactRef = useRef<string | null>(null)
  const { setOpenModalEdit } = useContact();
  const { deleteContact, updateContact } = useContact();
  const clickRef = useOutClick(() => setOpenModalEdit(false));

  const { register, handleSubmit, setValue } = useForm<Partial<TContactSchemaUpdate>>({
    resolver: zodResolver(ContactSchemaUpdate),
  });

  useEffect(() => {
    const contactString = localStorage.getItem("Contact");
    if (contactString !== null) {
      const parsedContact = JSON.parse(contactString) as TContactData;
      contactRef.current = contactString;
      setValue("name", parsedContact.name || "");
      setValue("email", parsedContact.email || "");
      setValue("phone", parsedContact.phone || "");
    }
  }, [setValue]);


  return (
    <BackGround >
      <DivModal ref={clickRef}>
        <div>
          <h1>Edit contact</h1>
          <button
            className="closeBtn"
            onClick={() => setOpenModalEdit(false)}
          ></button>
        </div>
        <form onSubmit={handleSubmit(updateContact)}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" {...register("name")} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email"  {...register("email")} />
          <label htmlFor="phone">Phone</label>
          <input type="phone" id="phone" {...register("phone")} />
          <div>
            <button className="btnSave" type="submit">
              Save
            </button>
            <button className="btnDelete" type="button" onClick={deleteContact}>
              Delete
            </button>
          </div>
        </form>

      </DivModal>
    </BackGround>
  );
};
