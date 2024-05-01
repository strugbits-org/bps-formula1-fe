"use client";
import { pageLoadFinished } from "@/utils/AnimationFunctions";
import { usePathname } from "next/navigation";

const Wrapper = ({ children }) => {
  const pathname = usePathname();
  const cleanPath = pathname.trim() === "/" ? "home" : pathname.substring(1);
  pageLoadFinished();

  return (
    <div id="main-transition">
      <div id={`pg-${cleanPath}`} className="wrapper" data-scroll-container>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
