import { Link } from "react-router-dom";
import collectionImage from "../images/gallery/img-09.jpg";
const CollectionData = [
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
];
const CollectionCategory = () => {
  return (
    <div id="main-transition">
      <div
        className="wrapper"
        id="pg-collections-category"
        data-scroll-container
      >
        <main>
          <section className="collections-category-intro pt-lg-165 pb-lg-90 pb-tablet-50 pb-phone-130">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-10 offset-lg-1 column-1">
                  <h2
                    className="fs--21 fs-phone-13 text-uppercase text-center white-1"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
                    Collection
                  </h2>
                  <h1
                    className="fs--30 fs-tablet-30 font-2 text-uppercase text-center white-1 mt-5 mt-tablet-25 mb-lg-60 mb-tablet-45 mb-phone-35 split-chars"
                    data-aos="d:loop"
                  >
                    Classic vegas
                  </h1>
                  <ul className="list-collections grid-lg-33 grid-tablet-50">
                    {CollectionData.map((data, index) => {
                      const { name, image, link } = data;
                      return (
                        <li key={index} className="grid-item" data-aos="d:loop">
                          <Link to={link} className="collection-link small">
                            <h3 className="collection-title">{name}</h3>
                            <div className="container-img">
                              <img src={image} data-preload className="media" />
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="col-lg-6 offset-lg-3 collection-description mt-60">
                  <h4
                    className="fs--14 text-uppercase text-center white-1"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
                    Collection
                  </h4>
                  <h3
                    className="fs--20 fs-phone-16 lh-100 font-2 text-uppercase text-center white-1 mt-lg-10 mt-tablet-5 mt-phone-10 split-chars"
                    data-aos="d:loop"
                  >
                    Classic vegas
                  </h3>
                  <div
                    className="container-text fs--14 fs-mobile-12 white-1 collection-text text-center mt-lg-20 mt-tablet-30 mt-phone-25"
                    data-aos="fadeInUp .8s ease-in-out .2s, d:loop"
                  >
                    <p>
                      Experience the epitome of luxury with a stunning
                      collection of furniture and decor inspired by the glitz
                      and glamour of Las Vegas, complemented by the electrifying
                      excitement of the Formula One Las Vegas Grand Prix. This
                      exclusive collection brings together the best of both
                      worlds, creating a truly unique and extravagant event
                      experience.
                    </p>
                    <p className="mt-mobile-15">
                      Our furniture pieces are meticulously handcrafted with
                      exquisite attention to detail, featuring sleek and modern
                      designs that reflect the opulent aesthetic of Las Vegas.
                      From plush velvet sofas to elegant marble tables, our
                      collection offers a range of luxurious options for your
                      event. Each piece is carefully selected to elevate the
                      atmosphere and provide the ultimate VIP experience for
                      your guests.
                    </p>
                  </div>
                  <a
                    href="collections.html"
                    className="btn-medium btn-red btn-hover-white mt-30"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
                    <div className="split-chars">
                      <span data-letter="Collections">Collections</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="bg-fixed no-mobile" data-aos="d:loop">
            <div className="container-img">
              <img
                src="images/img-03.jpg"
                data-preload
                className="no-mobile media"
                data-parallax-top
                data-translate-y="-20%"
              />
              <img
                src="images/img-02.jpg"
                data-preload
                className="no-desktop media"
              />
            </div>
          </div>
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

export default CollectionCategory;
