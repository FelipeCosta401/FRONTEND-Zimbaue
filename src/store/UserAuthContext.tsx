import { UserInterface } from "@/types/UserInterface";
import { ReactNode, createContext, useContext } from "react";
import { UserContext } from "./UserContext";

interface UserAuthContextItems {
  login: (data: UserInterface, token: string) => void;
  logout: () => void;
}

const UserAuthContext = createContext<UserAuthContextItems>({
  login: () => {},
  logout: () => {},
});

const UserAuthContextProvider = ({ children }: { children: ReactNode }) => {
  const { setUserData } = useContext(UserContext);

  function login(user: UserInterface, token: string) {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    setUserData(user);
  }

  function logout() {
    localStorage.clear();
    setUserData({
      role: 1,
      email: "",
      createdAt: "",
      name: "",
      password: "",
    });
  }

  return (
    <>
      <UserAuthContext.Provider value={{ login, logout }}>
        {children}
      </UserAuthContext.Provider>
    </>
  );
};

export { UserAuthContextProvider, UserAuthContext };
