import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  // useEffect(() => {
  //   document.querySelector(".initScript").click();
  //   console.log("Page loaded");
  // }, []);
  return (
    <>
      <div id="main-transition">
        <div className="wrapper" id="pg-cart" data-scroll-container>
          <main>
            <section className="cart-intro pb-lg-80 pb-tablet-70 pb-phone-135">
              <div className="container-fluid pos-relative z-5">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div className="container-title">
                      <h1
                        className="fs--30 text-uppercase white-1 split-words"
                        data-aos="d:loop"
                      >
                        Your cart
                      </h1>
                      <div
                        className="total-price text-lg-right text-mobile-center mt-mobile-20"
                        data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                      >
                        <div className="fs--30 fs-tablet-30 fw-400 red-1 text-uppercase">
                          Total $ 9999.99*
                        </div>
                        <p className="fs--10 white-1 mt-5">
                          *Estimated value for the cart. Shipping and
                          customization costs will be additional.
                        </p>
                      </div>
                    </div>
                    <div data-form-container-cart>
                      <form action="" className="form-cart">
                        <ul
                          className="list-cart list-cart-product mt-35"
                          data-aos="d:loop"
                        >
                          {[1, 2, 3, 4].map((data, index) => {
                            return (
                              <li key={index} className="list-item">
                                <input
                                  type="hidden"
                                  name="sku[]"
                                  value="MODCH09"
                                />
                                <div className="cart-product">
                                  <div className="container-img">
                                    <img
                                      src="images/products/img-01.png"
                                      data-preload
                                      className="media"
                                    />
                                  </div>
                                  <div className="wrapper-product-info">
                                    <div className="container-top">
                                      <div className="container-product-name">
                                        <h2 className="product-name">
                                          Arm Chair - Tapas
                                        </h2>
                                        <Link
                                          to={"/product-post"}
                                          className="btn-view"
                                        >
                                          <span>View</span>
                                          <i className="icon-arrow-right"></i>
                                        </Link>
                                      </div>
                                      <div className="container-price">
                                        <div className="price">$99.00</div>
                                        <button
                                          type="button"
                                          className="btn-cancel"
                                        >
                                          <i className="icon-close"></i>
                                        </button>
                                      </div>
                                    </div>
                                    <div className="container-specs">
                                      <ul className="list-specs">
                                        <li className="sku">
                                          <span className="specs-title">
                                            SKU
                                          </span>
                                          <span className="specs-text">
                                            MODCH09
                                          </span>
                                        </li>
                                        <li className="collection">
                                          <span className="specs-title">
                                            Collection
                                          </span>
                                          <span className="specs-text">
                                            Paddock
                                          </span>
                                        </li>
                                        <li className="color">
                                          <span className="specs-title">
                                            Color
                                          </span>
                                          <span className="specs-text">
                                            Yellow - Birch
                                          </span>
                                        </li>
                                        <li className="additional-note">
                                          <span className="specs-title">
                                            Additional note
                                          </span>
                                          <input
                                            type="text"
                                            placeholder="Lorem Ipsum"
                                          />
                                        </li>
                                      </ul>
                                      <div className="quantity">
                                        <span className="fs--18 no-mobile">
                                          Quantity
                                        </span>
                                        <div className="container-input container-input-quantity">
                                          <button
                                            type="button"
                                            className="minus"
                                          >
                                            <i className="icon-minus no-mobile"></i>
                                            <i className="icon-minus-2 no-desktop"></i>
                                          </button>
                                          <input
                                            type="number"
                                            min="0"
                                            value="1"
                                            placeholder="1"
                                            className="input-number"
                                          />
                                          <button
                                            type="button"
                                            className="plus"
                                          >
                                            <i className="icon-plus no-mobile"></i>
                                            <i className="icon-plus-2 no-desktop"></i>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                        <div className="container-btn mt-md-90 mt-phone-40">
                          <button
                            className="btn-medium-wide btn-red btn-hover-white bt-submit"
                            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                          >
                            <div className="split-chars">
                              <span>Request for quote</span>
                            </div>
                          </button>
                          <Link
                            to="/products"
                            className="btn-small-wide btn-gray btn-hover-red mt-lg-30 mt-mobile-20"
                            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                          >
                            <div className="split-chars">
                              <span>Continue shopping</span>
                            </div>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-fixed" data-aos="d:loop">
                <div className="container-img">
                  <img
                    src="images/img-01.jpg"
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
            </section>
          </main>
        </div>
      </div>
      <div id="reloading-area">
        <div className="feedback-quote-request-confirmed" data-modal-area>
          <div className="feedback-container">
            <div className="feedback-item">
              <section className="feedback">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                      <div className="content" data-feedback-area>
                        <div className="container-logos">
                          <div
                            className="container-img logo-formula-1"
                            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                          >
                            <img
                              src="images/logo-formula-1-red.svg"
                              data-preload
                              className="media"
                            />
                          </div>
                          <div
                            className="container-img logo-blueprint"
                            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                          >
                            <img
                              src="images/logo-blueprint-rentals-black.svg"
                              data-preload
                              className="media"
                            />
                          </div>
                        </div>
                        <h2
                          className="fs--70 mt-lg-105 mt-mobile-110 mb-lg-75 mb-mobile-90 text-center text-uppercase split-words"
                          data-aos="d:loop"
                        >
                          Quote request confirmed
                        </h2>
                        <div className="container-btn">
                          <Link
                            to={"/account/my-account"}
                            className="btn-small-wide btn-red btn-my-account btn-hover-black"
                            data-close-feedback
                            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                          >
                            <i className="icon-profile"></i>
                            <span className="split-chars">
                              <span>My Account</span>
                            </span>
                          </Link>
                          <Link
                            to={"/collections"}
                            className="btn-small-wide btn-gray btn-back-to-collections btn-hover-red-white mt-md-30 mt-phone-20"
                            data-close-feedback
                            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                          >
                            <div className="split-chars">
                              <span>Back to collections</span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
