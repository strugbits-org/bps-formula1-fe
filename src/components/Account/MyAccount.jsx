"use client";
import React, { useEffect, useState } from "react";
import { getUserAuth } from "@/utils/GetUser";
import useUserData from "@/hooks/useUserData";
import { pageLoadEnd, pageLoadStart } from "@/utils/AnimationFunctions";
import ErrorModal from "../Common/ErrorModal";

const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;

const MyAccount = ({ myAccountPageData, createAccountForm, dropdown }) => {
  const { firstName, lastName, company, hospitalityLoc, phone, email } =
    useUserData();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    hospitalityLoc: "",
  });
  const [initialData, setInitialData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    hospitalityLoc: "",
  });
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e) => {
    const value = e.target.innerText.toLowerCase();
    if (value === "other") {
      setIsOtherSelected(true);
      setFormData({
        ...formData,
        hospitalityLoc: "Other",
      });
    } else {
      setIsOtherSelected(false);
      setFormData({
        ...formData,
        hospitalityLoc: value,
      });
    }
  };

  useEffect(() => {
    if (
      hospitalityLoc &&
      !["koval", "skybox", "paddock"].includes(hospitalityLoc.toLowerCase())
    ) {
      setIsOtherSelected(true);
    } else {
      setIsOtherSelected(false);
    }
    const userData = {
      firstName: firstName || "",
      lastName: lastName || "",
      company: company || "",
      phone: phone || "",
      hospitalityLoc: hospitalityLoc || "",
    };
    setFormData(userData);
    setInitialData(userData);
  }, [firstName, lastName, company, phone, hospitalityLoc]);

  useEffect(() => {
    if (successMessageVisible) {
      const timer = setTimeout(() => {
        setSuccessMessageVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessageVisible]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${base_url}formula1/auth/updateProfile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: getUserAuth(),
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) {
        setErrorMessage("Error Message");
        setErrorMessageVisible(true);
      } else {
        setSuccessMessageVisible(true);
        const userData = JSON.stringify(data.data.member);
        document.cookie = `userData=${encodeURIComponent(
          userData
        )}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/;`;
        setInitialData(formData);
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      console.error("Error updating profile", error);
    }
  };

  const discardChanges = (e) => {
    e.preventDefault();
    pageLoadStart();
    setTimeout(() => {
      setFormData(initialData);
      pageLoadEnd();
    }, 900);
  };

  return (
    <>
      {errorMessageVisible && (
        <ErrorModal
          message={errorMessage}
          setErrorMessageVisible={setErrorMessageVisible}
        />
      )}
      <section className="my-account-intro section-my-account">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-lg-3 offset-md-4 column-1">
              <div className="wrapper-top" data-aos="d:loop">
                <h1
                  className="fs--60 red-1 text-uppercase split-words"
                  data-aos="d:loop"
                >
                  {myAccountPageData && myAccountPageData.mainTitle}
                </h1>
                <p
                  className="fs--16 fs-tablet-12 mt-lg-5 mt-mobile-15"
                  data-aos="fadeIn .8s ease-in-out .4s, d:loop"
                >
                  {myAccountPageData && myAccountPageData.mainDescription}
                </p>
                <h2
                  className="fs--16 fs-tablet-12 fw-600 text-uppercase mt-lg-45 mt-mobile-15 split-words"
                  data-aos="d:loop"
                >
                  {myAccountPageData && myAccountPageData.subTitle}
                </h2>
                <p
                  className="fs--16 fs-tablet-12 mt-lg-10 mt-mobile-5"
                  data-aos="fadeIn .8s ease-in-out .4s, d:loop"
                >
                  {myAccountPageData && myAccountPageData.subDescription}
                </p>
              </div>
              <div
                className="wrapper-bottom"
                data-aos="fadeIn .8s ease-in-out .4s, d:loop"
              >
                <div className="container-text mb-lg-55 mb-tablet-25 mb-phone-35">
                  <p className="fs--16 fs-tablet-12">
                    {myAccountPageData && myAccountPageData.loginEmailTitle}
                  </p>
                  <span className="email">{email}</span>
                  <p className="fs--16 fs-tablet-12">
                    {myAccountPageData && myAccountPageData.loginEmailNote}
                  </p>
                </div>
                <div
                  className="container-account"
                  data-form-container
                  data-form-state={successMessageVisible ? "success" : ""}
                >
                  <form
                    className="form-account form-my-account"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="subject" value="[account]" />
                    <div className="container-input col-lg-3">
                      <label htmlFor="account-first-name">
                        {createAccountForm && createAccountForm.firstNameLabel}
                      </label>
                      <input
                        id="account-first-name"
                        name="firstName"
                        type="text"
                        placeholder="NAME"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="container-input col-lg-3">
                      <label htmlFor="account-last-name">
                        {createAccountForm && createAccountForm.lastNameLabel}
                      </label>
                      <input
                        id="account-last-name"
                        name="lastName"
                        type="text"
                        placeholder="LAST NAME"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="container-input col-lg-3">
                      <label htmlFor="account-company">
                        {createAccountForm && createAccountForm.companyLabel}
                      </label>
                      <input
                        id="account-company"
                        name="company"
                        type="text"
                        placeholder="COMPANY"
                        value={formData.company}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="container-input col-lg-3">
                      <label htmlFor="account-phone">
                        {createAccountForm &&
                          createAccountForm.phoneNumberLabel}
                      </label>
                      <input
                        id="account-phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (415) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="container-input col-lg-3">
                      <label htmlFor="account-email">
                        {createAccountForm && createAccountForm.emailLabel}
                      </label>
                      <input
                        id="account-email"
                        name="email"
                        type="email"
                        placeholder={email}
                        required
                        disabled
                      />
                    </div>
                    <div className="container-input container-select col-lg-9">
                      <div className="container-select-hospitality-space">
                        <label htmlFor="account-hospitality-space">
                          {createAccountForm &&
                            createAccountForm.hospitalityDropdownLabel}
                        </label>
                        <div className="select">
                          <i className="icon-arrow-down no-desktop"></i>
                          <div
                            className="wrapper-select"
                            onClick={handleSelectChange}
                          >
                            <select
                              className="main-select"
                              name="hospitalityLoc"
                              value={formData.hospitalityLoc}
                            >
                              <option>
                                {isOtherSelected
                                  ? "Other"
                                  : formData.hospitalityLoc}
                              </option>

                              {dropdown
                                ?.sort((a, b) => a.order - b.order)
                                .map((data, index) => (
                                  <option key={index} value={data.value}>
                                    {data.title}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`container-select-specify-other ${
                          isOtherSelected ? "" : "input-hide"
                        }`}
                      >
                        <div className="wrapper-input">
                          <label htmlFor="account-other">Specify</label>
                          <input
                            id="account-other"
                            name="hospitalityLoc"
                            type="text"
                            placeholder="OTHER"
                            onChange={handleChange}
                            value={formData.hospitalityLoc}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="container-submit flex-mobile-center col-lg-6 mt-lg-30 mt-tablet-15 mt-phone-40">
                      <button
                        type="submit"
                        className="bt-submit btn-medium-wide btn-red btn-hover-black-white w-lg-100"
                      >
                        <span className="submit-text split-chars">
                          <span>
                            {myAccountPageData &&
                              myAccountPageData.updateInfoButtonLabel}
                          </span>
                        </span>
                      </button>
                    </div>
                    <div className="container-discard flex-mobile-center col-12 mt-lg-30 mt-mobile-20">
                      <button
                        type="button"
                        onClick={discardChanges}
                        className="btn-small-wide btn-white btn-hover-black-white btn-discard"
                      >
                        <div className="split-chars">
                          <span>
                            {myAccountPageData &&
                              myAccountPageData.discardButtonLabel}
                          </span>
                        </div>
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

export default MyAccount;
