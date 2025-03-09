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
import { RegisterFormActionState } from "./types";
import { useActionState, useEffect } from "react";
import { register } from "@/app/(auth)/actions";
import { useRouter } from "next/navigation";

const initialState: RegisterFormActionState = {};

const RegisterForm = () => {
  const [formState, formAction, isPending] = useActionState(
    register,
    initialState,
  );

  const router = useRouter();

  useEffect(() => {
    if ("success" in formState && formState.success) {
      router.push("/login");
    }
  }, [router, formState]);

  return (
    <div className="flex w-full h-full items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" action={formAction}>
            <TextField
              label="First Name"
              name="firstName"
              errors={
                "firstName" in formState ? formState.firstName : undefined
              }
            />
            <TextField
              label="Last Name"
              name="lastName"
              errors={"lastName" in formState ? formState.lastName : undefined}
            />
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
            <Button type="submit" disabled={isPending} size="sm">
              {isPending ? "Registering..." : "Register"}
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <Link href="/login">Already registered? Login now!</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterForm;
