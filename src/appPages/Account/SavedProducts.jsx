import AddToCartModal from "../Product/AddToCartModal";
import usePageInitialization from "../../hooks/usePageInitialization";

const SavedProducts = () => {
  usePageInitialization(
    "pg-my-account-saved-products",
    ".initScript",
    ".savedProducts"
  );

  return (
    <>
      <section class="my-account-intro section-saved-products">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8 offset-lg-3 offset-md-4 column-1">
              <div class="wrapper-top">
                <h1
                  class="fs--60 red-1 text-uppercase split-words"
                  data-aos="d:loop"
                >
                  Saved products
                </h1>
              </div>
              <div class="wrapper-bottom mt-lg-55 mt-tablet-45 mt-phone-25">
                <ul
                  class="list-saved-products grid-lg-25 grid-mobile-50"
                  data-aos="fadeIn .8s ease-in-out .4s, d:loop"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                    (data, index) => {
                      return (
                        <li key={index} class="grid-item">
                          <div
                            class="product-link small saved-products active"
                            data-product-category
                            data-product-location
                            data-product-colors
                          >
                            <div class="container-tags">
                              <button class="btn-bookmark">
                                <i class="icon-bookmark"></i>
                              </button>
                            </div>
                            <a href="products-post.html" class="link">
                              <div class="container-top">
                                <h2 class="product-title">Pilot Chairred</h2>
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
                                    alt="product"
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
                                    alt="product"
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
                                    alt="product"
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
                                      alt="product"
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
                                      alt="product"
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
                                      alt="product"
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
                        </li>
                      );
                    }
                  )}
                </ul>
                <div class="flex-center mt-lg-60 mt-tablet-40 mt-phone-45">
                  <button class="btn-medium btn-red btn-hover-white">
                    <span class="split-chars">
                      <span>Load more</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AddToCartModal />
    </>
  );
};

export default SavedProducts;
