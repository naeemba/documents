import { DefaultSession, User as NextAuthUser } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken?: string;
    refreshToken?: string;
  }

  interface User extends NextAuthUser {
    access_token?: string | null;
    refresh_token?: string | null;
  }
}
