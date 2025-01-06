import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = {
  title: ReactNode;
  items: { key: string; label: string; value?: string | null }[];
};

const InfoCard = ({ title, items }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
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
