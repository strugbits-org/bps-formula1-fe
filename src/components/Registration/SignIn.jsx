import { useState } from "react";
import Disclaimer from "./Disclaimer";
import { useRouter } from "next/router";
import { pageLoadStart } from "@/utils/AnimationFunctions";

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
      const signUserData = {
        email: formData.email,
        password: formData.password,
      };
      const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;

      const response = await fetch(`${base_url}formula1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUserData),
      });

      if (!response.ok) {
        const data = await response.json();
        setMessage(data.message);
        setErrorMessageVisible(true);
        return;
      }

      const data = await response.json();
      const userToken = data.data.jwtToken;
      const userData = JSON.stringify(data.data.member);
      document.cookie = `authToken=${userToken}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/;`;
      document.cookie = `userData=${encodeURIComponent(
        userData
      )}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/;`;

      pageLoadStart();

      // Ensure all async tasks are complete before redirecting
      await new Promise((resolve) => setTimeout(resolve, 100)); // Short delay to ensure cookies are set

      router.replace("/collections");

      document.body.dataset.loginState = "logged";
    } catch (error) {
      console.log("Error during login:", error);
      setMessage("Invalid Credentials!");
      setErrorMessageVisible(true);
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
