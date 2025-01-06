import SingleEntity from "@/features/entity/SingleEntity";
import sdk from "@/gql/sdk";
import { notFound } from "next/navigation";

const Entity = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  if (!id) {
    return notFound();
  }

  try {
    const data = await sdk.getSingleEntity({ id });
    if (!data.entity[0]) {
      return notFound();
    }

    return <SingleEntity entity={data.entity[0]} />;
  } catch {
    return notFound();
  }
};

export default Entity;
