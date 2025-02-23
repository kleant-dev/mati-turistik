import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  adminRoutes,
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  protectedRoutes,
} from "./routes";

import { auth } from "@/auth";

export default async function middleware(request: NextRequest) {
  const session = await auth();

  const isLoggedIn = !!session;
  const pathname = request.nextUrl.pathname;
  const isAdmin = session?.user.role === "ADMIN";
  const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const isAuthRoute = authRoutes.includes(pathname);

  const isAdminRoute = adminRoutes.some((route) => pathname.startsWith(route));

  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, request.url));
  }

  if (!isLoggedIn && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (!isAdmin && isAdminRoute) {
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
