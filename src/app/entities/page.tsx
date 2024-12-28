import sdk from "@/gql/sdk";
import { List } from "@/features/entity";

const Entities = async () => {
  const entities = await sdk.getEntitiesData();
  console.log({ entities });
  return (
    <div className="flex">
      <div className="mx-auto container">
        <List entities={entities.entity} />
      </div>
    </div>
  );
};

export default Entities;
