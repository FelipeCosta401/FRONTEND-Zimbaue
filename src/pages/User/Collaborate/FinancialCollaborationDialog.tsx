import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FaPaste } from "react-icons/fa6";

import qrImage from "../../../Assets/image.png";

const FinancialCollaborationDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-full" asChild>
        <Button type="button" className="w-full">
          Contribuir
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nossa chave pix</DialogTitle>
          <DialogDescription>
            Escaneie o QRcode ou copie nossa chave para a trasnferência
          </DialogDescription>
        </DialogHeader>
        <section className="flex justify-center items-center">
          <img src={qrImage} />
        </section>
        <DialogFooter>
          <Button
            className="flex justify-between gap-6"
            type="button"
            variant={"outline"}
          >
            Copiar chave pix <FaPaste />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FinancialCollaborationDialog;
