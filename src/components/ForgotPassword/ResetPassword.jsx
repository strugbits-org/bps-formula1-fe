"use client";
import { useEffect, useState } from "react";

import { markPageLoaded } from "@/utils/AnimationFunctions";
import { getFullSvgURL } from "@/utils/GenerateImageURL";
import ErrorModal from "../Common/ErrorModal";
import SuccessModal from "../Common/SuccessModal";
import { useRouter } from "next/navigation";

const ResetPassword = ({ signInPage }) => {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("Message");
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  //   if (isError) {
  //     setMessage("Hello Error");
  //     setErrorMessageVisible(true);
  //   } else {
  //     setMessage("Hello Success");
  //     setSuccessMessageVisible(true);
  //   }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    setMessage("");

    try {
      const { password, confirmPassword } = formData;
      //   if (password !== confirmPassword) {
      //     setMessage("Passwords should be matched.");
      //     setErrorMessageVisible(true);
      //     return;
      //   }
      setMessage("Hello Success");
      setSuccessMessageVisible(true);
    } catch (error) {
      console.log("Error during confirm email:", error);
      setErrorMessageVisible(true);
      setMessage(error?.message);
    }
  };

  const handleClose = () => {
    router.push("/#sign-in");
  };

  useEffect(() => {
    markPageLoaded();
  }, [signInPage]);

  return (
    <div className="reset-password-main">
      {errorMessageVisible && (
        <ErrorModal
          message={message}
          setErrorMessageVisible={setErrorMessageVisible}
        />
      )}
      {successMessageVisible && (
        <SuccessModal
          message={message}
          setSuccessMessageVisible={setSuccessMessageVisible}
          onClose={handleClose}
        />
      )}

      <div className="reset-password-form-container">
        <div className="reset-password-form-logos">
          <div className="container-img logo-formula-1">
            <img
              src={getFullSvgURL(signInPage.f1Logo)}
              data-preload
              className="media"
              alt="product"
            />
          </div>
          <div className="container-img logo-blueprint-rentals">
            <img
              src={getFullSvgURL(signInPage.bluePrintLogo)}
              data-preload
              className="media"
              alt="product"
            />
          </div>
        </div>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#fff",
          }}
        >
          Enter your new password bellow
        </p>
        <form className="form-sign-in form-base" onSubmit={handleSubmit}>
          <div className="container-input container-input-password col-12">
            <label htmlFor="login-password">Enter your new password</label>
            <input
              id="login-password"
              className="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="* * * * * *"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div
              onClick={() => setShowPassword((prev) => !prev)}
              className={`toggle-password ${showPassword ? "show" : ""}`}
            >
              <i className="icon-password"></i>
              <i className="icon-password-hide"></i>
            </div>
          </div>
          <div className="container-input container-input-password col-12">
            <label htmlFor="confirmPassword">Confirm new password</label>
            <input
              id="confirmPassword"
              className="password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="* * * * * *"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <div
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className={`toggle-password ${showConfirmPassword ? "show" : ""}`}
            >
              <i className="icon-password"></i>
              <i className="icon-password-hide"></i>
            </div>
          </div>

          <div className="container-submit col-12 mt-mobile-10">
            <button
              type="submit"
              className="bt-submit btn-small-wide btn-red btn-hover-white w-100"
            >
              <i className="icon-profile"></i>
              <span className="submit-text split-chars">
                <span>Reset Password</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
