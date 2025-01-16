"use server";

import { entitySchema, FormActionState } from "@/features/entity/types";
import sdk from "@/gql/sdk";
import { redirect } from "next/navigation";

export const updateEntity = async (
  _: FormActionState,
  formData: FormData,
): Promise<FormActionState> => {
  const id = formData.get("id") as string;
  const productionYear = formData.get("productionYear") as string;
  const weight = formData.get("weight") as string;
  const height = formData.get("height") as string;
  const entity = {
    title: formData.get("title"),
    color: formData.get("color"),
    no: formData.get("no"),
    productionYear: productionYear.length ? Number(productionYear) : undefined,
    race: formData.get("race"),
    height: height.length ? Number(height) : undefined,
    weight: weight.length ? Number(weight) : undefined,
  };

  const data = entitySchema.safeParse(entity);
  if (!data.success) {
    return data.error.flatten().fieldErrors;
  }

  await sdk.updateEntity({ id, entity: data.data });
  redirect(`/entities/${id}`);
};
