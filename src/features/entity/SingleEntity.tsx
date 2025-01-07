import InfoCard from "@/components/info-card";
import { Button } from "@/components/ui/button";
import { EntityFragment } from "@/gql/generated";
import { PencilIcon } from "lucide-react";
import Link from "next/link";
import DeleteEntity from "./DeleteEntity";

type Props = {
  entity: EntityFragment;
};

const SingleEntity = ({ entity }: Props) => {
  return (
    <div>
      <InfoCard
        title={
          <>
            <span className="text-muted-foreground">View Entity</span>&nbsp;
            {entity.title}
          </>
        }
        items={[
          { key: "title", label: "Title", value: entity.title },
          { key: "color", label: "Color", value: entity.color },
          {
            key: "height",
            label: "Height",
            value: String(entity.height ?? ""),
          },
          {
            key: "weight",
            label: "Weight",
            value: String(entity.weight ?? ""),
          },
          {
            key: "productionYear",
            label: "Production Year",
            value: String(entity.productionYear ?? ""),
          },
          {
            key: "race",
            label: "Race",
            value: entity.race,
          },
          { key: "no", label: "No", value: entity.no },
        ]}
        actions={[
          <Link href={`/entities/${entity.id}/edit`} key="edit-entity">
            <Button variant="outline" size="sm" className="w-8 h-8">
              <PencilIcon className="w-4 h-4" />
            </Button>
          </Link>,
          <DeleteEntity id={entity.id} key="delete-entity" />,
        ]}
      />
    </div>
  );
};

export default SingleEntity;
