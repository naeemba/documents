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

const RegisterForm = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <TextField label="First Name" name="firstName" />
            <TextField label="Last Name" name="lastName" />
            <TextField label="Username" name="username" />
            <TextField label="Password" name="password" type="password" />
            <Button className="" type="submit">
              Register
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
