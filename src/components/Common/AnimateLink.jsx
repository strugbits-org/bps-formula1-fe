"use client";
import { useHash } from "@/hooks/useHash";
import { pageLoadEnd, pageLoadStart } from "../../utils/AnimationFunctions";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";

const AnimateLink = ({ to, children, className, target, attributes, deleteHash }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [, setWindowHash] = useHash();

  const delayedRedirect = (e) => {
    e.preventDefault();
    if (pathname === "/" && deleteHash) setWindowHash("");

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
        router.refresh();
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
