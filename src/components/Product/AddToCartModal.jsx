import { generateImageURL } from "@/utils/GenerateImageURL";
import { useEffect, useState } from "react";

const AddToCartModal = ({ productData, setProductData }) => {
  const handleClose = () => {
    setTimeout(() => {
      setProductData(null);
      setSelectedVariant(null);
    }, 1000);
  };
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    if (productData) {
      setSelectedVariant(productData.variantData[0].variant);
    }
  }, [productData]);

  const handleImageChange = (variantData) => {
    setSelectedVariant(variantData.variant);
  };

  const handlePrevButtonClick = () => {
    const currentIndex = productData.variantData.findIndex(
      (data) => data.variant.sku === selectedVariant.sku
    );
    const prevIndex =
      (currentIndex - 1 + productData.variantData.length) %
      productData.variantData.length;
    setSelectedVariant(productData.variantData[prevIndex].variant);
  };

  const handleNextButtonClick = () => {
    const currentIndex = productData.variantData.findIndex(
      (data) => data.variant.sku === selectedVariant.sku
    );
    const nextIndex = (currentIndex + 1) % productData.variantData.length;
    setSelectedVariant(productData.variantData[nextIndex].variant);
  };
  return (
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
                          >
                            <div class="slider-product">
                              <div class="best-seller-tag">
                                <span>Best Seller</span>
                              </div>
                              <div class="swiper-container">
                                <div class="swiper-wrapper">
                                  {productData &&
                                    productData.variantData.map(
                                      (variantData, index) => {
                                        const { variant } = variantData;
                                        return (
                                          <div key={index} class="swiper-slide">
                                            <div
                                              class="container-img"
                                              onClick={() =>
                                                handleImageChange(variantData)
                                              }
                                            >
                                              <img
                                                style={{
                                                  padding: "100px",
                                                }}
                                                src={variant.imageSrc}
                                                data-preload
                                                class="media"
                                                alt="product"
                                              />
                                            </div>
                                          </div>
                                        );
                                      }
                                    )}
                                </div>
                              </div>
                              <div
                                class="swiper-button-prev"
                                onClick={handlePrevButtonClick}
                              >
                                <i class="icon-arrow-left"></i>
                              </div>
                              <div
                                class="swiper-button-next"
                                onClick={handleNextButtonClick}
                              >
                                <i class="icon-arrow-right"></i>
                              </div>
                            </div>
                            <div class="wrapper-slider-thumb no-mobile">
                              <div class="slider-product-thumb">
                                <div class="swiper-container">
                                  <div class="swiper-wrapper">
                                    {productData &&
                                      productData.variantData.map(
                                        (variantData, index) => {
                                          const { variant } = variantData;
                                          return (
                                            <div
                                              key={index}
                                              class="swiper-slide"
                                            >
                                              <div class="wrapper-img">
                                                <div
                                                  class="container-img"
                                                  onClick={() =>
                                                    handleImageChange(
                                                      variantData
                                                    )
                                                  }
                                                >
                                                  <img
                                                    style={{
                                                      padding: "20px",
                                                    }}
                                                    src={variant.imageSrc}
                                                    data-preload
                                                    class="media"
                                                    alt="product"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          );
                                        }
                                      )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>

                        <div class="container-product-description">
                          <form action="cart.html" class="form-cart" data-pjax>
                            <input type="hidden" name="sku[]" value="MODCH09" />
                            <div class="wrapper-product-name">
                              <div class="container-product-name">
                                <h1
                                  class="fs--40 fs-phone-30 product-name split-words"
                                  data-aos="d:loop"
                                >
                                  {productData && productData.product.name}
                                </h1>
                                <div
                                  class="fs-lg-30 fs-tablet-30 fs-phone-20 fw-400 red-1 mt-phone-5"
                                  data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                                >
                                  {productData &&
                                    productData.product.formattedPrice}
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
                                <span class="specs-text">
                                  {selectedVariant && selectedVariant.sku}
                                </span>
                              </li>
                              <li class="size">
                                <span class="specs-title">Size</span>
                                {selectedVariant && selectedVariant.size}
                              </li>
                              <li class="color">
                                <span class="specs-title">Color</span>
                                <span class="specs-text">
                                  {selectedVariant && selectedVariant.color}
                                </span>
                              </li>
                              <li class="weight">
                                <span class="specs-title">Weight</span>
                                <span class="specs-text">11.5lbs</span>
                              </li>
                              <li class="seat-height">
                                <span class="specs-title">Seat Height</span>
                                {productData &&
                                  productData.product.additionalInfoSections.map(
                                    (data, index) => {
                                      const { title, description } = data;
                                      if (title == "Seat Height") {
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
                              </li>
                            </ul>
                            <ul
                              class="list-colors"
                              data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                            >
                              {productData &&
                                productData.product.mediaItems.map(
                                  (data, index) => {
                                    return (
                                      <li key={index} class="list-colors-item">
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
                                                src={generateImageURL({
                                                  wix_url: data.src,
                                                  w: "1000",
                                                  h: "1000",
                                                  fit: "fit",
                                                  q: "95",
                                                })}
                                                data-preload
                                                class="media"
                                                alt="product"
                                              />
                                            </div>
                                          </label>
                                        </div>
                                      </li>
                                    );
                                  }
                                )}
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
                        <btn-modal-close onClick={handleClose}>
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
  );
};
export default AddToCartModal;
