"use client";

import TextField from "@/components/form-fields/TextField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useActionState } from "react";
import { login } from "@/app/(auth)/actions";
import { LoginFormActionState } from "./types";

const initialState: LoginFormActionState = {};

const LoginForm = () => {
  const [formState, formAction, isPending] = useActionState(
    login,
    initialState,
  );

  return (
    <div className="flex w-full h-full items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" action={formAction}>
            <TextField
              label="Email"
              name="email"
              type="email"
              errors={"email" in formState ? formState.email : undefined}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              errors={"password" in formState ? formState.password : undefined}
            />
            <Button type="submit" disabled={isPending}>
              {isPending ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <Link href="/register">Not a user? Register now!</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
