import sdk from "@/gql/sdk";
import { List } from "@/features/entity";
import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";

const Entities = async () => {
  const session = await auth();
  if (!session?.accessToken) {
    return notFound();
  }
  const entities = await sdk.getEntitiesData(
    {},
    {
      Authorization: `Bearer ${session.accessToken}`,
    },
  );
  return (
    <div className="flex">
      <div className="mx-auto container">
        <List entities={entities.entity} />
      </div>
    </div>
  );
};

export default Entities;
