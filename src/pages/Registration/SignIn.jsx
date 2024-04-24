import { useNavigate } from 'react-router-dom';
import AnimateLink from '../../components/AnimateLink';
import { useEffect, useState } from "react";
import { signInUser } from "../../redux/thunks/registrationPageThunk";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { AnimationFunction } from "../../utils/AnimationFunctions";

const SignIn = ({ data }) => {
  const navigate = useNavigate();
  const { loginError, loginStatus, user } = useAppSelector(
    (state) => state.data
  );
  console.log(loginError, loginStatus, user, "signin");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();

  const LoginUser = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        loginEmail: formData.email,
        password: formData.password,
      };
      dispatch(signInUser(userData));
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (loginError !== null) {
      document.body.setAttribute("data-form-cart-state", "success");
    }
    if (user) {
      AnimationFunction();
      setTimeout(() => {
        navigate("/collections");
      }, 1000);
    }
  }, [user, loginError, navigate]);

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
        {data.richcontent.nodes[0].nodes[0].textData.text}
        <AnimateLink
          to={data?.richcontent.nodes[0].nodes[1].textData.decorations[0].linkData.link.url.substring(
            data?.richcontent.nodes[0].nodes[1].textData.decorations[0].linkData.link.url.lastIndexOf(
              "/"
            ) + 1
          )}
          className="btn-underlined-white"
        >
          <span>{data?.richcontent.nodes[0].nodes[1].textData.text} </span>
        </AnimateLink>
        {data.richcontent.nodes[0].nodes[2].textData.text}
        <AnimateLink
          to={data?.richcontent.nodes[0].nodes[3].textData.decorations[0].linkData.link.url.substring(
            data?.richcontent.nodes[0].nodes[3].textData.decorations[0].linkData.link.url.lastIndexOf(
              "/"
            ) + 1
          )}
          className="btn-underlined-white"
        >
          <span> {data.richcontent.nodes[0].nodes[3].textData.text}</span>
        </AnimateLink>
      </p>
      {/* <AnimateLink to="/terms-and-condition" className="btn-underlined-white">
      <span>Terms</span>
    </AnimateLink>
    <AnimateLink to="/privacy-and-policy" className="btn-underlined-white">
      <span>Privacy</span>
    </AnimateLink> */}
      {/* <button class="btn-small-wide btn-gray btn-hover-red btn-create-account w-mobile-100 mt-25">
        <div className="split-chars">
          <span>{data?.createAccountButtonText}</span>
        </div>
      </button> */}

      <button class="btn-small-wide btn-gray btn-hover-red btn-create-account w-mobile-100 mt-25">
        <div class="split-chars">
          <span>Create your account</span>
        </div>
      </button>
    </div>
  );
};

export default SignIn;
