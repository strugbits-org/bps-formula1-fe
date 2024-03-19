import Account from "./Index";

const QuotesHistory = () => {
  return (
    <>
      <Account />
      <div id="main-transition">
        <div
          class="wrapper"
          id="pg-my-account-quotes-history"
          data-scroll-container
        >
          <main>
            <section class="my-account-intro section-quotes-history">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-8 offset-lg-3 offset-md-4">
                    <h1
                      class="fs--60 red-1 text-uppercase split-words"
                      data-aos="d:loop"
                    >
                      Quotes history
                    </h1>
                    <div class="no-results d-none">
                      <h2
                        class="fs--30 fw-400 red-1 split-words"
                        data-aos="d:loop"
                      >
                        No quotes history
                      </h2>
                    </div>
                    <ul
                      class="list-quotes-history mt-lg-70 mt-mobile-30"
                      data-aos="d:loop"
                    >
                      <li class="list-item">
                        <div class="content">
                          <div class="name-date">
                            <h2 class="name">Ferrari</h2>
                            <div class="date">February, 09h, 2024</div>
                          </div>
                          <div class="value">$ 45.000</div>
                          <div class="container-btn">
                            <btn-modal-open
                              group="modal-quotes-history"
                              class="btn-small btn-white-red btn-hover-red-white"
                            >
                              <div class="split-chars">
                                <span>View</span>
                              </div>
                              <i class="icon-arrow-diagonal"></i>
                            </btn-modal-open>
                            <a
                              href="cart.html"
                              class="btn-small btn-red btn-hover-black"
                            >
                              <div class="split-chars">
                                <span>Order again</span>
                              </div>
                              <i class="icon-arrow-diagonal"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li class="list-item">
                        <div class="content">
                          <div class="name-date">
                            <h2 class="name">Tesla</h2>
                            <div class="date">February, 09h, 2024</div>
                          </div>
                          <div class="value">$ 45.000</div>
                          <div class="container-btn">
                            <btn-modal-open
                              group="modal-quotes-history"
                              class="btn-small btn-white-red btn-hover-red-white"
                            >
                              <div class="split-chars">
                                <span>View</span>
                              </div>
                              <i class="icon-arrow-diagonal"></i>
                            </btn-modal-open>
                            <a
                              href="cart.html"
                              class="btn-small btn-red btn-hover-black"
                            >
                              <div class="split-chars">
                                <span>Order again</span>
                              </div>
                              <i class="icon-arrow-diagonal"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li class="list-item">
                        <div class="content">
                          <div class="name-date">
                            <h2 class="name">McLaren</h2>
                            <div class="date">February, 09h, 2024</div>
                          </div>
                          <div class="value">$ 45.000</div>
                          <div class="container-btn">
                            <btn-modal-open
                              group="modal-quotes-history"
                              class="btn-small btn-white-red btn-hover-red-white"
                            >
                              <div class="split-chars">
                                <span>View</span>
                              </div>
                              <i class="icon-arrow-diagonal"></i>
                            </btn-modal-open>
                            <a
                              href="cart.html"
                              class="btn-small btn-red btn-hover-black"
                            >
                              <div class="split-chars">
                                <span>Order again</span>
                              </div>
                              <i class="icon-arrow-diagonal"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li class="list-item">
                        <div class="content">
                          <div class="name-date">
                            <h2 class="name">Williams</h2>
                            <div class="date">February, 09h, 2024</div>
                          </div>
                          <div class="value">$ 45.000</div>
                          <div class="container-btn">
                            <btn-modal-open
                              group="modal-quotes-history"
                              class="btn-small btn-white-red btn-hover-red-white"
                            >
                              <div class="split-chars">
                                <span>View</span>
                              </div>
                              <i class="icon-arrow-diagonal"></i>
                            </btn-modal-open>
                            <a
                              href="cart.html"
                              class="btn-small btn-red btn-hover-black"
                            >
                              <div class="split-chars">
                                <span>Order again</span>
                              </div>
                              <i class="icon-arrow-diagonal"></i>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
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
                                Total $ 9999.99*
                              </div>
                              <p class="fs--10 mt-5">
                                *Estimated value for the cart. Shipping and
                                customization costs will be additional.
                              </p>
                            </div>
                          </div>
                          <form
                            action=""
                            class="form-cart mt-lg-60 mt-mobile-40"
                          >
                            <ul
                              class="list-cart list-cart-product"
                              data-aos="d:loop"
                            >
                              <li class="list-item">
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
                                        <a
                                          href="products-post.html"
                                          class="btn-view"
                                        >
                                          <span>View</span>
                                          <i class="icon-arrow-right"></i>
                                        </a>
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
                              <li class="list-item">
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
                                        <a
                                          href="products-post.html"
                                          class="btn-view"
                                        >
                                          <span>View</span>
                                          <i class="icon-arrow-right"></i>
                                        </a>
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
                              <li class="list-item">
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
                                        <a
                                          href="products-post.html"
                                          class="btn-view"
                                        >
                                          <span>View</span>
                                          <i class="icon-arrow-right"></i>
                                        </a>
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
                              <li class="list-item">
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
                                        <a
                                          href="products-post.html"
                                          class="btn-view"
                                        >
                                          <span>View</span>
                                          <i class="icon-arrow-right"></i>
                                        </a>
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
                              <li class="list-item">
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
                                        <a
                                          href="products-post.html"
                                          class="btn-view"
                                        >
                                          <span>View</span>
                                          <i class="icon-arrow-right"></i>
                                        </a>
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
                              <li class="list-item">
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
                                        <a
                                          href="products-post.html"
                                          class="btn-view"
                                        >
                                          <span>View</span>
                                          <i class="icon-arrow-right"></i>
                                        </a>
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
                              <li class="list-item">
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
                                        <a
                                          href="products-post.html"
                                          class="btn-view"
                                        >
                                          <span>View</span>
                                          <i class="icon-arrow-right"></i>
                                        </a>
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
                              <li class="list-item">
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
                                        <a
                                          href="products-post.html"
                                          class="btn-view"
                                        >
                                          <span>View</span>
                                          <i class="icon-arrow-right"></i>
                                        </a>
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
                              <li class="list-item">
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
                                        <a
                                          href="products-post.html"
                                          class="btn-view"
                                        >
                                          <span>View</span>
                                          <i class="icon-arrow-right"></i>
                                        </a>
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
                              <li class="list-item">
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
                                        <a
                                          href="products-post.html"
                                          class="btn-view"
                                        >
                                          <span>View</span>
                                          <i class="icon-arrow-right"></i>
                                        </a>
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
                            </ul>
                            <div class="flex-center mt-lg-65 mt-tablet-55 mt-phone-35">
                              <button
                                type="submit"
                                class="btn-medium-wide btn-red btn-hover-white-1 manual-modal-close"
                              >
                                <span class="split-chars">
                                  <span>Add all items to cart</span>
                                </span>
                              </button>
                            </div>
                          </form>
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
    </>
  );
};

export default QuotesHistory;
