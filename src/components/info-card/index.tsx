import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { PencilIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  title: ReactNode;
  items: { key: string; label: string; value?: string | null }[];
  baseUrl: string;
};

const InfoCard = ({ title, items, baseUrl }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="relative">
          {title}
          <Link href={`${baseUrl}/edit`}>
            <Button
              variant="outline"
              size="sm"
              className="absolute right-0 top-0 w-8 h-8"
            >
              <PencilIcon className="w-4 h-4" />
            </Button>
          </Link>
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
