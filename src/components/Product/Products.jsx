import OtherCollections from "../Common/OtherCollections";
import FilterButton from "../Common/FilterButton";
import AnimateLink from "../Common/AnimateLink";
import AddToCartModal from "./AddToCartModal";
import usePageInitialization from "@/hooks/usePageInitialization";

const chairCategory = [
  "Accent chairs",
  "Arm chairs",
  "Conference chairs",
  "Dining chairs",
  "Lounge chairs",
  "Office chairs",
  "Seat chairs",
  "Swivel chairs",
];

const Products = () => {
  // usePageInitialization("pg-products", ".initScript", ".products");

  return (
    <>
      <section className="products-intro">
        <div className="container-fluid pos-relative z-5">
          <div className="row row-1">
            <div className="col-lg-1 col-mobile-9 offset-lg-1 column-1 order-mobile-1">
              <h1
                className="fs--30 fs-tablet-20 text-uppercase white-1 split-words"
                data-aos="d:loop"
              >
                Chairs
              </h1>
            </div>
            <div className="col-lg-8 column-2 order-mobile-3 mt-mobile-15">
              <ul
                className="list-tags"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                {chairCategory.map((data, index) => {
                  return (
                    <li key={index} className="list-item">
                      <button className="btn-tag ">
                        {/* active- className for active button */}
                        <span>{data}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <FilterButton />
          </div>

          <div className="row row-2 mt-lg-60 mt-mobile-30 pb-lg-80">
            <div className="col-lg-10 offset-lg-1 column-1">
              <div className="container-title">
                <h2 className="fs-lg-24 white-1 text-center text-uppercase">
                  <span
                    className="fs-mobile-13 fw-400 mr-15"
                    data-aos="fadeIn .8s ease-in-out .6s, d:loop"
                  >
                    Collection
                  </span>
                  <span
                    className="fs-tablet-20 fs-phone-16 font-2 mt-5 split-chars"
                    data-delay="400"
                    data-aos="d:loop"
                  >
                    Classic Vegas
                  </span>
                </h2>
              </div>
              <ul className="list-products grid-lg-33 grid-md-50 mt-lg-60 mt-mobile-30">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data, index) => {
                  return (
                    <li key={index} className="grid-item" data-aos="d:loop">
                      <div
                        className="product-link large active"
                        data-product-category
                        data-product-location
                        data-product-colors
                      >
                        <div className="container-tags">
                          <div className="best-seller">
                            <span>Best Seller</span>
                          </div>
                          <button className="btn-bookmark">
                            <i className="icon-bookmark"></i>
                          </button>
                        </div>
                        <div className="container-copy">
                          <a href="/#" className="btn-copy copy-link">
                            <span>MODCH39</span>
                            <i className="icon-copy"></i>
                          </a>
                          <input
                            type="text"
                            className="copy-link-url"
                            value="MODCH39"
                            style={{
                              position: "absolute",
                              opacity: 0,
                              pointerEvents: "none",
                            }}
                          />
                        </div>
                        <AnimateLink to="/products" className="link">
                          <div className="container-top">
                            <h2 className="product-title">Pilot Chairred</h2>
                            <div className="container-info">
                              <div className="dimensions">
                                <span>24”L X 30”W X 37”H</span>
                              </div>
                            </div>
                          </div>
                          <div className="wrapper-product-img">
                            <div
                              className="container-img product-img"
                              data-get-product-link-color="red"
                              data-default-product-link-active
                            >
                              <img
                                src="images/products/img-01.png"
                                data-preload
                                className="media"
                                alt="product"
                              />
                            </div>
                            <div
                              className="container-img product-img"
                              data-get-product-link-color="yellow"
                            >
                              <img
                                src="images/products/img-01-blue.png"
                                data-preload
                                className="media"
                                alt="product"
                              />
                            </div>
                            <div
                              className="container-img product-img"
                              data-get-product-link-color="blue"
                            >
                              <img
                                src="images/products/img-01-brown.png"
                                data-preload
                                className="media"
                                alt="product"
                              />
                            </div>
                          </div>
                          <div className="container-bottom">
                            <div className="price">$ 99.99</div>
                          </div>
                        </AnimateLink>
                        <div className="container-color-options">
                          <ul className="list-color-options">
                            <li
                              className="list-item"
                              data-set-product-link-color="red"
                              data-default-product-link-active
                            >
                              <div className="container-img">
                                <img
                                  src="images/products/img-01.png"
                                  data-preload
                                  className="media"
                                  alt="product"
                                />
                              </div>
                            </li>
                            <li
                              className="list-item"
                              data-set-product-link-color="yellow"
                            >
                              <div className="container-img">
                                <img
                                  src="images/products/img-01-blue.png"
                                  data-preload
                                  className="media"
                                  alt="product"
                                />
                              </div>
                            </li>
                            <li
                              className="list-item"
                              data-set-product-link-color="blue"
                            >
                              <div className="container-img">
                                <img
                                  src="images/products/img-01-brown.png"
                                  data-preload
                                  className="media"
                                  alt="product"
                                />
                              </div>
                            </li>
                          </ul>
                          <div className="colors-number">
                            <span>+3</span>
                          </div>
                        </div>
                        <btn-modal-open
                          group="modal-product"
                          class="modal-add-to-cart"
                        >
                          <span>Add to cart</span>
                          <i class="icon-cart"></i>
                        </btn-modal-open>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="flex-center mt-30">
                <button
                  className="btn-medium btn-red btn-hover-white"
                  data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                >
                  <div className="split-chars">
                    <span>Load more</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-fixed no-tablet" data-aos="d:loop">
          <div className="container-img">
            <img
              src="images/img-01.jpg"
              data-preload
              className="no-mobile media"
              data-parallax-top
              data-translate-y="-20%"
              alt="product"
            />
            <img
              src="images/img-02.jpg"
              data-preload
              className="no-desktop media"
              alt="product"
            />
          </div>
        </div>
      </section>
      <OtherCollections />
      <AddToCartModal />
    </>
  );
};

export default Products;
