import { useCookies } from "react-cookie";
import { useState } from "react";

import ConfirmEmailRouter from "../ForgotPassword/ConfirmEmailRouter";
import { pageLoadStart } from "@/utils/AnimationFunctions";
import Disclaimer from "./Disclaimer";
import { signInUser } from "@/services/scApiCalls";

const SignIn = ({ data, setErrorMessageVisible, setMessage }) => {
  const [cookies, setCookie] = useCookies(["authToken", "userData"]);
  const [submittingForm, setSubmittingForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const LoginUser = async (e) => {
    e.preventDefault();
    if (submittingForm) return;

    setSubmittingForm(true);
    setErrorMessageVisible(false);
    try {
      const response = await signInUser({
        email: formData.email,
        password: formData.password,
      });
      if (response?.error) {
        setMessage(response.message);
        setErrorMessageVisible(true);
        return;
      }

      const userToken = response.data.jwtToken;
      const userData = JSON.stringify(response.data.member);
      setCookie("authToken", userToken, {
        path: "/",
        expires: new Date("2099-01-01"),
      });
      setCookie("userData", userData, {
        path: "/",
        expires: new Date("2099-01-01"),
      });

      const loggedIn = cookies.authToken !== undefined;
      if (loggedIn) {
        pageLoadStart();
      }
    } catch (error) {
      console.log("Error during login:", error);
      setMessage("Invalid Credentials!");
      setErrorMessageVisible(true);
    } finally {
      setTimeout(() => {
        setSubmittingForm(false);
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-sign-in">
      <div className="wrapper-form-sign-in">
        <form className="form-sign-in form-base" onSubmit={LoginUser}>
          <input type="hidden" name="login" value="[Login]" />
          <div className="container-input col-12">
            <label htmlFor="login-email">{data?.emailFieldLabel}</label>
            <input
              id="login-email"
              name="email"
              type="email"
              placeholder="example@myemail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <ConfirmEmailRouter data={data} />
          </div>
          <div className="container-input container-input-password col-12">
            <label htmlFor="login-password">{data?.passwordFieldLabel}</label>
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
              onClick={togglePassword}
              className={`toggle-password ${showPassword ? "show" : ""}`}
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
                <span>{data?.signInButtonLabel}</span>
              </span>
            </button>
          </div>
        </form>
        <h3 data-aos="fadeIn" data-form-error>
          Error, Try again!
        </h3>
      </div>

      <Disclaimer data={data.disclaimer} />
      <button className="btn-small-wide btn-gray btn-hover-red btn-create-account w-mobile-100 mt-25">
        <div className="split-chars">
          <span>Create your account</span>
        </div>
      </button>
    </div>
  );
};

export default SignIn;
