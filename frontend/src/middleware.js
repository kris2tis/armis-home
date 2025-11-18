import { NextResponse } from "next/server";
import { getUserDetails } from "./utils/middlewareAuth";

export default async function middleware(req) {
  const { isAuthenticated, isAdmin } = await getUserDetails(req);

  if (req.nextUrl.pathname.startsWith("/signin") && isAuthenticated) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/profile") && !isAuthenticated) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/admin") && !isAdmin) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/signin", "/profile/:path*", "/admin/:path*"],
};
