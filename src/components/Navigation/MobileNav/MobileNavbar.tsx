import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { UserContext } from "@/store/UserContext";

import MenuItem from "../sidebar/MenuItem";

import { GoHomeFill } from "react-icons/go";
import { FaCalendar, FaHandHoldingUsd } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";

const MobileNavbar = () => {
  const { pathname } = useLocation();
  const { user } = useContext(UserContext);
  return (
    <section className="w-full h-16 bg-white fixed bottom-0 flex items-center justify-center gap-2 px-2 lg:hidden">
      {user && user.role === 0 && (
        <MenuItem
          text="Início"
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
    </section>
  );
};

export default MobileNavbar;
