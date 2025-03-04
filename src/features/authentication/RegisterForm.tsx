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
import { useActionState } from "react";
import { register } from "@/app/(auth)/actions";
import { useRouter } from "next/router";

const initialState: RegisterFormActionState = {};

const RegisterForm = () => {
  const router = useRouter();
  const [formState, formAction, isPending] = useActionState(
    register,
    initialState,
  );

  if ("success" in formState && formState.success) {
    router.push("/login");
  }
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
            <Button className="" type="submit">
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
