import MenuItem from "../sidebar/MenuItem";

import { GoHomeFill } from "react-icons/go";
import { FaCalendar, FaHandHoldingUsd } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const MobileNavbar = () => {
  return (
    <section className="w-full h-16 bg-white fixed bottom-0 flex items-center justify-center gap-2 px-2 lg:hidden">
      <MenuItem text="Início" icon={GoHomeFill} focus />
      <MenuItem text="Eventos" icon={FaCalendar} />
      <MenuItem text="Contribuir" icon={FaHandHoldingUsd} />
      <MenuItem text="Sobre nós" icon={IoMdInformationCircleOutline} />
    </section>
  );
};

export default MobileNavbar;
