"use server";

import sdk from "@/gql/sdk";
import { redirect } from "next/navigation";

export const deleteEntity = async (id: string) => {
  await sdk.deleteEntity({ id });
  redirect("/entities");
};
