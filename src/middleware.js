import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// Specify protected and public routes
const protectedRoutes = ["/collections",'/products'];
const publicRoutes = ["/",'/gallery'];

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // Get the cookie named 'authToken'
  const authTokenCookie = cookies(req.headers).get("authToken");
  // Check if user is authenticated
  const isAuthenticated = !!authTokenCookie;

  // Redirect to login page if the route is protected and user is not authenticated
  if (isProtectedRoute && !isAuthenticated) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    url.hash = "sign-in";
    return NextResponse.redirect(url);
  }

  //   Redirect to dashboard if the route is a public route and user is authenticated
  //   if (isPublicRoute && isAuthenticated) {
  //     const url = req.nextUrl.clone();
  //     url.pathname = "";
  //     return NextResponse.redirect(url);
  //   }

  // Allow the request to proceed
  return NextResponse.next();
}
