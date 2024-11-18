import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "@/store/UserContext";
import { UserAuthContext } from "@/store/UserAuthContext";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const MobileUserSection = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { logout } = useContext(UserAuthContext);

  return (
    <>
      {user && user.name !== "" ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="w-16 h-16">
            <Avatar>
              <AvatarFallback className="text-3xl">
                <FaUser />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="text-center">
              {user.name}
            </DropdownMenuLabel>
            <DropdownMenuLabel className="text-center font-normal">
              {user.role === 1 ? "Usuário" : "Admin"}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Ver perfil
              <DropdownMenuShortcut>
                <FaGear />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Button
              className="w-full"
              type="button"
              variant={"destructive"}
              onClick={logout}
            >
              Sair
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="w-full">
          <Button
            className="w-full"
            variant={"outline"}
            onClick={() => navigate("/FRONTEND-Zimbaue/login")}
          >
            Cadastrar
          </Button>
        </div>
      )}
    </>
  );
};

export default MobileUserSection;
