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

const LoginForm = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <TextField label="Username" name="username" />
            <TextField label="Password" name="password" type="password" />
            <Button className="" type="submit">
              Login
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
