import AnimateLink from "./AnimateLink";

const CartModal = ({ data }) => {
  const totalPrice = data?.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);
  return (
    <div id="reloading-area">
      <modal-group name="modal-quotes-history" class="modal-quotes-history">
        <modal-container>
          <modal-item>
            <div class="wrapper-section">
              <section class="section-modal-quotes-history">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-10 offset-md-1">
                      <div
                        class="modal-content"
                        data-modal-area
                        data-form-container-cart
                      >
                        <div class="container-title">
                          <div class="title">
                            <h2 class="fs--45 text-uppercase">Mclaren</h2>
                            <p class="fs--12 mt-5">February, 09h, 2024</p>
                          </div>
                          <div class="total-price text-lg-right text-mobile-center mt-mobile-20">
                            <div class="fs--30 fs-tablet-30 fw-400 red-1 text-uppercase">
                              Total $ {totalPrice}*
                            </div>
                            <p class="fs--10 mt-5">
                              *Estimated value for the cart. Shipping and
                              customization costs will be additional.
                            </p>
                          </div>
                        </div>
                        <form class="form-cart mt-lg-60 mt-mobile-40">
                          <ul
                            class="list-cart list-cart-product"
                            data-aos="d:loop"
                          >
                            {data &&
                              data.length > 0 &&
                              data.map((data, index) => {
                                console.log(data, "data>>");
                                const { name, description, price, quantity } =
                                  data;
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
                                          alt="product"
                                        />
                                      </div>
                                      <div class="wrapper-product-info">
                                        <div class="container-top">
                                          <div class="container-product-name">
                                            <h2 class="product-name">
                                              {description}
                                            </h2>
                                            <AnimateLink
                                              to="/products"
                                              className="btn-view"
                                            >
                                              <span>View</span>
                                              <i class="icon-arrow-right"></i>
                                            </AnimateLink>
                                          </div>
                                          <div class="container-price">
                                            <div class="price">${price}</div>
                                            {/* <button
                                            type="button"
                                            class="btn-cancel"
                                          >
                                            <i class="icon-close"></i>
                                          </button> */}
                                          </div>
                                        </div>
                                        <div class="container-specs">
                                          <ul class="list-specs">
                                            <li class="sku">
                                              <span class="specs-title">
                                                SKU
                                              </span>
                                              <span class="specs-text">
                                                {name}
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
                                              <span class="specs-title">
                                                Color
                                              </span>
                                              <span class="specs-text">
                                                Yellow - Birch
                                              </span>
                                            </li>
                                            {/* <li class="additional-note">
                                              <span class="specs-title">
                                                Additional note
                                              </span>
                                              <input
                                                type="text"
                                                placeholder="Lorem Ipsum"
                                              />
                                            </li> */}
                                          </ul>
                                          {/* <div class="quantity">
                                          <span class="fs--18 no-mobile">
                                            Quantity
                                          </span>
                                          <div class="container-input container-input-quantity">
                                            <button
                                              type="button"
                                              class="minus"
                                              disabled
                                            >
                                              <i class="icon-minus no-mobile"></i>
                                              <i class="icon-minus-2 no-desktop"></i>
                                            </button>
                                            <input
                                              type="number"
                                              min="0"
                                              value="1"
                                              placeholder="1"
                                              class="input-number"
                                              disabled
                                            />
                                            <button
                                              type="button"
                                              class="plus"
                                              disabled
                                            >
                                              <i class="icon-plus no-mobile"></i>
                                              <i class="icon-plus-2 no-desktop"></i>
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
                        <div class="flex-center mt-lg-65 mt-tablet-55 mt-phone-35">
                          <AnimateLink
                            to="/cart"
                            className="btn-medium-wide btn-red btn-hover-white-1 manual-modal-close"
                          >
                            <span class="split-chars">
                              <span>Order Again</span>
                            </span>
                          </AnimateLink>
                        </div>
                        <div class="container-btn-modal-close">
                          <btn-modal-close class="btn-close">
                            <i class="icon-close"></i>
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
                            alt="product"
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
                            alt="product"
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
                        <a
                          href="my-account.html"
                          class="btn-small-wide btn-red btn-my-account btn-hover-black"
                          data-close-feedback
                          data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                        >
                          <i class="icon-profile"></i>
                          <span class="split-chars">
                            <span>My Account</span>
                          </span>
                        </a>
                        <a
                          href="collections.html"
                          class="btn-small-wide btn-gray btn-back-to-collections btn-hover-red-white mt-md-30 mt-phone-20"
                          data-close-feedback
                          data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                        >
                          <div class="split-chars">
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
