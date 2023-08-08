import { useContext } from "react";
import { ContactContext } from "../context/ContactProvider";

export const useContact = () => {
  const contactContext = useContext(ContactContext);
  return contactContext;
};
