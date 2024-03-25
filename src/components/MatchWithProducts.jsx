const MatchWithProducts = () => {
  return (
    <section class="product-post-match pt-lg-90 pt-tablet-95 pt-phone-70">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-10 offset-lg-1 column-1">
            <h2
              class="fs--30 fs-mobile-20 text-uppercase text-center white-1 split-words"
              data-aos="d:loop"
            >
              Match with
            </h2>
            <div id="slider-match-with" class="mt-35" data-aos="d:loop">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => {
                    return (
                      <div
                        key={index}
                        class="swiper-slide"
                        style={{ margin: "16px", borderRadius: "30px" }}
                      >
                        <div
                          class="product-link large active"
                          data-product-category
                          data-product-location
                          data-product-colors
                        >
                          <div class="container-tags">
                            <div class="best-seller">
                              <span>Best Seller</span>
                            </div>
                            <button class="btn-bookmark">
                              <i class="icon-bookmark"></i>
                            </button>
                          </div>
                          <div class="container-copy">
                            <a
                              href="javascript:void(0)"
                              class="btn-copy copy-link"
                            >
                              <span>MODCH39</span>
                              <i class="icon-copy"></i>
                            </a>
                            <input
                              type="text"
                              class="copy-link-url"
                              value="MODCH39"
                              style={{
                                position: "absolute",
                                opacity: 0,
                                pointerEvents: "none",
                              }}
                            />
                          </div>
                          <a href="products-post.html" class="link">
                            <div class="container-top">
                              <h2 class="product-title">Pilot Chairred</h2>
                              <div class="container-info">
                                <div class="dimensions">
                                  <span>24”L X 30”W X 37”H</span>
                                </div>
                              </div>
                            </div>
                            <div class="wrapper-product-img">
                              <div
                                class="container-img product-img"
                                data-get-product-link-color="red"
                                data-default-product-link-active
                              >
                                <img
                                  src="images/products/img-01.png"
                                  data-preload
                                  class="media"
                                />
                              </div>
                              <div
                                class="container-img product-img"
                                data-get-product-link-color="yellow"
                              >
                                <img
                                  src="images/products/img-01-blue.png"
                                  data-preload
                                  class="media"
                                />
                              </div>
                              <div
                                class="container-img product-img"
                                data-get-product-link-color="blue"
                              >
                                <img
                                  src="images/products/img-01-brown.png"
                                  data-preload
                                  class="media"
                                />
                              </div>
                            </div>
                            <div class="container-bottom">
                              <div class="price">$ 99.99</div>
                            </div>
                          </a>
                          <div class="container-color-options">
                            <ul class="list-color-options">
                              <li
                                class="list-item"
                                data-set-product-link-color="red"
                                data-default-product-link-active
                              >
                                <div class="container-img">
                                  <img
                                    src="images/products/img-01.png"
                                    data-preload
                                    class="media"
                                  />
                                </div>
                              </li>
                              <li
                                class="list-item"
                                data-set-product-link-color="yellow"
                              >
                                <div class="container-img">
                                  <img
                                    src="images/products/img-01-blue.png"
                                    data-preload
                                    class="media"
                                  />
                                </div>
                              </li>
                              <li
                                class="list-item"
                                data-set-product-link-color="blue"
                              >
                                <div class="container-img">
                                  <img
                                    src="images/products/img-01-brown.png"
                                    data-preload
                                    class="media"
                                  />
                                </div>
                              </li>
                            </ul>
                            <div class="colors-number">
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
                      </div>
                    );
                  })}
                </div>
              </div>
              <div class="swiper-button-prev no-mobile">
                <i class="icon-arrow-left"></i>
              </div>
              <div class="swiper-button-next no-mobile">
                <i class="icon-arrow-right"></i>
              </div>
              <div class="swiper-pagination swiper-pagination-01 no-desktop no-tablet"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchWithProducts;
