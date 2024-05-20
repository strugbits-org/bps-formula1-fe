import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// Specify protected and public routes using regular expressions for dynamic routes
const protectedRoutes = [/^\/collections$/, /^\/products$/, /^\/product\/.+$/];
const publicRoutes = [/^\/$/, /^\/gallery$/];

export default async function middleware(req) {
  const path = req.nextUrl.pathname;

  // Check if the current path matches any protected route
  const isProtectedRoute = protectedRoutes.some((route) => route.test(path));
  // Check if the current path matches any public route
  const isPublicRoute = publicRoutes.some((route) => route.test(path));

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

  // Uncomment this if you want to redirect authenticated users from public routes
  // Redirect to dashboard if the route is a public route and user is authenticated
  // if (isPublicRoute && isAuthenticated) {
  //   const url = req.nextUrl.clone();
  //   url.pathname = "/dashboard"; // Adjust the path as needed
  //   return NextResponse.redirect(url);
  // }

  // Allow the request to proceed
  return NextResponse.next();
}
