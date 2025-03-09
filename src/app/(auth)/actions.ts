"use server";

import {
  LoginFormActionState,
  RegisterFormActionState,
  registerUserSchema,
} from "@/features/authentication/types";
import systemSdk from "@/gql/system/sdk";
import { signIn } from "@/lib/auth";

export const register = async (
  _: RegisterFormActionState,
  data: FormData,
): Promise<RegisterFormActionState> => {
  try {
    const { firstName, lastName, email, password } = Object.fromEntries(
      data.entries(),
    );

    const parsed = registerUserSchema.safeParse({
      firstName,
      lastName,
      email,
      password,
    });

    if (!parsed.success) {
      return parsed.error.flatten().fieldErrors;
    }

    await systemSdk.register(
      {
        data: {
          first_name: parsed.data.firstName,
          last_name: parsed.data.lastName,
          email: parsed.data.email,
          password: parsed.data.password,
        },
      },
      {
        Authorization: `Bearer ${process.env.APP_CONFIG_GRAPHQL_SYSTEM_SCHEMA_TOKEN}`,
      },
    );
    return { success: true };
  } catch (e) {
    console.log({ e });
    return { email: ["Email already exists"] };
  }
};

export const login = async (
  _: LoginFormActionState,
  data: FormData,
): Promise<LoginFormActionState> => {
  try {
    await signIn("credentials", data);
    return { success: true };
  } catch (error) {
    console.log({ error });
    throw error;
  }
};
