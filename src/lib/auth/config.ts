import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

/**
 * Login con email/password contra la tabla `admin_users` de Supabase.
 * Reemplazar la lógica de `authorize` cuando se conecte Supabase real
 * (comparar contra password hasheado con bcrypt, nunca en texto plano).
 */
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/admin/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize() {
        // TODO: reemplazar por validación real contra Supabase (admin_users)
        return null;
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
      if (isAdminRoute && request.nextUrl.pathname !== "/admin/login") {
        return isLoggedIn;
      }
      return true;
    },
  },
  session: { strategy: "jwt" },
};
