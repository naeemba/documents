import sdk from "@/gql/sdk";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Entities = async () => {
  const entities = await sdk.getEntitiesData();
  console.log({ entities });
  return (
    <div className="flex">
      <div className="mx-auto container pt-8">
        <h1 className="text-5xl font-bold">Entities</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8">
          {entities.entity.map((entity) => (
            <Card key={entity.id}>
              <CardHeader>
                <CardTitle>{entity.title}</CardTitle>
              </CardHeader>
              <CardContent>Color: {entity.color}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Entities;
