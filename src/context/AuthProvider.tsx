import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { TFormSchemaLogin, TUserSchemaUpdate } from "../schemas";

interface IUserRegister {
  email: string;
  password: string;
  name: string;
  phone: string;
}
interface LoginResponse {
  token: string;
  loggedUser: LoggedUser;
}
interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextValues {
  signIn: (data: TFormSchemaLogin) => void;
  loading: boolean;
  user: LoggedUser;
  registerUser: (data: IUserRegister) => void;
  deleteUser: () => void;
  updateUser: (data: TUserSchemaUpdate) => void;
}

interface LoggedUser {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const handleApiError = (error: any, messege?: string) => {
  console.log(error);
    if (error.response?.messege && error.status != 500) {
      toast.error(error.response?.messege || messege);
    } 
};

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState({} as LoggedUser);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("flow:token");
    (async () => {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const response  = await api.get("/users");
        setUser(response.data);
      } catch (error) {
        handleApiError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const signIn = async (data: TFormSchemaLogin) => {
    try {
      const response = await api.post<LoginResponse>("/login", data);

      const { token, loggedUser } = response.data;

      setUser(loggedUser);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("flow:token", token);

      setLoading(false);
      const toNavigate = location.state?.from?.pathname || "/dashboard";
      toast.success("Successfully logged in!");

      navigate(toNavigate, { replace: true });
    } catch (error) {
      handleApiError(error, "Login failed");
    }
  };

  const registerUser = async (data: IUserRegister) => {
    try {
      await api.post("users", data);
      toast.success("Successfully registered!");
      setTimeout(() => {
        navigate("/");
      }, 6000);
    } catch (error) {
      handleApiError(error, "Registration failed");
    }
  };

  const deleteUser = async () => {
    try {
      await api.delete("users");
      localStorage.clear();
      navigate("/", { replace: true });
      toast.success("Account successfully deleted!");
    } catch (error) {
      handleApiError(error, "Registration failed");
    }
  };

  const updateUser = async (data: TUserSchemaUpdate) => {
    try {
      const response = await api.patch("/users", data);
      toast.success("Successfully updated!");
      setUser(response.data);
    } catch (error) {
      handleApiError(error, "Update failed");
    }
  };

  return (
    <AuthContext.Provider
      value={{ signIn, loading, user, registerUser, deleteUser, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
