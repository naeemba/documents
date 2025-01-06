import { DataTable } from "@/components/data-table";
import { EntityFragment } from "@/gql/generated";
import { columns } from "./columns";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

type Props = {
  entities: EntityFragment[];
};

const List = (props: Props) => {
  const { entities } = props;
  return (
    <div>
      <div className="flex">
        <h3 className="text-3xl font-bold">Entities</h3>
        <Link href="/entities/create" className="ml-auto">
          <Button variant="outline" className="w-9 h-9">
            <PlusIcon />
          </Button>
        </Link>
      </div>
      <div className="mt-8">
        <DataTable data={entities} columns={columns} baseUrl="/entities" />
      </div>
    </div>
  );
};

export default List;
