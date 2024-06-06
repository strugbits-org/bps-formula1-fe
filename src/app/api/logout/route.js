// src/app/api/logout/route.js

import { NextResponse } from "next/server";

export async function POST(req) {
  const url = new URL("/", req.nextUrl);
  const response = NextResponse.redirect(url);
  response.cookies.set("authToken", "", { path: "/", expires: new Date(0) });
  response.cookies.set("userData", "", { path: "/", expires: new Date(0) });
  response.cookies.set("cartQuantity", "", { path: "/", expires: new Date(0) });
  return response;
}
