import usePageInitialization from "../../hooks/usePageInitialization";
import AnimateLink from "../../components/AnimateLink";

const links = [
  { name: "My Account", href: "/my-account" },
  { name: "Saved Products", href: "/my-account-saved-products" },
  { name: "Quotes History", href: "/my-account-quotes-history" },
  { name: "Change Password", href: "/my-account-change-password" },
  { name: "Log Out", href: "#" },
];

const Account = () => {
  usePageInitialization(".initScript");

  return (
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
  );
};
export default Account;
