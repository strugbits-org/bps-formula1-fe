import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  // const handleSignIn = () => {
  //   // Your sign-in logic goes here
  //   setIsSignedIn(true); // Set isSignedIn to true when sign-in is successful
  // };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Add animation class to trigger animation
      document.body.classList.add("page-enter-active");

      // Set timeout to remove animation class after animation completes
      setTimeout(() => {
        document.body.classList.remove("page-enter-active");
      }, 900); // Adjust the timeout according to your animation duration

      // Set another timeout to navigate after the animation completes
      setTimeout(() => {
        // Replace this with your navigation logic
        navigate("/collections");

        // Update the attribute after navigation if needed
        // document.body.setAttribute("data-login-state", "logged");
      }, 1000); // Adjust the timeout accordingly (animation duration + additional delay)

      // navigate("/collections");
      // document.body.setAttribute("data-login-state", "logged");
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <>
      <header id="header" data-parent-submenu>
        <div class="container-header-sign-in">
          <div class="container-h-1 order-phone-2 mr-phone-10">
            <Link
              to="/collections"
              class="btn-small btn-dark btn-hover-white-black"
            >
              <div class="split-chars">
                <span>Gallery</span>
              </div>
            </Link>
          </div>
          <div class="container-h-2 mx-md-45 order-phone-1">
            <a
              href="index.html"
              class="logo"
              data-pjax
              aria-label="Blueprint Studios | F1 Las Vegas Grand Prix"
            >
              <span>Blueprint Studios | F1 Las Vegas Grand Prix</span>
            </a>
          </div>
          <div class="container-h-3 order-phone-3">
            <button
              class="btn-small btn-red btn-hover-white btn-sign-in"
              data-href="index.html#sign-in"
            >
              <i class="icon-profile"></i>
              <div class="split-chars">
                <span class="no-phone">Sign In</span>
              </div>
            </button>
          </div>
        </div>

        <div class="container-header-logged">
          <div class="container-h-1 order-mobile-2">
            <div class="container-dropdown dropdown-collections">
              <button class="btn-dropdown" data-set-submenu="collections">
                <span>Collections</span>
                <i class="icon-arrow-down"></i>
              </button>
              <div class="wrapper-list-dropdown" data-get-submenu="collections">
                <ul class="list-dropdown">
                  <li>
                    <a href="collections.html" class="link-dropdown">
                      <span>All</span>
                    </a>
                  </li>
                  <li>
                    <a href="collections.html" class="link-dropdown">
                      <span>Legacy</span>
                    </a>
                  </li>
                  <li>
                    <a href="collections.html" class="link-dropdown">
                      <span>Neon house</span>
                    </a>
                  </li>
                  <li>
                    <a href="collections.html" class="link-dropdown">
                      <span>Classic Vegas</span>
                    </a>
                  </li>
                  <li>
                    <a href="collections.html" class="link-dropdown">
                      <span>Paddock</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="container-dropdown dropdown-category">
              <button class="btn-dropdown" data-set-submenu="category">
                <span>Categories</span>
                <i class="icon-arrow-down"></i>
              </button>
              <div class="wrapper-list-dropdown" data-get-submenu="category">
                <ul class="list-dropdown">
                  <li>
                    <a href="products.html" class="link-dropdown">
                      <span>All</span>
                    </a>
                  </li>
                  <li>
                    <a href="products.html" class="link-dropdown">
                      <span>Highboys</span>
                    </a>
                  </li>
                  <li>
                    <a href="products.html" class="link-dropdown">
                      <span>Barstools</span>
                    </a>
                  </li>
                  <li>
                    <a href="products.html" class="link-dropdown">
                      <span>Cafe tables</span>
                    </a>
                  </li>
                  <li>
                    <a href="products.html" class="link-dropdown">
                      <span>Communal</span>
                    </a>
                  </li>
                  <li>
                    <a href="products.html" class="link-dropdown">
                      <span>Banquettes</span>
                    </a>
                  </li>
                  <li>
                    <a href="products.html" class="link-dropdown">
                      <span>Chairs</span>
                    </a>
                  </li>
                  <li>
                    <a href="products.html" class="link-dropdown">
                      <span>Bars</span>
                    </a>
                  </li>
                  <li>
                    <a href="products.html" class="link-dropdown">
                      <span>Greenery</span>
                    </a>
                  </li>
                  <li>
                    <a href="products.html" class="link-dropdown">
                      <span>Lighting</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="container-h-2 mx-lg-45 order-mobile-1">
            <a
              href="index.html"
              class="logo"
              data-pjax
              aria-label="Blueprint Studios | F1 Las Vegas Grand Prix"
            >
              <span>Blueprint Studios | F1 Las Vegas Grand Prix</span>
            </a>
          </div>
          <div class="container-h-3 order-mobile-3">
            <div class="container-form" data-get-submenu="search">
              <form
                action="search.html"
                class="form-search header-search"
                data-pjax
                data-search-form
              >
                <div class="container-input input-header">
                  <label for="search" class="split-chars">
                    Search
                  </label>
                  <input type="search" class="search" name="for" required />
                  <div class="container-submit">
                    <button
                      type="submit"
                      class="btn-submit"
                      data-cursor-style="white"
                    >
                      <span class="hide">search</span>
                      <i class="icon-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <button class="btn-search no-desktop" data-set-submenu="search">
              <i class="icon-search"></i>
            </button>
            <a href="my-account.html" class="link-account">
              <i class="icon-profile"></i>
            </a>
            <a href="cart.html" class="link-cart">
              <i class="icon-cart"></i>
            </a>
          </div>
        </div>
      </header>

      <div id="main-transition">
        <div class="wrapper" id="pg-home" data-scroll-container>
          <main>
            <section
              class="home-intro home-sign-in section-intro"
              data-aos="d:loop"
            >
              <div class="container-fluid pos-relative z-5">
                <div class="row">
                  <div class="col-lg-12 column-form">
                    <div class="wrapper-form">
                      <div class="container-logos mb-lg-40 mb-mobile-45">
                        <div class="container-img logo-formula-1">
                          <img
                            src="images/logo-formula-1-red.svg"
                            data-preload
                            class="media"
                          />
                        </div>
                        <div class="container-img logo-blueprint-rentals">
                          <img
                            src="images/blueprint-rentals.svg"
                            data-preload
                            class="media"
                          />
                        </div>
                      </div>
                      <div class="container-sign-in">
                        <div
                          class="wrapper-form-sign-in"
                          data-form-sign-in-container
                        >
                          <form class="form-sign-in form-base">
                            <input type="hidden" name="login" value="[Login]" />
                            <div class="container-input col-12">
                              <label for="login-email">Email</label>
                              <input
                                id="login-email"
                                name="email"
                                type="email"
                                placeholder="exemple@myemail.com"
                                required
                              />
                            </div>
                            <div class="container-input container-input-password col-12">
                              <label for="login-password">Password</label>
                              <input
                                id="login-password"
                                class="password"
                                name="password"
                                type="password"
                                placeholder="* * * * * *"
                                required
                              />
                              <div class="toggle-password">
                                <i class="icon-password"></i>
                                <i class="icon-password-hide"></i>
                              </div>
                            </div>
                            <div class="container-submit col-12 mt-mobile-10">
                              <button
                                onClick={handleSubmit}
                                class="bt-submit btn-small-wide btn-red btn-hover-white w-100"
                              >
                                <i class="icon-profile"></i>
                                <span class="submit-text split-chars">
                                  <span>Sign In</span>
                                </span>
                              </button>
                            </div>
                          </form>
                          <h3 data-aos="fadeIn" data-form-error>
                            Error, Try again!
                          </h3>
                        </div>
                        <p class="text-agree mt-lg-25 mt-mobile-30">
                          By continuing, you are agreeing with
                          <a
                            href="terms-of-use.html"
                            class="btn-underlined-white"
                          >
                            <span>Blueprint Studios Terms & Conditions</span>
                          </a>
                          and
                          <a
                            href="privacy-policy.html"
                            class="btn-underlined-white"
                          >
                            <span>Privacy Policy.</span>
                          </a>
                        </p>
                        <button class="btn-small-wide btn-gray btn-hover-red btn-create-account w-mobile-100 mt-25">
                          <div class="split-chars">
                            <span>Create your account</span>
                          </div>
                        </button>
                      </div>
                      <div class="container-create-account d-none">
                        <div class="container-account" data-form-container>
                          <form class="form-account form-create-account">
                            <input
                              type="hidden"
                              name="subject"
                              value="[account]"
                            />
                            <div class="container-input col-lg-3">
                              <label for="account-first-name">First name</label>
                              <input
                                id="account-first-name"
                                name="first_name"
                                type="text"
                                placeholder="NAME"
                                required
                              />
                            </div>
                            <div class="container-input col-lg-3">
                              <label for="account-last-name">Last name</label>
                              <input
                                id="account-last-name"
                                name="last_name"
                                type="text"
                                placeholder="LAST NAME"
                                required
                              />
                            </div>
                            <div class="container-input col-lg-3">
                              <label for="account-company">Company</label>
                              <input
                                id="account-company"
                                name="company"
                                type="text"
                                placeholder="COMPANY"
                                required
                              />
                            </div>
                            <div class="container-input col-lg-3">
                              <label for="account-phone">Phone Number</label>
                              <input
                                id="account-phone"
                                name="phone"
                                type="tel"
                                placeholder="+1 (415) 000-0000"
                                required
                              />
                            </div>
                            <div class="container-input col-lg-3">
                              <label for="account-email">E-mail</label>
                              <input
                                id="account-email"
                                name="email"
                                type="email"
                                placeholder="exemple@myemail.com"
                                required
                              />
                            </div>
                            <div class="container-input container-input-password">
                              <label for="account-password">Password</label>
                              <input
                                id="account-password"
                                class="password"
                                name="password"
                                type="password"
                                placeholder="* * * * * *"
                                required
                              />
                              <div class="toggle-password">
                                <i class="icon-password"></i>
                                <i class="icon-password-hide"></i>
                              </div>
                            </div>
                            <div class="container-input container-input-password">
                              <label for="account-confirm-password">
                                Confirm password
                              </label>
                              <input
                                id="account-confirm-password"
                                class="password"
                                name="confirm_password"
                                type="password"
                                placeholder="* * * * * *"
                                required
                              />
                              <div class="toggle-password">
                                <i class="icon-password"></i>
                                <i class="icon-password-hide"></i>
                              </div>
                            </div>
                            <div class="container-input container-select col-lg-12">
                              <div class="container-select-hospitality-space">
                                <label for="account-hospitality-space">
                                  Where is your hospitality space located?
                                </label>
                                <div class="select">
                                  <i class="icon-arrow-down no-desktop"></i>
                                  <div class="wrapper-select">
                                    <select
                                      class="main-select"
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
                              <div class="container-select-specify-other input-hide">
                                <div class="wrapper-input">
                                  <label for="account-other">Specify</label>
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
                            <div class="container-submit flex-center col-lg-12 mt-lg-5 mt-mobile-10">
                              <button
                                type="submit"
                                class="bt-submit btn-small-wide btn-red btn-hover-white mt-tablet-10 w-mobile-100"
                              >
                                <span class="submit-text split-chars">
                                  <span>Create Account</span>
                                </span>
                              </button>
                            </div>
                          </form>
                          <h3 data-aos="fadeIn" data-form-success>
                            Success!
                          </h3>
                        </div>
                        <p class="text-agree mt-lg-15 mt-mobile-20">
                          By continuing, you are agreeing with
                          <a
                            href="terms-of-use.html"
                            class="btn-underlined-white"
                          >
                            <span>Blueprint Studios Terms & Conditions</span>
                          </a>
                          and
                          <a
                            href="privacy-policy.html"
                            class="btn-underlined-white"
                          >
                            <span>Privacy Policy.</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="container-logo-bottom">
                <div class="logo-bottom">
                  <div class="container-img">
                    <img
                      src="images/logo-formula-1.svg"
                      data-preload
                      class="media"
                    />
                  </div>
                  <div class="container-text">
                    <h2 class="font-2 fs--20 fs-tablet-9 fs-phone-11 text-uppercase">
                      Las Vegas Grand Prix
                    </h2>
                    <h3 class="fs--14 fs-mobile-7 mt-lg-20 mt-mobile-10 text-uppercase">
                      Hospitality Furnishings & Event Decor
                    </h3>
                  </div>
                </div>
              </div>
              <div class="container-fluid container-footer no-phone">
                <div class="row row-1">
                  <div class="col-lg-3 col-md-6 offset-lg-1 column-1">
                    <a
                      href="privacy-policy.html"
                      class="fs--14 font-3 text-uppercase btn-underlined-gray mr-50"
                    >
                      <span>Privacy Policy</span>
                    </a>
                    <a
                      href="https://www.blueprintstudios.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="fs--14 font-3 text-uppercase btn-underline-gray"
                    >
                      <span>© BLUEPRINT STUDIOS 2023</span>
                    </a>
                  </div>
                  <div class="col-lg-2 col-md-6 offset-lg-5 column-2">
                    <ul class="list-social-media">
                      <li>
                        <a href="index.html" class="link-social-media">
                          <i class="icon-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="index.html" class="link-social-media">
                          <i class="icon-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="index.html" class="link-social-media">
                          <i class="icon-x"></i>
                        </a>
                      </li>
                      <li>
                        <a href="index.html" class="link-social-media">
                          <i class="icon-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="bg" data-aos="d:loop">
                <div class="container-img bg-video">
                  <video
                    data-src="images/lib/video.mp4#t=0.01"
                    src="images/lib/video.mp4#t=0.01"
                    data-preload
                    class="media"
                    muted
                    data-autoplay
                    loop
                    playsInline
                  ></video>
                </div>
                <div class="container-img bg-img">
                  <img
                    src="images/home/img-01.jpg"
                    data-preload
                    class="media"
                  />
                </div>
              </div>
            </section>
          </main>
        </div>
        <footer id="footer">
          <div class="container-fluid">
            <div class="row row-1">
              <div class="col-lg-3 offset-lg-1 col-8 column-1 order-mobile-1">
                <a
                  href="https://rentals.blueprintstudios.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="container-img"
                >
                  <img
                    src="images/logo-blueprint-rentals.svg"
                    data-preload
                    class="media"
                  />
                </a>
                <div class="container-address mt-lg-60 mt-tablet-35 mt-phone-45">
                  <address>
                    7900 W Sunset RD <br />
                    Suite 400 <br />
                    Las Vegas, NV 89113 <br />
                  </address>
                  <a
                    href="tel:+17027577987"
                    class="tel btn-underline-white mt-lg-20 mt-mobile-15"
                  >
                    <span>P / 702.757.7987</span>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 column-2 order-mobile-3 mt-phone-20">
                <div class="container-logo pointer-events-none">
                  <i class="icon-logo-formula-1"></i>
                  <h2 class="fs--20 font-2 red-1 text-uppercase text-center mt-25">
                    Las Vegas Grand Prix
                  </h2>
                  <h3 class="fs--14 red-1 text-uppercase mt-15">
                    Hospitality Furnishings & Event Decor
                  </h3>
                </div>
              </div>
              <div class="col-lg-2 col-4 offset-lg-2 column-3 order-mobile-2">
                <ul class="list-menu-footer">
                  <li>
                    <a href="index.html" class="link-footer">
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="gallery.html" class="link-footer">
                      <span>Gallery</span>
                    </a>
                  </li>
                  <li>
                    <a href="collections.html" class="link-footer">
                      <span>Collections</span>
                    </a>
                  </li>
                  <li>
                    <a href="cart.html" class="link-footer">
                      <span>Cart</span>
                    </a>
                  </li>
                  <li>
                    <a href="my-account.html" class="link-footer">
                      <span>User area</span>
                    </a>
                  </li>
                  <li>
                    <a href="privacy-policy.html" class="link-footer">
                      <span>Privacy policy</span>
                    </a>
                  </li>
                  <li>
                    <a href="terms-of-use.html" class="link-footer">
                      <span>Terms of use</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row row-2 mt-tablet-10 mt-phone-25">
              <div class="col-lg-3 col-md-6 offset-lg-1 column-1 order-phone-2 mt-phone-15">
                <p class="fs--10 white-1">
                  <span class="if-its-not-remarkable">
                    If it’s not remarkable, it’s invisible is a trademark of
                    blueprint studios.
                  </span>
                  <span class="mt-phone-10 no-tablet all-rights">
                    © Blueprint studios. All Rights Reserved.
                  </span>
                </p>
              </div>
              <div class="col-lg-2 col-md-6 offset-lg-6 column-2 order-phone-1">
                <ul class="list-social-media">
                  <li>
                    <a href="index.html" class="link-social-media">
                      <i class="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="index.html" class="link-social-media">
                      <i class="icon-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="index.html" class="link-social-media">
                      <i class="icon-x"></i>
                    </a>
                  </li>
                  <li>
                    <a href="index.html" class="link-social-media">
                      <i class="icon-linkedin"></i>
                    </a>
                  </li>
                </ul>
                <span class="fs--10 white-1 no-desktop no-phone">
                  © Blueprint studios. All Rights Reserved.
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div id="reloading-area"></div>
    </>
  );
};

export default SignIn;
