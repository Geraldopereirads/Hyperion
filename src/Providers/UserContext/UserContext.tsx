import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../Services/api";
import {
  IDefaultProvidersProps,
  IUser,
  IUserContext,
  IUserRegister,
} from "./@types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProvidersProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userAutoLoad = async () => {
      const token = localStorage.getItem("@TOKEN");
      const id = localStorage.getItem("@USERID");

      if (token) {
        try {
          const response = await api.get(`/users/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(response.data);
          return navigate("/gamestore");
        } catch (error) {
          console.log(error);
          localStorage.removeItem("@TOKEN");
          localStorage.removeItem("USERID");
          return navigate("/");
        } finally {
          return setLoading(false);
        }
      }
    };

    userAutoLoad();
  }, []);

  const userRegister = async (data: IUserRegister) => {
    try {
      const response = await api.post("/register", data);
      setUser(response.data);
      navigate("/login");
      toast.success(
        `Usuario ${response.data.user.name}, cadastrado com sucesso!`
      );
    } catch (error) {
      toast.error("Usuario não cadastrado!");
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData: IUser) => {
    try {
      const response = await api.post("/login", formData);
      setUser(response.data);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id);
      navigate("/gamestore");
      toast.success(`${response.data.user.name}, Bem Vindo ! `);
    } catch (error) {
      toast.error("Usuario ou senha invalido!");
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    toast.success("Usuário deslogado com sucesso!");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, userRegister, user, navigate }}
    >
      {children}
    </UserContext.Provider>
  );
};
