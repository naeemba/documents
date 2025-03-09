import { loginUserSchema } from "@/features/authentication/types";
import systemSdk from "@/gql/system/sdk";
import NextAuth, { Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

interface CustomSession extends Session {
  accessToken?: string;
  refreshToken?: string;
}

interface CustomUser extends User {
  access_token?: string | null;
  refresh_token?: string | null;
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
            {
              email,
            },
            { Authorization: `Bearer ${loginData.auth_login?.access_token}` },
          );
          return {
            ...users[0],
            access_token: loginData.auth_login?.access_token,
            refresh_token: loginData.auth_login?.refresh_token,
          };
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          console.log({ error });
          if (
            error.response.errors[0].extensions.code === "INVALID_CREDENTIALS"
          ) {
            return null;
          }
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
      console.log("hi");
      return token;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      if (!isLoggedIn) {
        if (
          [
            `${process.env.NEXTAUTH_URL}/login`,
            `${process.env.NEXTAUTH_URL}/register`,
          ].includes(href)
        ) {
          return true;
        }
      } else {
        if (
          [
            `${process.env.NEXTAUTH_URL}/login`,
            `${process.env.NEXTAUTH_URL}/register`,
          ].includes(href)
        ) {
          redirect("/");
        }
      }
      return true;
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(options);
