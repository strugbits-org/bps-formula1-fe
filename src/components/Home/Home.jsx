"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { generateImageURL, getFullSvgURL } from "@/utils/GenerateImageURL";
import { markPageLoaded } from "@/utils/AnimationFunctions";
import CreateAccount from "../Registration/CreateAccount";
import SocialLinks from "@/components/Common/SocialLinks";
import ConfirmEmail from "../ForgotPassword/ConfirmEmail";
import { checkParameters } from "@/utils/CheckParams";
import SuccessModal from "../Common/SuccessModal";
import AnimateLink from "../Common/AnimateLink";
import RenderVideo from "@/utils/RenderVideo";
import ErrorModal from "../Common/ErrorModal";
import SignIn from "../Registration/SignIn";

const HomePage = ({
  homePageData,
  leftSectionLinks,
  rightSectionIcons,
  signInPage,
  createAccountPage,
  createAccountDropdown,
  confirmEmailPageData,
}) => {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [redirection, setRedirection] = useState("");
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [message, setMessage] = useState("Message");

  const router = useRouter();

  const handleClose = () => {
    if (redirection) {
      router.push(redirection);
      setRedirection("");
    }
  };

  useEffect(() => {
    const params = [
      homePageData,
      leftSectionLinks,
      rightSectionIcons,
      signInPage,
      createAccountPage,
      createAccountDropdown,
    ];
    if (checkParameters(params)) markPageLoaded();
  }, [
    homePageData,
    leftSectionLinks,
    rightSectionIcons,
    signInPage,
    createAccountPage,
    createAccountDropdown,
  ]);

  return (
    <>
      {errorMessageVisible && (
        <ErrorModal
          message={message}
          setErrorMessageVisible={setErrorMessageVisible}
        />
      )}
      {successMessageVisible && (
        <SuccessModal
          message={message}
          setSuccessMessageVisible={setSuccessMessageVisible}
          onClose={handleClose}
        />
      )}
      <section
        className="home-intro home-sign-in section-intro"
        data-aos="d:loop"
      >
        <div className="container-fluid pos-relative z-5">
          <div className="row">
            <div className="col-lg-12 column-form">
              <div className="wrapper-form">
                <div className="container-logos mb-lg-40 mb-mobile-45">
                  <div className="container-img logo-formula-1">
                    <img
                      src={getFullSvgURL(signInPage.f1Logo)}
                      data-preload
                      className="media"
                      alt="product"
                    />
                  </div>
                  <div className="container-img logo-blueprint-rentals">
                    <img
                      src={getFullSvgURL(signInPage.bluePrintLogo)}
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

                <ConfirmEmail
                  confirmEmailPageData={confirmEmailPageData}
                  setErrorMessageVisible={setErrorMessageVisible}
                  setSuccessMessageVisible={setSuccessMessageVisible}
                  setMessage={setMessage}
                  setRedirection={setRedirection}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-logo-bottom">
          <div className="logo-bottom">
            <div className="container-img">
              <img
                src={getFullSvgURL(homePageData?.logo)}
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
                  <AnimateLink
                    key={index}
                    to={links || ""}
                    className="fs--14 font-3 text-uppercase btn-underlined-gray mr-50"
                  >
                    <span>{title}</span>
                  </AnimateLink>
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
              src={generateImageURL({
                wix_url: signInPage.backgroundImage,
                w: "2133",
                h: "1182",
                fit: "fill",
                q: "95",
              })}
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
