import { useState } from "react";
import Disclaimer from "./Disclaimer";

const CreateAccount = ({
  data,
  dropdown,
  successMessageVisible,
  setSuccessMessageVisible,
  setErrorMessageVisible,
  setMessage,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessageVisible(false);
    setSuccessMessageVisible(false);

    try {
      const userData = {
        email: formData.email,
        password: formData.password,
        firstName: formData.first_name,
        lastName: formData.last_name,
        company: formData.company,
        phone: formData.phone,
        hospitalityLoc: formData.hospitality_space,
      };
      const response = await fetch(
        `http://localhost:8003/formula1/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        setMessage(data.message);
        setErrorMessageVisible(true);
        return;
      }
      const data = await response.json();

      if (data) {
        setMessage("The Account is under approval");
        setSuccessMessageVisible(true);
        setErrorMessageVisible(false);
        setFormData({
          first_name: "",
          last_name: "",
          company: "",
          phone: "",
          email: "",
          password: "",
          confirm_password: "",
          hospitality_space: "",
        });
      }
      return response;
    } catch (error) {
      console.log(error, "error>>");
      // let err = JSON.parse(error.message);
      // if (err?.details?.applicationError?.code === "-19995") {
      //   setMessage("Email already exists!");
      // } else {
      //   setMessage(err.message);
      // }
      setMessage("Something Went Wrong");

      setSuccessMessageVisible(false);
      setErrorMessageVisible(true);
    }
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // useEffect(() => {
  //   // if (createAccountStatus === "succeeded") {
  //   document.body.setAttribute("data-form-cart-state", "");
  //   // }
  // }, []);
  return (
    <div className="container-create-account d-none">
      <div
      // className="container-account"
      // data-form-container
      // data-form-state={"message"}
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
              type={showPassword ? "text" : "password"}
              placeholder="* * * * * *"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div
              onClick={togglePassword}
              className={`toggle-password ${showPassword ? "show" : ""}`}
            >
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
              type={showConfirmPassword ? "text" : "password"}
              placeholder="* * * * * *"
              value={formData.confirm_password}
              onChange={handleChange}
              required
            />
            <div
              onClick={toggleConfirmPassword}
              className={`toggle-password ${showConfirmPassword ? "show" : ""}`}
            >
              <i className="icon-password"></i>
              <i className="icon-password-hide"></i>
            </div>
          </div>

          <div className="container-input container-select col-lg-12">
            <div className="container-select-hospitality-space">
              <label htmlFor="account-hospitality-space">
                {data?.hospitalityDropdownLabel}
              </label>
              <div className="select">
                <i className="icon-arrow-down no-desktop"></i>
                <div
                  className="wrapper-select"
                  onClick={(e) => {
                    if (e.target.innerText.toLowerCase() !== "other") {
                      setFormData({
                        ...formData,
                        hospitality_space: e.target.innerText.toLowerCase(),
                      });
                    }
                  }}
                >
                  <select
                    className="main-select"
                    id="account_hospitality_space"
                    name="hospitality_space"
                  >
                    {!formData.hospitality_space && <option>Choice</option>}
                    {dropdown
                      ?.sort((a, b) => a.order - b.order)
                      .map((data, index) => {
                        const { title, value } = data;
                        return (
                          <option key={index} value={value}>
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
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      hospitality_space: e.target.value,
                    })
                  }
                />
              </div>
            </div>
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

      <Disclaimer data={data.disclaimer} />
    </div>
  );
};

export default CreateAccount;
