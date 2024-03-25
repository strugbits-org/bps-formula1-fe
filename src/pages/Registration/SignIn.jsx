import { useNavigate } from "react-router-dom";
import AnimateLink from "../../components/AnimateLink";

const SignIn = () => {
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem("userLoginStatus", true);
      document.body.setAttribute("data-login-state", "logged");
      document.body.classList.add("page-leave-active");
      setTimeout(() => {
        document.body.classList.remove("page-leave-active");
        document.body.classList.add("page-enter-active");
      }, 900);

      setTimeout(() => {
        // Replace this with your navigation logic
        navigate("/collections");
        // window.location.href = to;
        // Update the attribute after navigation if needed
        // document.body.setAttribute("data-login-state", "logged");
      }, 1000); // Adjust the timeout accordingly (animation duration + additional delay)
      // document.querySelector(".initScript").click();
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div className="container-sign-in">
      <div className="wrapper-form-sign-in" data-form-sign-in-container>
        <form className="form-sign-in form-base">
          <input type="hidden" name="login" value="[Login]" />
          <div className="container-input col-12">
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              name="email"
              type="email"
              placeholder="exemple@myemail.com"
              required
            />
          </div>
          <div className="container-input container-input-password col-12">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              className="password"
              name="password"
              type="password"
              placeholder="* * * * * *"
              required
            />
            <div className="toggle-password">
              <i className="icon-password"></i>
              <i className="icon-password-hide"></i>
            </div>
          </div>
          <div className="container-submit col-12 mt-mobile-10">
            <button
              onClick={submit}
              className="bt-submit btn-small-wide btn-red btn-hover-white w-100"
            >
              <i className="icon-profile"></i>
              <span className="submit-text split-chars">
                <span>Sign In</span>
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
      <button className="btn-small-wide btn-gray btn-hover-red btn-create-account w-mobile-100 mt-25">
        <div className="split-chars">
          <span>Create your account</span>
        </div>
      </button>
    </div>
  );
};

export default SignIn;
