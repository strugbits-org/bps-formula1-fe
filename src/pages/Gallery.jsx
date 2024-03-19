const Gallery = () => {
  return (
    <div id="main-transition">
      <div className="wrapper" id="pg-gallery" data-scroll-container>
        <main>
          <section className="gallery pt-lg-145 pb-90">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-10 offset-lg-1" data-parent-collections>
                  <div className="container-title mb-30">
                    <h1
                      className="fs--30 text-uppercase white-1 split-chars"
                      data-aos="d:loop"
                    >
                      Gallery
                    </h1>
                    <div className="container-dropdown" data-parent-dropdown>
                      <button
                        className="btn-dropdown"
                        data-set-dropdown="collections"
                      >
                        <span data-label-dropdown>All collections</span>
                        <i className="icon-arrow-down"></i>
                      </button>
                      <div
                        className="wrapper-list-dropdown"
                        data-get-dropdown="collections"
                      >
                        <ul className="list-dropdown">
                          <li>
                            <button
                              data-option-dropdown
                              data-set-collections
                              data-default-collections-active
                              className="link-dropdown"
                            >
                              <span>All collections</span>
                            </button>
                          </li>
                          <li>
                            <button
                              data-option-dropdown
                              data-set-collections="legacy"
                              className="link-dropdown"
                            >
                              <span>Legacy</span>
                            </button>
                          </li>
                          <li>
                            <button
                              data-option-dropdown
                              data-set-collections="neon-house"
                              className="link-dropdown"
                            >
                              <span>Neon house</span>
                            </button>
                          </li>
                          <li>
                            <button
                              data-option-dropdown
                              data-set-collections="classic-vegas"
                              className="link-dropdown"
                            >
                              <span>Classic Vegas</span>
                            </button>
                          </li>
                          <li>
                            <button
                              data-option-dropdown
                              data-set-collections="paddock"
                              className="link-dropdown"
                            >
                              <span>Paddock</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="container-gallery"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
                    <ul
                      className="list-gallery"
                      data-default-collections-active
                      data-get-collections="legacy"
                    >
                      <li>
                        <a
                          href="images/gallery/img-01.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-legacy"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-01.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-02.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-legacy"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-02.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-03.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-legacy"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-03.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-04.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-legacy"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-04.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-01.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-legacy"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-01.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-01.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-legacy"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-01.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-05.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-legacy"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-05.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                    </ul>
                    <ul
                      className="list-gallery"
                      data-default-collections-active
                      data-get-collections="neon-house"
                    >
                      <li>
                        <a
                          href="images/gallery/img-06.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-neon-house"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-06.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-07.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-neon-house"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-07.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-08.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-neon-house"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-08.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-05.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-neon-house"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-05.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-04.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-neon-house"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-04.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-09.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-neon-house"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-09.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-01.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-neon-house"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-01.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                    </ul>
                    <ul
                      className="list-gallery"
                      data-default-collections-active
                      data-get-collections="classic-vegas"
                    >
                      <li>
                        <a
                          href="images/gallery/img-02.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-classic-vegas"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-02.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-03.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-classic-vegas"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-03.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-04.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-classic-vegas"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-04.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-05.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-classic-vegas"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-05.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-06.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-classic-vegas"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-06.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-07.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-classic-vegas"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-07.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-08.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-classic-vegas"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-08.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                    </ul>
                    <ul
                      className="list-gallery"
                      data-default-collections-active
                      data-get-collections="paddock"
                    >
                      <li>
                        <a
                          href="images/gallery/img-09.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-paddock"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-09.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-01.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-paddock"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-01.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-02.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-paddock"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-02.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-03.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-paddock"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-03.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-04.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-paddock"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-04.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-05.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-paddock"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-05.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/gallery/img-06.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-paddock"
                        >
                          <div className="container-img">
                            <img
                              src="images/gallery/img-06.jpg"
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                            />
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-center mt-lg-30 mt-mobile-45">
                    <button className="btn-medium btn-red btn-hover-white">
                      <div className="split-chars">
                        <span>Load More</span>
                      </div>
                    </button>
                  </div>
                  <div className="footer-gallery mt-40">
                    <div className="column-text mb-20">
                      <a
                        href="privacy-policy.html"
                        className="fs--14 font-3 text-uppercase btn-underlined-gray mr-15"
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

export default Gallery;
