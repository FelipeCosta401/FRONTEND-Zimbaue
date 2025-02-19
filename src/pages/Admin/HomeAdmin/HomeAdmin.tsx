import LinkCard from "@/components/Card/LinkCard/LinkCard";

import { MdOutlineEventNote } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { FaRegNewspaper, FaRegCalendarPlus } from "react-icons/fa6";
import { BsFillClipboard2PlusFill } from "react-icons/bs";

const HomeAdmin = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-slate-800 font-bold text-3xl">Listagens</h1>
      <section className="flex flex-col gap-4 md:flex-row ">
        <div className=" flex gap-4 w-full md:w-2/3">
          <LinkCard
            className="w-full"
            text="Ver usuários"
            icon={HiUserGroup}
            linkTo="/admin/listar-usuarios"
          />
          <LinkCard
            className="w-full"
            text="Ver eventos"
            icon={MdOutlineEventNote}
            linkTo="/admin/listar-eventos"
          />
        </div>
        <LinkCard
          className="w-full md:w-1/3"
          text="Ver publicações"
          icon={FaRegNewspaper}
          linkTo="#"
        />
      </section>
      <h1 className="text-slate-800 font-bold text-3xl">Cadastrar</h1>
      <section className="flex gap-4 flex-col md:flex-row">
        <LinkCard
          className="w-full"
          text="Novo evento"
          icon={FaRegCalendarPlus}
          linkTo="/admin/novo-evento"
        />
        <LinkCard
          className="w-full"
          text="Nova publicação"
          icon={BsFillClipboard2PlusFill}
          linkTo="/admin/novo-post"
        />
      </section>
    </div>
  );
};

export default HomeAdmin;
