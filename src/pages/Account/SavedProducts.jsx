import Account from "./Index";

const SavedProducts = () => {
  return (
    <>
      <Account />
      <div id="main-transition">
        <div
          class="wrapper"
          id="pg-my-account-saved-products"
          data-scroll-container
        >
          <main>
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
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
                        <li class="grid-item">
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
                        </li>
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
        <modal-group name="modal-product" class="modal-product">
          <modal-container>
            <modal-item>
              <div class="wrapper-section">
                <section class="section-modal-product">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-lg-10 offset-lg-1">
                        <div
                          class="wrapper-product-info"
                          data-modal-area
                          data-product-content
                        >
                          <ul
                            class="list-slider-product"
                            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                          >
                            <li
                              class="wrapper-slider-product"
                              data-default-active
                              data-get-color="yellow"
                            >
                              <div class="slider-product">
                                <div class="best-seller-tag">
                                  <span>Best Seller</span>
                                </div>
                                <div class="swiper-container">
                                  <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="swiper-button-prev">
                                  <i class="icon-arrow-left"></i>
                                </div>
                                <div class="swiper-button-next">
                                  <i class="icon-arrow-right"></i>
                                </div>
                              </div>
                              <div class="wrapper-slider-thumb no-mobile">
                                <div class="slider-product-thumb">
                                  <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              class="wrapper-slider-product"
                              data-get-color="blue"
                            >
                              <div class="slider-product">
                                <div class="best-seller-tag">
                                  <span>Best Seller</span>
                                </div>
                                <div class="swiper-container">
                                  <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="swiper-button-prev">
                                  <i class="icon-arrow-left"></i>
                                </div>
                                <div class="swiper-button-next">
                                  <i class="icon-arrow-right"></i>
                                </div>
                                <div class="swiper-pagination no-desktop no-tablet"></div>
                              </div>
                              <div class="wrapper-slider-thumb no-mobile">
                                <div class="slider-product-thumb">
                                  <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              class="wrapper-slider-product"
                              data-get-color="red"
                            >
                              <div class="slider-product">
                                <div class="best-seller-tag">
                                  <span>Best Seller</span>
                                </div>
                                <div class="swiper-container">
                                  <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="swiper-button-prev">
                                  <i class="icon-arrow-left"></i>
                                </div>
                                <div class="swiper-button-next">
                                  <i class="icon-arrow-right"></i>
                                </div>
                                <div class="swiper-pagination no-desktop no-tablet"></div>
                              </div>
                              <div class="wrapper-slider-thumb no-mobile">
                                <div class="slider-product-thumb">
                                  <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              class="wrapper-slider-product"
                              data-get-color="pink"
                            >
                              <div class="slider-product">
                                <div class="best-seller-tag">
                                  <span>Best Seller</span>
                                </div>
                                <div class="swiper-container">
                                  <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="swiper-button-prev">
                                  <i class="icon-arrow-left"></i>
                                </div>
                                <div class="swiper-button-next">
                                  <i class="icon-arrow-right"></i>
                                </div>
                                <div class="swiper-pagination no-desktop no-tablet"></div>
                              </div>
                              <div class="wrapper-slider-thumb no-mobile">
                                <div class="slider-product-thumb">
                                  <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div class="container-product-description">
                            <form
                              action="cart.html"
                              class="form-cart"
                              data-pjax
                            >
                              <input
                                type="hidden"
                                name="sku[]"
                                value="MODCH09"
                              />
                              <div class="wrapper-product-name">
                                <div class="container-product-name">
                                  <h1
                                    class="fs--40 fs-phone-30 product-name split-words"
                                    data-aos="d:loop"
                                  >
                                    Pilot Chairred
                                  </h1>
                                  <div
                                    class="fs-lg-30 fs-tablet-30 fs-phone-20 fw-400 red-1 mt-phone-5"
                                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                                  >
                                    $ 99.99
                                  </div>
                                </div>
                                <button
                                  class="btn-bookmark"
                                  data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                                >
                                  <i class="icon-bookmark"></i>
                                </button>
                              </div>
                              <ul
                                class="list-specs mt-lg-35 mt-tablet-40 mt-phone-15"
                                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                              >
                                <li class="sku">
                                  <span class="specs-title">SKU</span>
                                  <span class="specs-text">MODCH09</span>
                                </li>
                                <li class="size">
                                  <span class="specs-title">Size</span>
                                  <span class="specs-text">
                                    19”L X 15.5”W X 27.5”H
                                  </span>
                                </li>
                                <li class="color">
                                  <span class="specs-title">Color</span>
                                  <span class="specs-text">Yellow - Birch</span>
                                </li>
                                <li class="weight">
                                  <span class="specs-title">Weight</span>
                                  <span class="specs-text">11.5lbs</span>
                                </li>
                                <li class="seat-height">
                                  <span class="specs-title">Seat Height</span>
                                  <span class="specs-text">17” H</span>
                                </li>
                              </ul>
                              <ul
                                class="list-colors"
                                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                              >
                                <li class="list-colors-item">
                                  <div
                                    class="container-input active"
                                    data-set-color="yellow"
                                  >
                                    <label>
                                      <input
                                        type="radio"
                                        name="colors"
                                        value="yellow"
                                        checked
                                      />
                                      <div class="container-img">
                                        <img
                                          src="images/products/thumb.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </label>
                                  </div>
                                </li>
                                <li class="list-colors-item">
                                  <div
                                    class="container-input"
                                    data-set-color="blue"
                                  >
                                    <label>
                                      <input
                                        type="radio"
                                        name="colors"
                                        value="blue"
                                      />
                                      <div class="container-img">
                                        <img
                                          src="images/products/thumb.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </label>
                                  </div>
                                </li>
                                <li class="list-colors-item">
                                  <div
                                    class="container-input"
                                    data-set-color="red"
                                  >
                                    <label>
                                      <input
                                        type="radio"
                                        name="colors"
                                        value="red"
                                      />
                                      <div class="container-img">
                                        <img
                                          src="images/products/thumb.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </label>
                                  </div>
                                </li>
                                <li class="list-colors-item">
                                  <div
                                    class="container-input"
                                    data-set-color="pink"
                                  >
                                    <label>
                                      <input
                                        type="radio"
                                        name="colors"
                                        value="pink"
                                      />
                                      <div class="container-img">
                                        <img
                                          src="images/products/thumb.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </label>
                                  </div>
                                </li>
                              </ul>
                              <div
                                class="container-add-to-cart mt-md-40 mt-phone-20"
                                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                              >
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
                                <button
                                  class="btn-add-to-cart btn-red btn-hover-white"
                                  type="submit"
                                >
                                  <div class="split-chars">
                                    <span>Add to cart</span>
                                  </div>
                                </button>
                              </div>
                              <div
                                class="container-product-notes mt-lg-55 mt-tablet-35 mt-phone-55"
                                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                              >
                                <div class="container-input product-notes">
                                  <label>Product notes</label>
                                  <input
                                    name="product_notes"
                                    type="text"
                                    placeholder="Enter you text"
                                  />
                                </div>
                                <div class="container-submit">
                                  <button type="submit">
                                    <i class="icon-arrow-right"></i>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                          <btn-modal-close>
                            <i class="icon-close"></i>
                          </btn-modal-close>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </modal-item>
          </modal-container>
        </modal-group>
      </div>
    </>
  );
};

export default SavedProducts;
