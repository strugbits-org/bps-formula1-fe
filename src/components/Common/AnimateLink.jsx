"use client";
import {
  pageLoadEnd,
  pageLoadStart,
} from "../../utils/AnimationFunctions";
import { useRouter } from "next/router";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AnimateLink = ({ to, children, className, target, attributes }) => {
  const router = useRouter();
  const pathname = usePathname();

  const delayedRedirect = (e) => {
    e.preventDefault();
    if (router.asPath !== "") {
      router.push(to);
    }

    if (to === undefined) return;

    if (pathname === to) {
      pageLoadStart();
      setTimeout(() => pageLoadEnd(), 900);
      return;
    }

    if (target === undefined) {
      pageLoadStart();
      setTimeout(() => {
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
