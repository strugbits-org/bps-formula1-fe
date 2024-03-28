import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AnimateLink = ({ to, children, className }) => {
  const navigate = useNavigate();

  const navigationAnimation = (e) => {
    try {
      // Add animation class to trigger animation

      document.body.classList.add("page-leave-active");
      setTimeout(() => {
        document.body.classList.remove("page-leave-active");
        document.body.classList.add("page-enter-active");
      }, 900);

      setTimeout(() => {
        // Replace this with your navigation logic
        navigate(to);
        // window.location.href = to;
        // Update the attribute after navigation if needed
        // document.body.setAttribute("data-login-state", "logged");
      }, 1000); // Adjust the timeout accordingly (animation duration + additional delay)
      // document.querySelector(".initScript").click();

      // navigate("/collections");
      // document.body.setAttribute("data-login-state", "logged");
      // e.preventDefault();
    } catch (error) {
      console.log("Error:", error);
    }
    e.preventDefault();
  };
  return (
    <Link to={to} className={className} onClick={navigationAnimation}>
      {children}
    </Link>
  );
};
export default AnimateLink;
