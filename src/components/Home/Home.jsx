"use client";

import Link from "next/link";
// import usePageInitialization from "@/hooks/usePageInitialization";
import CreateAccount from "../Registration/CreateAccount";
import RenderVideo from "@/utils/RenderVideo";
import RenderImage from "@/utils/RenderImage";
import SignIn from "../Registration/SignIn";
import SocialLinks from "@/components/Common/SocialLinks";
import SuccessModal from "../Common/SuccessModal";
import { useState } from "react";
import ErrorModal from "../Common/ErrorModal";

const HomePage = ({
  homePageData,
  leftSectionLinks,
  rightSectionIcons,
  signInPage,
  createAccountPage,
  createAccountDropdown,
}) => {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [message, setMessage] = useState("Mes");

  // const {
  //   homeStatus,
  //   successMessage,
  //   loginError,
  //   errorMessage,
  //   createAccountStatus,
  //   createAccountError,
  // } = useAppSelector((state) => state.data);

  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(homePageData());
  //   dispatch(homeBottomRightSocialLinks());
  //   dispatch(homeBottomLeftLink());
  //   dispatch(signInForm());
  //   dispatch(createAccountForm());
  //   dispatch(createAccountDropdown());
  // }, [dispatch]);
  // usePageInitialization("pg-home", ".initScript", ".home");
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log("Logged");
    } else {
      // Handle errors
    }
  }
  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form> */}
      <section
        className="home-intro home-sign-in section-intro"
        data-aos="d:loop"
      >
        {/* {loginError !== null && <ErrorModal message={errorMessage} />}
      {createAccountError !== null && <ErrorModal message={errorMessage} />} */}
        {errorMessageVisible && <ErrorModal message={message} />}
        {successMessageVisible && <SuccessModal message={message} />}

        <div className="container-fluid pos-relative z-5">
          <div className="row">
            <div className="col-lg-12 column-form">
              <div className="wrapper-form">
                <div className="container-logos mb-lg-40 mb-mobile-45">
                  <div className="container-img logo-formula-1">
                    <img
                      src={RenderImage(signInPage?.f1Logo)}
                      data-preload
                      className="media"
                      alt="product"
                    />
                  </div>
                  <div className="container-img logo-blueprint-rentals">
                    <img
                      src={RenderImage(signInPage?.bluePrintLogo)}
                      data-preload
                      className="media"
                      alt="product"
                    />
                  </div>
                </div>
                {signInPage && (
                  <SignIn
                    data={signInPage}
                    setErrorMessageVisible={setErrorMessageVisible}
                    setMessage={setMessage}
                  />
                )}

                {createAccountPage && (
                  <CreateAccount
                    data={createAccountPage}
                    dropdown={createAccountDropdown}
                    successMessageVisible={successMessageVisible}
                    setSuccessMessageVisible={setSuccessMessageVisible}
                    setErrorMessageVisible={setErrorMessageVisible}
                    setMessage={setMessage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="container-logo-bottom">
          <div className="logo-bottom">
            <div className="container-img">
              <img
                src={RenderImage(homePageData?.logo)}
                data-preload
                className="media"
                alt="logo"
              />
            </div>
            <div className="container-text">
              <h2 className="font-2 fs--20 fs-tablet-9 fs-phone-11 text-uppercase">
                {homePageData?.footerFirstText}
              </h2>
              <h3 className="fs--14 fs-mobile-7 mt-lg-20 mt-mobile-10 text-uppercase">
                {homePageData?.footerSecondText}
              </h3>
            </div>
          </div>
        </div>

        <div className="container-fluid container-footer no-phone">
          <div className="row row-1">
            <div className="col-lg-3 col-md-6 offset-lg-1 column-1">
              {leftSectionLinks?.map((data, index) => {
                const { links, title } = data;
                return (
                  <Link
                    key={index}
                    href={links}
                    className="fs--14 font-3 text-uppercase btn-underlined-gray mr-50"
                  >
                    <span>{title}</span>
                  </Link>
                );
              })}
            </div>
            <div className="col-lg-2 col-md-6 offset-lg-5 column-2">
              <SocialLinks data={rightSectionIcons} />
            </div>
          </div>
        </div>

        <div className="bg" data-aos="d:loop">
          <div className="container-img bg-video">
            {homePageData?.backgroundVideo && (
              <video
                data-src={RenderVideo(homePageData.backgroundVideo)}
                src={RenderVideo(homePageData.backgroundVideo)}
                data-preload
                className="media"
                alt="product"
                muted
                data-autoplay
                loop
                playsInline
              ></video>
            )}
          </div>
          <div className="container-img bg-img">
            <img
              src={RenderImage(signInPage?.backgroundImage)}
              data-preload
              className="media"
              alt="product"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
