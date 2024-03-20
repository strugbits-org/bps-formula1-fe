import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div id="main-transition">
        <div class="wrapper" id="pg-cart" data-scroll-container>
          <main>
            <section class="cart-intro pb-lg-80 pb-tablet-70 pb-phone-135">
              <div class="container-fluid pos-relative z-5">
                <div class="row">
                  <div class="col-lg-8 offset-lg-2">
                    <div class="container-title">
                      <h1
                        class="fs--30 text-uppercase white-1 split-words"
                        data-aos="d:loop"
                      >
                        Your cart
                      </h1>
                      <div
                        class="total-price text-lg-right text-mobile-center mt-mobile-20"
                        data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                      >
                        <div class="fs--30 fs-tablet-30 fw-400 red-1 text-uppercase">
                          Total $ 9999.99*
                        </div>
                        <p class="fs--10 white-1 mt-5">
                          *Estimated value for the cart. Shipping and
                          customization costs will be additional.
                        </p>
                      </div>
                    </div>
                    <div data-form-container-cart>
                      <form action="" class="form-cart">
                        <ul
                          class="list-cart list-cart-product mt-35"
                          data-aos="d:loop"
                        >
                          {[1, 2, 3, 4].map((data, index) => {
                            return (
                              <li key={index} class="list-item">
                                <input
                                  type="hidden"
                                  name="sku[]"
                                  value="MODCH09"
                                />
                                <div class="cart-product">
                                  <div class="container-img">
                                    <img
                                      src="images/products/img-01.png"
                                      data-preload
                                      class="media"
                                    />
                                  </div>
                                  <div class="wrapper-product-info">
                                    <div class="container-top">
                                      <div class="container-product-name">
                                        <h2 class="product-name">
                                          Arm Chair - Tapas
                                        </h2>
                                        <Link
                                          to={"/product-post"}
                                          class="btn-view"
                                        >
                                          <span>View</span>
                                          <i class="icon-arrow-right"></i>
                                        </Link>
                                      </div>
                                      <div class="container-price">
                                        <div class="price">$99.00</div>
                                        <button
                                          type="button"
                                          class="btn-cancel"
                                        >
                                          <i class="icon-close"></i>
                                        </button>
                                      </div>
                                    </div>
                                    <div class="container-specs">
                                      <ul class="list-specs">
                                        <li class="sku">
                                          <span class="specs-title">SKU</span>
                                          <span class="specs-text">
                                            MODCH09
                                          </span>
                                        </li>
                                        <li class="collection">
                                          <span class="specs-title">
                                            Collection
                                          </span>
                                          <span class="specs-text">
                                            Paddock
                                          </span>
                                        </li>
                                        <li class="color">
                                          <span class="specs-title">Color</span>
                                          <span class="specs-text">
                                            Yellow - Birch
                                          </span>
                                        </li>
                                        <li class="additional-note">
                                          <span class="specs-title">
                                            Additional note
                                          </span>
                                          <input
                                            type="text"
                                            placeholder="Lorem Ipsum"
                                          />
                                        </li>
                                      </ul>
                                      <div class="quantity">
                                        <span class="fs--18 no-mobile">
                                          Quantity
                                        </span>
                                        <div class="container-input container-input-quantity">
                                          <button type="button" class="minus">
                                            <i class="icon-minus no-mobile"></i>
                                            <i class="icon-minus-2 no-desktop"></i>
                                          </button>
                                          <input
                                            type="number"
                                            min="0"
                                            value="1"
                                            placeholder="1"
                                            class="input-number"
                                          />
                                          <button type="button" class="plus">
                                            <i class="icon-plus no-mobile"></i>
                                            <i class="icon-plus-2 no-desktop"></i>
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
                        <div class="container-btn mt-md-90 mt-phone-40">
                          <button
                            class="btn-medium-wide btn-red btn-hover-white bt-submit"
                            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                          >
                            <div class="split-chars">
                              <span>Request for quote</span>
                            </div>
                          </button>
                          <Link
                            to="/products"
                            class="btn-small-wide btn-gray btn-hover-red mt-lg-30 mt-mobile-20"
                            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                          >
                            <div class="split-chars">
                              <span>Continue shopping</span>
                            </div>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-fixed" data-aos="d:loop">
                <div class="container-img">
                  <img
                    src="images/img-01.jpg"
                    data-preload
                    class="no-mobile media"
                    data-parallax-top
                    data-translate-y="-20%"
                  />
                  <img
                    src="images/img-02.jpg"
                    data-preload
                    class="no-desktop media"
                  />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <div id="reloading-area">
        <div class="feedback-quote-request-confirmed" data-modal-area>
          <div class="feedback-container">
            <div class="feedback-item">
              <section class="feedback">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                      <div class="content" data-feedback-area>
                        <div class="container-logos">
                          <div
                            class="container-img logo-formula-1"
                            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                          >
                            <img
                              src="images/logo-formula-1-red.svg"
                              data-preload
                              class="media"
                            />
                          </div>
                          <div
                            class="container-img logo-blueprint"
                            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                          >
                            <img
                              src="images/logo-blueprint-rentals-black.svg"
                              data-preload
                              class="media"
                            />
                          </div>
                        </div>
                        <h2
                          class="fs--70 mt-lg-105 mt-mobile-110 mb-lg-75 mb-mobile-90 text-center text-uppercase split-words"
                          data-aos="d:loop"
                        >
                          Quote request confirmed
                        </h2>
                        <div class="container-btn">
                          <Link
                            to={"/account/my-account"}
                            class="btn-small-wide btn-red btn-my-account btn-hover-black"
                            data-close-feedback
                            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                          >
                            <i class="icon-profile"></i>
                            <span class="split-chars">
                              <span>My Account</span>
                            </span>
                          </Link>
                          <Link
                            to={"/collections"}
                            class="btn-small-wide btn-gray btn-back-to-collections btn-hover-red-white mt-md-30 mt-phone-20"
                            data-close-feedback
                            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                          >
                            <div class="split-chars">
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
