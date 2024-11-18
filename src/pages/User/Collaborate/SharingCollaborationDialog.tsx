import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const SharingCollaborationDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button">Compartilhar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nossas redes sociais</DialogTitle>
          <DialogDescription>
            Ajude a compartilhar para que nosso trabalho chegue a mais pessoas!
          </DialogDescription>
        </DialogHeader>
        <section className="flex gap-6">
        <Avatar className="w-16 h-16 hover:cursor-pointer shadow-lg hover:shadow-xl">
            <AvatarFallback>
              <FaTwitter size={25}/>
            </AvatarFallback>
          </Avatar>
          <Avatar className="w-16 h-16 hover:cursor-pointer shadow-lg hover:shadow-xl">
            <AvatarFallback className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
              <IoLogoInstagram size={25} color="white"/>
            </AvatarFallback>
          </Avatar>
          <Avatar className="w-16 h-16 hover:cursor-pointer shadow-lg hover:shadow-xl">
            <AvatarFallback className="bg-[#3b5998]">
              <FaFacebookF size={25} color="white"/>
            </AvatarFallback>
          </Avatar>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default SharingCollaborationDialog;
