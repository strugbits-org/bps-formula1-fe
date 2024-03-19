import { useState } from "react";
import ChangePassword from "./ChangePassword";
import MyAccount from "./MyAccount";
import QuotesHistory from "./QuotesHistory";
import SavedProducts from "./SavedProducts";
import { Link } from "react-router-dom";

const Account = () => {
  const [selectedOption, setSelectedOption] = useState("my-account");
  console.log(selectedOption, "selectedOption>>");
  const handleOptionChange = (option) => {
    setSelectedOption(option);
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
            <li className="list-item">
              <Link to="/account/my-account" className="link-account">
                <i className="icon-account"></i>
                <span>My Account</span>
              </Link>
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
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side */}
      {/* <MyAccount /> */}
      {/* {selectedOption === "my-account" && <MyAccount />}
      {selectedOption === "saved-products" && <SavedProducts />}
      {selectedOption === "change-password" && <ChangePassword />} */}
      {/* <ChangePassword /> */}
      {/* <QuotesHistory /> */}
    </>
  );
};
export default Account;
