import { useNavigate } from "react-router-dom";
import AnimateLink from "../../components/AnimateLink";
import { useEffect } from "react";

const links = [
  { name: "My Account", href: "/account/my-account" },
  { name: "Saved Products", href: "/account/saved-products" },
  { name: "Quotes History", href: "/account/quotes-history" },
  { name: "Change Password", href: "/account/change-password" },
  { name: "Log Out", href: "#" },
];

const Account = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   document.querySelector(".initScript").click();
  //   console.log("Page loaded");
  // }, []);
  const NavigationAnimation = (e) => {
    e.preventDefault();
    try {
      // Add animation class to trigger animation

      document.body.classList.add("page-leave-active");
      setTimeout(() => {
        document.body.classList.remove("page-leave-active");
        document.body.classList.add("page-enter-active");
      }, 900);

      setTimeout(() => {
        // Replace this with your navigation logic
        navigate("/account/my-account");

        // Update the attribute after navigation if needed
        // document.body.setAttribute("data-login-state", "logged");
      }, 1000); // Adjust the timeout accordingly (animation duration + additional delay)

      // navigate("/collections");
      // document.body.setAttribute("data-login-state", "logged");
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <>
      {/* Left Side*/}
      <div className="menu-my-account">
        <div className="container-my-account">
          <h2 className="fs--24 fs-tablet-20 red-1 text-uppercase">
            Hello, <br className="no-phone" />
            Gabriel
          </h2>
          <ul className="list-menu-my-account mt-lg-90 mt-tablet-40 mt-phone-60">
            {links.map((data, index) => {
              const { name, href } = data;
              return (
                <li
                  key={index}
                  style={{ cursor: "pointer" }}
                  className="list-item"
                >
                  <AnimateLink key={index} to={href} className="link-account">
                    <i className="icon-account"></i>
                    <span>{name}</span>
                  </AnimateLink>
                </li>
              );
            })}
            {/* <li style={{ cursor: "pointer" }} className="list-item">
              <AnimateLink to="/account/my-account" className="link-account">
                <i className="icon-account"></i>
                <span>Account</span>
              </AnimateLink>
            </li>
            <li className="list-item">
              <span onClick={NavigationAnimation} className="link-account">
                <i className="icon-account"></i>
                <span>My Account</span>
              </span>
            </li>
            <li className="list-item">
              <Link to="/account/saved-products" className="link-account">
                <i className="icon-saved"></i>
                <span>Saved Products</span>
              </Link>
            </li>
            <li className="list-item">
              <Link to="/account/quotes-history" className="link-account">
                <i className="icon-history"></i>
                <span>Quotes History</span>
              </Link>
            </li>
            <li className="list-item">
              <Link to="/account/change-password" className="link-account">
                <i className="icon-change"></i>
                <span>Change Password</span>
              </Link>
            </li> 
            <li className="list-item">
              <a href="" className="link-account">
                <i className="icon-logout"></i>
                <span>Log Out</span>
              </a>
            </li>*/}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Account;
