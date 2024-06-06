"use client";
import { getUserAuth, setAuthToken } from "@/utils/GetUser";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

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

const Wrapper = ({ children }) => {
  const pathname = usePathname();
  const path = pathname.trim() === "/" ? "home" : pathname.substring(1);
  const cleanPath = path.split("/")[0].trim();
  const [cookies, setCookie] = useCookies(["authToken"]);
  const router = useRouter();

  const isProtectedRoute = protectedRoutes.some((route) =>
    route.test(pathname)
  );
  const isPublicRoute = publicRoutes.some((route) => route.test(pathname));
  const authToken = cookies.authToken || getUserAuth();

  useEffect(() => {
    if (typeof document !== "undefined") {
      setAuthToken(authToken);
      if (authToken) {
        console.log(authToken, "authToken>>");
        document.body.setAttribute("data-login-state", "logged");
      } else {
        document.body.setAttribute("data-login-state", "");
      }
    }
  }, [authToken, pathname]);

  useEffect(() => {
    if (!authToken && isProtectedRoute) {
      console.log("Not authenticated, redirecting to login...");
      setTimeout(() => {
        router.replace("/#sign-in");
        document.body.setAttribute("data-login-state", "");
      }, 1000);
    } else if (authToken && isPublicRoute) {
      console.log("Authenticated, redirecting to collections...");
      setTimeout(() => {
        router.replace("/collections");
        document.body.setAttribute("data-login-state", "logged");
      }, 1000);
    }
  }, [authToken, pathname, isProtectedRoute, isPublicRoute, router]);

  return (
    <div id="main-transition">
      <div id={`pg-${cleanPath}`} className="wrapper" data-scroll-container>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
