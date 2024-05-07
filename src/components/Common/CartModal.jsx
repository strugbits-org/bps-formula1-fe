import AnimateLink from "./AnimateLink";

const CartModal = () => {
  return (
    <div id="reloading-area">
      <modal-group name="modal-quotes-history" className="modal-quotes-history">
        <modal-container>
          <modal-item>
            <div className="wrapper-section">
              <section className="section-modal-quotes-history">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-10 offset-md-1">
                      <div
                        className="modal-content"
                        data-modal-area
                        data-form-container-cart
                      >
                        <div className="container-title">
                          <div className="title">
                            <h2 className="fs--45 text-uppercase">Mclaren</h2>
                            <p className="fs--12 mt-5">February, 09h, 2024</p>
                          </div>
                          <div className="total-price text-lg-right text-mobile-center mt-mobile-20">
                            <div className="fs--30 fs-tablet-30 fw-400 red-1 text-uppercase">
                              Total $ 9999.99*
                            </div>
                            <p className="fs--10 mt-5">
                              *Estimated value for the cart. Shipping and
                              customization costs will be additional.
                            </p>
                          </div>
                        </div>
                        <form className="form-cart mt-lg-60 mt-mobile-40">
                          <ul
                            className="list-cart list-cart-product"
                            data-aos="d:loop"
                          >
                            {[1, 2, 3, 4, 5].map((data, index) => {
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
                                        alt="product"
                                      />
                                    </div>
                                    <div className="wrapper-product-info">
                                      <div className="container-top">
                                        <div className="container-product-name">
                                          <h2 className="product-name">
                                            Arm Chair - Tapas
                                          </h2>
                                          <AnimateLink
                                            to="/products-post"
                                            className="btn-view"
                                          >
                                            <span>View</span>
                                            <i className="icon-arrow-right"></i>
                                          </AnimateLink>
                                        </div>
                                        <div className="container-price">
                                          <div className="price">$99.00</div>
                                          {/* <button
                                            type="button"
                                            className="btn-cancel"
                                          >
                                            <i className="icon-close"></i>
                                          </button> */}
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
                                        {/* <div className="quantity">
                                          <span className="fs--18 no-mobile">
                                            Quantity
                                          </span>
                                          <div className="container-input container-input-quantity">
                                            <button
                                              type="button"
                                              className="minus"
                                              disabled
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
                                              disabled
                                            />
                                            <button
                                              type="button"
                                              className="plus"
                                              disabled
                                            >
                                              <i className="icon-plus no-mobile"></i>
                                              <i className="icon-plus-2 no-desktop"></i>
                                            </button>
                                          </div>
                                        </div> */}
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </form>
                        <div className="flex-center mt-lg-65 mt-tablet-55 mt-phone-35">
                          <AnimateLink
                            to="/cart"
                            className="btn-medium-wide btn-red btn-hover-white-1 manual-modal-close"
                          >
                            <span className="split-chars">
                              <span>Order Again</span>
                            </span>
                          </AnimateLink>
                        </div>
                        <div className="container-btn-modal-close">
                          <btn-modal-close className="btn-close">
                            <i className="icon-close"></i>
                          </btn-modal-close>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </modal-item>
        </modal-container>
      </modal-group>
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
                            alt="product"
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
                            alt="product"
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
                        <a
                          href="my-account.html"
                          className="btn-small-wide btn-red btn-my-account btn-hover-black"
                          data-close-feedback
                          data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                        >
                          <i className="icon-profile"></i>
                          <span className="split-chars">
                            <span>My Account</span>
                          </span>
                        </a>
                        <a
                          href="collections.html"
                          className="btn-small-wide btn-gray btn-back-to-collections btn-hover-red-white mt-md-30 mt-phone-20"
                          data-close-feedback
                          data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                        >
                          <div className="split-chars">
                            <span>Back to collections</span>
                          </div>
                        </a>
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
  );
};

export default CartModal;
