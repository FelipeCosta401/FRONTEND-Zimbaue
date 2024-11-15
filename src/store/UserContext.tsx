import { createContext, ReactNode, useState } from "react";

import { UserInterface } from "@/types/UserInterface";

interface UserContextItems {
  user: UserInterface;
  setUserData: (data: UserInterface) => void;
}

const UserContext = createContext<UserContextItems>({
  user: {
    name: "",
    email: "",
    password: "",
    createdAt: "",
    role: 0
  },
  setUserData: () => {},
});

const STRING_STORED_USER = localStorage.getItem("user");
const STORED_USER = STRING_STORED_USER && JSON.parse(STRING_STORED_USER);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserInterface>(
    STORED_USER ? STORED_USER : { name: "" }
  );

  function setUserData(data: UserInterface) {
    setUser(data);
  }

  return (
    <UserContext.Provider value={{ user, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
