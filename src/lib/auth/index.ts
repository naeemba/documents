import { loginUserSchema } from "@/features/authentication/types";
import systemSdk from "@/gql/system/sdk";
import NextAuth, { Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

interface CustomUser extends User {
  access_token?: string | null;
  refresh_token?: string | null;
}

interface CustomSession extends Session {
  accessToken?: string | null;
  refreshToken?: string | null;
}

export const options: Parameters<typeof NextAuth>[0] = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials): Promise<CustomUser | null> {
        try {
          const parsedCredentials = loginUserSchema.safeParse(credentials);
          if (!parsedCredentials.success) return null;

          const { email, password } = parsedCredentials.data;
          const loginData = await systemSdk.login({ email, password });
          console.log({ loginData });
          const { users } = await systemSdk.getUserInfo(
            { email },
            {
              Authorization: `Bearer ${loginData.auth_login?.access_token}`,
            },
          );

          return {
            ...users[0],
            access_token: loginData.auth_login?.access_token,
            refresh_token: loginData.auth_login?.refresh_token,
          };
        } catch (error) {
          console.log({ error });
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  callbacks: {
    jwt({ token, account, user }) {
      if (account && user) {
        return {
          ...token,
          accessToken: (user as CustomUser).access_token,
          refreshToken: (user as CustomUser).refresh_token,
          user,
        };
      }
      return token;
    },
    async session({ session, token }: { session: CustomSession; token: any }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session;
    },
    authorized({
      auth,
      request: {
        nextUrl: { href },
      },
    }) {
      const isLoggedIn = !!auth?.user;
      const baseUrl = process.env.NEXTAUTH_URL;
      if (!isLoggedIn) {
        if ([`${baseUrl}/login`, `${baseUrl}/register`].includes(href)) {
          return true;
        }
      } else {
        if ([`${baseUrl}/login`, `${baseUrl}/register`].includes(href)) {
          redirect("/");
        }
      }
      return true;
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(options);
