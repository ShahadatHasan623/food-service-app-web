import { loginUser } from "@/app/actions/auth/loginUser";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "Enter your email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = await loginUser(credentials)
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          return null;

        }
      },
    }),
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_SECRET
  })
  ],
  pages:{
    signIn:'/login'
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
