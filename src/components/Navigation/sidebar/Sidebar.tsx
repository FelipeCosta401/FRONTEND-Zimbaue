import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { UserContext } from "@/store/UserContext";

import MenuItem from "./MenuItem";
import UserSection from "./UserSection";

import { GoHomeFill } from "react-icons/go";
import { FaCalendar, FaHandHoldingUsd } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaTrophy } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { user } = useContext(UserContext);
  return (
    <div className="h-screen w-[350px] fixed hidden left-0 shadow-xl p-4 bg-white lg:flex flex-col justify-between border">
      <section className="">
        <h1 className="font-extrabold text-xl">Instituto</h1>
        <h1 className="font-black text-2xl bg-gradient-to-r from-[#A99531] to-[#8E4646] bg-clip-text text-transparent uppercase">
          negro zimbauê
        </h1>
      </section>
      <main className="flex flex-col gap-4 h-2/4">
        <MenuItem
          text="Premiações"
          linkTo="/FRONTEND-Zimbaue/premios"
          focus={false}
          icon={FaTrophy}
          className={cn(
            `${pathname !== "/FRONTEND-Zimbaue/premios" && "animate-pulse"}`,
            "bg-gradient-to-r from-[#A99531] to-[#8E4646] text-primary-foreground transition-all hover:scale-105"
          )}
        />
        {user && user.role === 0 && (
          <MenuItem
            text="Admin"
            icon={MdAdminPanelSettings}
            linkTo="/FRONTEND-Zimbaue/admin"
            focus={pathname.includes("/FRONTEND-Zimbaue/admin")}
          />
        )}
        <MenuItem
          text="Início"
          icon={GoHomeFill}
          linkTo="/FRONTEND-Zimbaue/"
          focus={pathname === "/FRONTEND-Zimbaue/"}
        />
        <MenuItem
          text="Eventos"
          icon={FaCalendar}
          linkTo="/FRONTEND-Zimbaue/eventos"
          focus={pathname === "/FRONTEND-Zimbaue/eventos"}
        />
        <MenuItem
          text="Contribuir"
          icon={FaHandHoldingUsd}
          linkTo="/FRONTEND-Zimbaue/contribuir"
          focus={pathname === "/FRONTEND-Zimbaue/contribuir"}
        />
        <MenuItem
          text="Sobre nós"
          icon={IoMdInformationCircleOutline}
          linkTo="/FRONTEND-Zimbaue/sobre-nos"
          focus={pathname === "/FRONTEND-Zimbaue/sobre-nos"}
        />
      </main>
      <footer className="h-1/4 flex flex-col justify-end">
        <UserSection />
      </footer>
    </div>
  );
};

export default Sidebar;
