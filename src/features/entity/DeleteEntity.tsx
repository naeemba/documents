"use client";

import { deleteEntity } from "@/app/(protected)/entities/actions/delete";
import { Button } from "@/components/ui/button";
import { confirm } from "@/lib/confirm";
import { XIcon } from "lucide-react";

type Props = {
  id: string;
};

const DeleteEntity = ({ id }: Props) => {
  return (
    <Button
      variant="outline"
      size="sm"
      className="w-8 h-8 text-destructive"
      onClick={() => {
        confirm({ title: "Are you sure?" }).then((result) => {
          if (result) {
            deleteEntity(id);
          }
        });
      }}
    >
      <XIcon className="w-4 h-4" />
    </Button>
  );
};

export default DeleteEntity;
