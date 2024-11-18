import EventInterface from "@/types/EventInterface";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<EventInterface>[] = [
  {
    accessorKey: "title",
    header: "Nome do evento",
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
];
