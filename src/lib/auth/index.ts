import { loginUserSchema } from "@/features/authentication/types";
import systemSdk from "@/gql/system/sdk";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

export const options: Parameters<typeof NextAuth>[0] = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
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
          accessToken: user.access_token,
          refreshToken: user.refresh_token,
          user,
        };
      }
      console.log("hi");
      return token;
    },

    async session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      session.user = token.user;
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
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
