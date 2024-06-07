"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { markPageLoaded } from "@/utils/AnimationFunctions";
import { getFullSvgURL } from "@/utils/GenerateImageURL";
import SuccessModal from "../Common/SuccessModal";
import ErrorModal from "../Common/ErrorModal";

const ResetPassword = ({ signInPage, resetPasswordPageData }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("Message");
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setDisabled(true);

    try {
      e?.preventDefault();
      setMessage("");
      const { password, confirmPassword } = formData;
      const token = searchParams.get("token");
      if (password !== confirmPassword) {
        setMessage("Passwords should be matched.");
        setErrorMessageVisible(true);
        return;
      }
      const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;
      const response = await fetch(
        `${base_url}formula1/auth/resetPassword?token=${token}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password, confirmPassword }),
        }
      );
      if (!response.ok) {
        const data = await response.json();
        setMessage(data.message);
        setErrorMessageVisible(true);
        return;
      }

      setMessage("Your password has been reset successfully.");
      setSuccessMessageVisible(true);
    } catch (error) {
      console.log("Error during confirm email:", error);
      setErrorMessageVisible(true);
      setMessage(error?.message);
    } finally {
      setDisabled(false);
    }
  };

  const handleClose = () => {
    router.push("/#sign-in");
  };

  useEffect(() => {
    if (searchParams.get("token")) {
      markPageLoaded();
    } else {
      handleClose();
    }
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
          {resetPasswordPageData && resetPasswordPageData.description}
        </p>
        <form className="form-sign-in form-base" onSubmit={handleSubmit}>
          <div className="container-input container-input-password col-12">
            <label htmlFor="login-password">
              {resetPasswordPageData && resetPasswordPageData.newPasswordLabel}
            </label>
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
            <label htmlFor="confirmPassword">
              {resetPasswordPageData &&
                resetPasswordPageData.confirmNewPasswordLabel}
            </label>
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
              disabled={isDisabled}
              type="submit"
              className="bt-submit btn-small-wide btn-red btn-hover-white w-100"
            >
              <i className="icon-profile"></i>
              <span className="submit-text split-chars">
                <span>
                  {resetPasswordPageData &&
                    resetPasswordPageData.resetPasswordButtonLabel}
                </span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
