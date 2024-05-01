"use client";
import { useEffect, useState } from "react";
import AnimateLink from "../../components/AnimateLink";
import createWixClient from "../../config/WixConfig";
// import ReCAPTCHA from "react-google-recaptcha-enterprise";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
const CreateAccount = ({ data, dropdown }) => {
  const [captcha, setCaptcha] = useState("");
  const WixClient = createWixClient();

  // const { createAccountStatus, createAccountError, user } = useAppSelector(
  //   (state) => state.data
  // );
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
    hospitality_space: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value, name, "inputs");
    setFormData({ ...formData, [name]: value });
  };
  // const dispatch = useAppDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const userData = {
        loginEmail: formData.email,
        password: formData.password,
        recaptchaToken: captcha,
      };
      // const response = await WixClient.members.createMember(userData);
      // dispatch(createAccount(userData));

      // const response = await WixClient.authentication.register(
      //   userData.loginEmail,
      //   userData.password,
      //   { recaptchaToken: captcha }
      // );
      // if (response) {
      //   setMessage("success");
      // }
      // if (response.success) {
      //   setSuccessMessageVisible(true);
      //   setErrorMessageVisible(false);
      // } else {
      //   setSuccessMessageVisible(false);
      //   setErrorMessageVisible(true);
      // }
      // console.log(response);
    } catch (error) {
      setMessage("error");

      console.log("Error:", error);
      setSuccessMessageVisible(false);
      setErrorMessageVisible(true);
    }
  };

  // useEffect(() => {
  //   if (createAccountStatus === "succeeded") {
  //     document.body.setAttribute("data-form-cart-state", "success");
  //   }

  // }, [createAccountError, createAccountStatus]);
  return (
    <div class="container-create-account d-none">
      <div
        className="container-account"
        data-form-container
        data-form-state={message}
      >
        <form
          className="form-account form-create-account"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="subject" value="[account]" />
          <div className="container-input col-lg-3">
            <label htmlFor="account-first-name">{data?.firstNameLabel}</label>
            <input
              id="account-first-name"
              name="first_name"
              type="text"
              placeholder="NAME"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="container-input col-lg-3">
            <label htmlFor="account-last-name">{data?.lastNameLabel}</label>
            <input
              id="account-last-name"
              name="last_name"
              type="text"
              placeholder="LAST NAME"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="container-input col-lg-3">
            <label htmlFor="account-company">{data?.companyLabel}</label>
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
            <label htmlFor="account-phone">{data?.phoneNumberLabel}</label>
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
            <label htmlFor="account-email">{data?.emailLabel}</label>
            <input
              id="account-email"
              name="email"
              type="email"
              placeholder="exemple@myemail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="container-input container-input-password">
            <label htmlFor="account-password">{data?.passwordLabel}</label>
            <input
              id="account-password"
              className="password"
              name="password"
              type="password"
              placeholder="* * * * * *"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="toggle-password">
              <i className="icon-password"></i>
              <i className="icon-password-hide"></i>
            </div>
          </div>
          <div className="container-input container-input-password">
            <label htmlFor="account-confirm-password">
              {data?.confirmPasswordLabel}
            </label>
            <input
              id="account-confirm-password"
              className="password"
              name="confirm_password"
              type="password"
              placeholder="* * * * * *"
              value={formData.confirm_password}
              onChange={handleChange}
              required
            />
            <div className="toggle-password">
              <i className="icon-password"></i>
              <i className="icon-password-hide"></i>
            </div>
          </div>
          <div className="container-input container-select col-lg-12">
            <div className="container-select-hospitality-space">
              <label htmlFor="account-hospitality-space">
                {data?.dropdownLabel}
              </label>
              <div className="select">
                <i className="icon-arrow-down no-desktop"></i>
                <div className="wrapper-select">
                  <select
                    className="main-select"
                    name="hospitality_space"
                    onChange={handleChange}
                    value={formData.hospitality_space}
                  >
                    {dropdown?.map((data, index) => {
                      const { title } = data;
                      return (
                        <option key={index} value={data}>
                          {title}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="container-select-specify-other input-hide">
              <div className="wrapper-input">
                <label htmlFor="account-other">Specify</label>
                <input
                  id="account-other"
                  name="other"
                  type="text"
                  placeholder="OTHER"
                />
              </div>
            </div>
          </div>

          <div className="container-submit flex-center col-lg-12 mt-lg-5 mt-mobile-10">
            {/* <ReCAPTCHA
              sitekey={WixClient.auth.captchaVisibleSiteKey}
              onChange={setCaptcha}
            /> */}
          </div>
          <div className="container-submit flex-center col-lg-12 mt-lg-5 mt-mobile-10">
            <button
              type="submit"
              className="bt-submit btn-small-wide btn-red btn-hover-white mt-tablet-10 w-mobile-100"
            >
              <span className="submit-text split-chars">
                <span>{data?.createAccountButtonText}</span>
              </span>
            </button>
          </div>
        </form>
      </div>
      <p className="text-agree mt-lg-25 mt-mobile-30">
        {data.disclaimer.nodes[0].nodes[0].textData.text}
        <AnimateLink
          to={
            data?.disclaimer.nodes[0].nodes[1].textData.decorations[0].linkData
              .link.url
          }
          className="btn-underlined-white"
        >
          <span>{data?.disclaimer.nodes[0].nodes[1].textData.text} </span>
        </AnimateLink>
        {data.disclaimer.nodes[0].nodes[2].textData.text}
        <AnimateLink
          to={
            data?.disclaimer.nodes[0].nodes[3].textData.decorations[0].linkData
              .link.url
          }
          className="btn-underlined-white"
        >
          <span> {data.disclaimer.nodes[0].nodes[3].textData.text}</span>
        </AnimateLink>
      </p>
    </div>
  );
};

export default CreateAccount;
