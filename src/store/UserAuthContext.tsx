import { UserInterface } from "@/types/UserInterface";
import { ReactNode, createContext, useContext } from "react";
import { UserContext } from "./UserContext";

interface UserAuthContextItems {
  login: (data: UserInterface) => void;
  logout: () => void;
}

const UserAuthContext = createContext<UserAuthContextItems>({
  login: () => {},
  logout: () => {},
});

const UserAuthContextProvider = ({ children }: { children: ReactNode }) => {  
  const { setUserData } = useContext(UserContext)

  function login(data: UserInterface) {
    localStorage.setItem("user", JSON.stringify(data));
    setUserData(data)
  }

  function logout() {
    localStorage.clear();
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
