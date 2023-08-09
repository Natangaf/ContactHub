import { ContactModal } from "../../components/ContactModal";
import { DashboardHeader } from "../../components/DashboardHeader";
import { ModalEdit } from "../../components/ModalEdit";
import UserModal from "../../components/UserModal";
import { useContact } from "../../hooks/useContact";
import { StyledDashboard } from './styles';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from './../../components/Card/index';
import { api } from './../../services/api';
import { StyledButtons } from './../../styles/Buttons';


export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

export const Dashboard = () => {
  const { openModal, openModalEdit, openModalProfile, setOpenModal, contacts: contact } = useContact();
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get<Contact[]>("/contacts");
        setContacts(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [contact]);

  return (
    <StyledDashboard>
      <div className="container">
      <DashboardHeader />
        <section>
          <div className="myContacts">
            <p>Meus Conatos</p>
          </div>
          <ul>
            {contacts === undefined || contacts.length == 0 ? (
              <p className="empty">Cadastre novos contatos</p>
            ) : (
              contacts.map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  email={item.email}
                  phone={item.phone}
                />
              ))
            )}
          </ul>
        </section>
        {openModal ? <ContactModal /> : null}
        {openModalEdit ? <ModalEdit /> : null}
        {openModalProfile ? <UserModal /> : null}
          <StyledButtons onClick={() => setOpenModal(true)} className="newContact" >Novo Contato</StyledButtons>
      </div>
    </StyledDashboard>
  );
};
