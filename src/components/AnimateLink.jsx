import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { pageLoadFinished, pageLoadStart } from "../utils/AnimationFunctions";
import { resetCount } from "../utils/CollectionsLoader";

const AnimateLink = ({ to, children, className, target, attributes }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const delayedRedirect = (e) => {
    e.preventDefault();
    if (location.hash !== "") {
      navigate(to);
    }

    if (to === undefined) return;

    if (location.pathname === to) {
      pageLoadStart();
      setTimeout(() => pageLoadFinished(), 900);
      return;
    }

    if (target === undefined) {
      pageLoadStart();
      setTimeout(() => {
        resetCount();
        navigate(to);
      }, 900);
    } else {
      window.open(to, target);
    }
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
