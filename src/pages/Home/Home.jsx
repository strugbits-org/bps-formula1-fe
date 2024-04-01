import usePageInitialization from "../../hooks/usePageInitialization";
import SignIn from "../Registration/SignIn";
import CreateAccount from "../Registration/CreateAccount";
import { useEffect } from "react";

const Home = () => {
  usePageInitialization("pg-home", ".initScript", ".home");
  useEffect(() => {
    return;
  }, []);
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
              src="images/logo-formula-1.svg"
              data-preload
              className="media"
              alt="product"
            />
          </div>
          <div className="container-text">
            <h2 className="font-2 fs--20 fs-tablet-9 fs-phone-11 text-uppercase">
              Las Vegas Grand Prix
            </h2>
            <h3 className="fs--14 fs-mobile-7 mt-lg-20 mt-mobile-10 text-uppercase">
              Hospitality Furnishings & Event Decor
            </h3>
          </div>
        </div>
      </div>

      <div className="container-fluid container-footer no-phone">
        <div className="row row-1">
          <div className="col-lg-3 col-md-6 offset-lg-1 column-1">
            <a
              href="privacy-policy.html"
              className="fs--14 font-3 text-uppercase btn-underlined-gray mr-50"
            >
              <span>Privacy Policy</span>
            </a>
            <a
              href="https://www.blueprintstudios.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="fs--14 font-3 text-uppercase btn-underline-gray"
            >
              <span>© BLUEPRINT STUDIOS 2023</span>
            </a>
          </div>
          <div className="col-lg-2 col-md-6 offset-lg-5 column-2">
            <ul className="list-social-media">
              <li>
                <a href="index.html" className="link-social-media">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="index.html" className="link-social-media">
                  <i className="icon-instagram"></i>
                </a>
              </li>
              <li>
                <a href="index.html" className="link-social-media">
                  <i className="icon-x"></i>
                </a>
              </li>
              <li>
                <a href="index.html" className="link-social-media">
                  <i className="icon-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg" data-aos="d:loop">
        <div className="container-img bg-video">
          <video
            data-src="images/lib/video.mp4#t=0.01"
            src="images/lib/video.mp4#t=0.01"
            data-preload
            className="media"
            alt="product"
            muted
            data-autoplay
            loop
            playsInline
          ></video>
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
};

export default Home;
