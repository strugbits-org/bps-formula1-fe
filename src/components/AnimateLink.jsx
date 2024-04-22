import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AnimateLink = ({ to, children, className, target, attributes }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const delayedRedirect = (e) => {
    if (location.hash !== "") {
      navigate(to);
    }
    if (to === undefined) {
      return;
    }

    if (location.pathname !== to) {
      if (target === undefined) {
        document.body.classList.add("page-leave-active");
      } else {
        window.open(to, target);
        return;
      }
      setTimeout(() => {
        navigate(to);
      }, 900);
    } else {
      document.body.classList.add("page-leave-active");
      setTimeout(() => {
        window.scrollTo({ top: 0 });
        document.body.classList.add("page-enter-active");
        document.body.classList.remove("page-leave-active");
        setTimeout(() => {
          document.body.classList.remove("page-enter-active");
        }, 900);
      }, 900);
    }
    e.preventDefault();
  };
  return (
    <Link
      to={to}
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
