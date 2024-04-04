import { useNavigate } from 'react-router-dom';
import AnimateLink from '../../components/AnimateLink';
import { useState } from "react";
import createWixClient from "../../config/WixConfig";

const SignIn = ({ data }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const WixClient = createWixClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const userData = {
        loginEmail: "attaurrahmanfarooqi9@gmail.com",
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
  const LoginUser = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const userData = {
        loginEmail: "atta@strugbitsglobal.com",
        password: "03325312621",
      };
      const response = await WixClient.authentication.login(
        userData.loginEmail,
        userData.password
      );

      console.log(response);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value, name, "inputs");
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can now use formData object to send data to the server or perform any other actions.
  //   console.log(formData);
  // };
  // const submit = (e) => {
  //   e.preventDefault();
  //   try {
  //     localStorage.setItem("userLoginStatus", "logged-in");
  //     // data-home-state
  //     document.body.setAttribute("data-login-state", "logged");
  //     document.body.setAttribute("data-home-state", "");
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

  const create = () => {
    try {
      navigate("/#create-account");
      document.body.setAttribute("data-home-state", "sign-in");
    } catch (error) {}
  };

  return (
    <div className="container-sign-in">
      <button onClick={handleSubmit}>REGISTER</button>
      <button onClick={LoginUser}>Login</button>

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
                <span>{data?.signInButtonText}</span>
              </span>
            </button>
          </div>
        </form>
        <h3 data-aos="fadeIn" data-form-error>
          Error, Try again!
        </h3>
      </div>
      <p className="text-agree mt-lg-25 mt-mobile-30">
        By continuing, you are agreeing with
        <AnimateLink to="/terms-and-condition" className="btn-underlined-white">
          <span> Blueprint Studios Terms & Conditions </span>
        </AnimateLink>
        and
        <AnimateLink to="/privacy-and-policy" className="btn-underlined-white">
          <span> Privacy Policy.</span>
        </AnimateLink>
      </p>
      <button
        onClick={create}
        className="btn-small-wide btn-gray btn-hover-red  w-mobile-100 mt-25"
      >
        <div className="split-chars">
          <span>{data?.createAccountButtonText}</span>
        </div>
      </button>
    </div>
  );
};

export default SignIn;
