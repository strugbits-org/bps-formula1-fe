"use client";
import AnimateLink from "../Common/AnimateLink";
import { useEffect, useState } from "react";
import Disclaimer from "./Discalimer";

const SignIn = ({ data }) => {
  // const { loginError, loginStatus, user } = useAppSelector(
  //   (state) => state.data
  // );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const dispatch = useAppDispatch();

  const LoginUser = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        loginEmail: formData.email,
        password: formData.password,
      };
      // dispatch(signInUser(userData));
    } catch (error) {
      console.log("Error:", error);
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

  return (
    <div className="container-sign-in">
      <div className="wrapper-form-sign-in" data-form-sign-in-container>
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
      <button class="btn-small-wide btn-gray btn-hover-red btn-create-account w-mobile-100 mt-25">
        <div class="split-chars">
          <span>Create your account</span>
        </div>
      </button>
    </div>
  );
};

export default SignIn;
