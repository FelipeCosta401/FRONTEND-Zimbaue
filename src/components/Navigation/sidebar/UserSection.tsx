import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "@/store/UserContext";
import { UserAuthContext } from "@/store/UserAuthContext";
import { UserInterface } from "@/types/UserInterface";

import { Button } from "../../ui/button";

import { FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const UserSection = () => {
  const navigate = useNavigate();
  const { user: contextUserData } = useContext(UserContext);
  const { logout: logoutContextMethod } = useContext(UserAuthContext);
  const [user, setUser] = useState<UserInterface>();

  useEffect(() => {
    contextUserData.name !== "" && setUser(contextUserData);
  }, [contextUserData]);

  function logout() {
    logoutContextMethod();
    setUser({
      email: "",
      createdAt: "",
      name: "",
      password: "",
      role: 0,
    });
  }

  return (
    <>
      {user && user.name !== "" ? (
        <div className="w-full h-auto space-y-2">
          <section className="p-2 justify-between flex items-center border rounded-lg hover:bg-background hover:cursor-pointer">
            <span className="flex gap-2 items-center">
              <FaUser size={45} />
              <h2>{user.name}</h2>
            </span>
            <FaGear size={35} />
          </section>
          <Button variant={"destructive"} className="w-full" onClick={logout}>
            Sair
          </Button>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col gap-2">
          <Button variant={"outline"} onClick={() => navigate("/login")}>
            Cadastrar
          </Button>
        </div>
      )}
    </>
  );
};

export default UserSection;
