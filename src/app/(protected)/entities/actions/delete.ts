"use server";

import sdk from "@/gql/sdk";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export const deleteEntity = async (id: string) => {
  const session = await auth();
  if (!session?.accessToken) {
    return { error: "Authorization Error" };
  }
  await sdk.deleteEntity(
    { id },
    {
      Authorization: `Bearer ${session.accessToken}`,
    },
  );
  redirect("/entities");
};
