import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = [
  /^\/cart$/,
  /^\/collections$/,
  /^\/collections-category$/,
  /^\/products$/,
  /^\/product(\/.*)?$/,
  /^\/search$/,
  /^\/my-account$/,
  /^\/my-account-change-password$/,
  /^\/my-account-quotes-history$/,
  /^\/my-account-saved-products$/,
];

const publicRoutes = [
  /^\/$/,
  /^\/gallery$/,
  /^\/terms-and-condition$/,
  /^\/privacy-and-policy$/,
];

export default async function middleware(req) {
  const path = req.nextUrl.pathname;

  // Check if the current route is protected or public
  const isProtectedRoute = protectedRoutes.some((route) => route.test(path));
  const isPublicRoute = publicRoutes.some((route) => route.test(path));

  // Get the authentication token from cookies
  const authTokenCookie = cookies().get("authToken");
  const isAuthenticated = !!authTokenCookie;
  // Redirect unauthenticated users trying to access protected routes to the sign-in page
  if (isProtectedRoute && !isAuthenticated) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    url.hash = "sign-in";
    return NextResponse.redirect(url);
  }

  // Redirect authenticated users accessing the root to the collections page
  if (path === "/" && isAuthenticated) {
    const url = req.nextUrl.clone();
    url.pathname = "/collections";
    return NextResponse.redirect(url);
  }

  // Continue to the requested page
  return NextResponse.next();
}
