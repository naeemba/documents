import LoginForm from "@/features/authentication/LoginForm";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth();
  if (session?.user) {
    return redirect("/");
  }
  return <LoginForm />;
};

export default LoginPage;
