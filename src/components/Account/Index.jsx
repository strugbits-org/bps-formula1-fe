"use client";
import AnimateLink from "../Common/AnimateLink";
import { useRouter } from "next/router";

const links = [
  { name: "My Account", icon: "icon-account", href: "/my-account" },
  {
    name: "Saved Products",
    icon: "icon-saved",
    href: "/my-account-saved-products",
  },
  {
    name: "Quotes History",
    icon: "icon-history",
    href: "/my-account-quotes-history",
  },
  {
    name: "Change Password",
    icon: "icon-change",
    href: "/my-account-change-password",
  },
];

const Account = () => {
  // usePageInitialization(".initScript", ".home");
  const router = useRouter();
  const handleLogOut = () => {
    try {
      const loggedIn = document.cookie
        .split(";")
        .some((item) => item.trim().startsWith("loggedIn=true"));
      if (loggedIn) {
        document.cookie =
          "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.body.setAttribute("data-login-state", "");
        router.push("/");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div className="menu-my-account">
      <div className="container-my-account">
        <h2 className="fs--24 fs-tablet-20 red-1 text-uppercase">
          Hello, <br className="no-phone" />
          Gabriel
        </h2>
        <ul className="list-menu-my-account mt-lg-90 mt-tablet-40 mt-phone-60">
          {links.map((data, index) => {
            const { name, href, icon } = data;
            return (
              <li
                key={index}
                style={{ cursor: "pointer" }}
                className="list-item"
              >
                <AnimateLink key={index} to={href} className="link-account">
                  <i className={icon}></i>
                  <span>{name}</span>
                </AnimateLink>
              </li>
            );
          })}
          <li onClick={handleLogOut} className="list-item">
            <span className="link-account cursor-pointer">
              <i className="icon-logout"></i>
              <span>Log Out</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Account;
