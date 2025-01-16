"use client";

import { createEntity } from "@/app/(protected)/entities/actions/create";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { FormActionState } from "./types";
import TextField from "@/components/form-fields/TextField";
import { EntityFragment } from "@/gql/generated";
import { updateEntity } from "@/app/(protected)/entities/actions/update";

const initialState: FormActionState = {};

type Props = {
  model?: EntityFragment;
};

const EntityForm = ({ model }: Props) => {
  const [formState, formAction, isPending] = useActionState(
    model?.id ? updateEntity : createEntity,
    initialState,
  );
  return (
    <div>
      <form action={formAction} className="grid grid-cols-2 gap-4">
        <input type="hidden" name="id" value={model?.id} onChange={() => {}} />
        <TextField
          label="Title"
          name="title"
          errors={"title" in formState ? formState.title : undefined}
          defaultValue={model?.title}
        />
        <TextField
          label="Color"
          name="color"
          errors={"color" in formState ? formState.color : undefined}
          defaultValue={model?.color}
        />
        <TextField
          label="No"
          name="no"
          errors={"no" in formState ? formState.no : undefined}
          defaultValue={model?.no}
        />
        <TextField
          label="Production Year"
          name="productionYear"
          errors={
            "productionYear" in formState ? formState.productionYear : undefined
          }
          defaultValue={String(model?.productionYear ?? "")}
        />
        <TextField
          label="Race"
          name="race"
          errors={"race" in formState ? formState.race : undefined}
          defaultValue={model?.race}
        />
        <TextField
          label="Height"
          name="height"
          errors={"height" in formState ? formState.height : undefined}
          defaultValue={String(model?.height ?? "")}
        />
        <TextField
          label="Weight"
          name="weight"
          errors={"weight" in formState ? formState.weight : undefined}
          defaultValue={String(model?.weight ?? "")}
        />
        <div className="col-span-2">
          <Button type="submit" disabled={isPending} size="sm">
            {isPending ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EntityForm;
