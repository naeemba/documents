import { EntityFragment } from "@/gql/generated";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<EntityFragment>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "color",
    header: "Color",
  },
  {
    accessorKey: "no",
    header: "No",
  },
  {
    accessorKey: "productionYear",
    header: "Production Year",
  },
  {
    accessorKey: "race",
    header: "Race",
  },
  {
    accessorKey: "height",
    header: "Height",
  },
  {
    accessorKey: "weight",
    header: "Weight",
  },
];
