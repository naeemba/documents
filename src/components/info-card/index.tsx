import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = {
  title: ReactNode;
  items: { key: string; label: string; value?: string | null }[];
  actions?: ReactNode[];
};

const InfoCard = ({ title, items, actions }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="relative">
          {title}
          {Boolean(actions?.length) && (
            <div className="absolute right-0 top-0 flex gap-2">{actions}</div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent
        className="grid gap-4"
        style={{
          gridTemplateColumns: "minmax(0, 120px) 1fr minmax(0,120px) 1fr",
        }}
      >
        {items.map((item) => (
          <>
            <div key={`${item.key}-label`} className="text-muted-foreground">
              {item.label}
            </div>
            <div key={`${item.key}-value`}>{item.value}</div>
          </>
        ))}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
