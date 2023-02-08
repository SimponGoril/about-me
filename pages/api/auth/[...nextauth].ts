import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: 'Desperate Login',
      credentials: {
        password: {  label: "Desperate Login", type: "password", placeholder: "Desperate Password" }
      },
      async authorize(credentials, req) {
        if (credentials?.password === process.env.DESPERATE_PASSWORD) {
          return {
            email: "desperate@user.com",
            name: "Desperate User",
            id: "desperate_id"
          }
        }
        return null
      }
    })
  ],
}
export default NextAuth(authOptions)