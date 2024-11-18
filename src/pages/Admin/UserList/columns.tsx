import { UserInterface } from "@/types/UserInterface";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<UserInterface>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    accessorKey: "role",
    header: "Admin",
  },
  {
    accessorKey: "createdAt",
    header: "Cadastrado em",
  },
];
