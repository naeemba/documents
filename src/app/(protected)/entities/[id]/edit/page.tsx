import EntityForm from "@/features/entity/Form";
import sdk from "@/gql/sdk";
import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";

const EditEntityPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const session = await auth();
  if (!session?.accessToken) {
    return notFound();
  }
  const { id } = await params;

  if (!id) {
    return notFound();
  }

  try {
    const data = await sdk.getSingleEntity(
      { id },
      {
        Authorization: `Bearer ${session.accessToken}`,
      },
    );
    if (!data.entity[0]) {
      return notFound();
    }

    return <EntityForm model={data.entity[0]} />;
  } catch {
    return notFound();
  }
};

export default EditEntityPage;
