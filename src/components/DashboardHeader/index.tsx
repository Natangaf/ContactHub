import { Header } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from './../../hooks/useAuth';
import { useState, useEffect } from 'react';
import { useContact } from './../../hooks/useContact';
import { api } from './../../services/api';
import ContactHubtranparent from "../../assets/ContactHubtranparent.png"
import { useOutClick } from './../../hooks/useOutclick';

interface User {
  name: string;
  email: string;
  phone: string;
}

export const DashboardHeader = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setOpenModalProfile } = useContact();

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get("/users");
      setCurrentUser(response.data);
    }
    fetchUser();
  }, [user.name]);

  function handleLogout() {
    localStorage.clear();
    const token = localStorage.getItem("hub:token") || "";

    if (!token) {
      navigate("/", { replace: true });
    }
  }

  const initials = currentUser ? `${currentUser.name.split(" ")[0][0]}${currentUser.name.split(" ")[1][0]}` : "User";

  const navRef = useOutClick(() => setIsMenuOpen(false));

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  function openModalProfile() {
    setOpenModalProfile(true)
    setIsMenuOpen(false)
  }

  return (
    <Header ref={navRef}>
      <div className="container-header">
        <img src={ContactHubtranparent} alt="" />
        <button onClick={handleMenuClick}>{initials}</button>
        {isMenuOpen && (
          <nav >
            <button onClick={openModalProfile }>
              Meu Perfil
            </button>
            <button onClick={handleLogout} className="">Sair</button>
          </nav>
        )}
      </div>
    </Header>
  );
};
