"use client";

import { createEntity } from "@/app/entities/actions/create";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { FormActionState } from "./types";
import TextField from "@/components/form-fields/TextField";

const initialState: FormActionState = {};

const Form = () => {
  const [formState, formAction, isPending] = useActionState(
    createEntity,
    initialState,
  );
  return (
    <div>
      <form action={formAction} className="grid grid-cols-2 gap-4">
        <TextField
          label="Title"
          name="title"
          errors={"title" in formState ? formState.title : undefined}
        />
        <TextField
          label="Color"
          name="color"
          errors={"color" in formState ? formState.color : undefined}
        />
        <TextField
          label="No"
          name="no"
          errors={"no" in formState ? formState.no : undefined}
        />
        <TextField
          label="Production Year"
          name="productionYear"
          errors={
            "productionYear" in formState ? formState.productionYear : undefined
          }
        />
        <TextField
          label="Race"
          name="race"
          errors={"race" in formState ? formState.race : undefined}
        />
        <TextField
          label="Height"
          name="height"
          errors={"height" in formState ? formState.height : undefined}
        />
        <TextField
          label="Weight"
          name="weight"
          errors={"weight" in formState ? formState.weight : undefined}
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

export default Form;
