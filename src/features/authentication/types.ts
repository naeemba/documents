import { z } from "zod";

export type LoginFormActionState =
  | { success: true }
  | {
      email?: string[];
      password?: string[];
      error?: string;
    };

export type RegisterFormActionState =
  | { success: true }
  | {
      email?: string[];
      password?: string[];
      firstName?: string[];
      lastName?: string[];
    };

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const registerUserSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});
