import { Dispatch, createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { TContactData, TContactSchemaUpdate } from "../schemas";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { Contact } from "../pages/dashboard";

interface ContactProviderProps {
  children: React.ReactNode;
}

interface ContactContextValues {
  contacts: TContactData[];
  postContact: (data: TContactData) => Promise<void>;
  updateContact: (data: TContactSchemaUpdate) => void;
  deleteContact: () => void;
  openModal: boolean;
  setOpenModal: Dispatch<React.SetStateAction<boolean>>;
  openModalEdit: boolean;
  setOpenModalEdit: Dispatch<React.SetStateAction<boolean>>;
  openModalProfile: boolean;
  setOpenModalProfile: Dispatch<React.SetStateAction<boolean>>;
}

export const ContactContext = createContext({} as ContactContextValues);

export const ContactProvider = ({ children }: ContactProviderProps) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalProfile, setOpenModalProfile] = useState(false);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("hub:token");
      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          
          const response = await api.get<Contact[]>("/contacts");
          setContacts(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, []);

  const reloadContacts = async () => {
    try {
      const response = await api.get<Contact[]>("/contacts");
      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postContact = async (data: TContactData) => {
    try {
      await api.post("/contacts", data);
      reloadContacts();
    } catch (error) {
      console.log(error);
    } finally {
      setOpenModal(false);
    }
  };

  const updateContact = async (data: TContactSchemaUpdate) => {
    try {
      const contactString = localStorage.getItem("Contact");
      if (contactString) { 
        const contactId = JSON.parse(contactString) as Contact;
        console.log(data);
        console.log(contactId);
        await api.patch(`/contacts/${contactId.id}`, data);
        toast.success("Sucessfully updated!");
        reloadContacts();
      }
    } catch (error: any) {
      toast.error("Empty field!");
    } finally {
      setOpenModalEdit(false);
    }
  };

  const deleteContact = async () => {
    try {
      const contactId = localStorage.getItem("ContactId");
      await api.delete(`/contacts/${contactId}`);
      toast.success("Sucessfully deleted!");
      reloadContacts();
    } catch (error) {
      console.log(error);
    } finally {
      setOpenModalEdit(false);
    }
  };
  return (
    <ContactContext.Provider
      value={{
        contacts,
        postContact,
        updateContact,
        deleteContact,
        openModal,
        setOpenModal,
        openModalEdit,
        setOpenModalEdit,
        openModalProfile,
        setOpenModalProfile,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
