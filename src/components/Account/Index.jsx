import usePageInitialization from "../../hooks/usePageInitialization";
import AnimateLink from "../Common/AnimateLink";
import { useNavigate } from "react-router-dom";

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
  usePageInitialization(".initScript", ".home");
  const navigate = useNavigate();
  const handleLogOut = () => {
    try {
      localStorage.setItem("userLoginStatus", "logged-out");
      document.body.setAttribute("data-login-state", "");
      navigate("/");
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
            <span className="link-account">
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
