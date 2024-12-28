import z from "zod";

export type FormActionState =
  | { success: true }
  | {
      title?: string[];
      color?: string[];
      no?: string[];
      productionYear?: string[];
      race?: string[];
      height?: string[];
      weight?: string[];
    };

export const entitySchema = z.object({
  title: z.string().min(1),
  color: z.string().optional(),
  no: z.string().optional(),
  productionYear: z.number().min(1990).max(new Date().getFullYear()).optional(),
  race: z.string().optional(),
  height: z.number().min(1).optional(),
  weight: z.number().min(1).optional(),
});

export type Entity = z.infer<typeof entitySchema>;
