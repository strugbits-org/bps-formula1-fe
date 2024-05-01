"use client";
import React, { useEffect, useState } from "react";
import { pageLoadFinished, pageLoadStart } from "../utils/AnimationFunctions";
import { resetCount } from "../utils/CollectionsLoader";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import useHash from "@/hooks/useHash";

const AnimateLink = ({ to, children, className, target, attributes }) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [hashh, setHashh] = useState();
  // const hash = useHashState();
  // console.log(pathname, "pathname>>");

  const delayedRedirect = (e) => {
    e.preventDefault();
    if (pathname === "/") {
      console.log("yes>>>");
      router.push(to);
    }

    if (to === undefined) return;

    if (pathname === to) {
      pageLoadStart();
      setTimeout(() => pageLoadFinished(), 900);
      return;
    }

    if (target === undefined) {
      pageLoadStart();
      setTimeout(() => {
        resetCount();
        router.push(to);
      }, 900);
    } else {
      window.open(to, target);
    }
  };

  return (
    <Link
      href={to}
      target={target}
      className={className}
      onClick={delayedRedirect}
      {...attributes}
    >
      {children}
    </Link>
  );
};
export default AnimateLink;
