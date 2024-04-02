import usePageInitialization from "../../hooks/usePageInitialization";
import SignIn from "../Registration/SignIn";
import CreateAccount from "../Registration/CreateAccount";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  HomeBottomLeftLink,
  HomeBottomRightSocialLinks,
  homePageData,
} from "../../redux/thunks/homePageThunk";
import { AnimationFunction } from "../../utils/AnimationFunctions";
import RenderImage from "../../utils/RenderImage";
import RenderVideo from "../../utils/RenderVideo";
import { Link } from "react-router-dom";

const Home = () => {
  const { status, pages, error } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();
  console.log(pages, status, error, "Data>>");
  useEffect(() => {
    // Dispatch both thunks only when the status is idle
    if (status === "idle") {
      dispatch(homePageData());
      dispatch(HomeBottomRightSocialLinks());
      dispatch(HomeBottomLeftLink());
      AnimationFunction();
    }
  }, [dispatch, status]);
  usePageInitialization("pg-home", ".initScript", ".home" ,status);
  if (status === "succeeded") {
    document.querySelector(".initScript").click();
    return (
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
                      src="images/logo-formula-1-red.svg"
                      data-preload
                      className="media"
                      alt="product"
                    />
                  </div>
                  <div className="container-img logo-blueprint-rentals">
                    <img
                      src="images/blueprint-rentals.svg"
                      data-preload
                      className="media"
                      alt="product"
                    />
                  </div>
                </div>

                <SignIn />

                <CreateAccount />
              </div>
            </div>
          </div>
        </div>

        <div className="container-logo-bottom">
          <div className="logo-bottom">
            <div className="container-img">
              <img
                src={RenderImage(pages["pagesData"]?.logo)}
                data-preload
                className="media"
                alt="logo"
              />
            </div>
            <div className="container-text">
              <h2 className="font-2 fs--20 fs-tablet-9 fs-phone-11 text-uppercase">
                {pages["pagesData"]?.footerFirstText}
              </h2>
              <h3 className="fs--14 fs-mobile-7 mt-lg-20 mt-mobile-10 text-uppercase">
                {pages["pagesData"]?.footerSecondText}
              </h3>
            </div>
          </div>
        </div>

        <div className="container-fluid container-footer no-phone">
          <div className="row row-1">
            <div className="col-lg-3 col-md-6 offset-lg-1 column-1">
              <Link
                to={pages["leftSectionLinks"]?.firstLink}
                className="fs--14 font-3 text-uppercase btn-underlined-gray mr-50"
              >
                <span>{pages["leftSectionLinks"]?.firstText}</span>
              </Link>
              <Link
                to={pages["leftSectionLinks"]?.secondLink}
                target="_blank"
                rel="noopener noreferrer"
                className="fs--14 font-3 text-uppercase btn-underline-gray"
              >
                <span>{pages["leftSectionLinks"]?.secondText}</span>
              </Link>
            </div>
            <div className="col-lg-2 col-md-6 offset-lg-5 column-2">
              <ul className="list-social-media">
                {pages &&
                  pages["rightSectionIcons"]?.map((data, index) => {
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
            {pages["pagesData"]?.backgroundVideo && (
              <video
                data-src={RenderVideo(pages["pagesData"].backgroundVideo)}
                src={RenderVideo(pages["pagesData"].backgroundVideo)}
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
              src="images/home/img-01.jpg"
              data-preload
              className="media"
              alt="product"
            />
          </div>
        </div>
      </section>
    );
  }
};

export default Home;
