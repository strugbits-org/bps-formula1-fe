import AddToCartModal from "../Product/AddToCartModal";
import AnimateLink from "./AnimateLink";

const MatchedProducts = () => {

  return (
    <>
      <section className="product-post-match pt-lg-90 pt-tablet-95 pt-phone-70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 column-1">
              <h2
                className="fs--30 fs-mobile-20 text-uppercase text-center white-1 split-words"
                data-aos="d:loop"
              >
                Match with
              </h2>
              <div id="slider-match-with" className="mt-35" data-aos="d:loop">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => {
                      return (
                        <div
                          key={index}
                          className="swiper-slide"
                          style={{ margin: "16px", borderRadius: "30px" }}
                        >
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
                                <h2 className="product-title">
                                  Pilot Chairred
                                </h2>
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
                                    src="/images/products/img-01.png"
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
                                    src="/images/products/img-01-blue.png"
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
                                    src="/images/products/img-01-brown.png"
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
                                      src="/images/products/img-01.png"
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
                                      src="/images/products/img-01-blue.png"
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
                                      src="/images/products/img-01-brown.png"
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
                              <i className="icon-cart"></i>
                            </btn-modal-open>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="swiper-button-prev no-mobile">
                  <i className="icon-arrow-left"></i>
                </div>
                <div className="swiper-button-next no-mobile">
                  <i className="icon-arrow-right"></i>
                </div>
                <div className="swiper-pagination swiper-pagination-01 no-desktop no-tablet"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AddToCartModal />
    </>
  );
};

export default MatchedProducts;
