import { NextResponse } from "next/server";

export function middleware(request) {

  // get token from cookies
  const token = request.cookies.get("token")?.value;

  const { pathname } = request.nextUrl;

  // protect only library route
  const isProtectedRoute = pathname.startsWith("/library");

  if (isProtectedRoute && !token) {

    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}