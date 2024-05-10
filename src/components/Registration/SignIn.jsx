"use client";
import { useEffect, useState } from "react";
import Disclaimer from "./Discalimer";
import createWixClient from "@/config/WixConfig";
import { useRouter } from "next/router";
import { pageLoadStart } from "@/utils/AnimationFunctions";
const WixClient = createWixClient();

const SignIn = ({ data, setErrorMessageVisible, setMessage }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const LoginUser = async (e) => {
    e.preventDefault();
    setErrorMessageVisible(false);
    try {
      const userData = {
        loginEmail: formData.email,
        password: formData.password,
      };

      const response = await WixClient.authentication.login(
        userData.loginEmail,
        userData.password
      );
      if (response) {
        document.cookie =
          "loggedIn=true; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/;";
        pageLoadStart();
        router.push("/collections");
        setTimeout(() => {
          document.body.dataset.loginState = "logged";
        }, 800);
      }
      return response;
    } catch (error) {
      let err = JSON.parse(error.message);
      console.log("err", err);
      // setMessage(err.message);
      setMessage("Invalid email or password!");
      setErrorMessageVisible(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // useEffect(() => {
  //   if (loginStatus === "succeeded" || loginError !== null) {
  //     document.body.setAttribute("data-form-cart-state", "success");
  //   }

  // }, [ loginError]);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="container-sign-in">
      <div className="wrapper-form-sign-in">
        <form className="form-sign-in form-base" onSubmit={LoginUser}>
          <input type="hidden" name="login" value="[Login]" />
          <div className="container-input col-12">
            <label htmlFor="login-email">{data?.firstInputName} </label>
            <input
              id="login-email"
              name="email"
              type="email"
              placeholder="exemple@myemail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="container-input container-input-password col-12">
            <label htmlFor="login-password">{data?.secondInputName} </label>
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
            <div onClick={togglePassword} className={`toggle-password ${showPassword ? "show" : ""}`}>
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
