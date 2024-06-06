"use client";
import { useHash } from "@/hooks/useHash";
import { getUserAuth, setAuthToken } from "@/utils/GetUser";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
  const params = useParams();
  const path = pathname.trim() === "/" ? "home" : pathname.substring(1);
  const [isReady, setIsReady] = useState(false);
  const [cookies] = useCookies(["authToken"]);
  const cleanPath = path.split("/")[0].trim();
  const router = useRouter();
  const hash = useHash();

  const isProtectedRoute = protectedRoutes.some((route) =>
    route.test(pathname)
  );
  const isPublicRoute = publicRoutes.some((route) => route.test(pathname));
  const authToken = cookies.authToken || getUserAuth();

  useEffect(() => {
    if (typeof document !== "undefined") {
      setAuthToken(authToken);
      if (authToken) {
        setTimeout(() => {
          document.body.setAttribute("data-login-state", "logged");
        }, 1000);
      } else {
        setTimeout(() => {
          document.body.setAttribute("data-login-state", "");
        }, 1000);
      }
      setIsReady(true);
    }
  }, [authToken]);

  useEffect(() => {
    if (isReady) {
      if (!authToken && isProtectedRoute) {
        setTimeout(() => {
          router.replace("/#sign-in");
        }, 500);
      } else if (authToken && isPublicRoute) {
        setTimeout(() => {
          router.replace("/collections");
        }, 500);
      }
    }
  }, [authToken, isProtectedRoute, isPublicRoute, router, isReady]);

  const handleHashChange = () => {
    if (
      typeof window !== "undefined" &&
      pathname === "/" &&
      hash[0] !== "#sign-in" &&
      hash[0] !== "#create-account"
    ) {
      document.body.setAttribute("data-home-state", "");
    }
  };
  useEffect(() => {
    // Run on initial load
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname, hash]);

  if (!isReady) {
    return null;
  }
  return (
    <div id="main-transition">
      <div id={`pg-${cleanPath}`} className="wrapper" data-scroll-container>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
