import sdk from "@/gql/sdk";
import { List } from "@/features/entity";

const Entities = async () => {
  const entities = await sdk.getEntitiesData();
  console.log({ entities });
  return (
    <div className="flex">
      <div className="mx-auto container">
        <h3 className="text-3xl font-bold">Entities</h3>
        <div className="mt-8">
          <List entities={entities.entity} />
        </div>
      </div>
    </div>
  );
};

export default Entities;
