import { useState } from "react";
import AnimateLink from "../../components/AnimateLink";
import createWixClient from "../../config/WixConfig";

const CreateAccount = ({ data }) => {
  // const navigate = useNavigate();
  // const submit = (e) => {
  //   e.preventDefault();
  //   try {
  //     localStorage.setItem("userLoginStatus", true);
  //     document.body.setAttribute("data-login-state", "logged");
  //     document.body.classList.add("page-leave-active");
  //     setTimeout(() => {
  //       document.body.classList.remove("page-leave-active");
  //       document.body.classList.add("page-enter-active");
  //     }, 900);

  //     setTimeout(() => {
  //       // Replace this with your navigation logic
  //       navigate("/collections");
  //       // window.location.href = to;
  //       // Update the attribute after navigation if needed
  //       // document.body.setAttribute("data-login-state", "logged");
  //     }, 1000); // Adjust the timeout accordingly (animation duration + additional delay)
  //     // document.querySelector(".initScript").click();
  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  // };
  const WixClient = createWixClient();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const userData = {
        loginEmail: "atta@gmail.com",
        password: "123",
        recaptchaToken: "skdgf78sydt48397yhusd",
      };
      // const response = await WixClient.members.createMember(userData);

      const response = await WixClient.authentication.register(
        userData.loginEmail,
        userData.password,
        userData.recaptchaToken
      );

      console.log(response);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div className="container-create-account d-none">
      <div className="container-account" data-form-container>
        <button onClick={handleSubmit}>REGISTER</button>
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
                    {data?.dropdownItems.map((data, index) => {
                      return (
                        <option key={index} value={data}>
                          {data}
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
          <h3 data-aos="fadeIn" data-form-error>
            Error, Try again!
          </h3>
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
        <h3 data-aos="fadeIn" data-form-success>
          Success!
        </h3>
      </div>
      <p className="text-agree mt-lg-15 mt-mobile-20">
        By continuing, you are agreeing with
        <AnimateLink to="/terms-and-condition" className="btn-underlined-white">
          <span> Blueprint Studios Terms & Conditions </span>
        </AnimateLink>
        and
        <AnimateLink to="/privacy-and-policy" className="btn-underlined-white">
          <span> Privacy Policy.</span>
        </AnimateLink>
      </p>
    </div>
  );
};

export default CreateAccount;
