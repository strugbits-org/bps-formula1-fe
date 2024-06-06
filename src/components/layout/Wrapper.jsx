"use client";
import { getUserAuth, setAuthToken } from "@/utils/GetUser";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const Wrapper = ({ children }) => {
  const pathname = usePathname();
  const path = pathname.trim() === "/" ? "home" : pathname.substring(1);
  const cleanPath = path.split("/")[0].trim();
  const [cookies, setCookie] = useCookies(["authToken"]);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== "undefined") {
      const authToken = getUserAuth();

      setAuthToken(authToken);
      if (authToken) {
        console.log(authToken, "authToken>>");
        document.body.setAttribute("data-login-state", "logged");
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (!cookies.authToken) {
      console.log(cookies.authToken, "cookies>>>");
      setTimeout(() => {
        router.push("/");
        document.body.setAttribute("data-login-state", "");
      }, 1000);
    } else {
      setTimeout(() => {
        router.push("/collections");
        document.body.setAttribute("data-login-state", "logged");
      }, 1000);
    }
  }, [cookies]);

  return (
    <div id="main-transition">
      <div id={`pg-${cleanPath}`} className="wrapper" data-scroll-container>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
