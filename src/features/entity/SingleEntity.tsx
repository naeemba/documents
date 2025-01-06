import InfoCard from "@/components/info-card";
import { EntityFragment } from "@/gql/generated";

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
      />
    </div>
  );
};

export default SingleEntity;
