import AddToCartModal from "../Product/AddToCartModal";
import usePageInitialization from "../../hooks/usePageInitialization";

const SavedProducts = ({ savedProductPageData }) => {
  // usePageInitialization(
  //   "pg-my-account-saved-products",
  //   ".initScript",
  //   ".savedProducts"
  // );

  return (
    <>
      <section className="my-account-intro section-saved-products">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-lg-3 offset-md-4 column-1">
              <div className="wrapper-top">
                <h1
                  className="fs--60 red-1 text-uppercase split-words"
                  data-aos="d:loop"
                >
                  {savedProductPageData && savedProductPageData.pageTitle}
                </h1>
              </div>
              <div className="wrapper-bottom mt-lg-55 mt-tablet-45 mt-phone-25">
                <ul
                  className="list-saved-products grid-lg-25 grid-mobile-50"
                  data-aos="fadeIn .8s ease-in-out .4s, d:loop"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                    (data, index) => {
                      return (
                        <li key={index} className="grid-item">
                          <div
                            className="product-link small saved-products active"
                            data-product-category
                            data-product-location
                            data-product-colors
                          >
                            <div className="container-tags">
                              <button className="btn-bookmark">
                                <i className="icon-bookmark"></i>
                              </button>
                            </div>
                            <a href="products-post.html" className="link">
                              <div className="container-top">
                                <h2 className="product-title">
                                  Pilot Chairred
                                </h2>
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
                            </a>
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
                              className="modal-add-to-cart"
                            >
                              <span>Add to cart</span>
                              <i className="icon-cart"></i>
                            </btn-modal-open>
                          </div>
                        </li>
                      );
                    }
                  )}
                </ul>
                <div className="flex-center mt-lg-60 mt-tablet-40 mt-phone-45">
                  <button className="btn-medium btn-red btn-hover-white">
                    <span className="split-chars">
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
