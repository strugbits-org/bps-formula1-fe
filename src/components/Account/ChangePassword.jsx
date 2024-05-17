import { getUserAuth } from "@/utils/GetUser";
import React, { useEffect, useState } from "react";
import ErrorModal from "../Common/ErrorModal";

const ChangePassword = ({ changePasswordPageData }) => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);

  const authToken = getUserAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch(
        "http://localhost:8003/formula1/auth/changePassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authToken,
          },
          body: JSON.stringify({
            oldPassword: formData.oldPassword,
            newPassword: formData.newPassword,
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(data.message);
      } else {
        setSuccessMessageVisible(true);
      }
    } catch (err) {
      setErrorMessage("An error occurred. Please try again.");
      console.log("Error", err);
    }
  };

  useEffect(() => {
    if (successMessageVisible) {
      const timer = setTimeout(() => {
        setSuccessMessageVisible(false);
        setFormData({
          oldPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessageVisible]);

  return (
    <>
      {errorMessageVisible && (
        <ErrorModal
          message={errorMessage}
          setErrorMessageVisible={setErrorMessageVisible}
        />
      )}
      <section className="my-account-intro section-change-password">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-8 offset-lg-4 offset-md-4 column-1">
              <div className="wrapper-top">
                <h1
                  className="fs--60 lh-110 red-1 text-uppercase split-words"
                  data-aos="d:loop"
                >
                  {changePasswordPageData?.pageTitle}
                </h1>
                <p
                  className="fs--16 fs-tablet-12 mt-md-15 mt-phone-10"
                  data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                >
                  {changePasswordPageData?.pageDescription}
                </p>
              </div>
              <div
                className="wrapper-bottom mt-lg-50 mt-tablet-25 mt-phone-35"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                <div
                  className="container-password"
                  data-form-container
                  data-form-state={successMessageVisible ? "success" : ""}
                >
                  <form className="form-password" onSubmit={handleSubmit}>
                    <input type="hidden" name="subject" value="[password]" />
                    {[
                      {
                        label:
                          changePasswordPageData?.enterYourOldPasswordInputLabel,
                        name: "oldPassword",
                        id: "login-password-old",
                      },
                      {
                        label:
                          changePasswordPageData?.enterYourNewPasswordInputLabel,
                        name: "newPassword",
                        id: "login-password-new-1",
                      },
                      {
                        label:
                          changePasswordPageData?.confirmYourNewPasswordInputLabel,
                        name: "confirmNewPassword",
                        id: "login-password-new-2",
                      },
                    ].map(({ label, name, id }) => (
                      <div
                        className="container-input container-input-password col-lg-12"
                        key={id}
                      >
                        <label htmlFor={id}>{label}</label>
                        <input
                          id={id}
                          className="password"
                          name={name}
                          type="password"
                          placeholder="* * * * * *"
                          required
                          value={formData[name]}
                          onChange={handleChange}
                        />
                        <div className="toggle-password">
                          <i className="icon-password"></i>
                          <i className="icon-password-hide"></i>
                        </div>
                      </div>
                    ))}
                    <div className="container-submit flex-mobile-center col-lg-12 mt-tablet-15 mt-phone-40">
                      <button
                        type="submit"
                        className="bt-submit btn-medium-wide btn-red btn-hover-black-white w-lg-100"
                      >
                        <span className="submit-text split-chars">
                          <span>
                            {changePasswordPageData?.resetPasswordButtonLabel}
                          </span>
                        </span>
                      </button>
                    </div>
                  </form>
                  <h3 data-aos="fadeIn" data-form-error>
                    Error, Try again!
                  </h3>
                  <h3 data-aos="fadeIn" data-form-success>
                    Success!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChangePassword;
