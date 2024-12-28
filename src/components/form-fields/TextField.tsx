import { useState } from "react";
import { FormItem } from "../ui/form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type Props = {
  label: string;
  name: string;
  defaultValue?: string;
  errors?: string[];
};

const TextField = (props: Props) => {
  const { label, name, defaultValue, errors } = props;
  const [value, setValue] = useState(defaultValue);
  return (
    <FormItem>
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={label}
      />
      {errors && <p className="text-red-600 text-xs">{errors.join(",")}</p>}
    </FormItem>
  );
};

export default TextField;
