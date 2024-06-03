"use client";
import { getUserAuth, setAuthToken } from "@/utils/GetUser";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Wrapper = ({ children }) => {
  const pathname = usePathname();
  const path = pathname.trim() === "/" ? "home" : pathname.substring(1);
  const cleanPath = path.split("/")[0].trim();
  useEffect(() => {
    if (typeof document !== "undefined") {
      const authToken = getUserAuth();

      setAuthToken(authToken);

      if (authToken) {
        document.body.setAttribute("data-login-state", "logged");
      }
    }
  }, [pathname]);

  return (
    <div id="main-transition">
      <div id={`pg-${cleanPath}`} className="wrapper" data-scroll-container>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
