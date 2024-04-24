import usePageInitialization from "../../hooks/usePageInitialization";
import SignIn from "../Registration/SignIn";
import CreateAccount from "../Registration/CreateAccount";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  homeBottomLeftLink,
  homeBottomRightSocialLinks,
  homePageData,
} from "../../redux/thunks/homePageThunk";
import RenderImage from "../../utils/RenderImage";
import RenderVideo from "../../utils/RenderVideo";
import { Link } from "react-router-dom";
import {
  createAccountDropdown,
  createAccountForm,
  signInForm,
} from "../../redux/thunks/registrationPageThunk";
import ErrorModal from "../../components/ErrorModal";

const Home = () => {
  const { homeStatus, pages } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(homePageData());
    dispatch(homeBottomRightSocialLinks());
    dispatch(homeBottomLeftLink());
    dispatch(signInForm());
    dispatch(createAccountForm());
    dispatch(createAccountDropdown());
  }, [dispatch]);

  usePageInitialization(homeStatus, "pg-home", ".initScript", ".home");
  return (
    <section
      className="home-intro home-sign-in section-intro"
      data-aos="d:loop"
    >
      <ErrorModal message={"loginError"} />

      <div className="container-fluid pos-relative z-5">
        <div className="row">
          <div className="col-lg-12 column-form">
            <div className="wrapper-form">
              <div className="container-logos mb-lg-40 mb-mobile-45">
                <div className="container-img logo-formula-1">
                  <img
                    src={RenderImage(pages["signInPage"]?.redLogo)}
                    data-preload
                    className="media"
                    alt="product"
                  />
                </div>
                <div className="container-img logo-blueprint-rentals">
                  <img
                    src={RenderImage(pages["signInPage"]?.textImage)}
                    data-preload
                    className="media"
                    alt="product"
                  />
                </div>
              </div>
              {pages?.signInPage && <SignIn data={pages.signInPage} />}

              {pages?.createAccountPage && (
                <CreateAccount
                  data={pages.createAccountPage}
                  dropdown={pages.createAccountDropdown}
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
              src={RenderImage(pages["homePageData"]?.logo)}
              data-preload
              className="media"
              alt="logo"
            />
          </div>
          <div className="container-text">
            <h2 className="font-2 fs--20 fs-tablet-9 fs-phone-11 text-uppercase">
              {pages["homePageData"]?.footerFirstText}
            </h2>
            <h3 className="fs--14 fs-mobile-7 mt-lg-20 mt-mobile-10 text-uppercase">
              {pages["homePageData"]?.footerSecondText}
            </h3>
          </div>
        </div>
      </div>

      <div className="container-fluid container-footer no-phone">
        <div className="row row-1">
          <div className="col-lg-3 col-md-6 offset-lg-1 column-1">
            {pages["leftSectionLinks"]?.map((data, index) => {
              const { links, title } = data;
              return (
                <Link
                  key={index}
                  to={links}
                  className="fs--14 font-3 text-uppercase btn-underlined-gray mr-50"
                >
                  <span>{title}</span>
                </Link>
              );
            })}
          </div>
          <div className="col-lg-2 col-md-6 offset-lg-5 column-2">
            <ul className="list-social-media">
              {pages["rightSectionIcons"]?.map((data, index) => {
                const { link, iconClass } = data;
                return (
                  <li key={index}>
                    <Link to={link} className="link-social-media">
                      <i className={iconClass}></i>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg" data-aos="d:loop">
        <div className="container-img bg-video">
          {pages["homePageData"]?.backgroundVideo && (
            <video
              data-src={RenderVideo(pages["homePageData"].backgroundVideo)}
              src={RenderVideo(pages["homePageData"].backgroundVideo)}
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
            src={RenderImage(pages["signInPage"]?.backgroundImage)}
            data-preload
            className="media"
            alt="product"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
