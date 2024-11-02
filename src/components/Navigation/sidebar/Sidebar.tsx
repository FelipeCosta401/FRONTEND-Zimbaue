import { useLocation } from "react-router-dom";

import MenuItem from "./MenuItem";
import UserSection from "./UserSection";

import { GoHomeFill } from "react-icons/go";
import { FaCalendar, FaHandHoldingUsd } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="h-screen w-[350px] fixed hidden left-0 shadow-xl p-4 bg-white lg:flex flex-col justify-between">
      <section className="h-1/4">
        <h1 className="font-extrabold text-xl">Instituto</h1>
        <h1 className="font-black text-2xl bg-gradient-to-r from-[#A99531] to-[#8E4646] bg-clip-text text-transparent uppercase">
          negro zimbauê
        </h1>
      </section>
      <main className="flex flex-col gap-4 h-2/4">
        <MenuItem
          text="Início"
          icon={GoHomeFill}
          linkTo="/"
          focus={pathname === "/"}
        />
        <MenuItem
          text="Eventos"
          icon={FaCalendar}
          linkTo="/eventos"
          focus={pathname === "/eventos"}
        />
        <MenuItem
          text="Contribuir"
          icon={FaHandHoldingUsd}
          linkTo="/contribuir"
          focus={pathname === "/contribuir"}
        />
        <MenuItem
          text="Sobre nós"
          icon={IoMdInformationCircleOutline}
          linkTo="#"
        />
      </main>
      <footer className="h-1/4">
        <UserSection />
      </footer>
    </div>
  );
};

export default Sidebar;
