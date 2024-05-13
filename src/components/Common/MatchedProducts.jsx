import { useState } from "react";
import AddToCartModal from "../Product/AddToCartModal";
import AnimateLink from "./AnimateLink";

const MatchedProducts = ({ matchedProductsData }) => {
  const [productData, setProductData] = useState(null);
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
                    {matchedProductsData &&
                      matchedProductsData.map((data, index) => {
                        const { variantData, product } = data;
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
                              <AnimateLink
                                to={`/product/${product.slug}`}
                                className="link"
                              >
                                <div className="container-top">
                                  <h2 className="product-title">
                                    {product.name}
                                  </h2>
                                  <div className="container-info">
                                    <div className="dimensions">
                                      {product.additionalInfoSections?.map(
                                        (data, index) => {
                                          const { title, description } = data;
                                          if (title == "Size") {
                                            return (
                                              <span
                                                key={index}
                                                dangerouslySetInnerHTML={{
                                                  __html: description,
                                                }}
                                              ></span>
                                            );
                                          }
                                        }
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="wrapper-product-img">
                                  {variantData.map((variantData, index) => {
                                    if (index < 4) {
                                      return (
                                        <div
                                          key={index}
                                          className="container-img product-img"
                                          data-get-product-link-color={
                                            variantData.color[0]
                                          }
                                          data-default-product-link-active
                                        >
                                          <img
                                            src={variantData.variant.imageSrc}
                                            style={{
                                              padding: "100px",
                                            }}
                                            data-preload
                                            className="media"
                                            alt="product"
                                          />
                                        </div>
                                      );
                                    }
                                  })}
                                </div>
                                <div className="container-bottom">
                                  <div className="price">
                                    {product.formattedPrice}
                                  </div>
                                </div>
                              </AnimateLink>
                              <div className="container-color-options">
                                <ul className="list-color-options">
                                  {variantData.map((variantData, index) => {
                                    if (index < 4) {
                                      return (
                                        <li
                                          key={index}
                                          className="list-item"
                                          data-set-product-link-color={
                                            variantData.color[0]
                                          }
                                          data-default-product-link-active
                                        >
                                          <div className="container-img">
                                            <img
                                              src={variantData.variant.imageSrc}
                                              data-preload
                                              className="media"
                                              alt="product"
                                            />
                                          </div>
                                        </li>
                                      );
                                    }
                                  })}
                                </ul>

                                {variantData.length > 4 && (
                                  <div className="colors-number">
                                    <span>+{variantData.length - 4}</span>
                                  </div>
                                )}
                              </div>
                              <btn-modal-open
                                onClick={() => setProductData(product)}
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

      <AddToCartModal
        productData={productData}
        setProductData={setProductData}
      />
    </>
  );
};

export default MatchedProducts;
