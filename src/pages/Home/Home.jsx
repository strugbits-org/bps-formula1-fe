import usePageInitialization from '../../hooks/usePageInitialization';

const Hometwo = () => {
  usePageInitialization('pg-home', '.initScript', '.home');

  return (
    <div id="main-transition">
      <div className="wrapper" id="pg-home" data-scroll-container>
        <main>
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
                        />
                      </div>
                      <div className="container-img logo-blueprint-rentals">
                        <img
                          src="images/blueprint-rentals.svg"
                          data-preload
                          className="media"
                        />
                      </div>
                    </div>
                    <div className="container-sign-in">
                      <div
                        className="wrapper-form-sign-in"
                        data-form-sign-in-container
                      >
                        <form
                          className="form-sign-in form-base"
                          data-redirect="collections.html"
                        >
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
                              type="submit"
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
                        <a
                          href="terms-of-use.html"
                          className="btn-underlined-white"
                        >
                          <span>Blueprint Studios Terms & Conditions</span>
                        </a>
                        and
                        <a
                          href="privacy-policy.html"
                          className="btn-underlined-white"
                        >
                          <span>Privacy Policy.</span>
                        </a>
                      </p>
                      <button className="btn-small-wide btn-gray btn-hover-red btn-create-account w-mobile-100 mt-25">
                        <div className="split-chars">
                          <span>Create your account</span>
                        </div>
                      </button>
                    </div>
                    <div className="container-create-account d-none">
                      <div className="container-account" data-form-container>
                        <form className="form-account form-create-account">
                          <input
                            type="hidden"
                            name="subject"
                            value="[account]"
                          />
                          <div className="container-input col-lg-3">
                            <label htmlFor="account-first-name">
                              First name
                            </label>
                            <input
                              id="account-first-name"
                              name="first_name"
                              type="text"
                              placeholder="NAME"
                              required
                            />
                          </div>
                          <div className="container-input col-lg-3">
                            <label htmlFor="account-last-name">Last name</label>
                            <input
                              id="account-last-name"
                              name="last_name"
                              type="text"
                              placeholder="LAST NAME"
                              required
                            />
                          </div>
                          <div className="container-input col-lg-3">
                            <label htmlFor="account-company">Company</label>
                            <input
                              id="account-company"
                              name="company"
                              type="text"
                              placeholder="COMPANY"
                              required
                            />
                          </div>
                          <div className="container-input col-lg-3">
                            <label htmlFor="account-phone">Phone Number</label>
                            <input
                              id="account-phone"
                              name="phone"
                              type="tel"
                              placeholder="+1 (415) 000-0000"
                              required
                            />
                          </div>
                          <div className="container-input col-lg-3">
                            <label htmlFor="account-email">E-mail</label>
                            <input
                              id="account-email"
                              name="email"
                              type="email"
                              placeholder="exemple@myemail.com"
                              required
                            />
                          </div>
                          <div className="container-input container-input-password">
                            <label htmlFor="account-password">Password</label>
                            <input
                              id="account-password"
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
                          <div className="container-input container-input-password">
                            <label htmlFor="account-confirm-password">
                              Confirm password
                            </label>
                            <input
                              id="account-confirm-password"
                              className="password"
                              name="confirm_password"
                              type="password"
                              placeholder="* * * * * *"
                              required
                            />
                            <div className="toggle-password">
                              <i className="icon-password"></i>
                              <i className="icon-password-hide"></i>
                            </div>
                          </div>
                          <div className="container-input container-select col-lg-12">
                            <div className="container-select-hospitality-space">
                              <label htmlFor="account-hospitality-space">
                                Where is your hospitality space located?
                              </label>
                              <div className="select">
                                <i className="icon-arrow-down no-desktop"></i>
                                <div className="wrapper-select">
                                  <select
                                    className="main-select"
                                    name="hospitality_space"
                                  >
                                    <option value="Choice">Choice</option>
                                    <option value="Paddock">Paddock</option>
                                    <option value="Koval">Koval</option>
                                    <option value="Skybox">Skybox</option>
                                    <option value="Other">Other</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="container-select-specify-other input-hide">
                              <div className="wrapper-input">
                                <label htmlFor="account-other">Specify</label>
                                <input
                                  id="account-other"
                                  name="other"
                                  type="text"
                                  placeholder="OTHER"
                                />
                              </div>
                            </div>
                          </div>
                          <h3 data-aos="fadeIn" data-form-error>
                            Error, Try again!
                          </h3>
                          <div className="container-submit flex-center col-lg-12 mt-lg-5 mt-mobile-10">
                            <button
                              type="submit"
                              className="bt-submit btn-small-wide btn-red btn-hover-white mt-tablet-10 w-mobile-100"
                            >
                              <span className="submit-text split-chars">
                                <span>Create Account</span>
                              </span>
                            </button>
                          </div>
                        </form>
                        <h3 data-aos="fadeIn" data-form-success>
                          Success!
                        </h3>
                      </div>
                      <p className="text-agree mt-lg-15 mt-mobile-20">
                        By continuing, you are agreeing with
                        <a
                          href="terms-of-use.html"
                          className="btn-underlined-white"
                        >
                          <span>Blueprint Studios Terms & Conditions</span>
                        </a>
                        and
                        <a
                          href="privacy-policy.html"
                          className="btn-underlined-white"
                        >
                          <span>Privacy Policy.</span>
                        </a>
                      </p>
                    </div>
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
                />
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer id="footer">
        <div className="container-fluid">
          <div className="row row-1">
            <div className="col-lg-3 offset-lg-1 col-8 column-1 order-mobile-1">
              <a
                href="https://rentals.blueprintstudios.com"
                target="_blank"
                rel="noopener noreferrer"
                className="container-img"
              >
                <img
                  src="images/logo-blueprint-rentals.svg"
                  data-preload
                  className="media"
                />
              </a>
              <div className="container-address mt-lg-60 mt-tablet-35 mt-phone-45">
                <address>
                  7900 W Sunset RD <br />
                  Suite 400 <br />
                  Las Vegas, NV 89113 <br />
                </address>
                <a
                  href="tel:+17027577987"
                  className="tel btn-underline-white mt-lg-20 mt-mobile-15"
                >
                  <span>P / 702.757.7987</span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 column-2 order-mobile-3 mt-phone-20">
              <div className="container-logo pointer-events-none">
                <i className="icon-logo-formula-1"></i>
                <h2 className="fs--20 font-2 red-1 text-uppercase text-center mt-25">
                  Las Vegas Grand Prix
                </h2>
                <h3 className="fs--14 red-1 text-uppercase mt-15">
                  Hospitality Furnishings & Event Decor
                </h3>
              </div>
            </div>
            <div className="col-lg-2 col-4 offset-lg-2 column-3 order-mobile-2">
              <ul className="list-menu-footer">
                <li>
                  <a href="index.html" className="link-footer">
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="gallery.html" className="link-footer">
                    <span>Gallery</span>
                  </a>
                </li>
                <li>
                  <a href="collections.html" className="link-footer">
                    <span>Collections</span>
                  </a>
                </li>
                <li>
                  <a href="cart.html" className="link-footer">
                    <span>Cart</span>
                  </a>
                </li>
                <li>
                  <a href="my-account.html" className="link-footer">
                    <span>User area</span>
                  </a>
                </li>
                <li>
                  <a href="privacy-policy.html" className="link-footer">
                    <span>Privacy policy</span>
                  </a>
                </li>
                <li>
                  <a href="terms-of-use.html" className="link-footer">
                    <span>Terms of use</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row row-2 mt-tablet-10 mt-phone-25">
            <div className="col-lg-3 col-md-6 offset-lg-1 column-1 order-phone-2 mt-phone-15">
              <p className="fs--10 white-1">
                <span className="if-its-not-remarkable">
                  If it’s not remarkable, it’s invisible is a trademark of
                  blueprint studios.
                </span>
                <span className="mt-phone-10 no-tablet all-rights">
                  © Blueprint studios. All Rights Reserved.
                </span>
              </p>
            </div>
            <div className="col-lg-2 col-md-6 offset-lg-6 column-2 order-phone-1">
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
              <span className="fs--10 white-1 no-desktop no-phone">
                © Blueprint studios. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hometwo;
