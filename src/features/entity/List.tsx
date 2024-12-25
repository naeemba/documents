import { DataTable } from "@/components/data-table";
import { EntityFragment } from "@/gql/generated";
import { columns } from "./columns";

type Props = {
  entities: EntityFragment[];
};

const List = (props: Props) => {
  const { entities } = props;
  return <DataTable data={entities} columns={columns} />;
};

export default List;
