import RegisterForm from "@/features/authentication/RegisterForm";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const Register = async () => {
  const session = await auth();
  if (session?.user) {
    return redirect("/");
  }
  return <RegisterForm />;
};

export default Register;
