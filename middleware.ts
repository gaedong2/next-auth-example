import { withAuth } from "next-auth/middleware"

import cors from 'cors';

const corsMiddleware = cors({
  origin: '*', // 모든 오리진 허용
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], // 허용할 HTTP 메소드
});
// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware




export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      // `/admin` requires admin role
      if (req.nextUrl.pathname === "/admin") {
        return token?.userRole === "admin"
      }
      // `/me` only requires the user to be logged in
      return !!token
    },
  },
})

export const config = { matcher: ["/admin", "/me"] }
