import { BestSeller } from "@/utils/BestSeller";
import React, { useEffect, useState } from "react";
import { SaveProductButton } from "../Common/SaveProductButton";
import { getProductVariants } from "@/services/apiServices";
import { AddProductToCart } from "@/services/cartServices";
import RenderImage from "@/utils/RenderImage";

const AddToCartModal = ({
  productData,
  setProductData,
  setErrorMessageVisible,
  setSuccessMessageVisible,
  productSnapshots,
  productFilteredVariantData,
  selectedVariantData,
  setSelectedVariantData,
  handleImageChange,
  selectedVariantIndex,
}) => {
  const handleClose = () => {
    setTimeout(() => {
      setProductData(null);
      setSelectedVariantData(null);
      setCartQuantity(1);
    }, 1000);
  };
  console.log(productFilteredVariantData, "log from cart");
  const [fullVariantData, setFullVariantData] = useState([]);
  const [modalURL, setModalURL] = useState("");
  const [cartQuantity, setCartQuantity] = useState(1);
  useEffect(() => {
    document.querySelector(".addToCart").click();
    if (productData) {
      let url = productData.zipUrl;
      if (url) {
        let newUrl = url.replace(/0\.jpg$/, "");
        setModalURL(newUrl);
      }
      getFullVariantData();
    }
  }, [productData]);

  const getFullVariantData = async () => {
    const fullVariant = await getProductVariants(productData.product._id);
    setFullVariantData(fullVariant);
  };

  const seatHeightData =
    productData &&
    productData.product.additionalInfoSections.find(
      (data) => data.title.toLowerCase() === "seat height".toLowerCase()
    );

  const handleQuantityChange = async (value) => {
    if (value < 10000 && value > 0) {
      setCartQuantity(value);
    }
  };
  const handleAddToCart = async () => {
    setSuccessMessageVisible(false);
    setErrorMessageVisible(false);

    try {
      const product_id = productData.product._id;
      const selectedVariantData = fullVariantData.find(
        (x) => x.sku === selectedVariantData.sku
      );
      const variant_id = selectedVariantData._id
        .replace(product_id, "")
        .substring(1);
      const product = {
        catalogReference: {
          appId: "215238eb-22a5-4c36-9e7b-e7c08025e04e",
          catalogItemId: product_id,
          options: {
            variantId: variant_id,
            customTextFields: {
              collection: productData.f1Collection.collectionName,
              additonalInfo: "",
            },
          },
        },
        quantity: cartQuantity,
      };
      await AddProductToCart([product]);
      handleClose();
      setSuccessMessageVisible(true);
    } catch (error) {
      console.log("Error:", error);
      setErrorMessageVisible(true);
    }
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
                              {productData &&
                                BestSeller[productData.category._id] && (
                                  <div class="best-seller-tag">
                                    <span>Best Seller</span>
                                  </div>
                                )}
                              <div class="swiper-container">
                                <div class="swiper-wrapper">
                                  {selectedVariantData &&
                                    selectedVariantData.images?.map(
                                      (imageData, index) => {
                                        return (
                                          <div key={index} class="swiper-slide">
                                            <div class="container-img">
                                              <img
                                                style={{
                                                  padding: "100px",
                                                }}
                                                src={RenderImage(imageData.src)}
                                                data-preload
                                                class="media"
                                                alt="product"
                                              />
                                            </div>
                                          </div>
                                        );
                                      }
                                    )}
                                  {modalURL ? (
                                    <div className="swiper-slide slide-360 ">
                                      <i className="icon-360"></i>
                                      <div className="container-img">
                                        <canvas
                                          className="infinite-image-scroller"
                                          data-frames="49"
                                          data-path={modalURL}
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="swiper-slide slide-360 ">
                                      <i className="icon-360"></i>
                                      <div className="container-img">
                                        <canvas
                                          className="infinite-image-scroller"
                                          data-frames="49"
                                          data-path={
                                            "https://super-drivers.s3.us-east-2.amazonaws.com/BPS+ONLINE/F1/3DProds/_demosku/0_"
                                          }
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                  )}
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
                                    {selectedVariantData &&
                                      selectedVariantData.images?.map(
                                        (data, index) => {
                                          const { src } = data;
                                          return (
                                            <div
                                              key={index}
                                              class="swiper-slide"
                                            >
                                              <div class="wrapper-img">
                                                <div class="container-img">
                                                  <img
                                                    style={{
                                                      padding: "20px",
                                                    }}
                                                    src={RenderImage(src)}
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
                                    <div class="swiper-slide">
                                      <div class="wrapper-img img-3d">
                                        <div class="container-img">
                                          <img
                                            src="/images/3d.svg"
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
                          <div class="form-cart">
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
                              <SaveProductButton
                                productId={
                                  productData && productData.product._id
                                }
                                members={productData && productData.members}
                                dataAos="fadeIn .8s ease-in-out .2s, d:loop"
                              />
                            </div>
                            <ul
                              class="list-specs mt-lg-35 mt-tablet-40 mt-phone-15"
                              data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                            >
                              {selectedVariantData?.sku && (
                                <li class="sku">
                                  <span class="specs-title">SKU</span>
                                  <span class="specs-text">
                                    {selectedVariantData &&
                                      selectedVariantData.sku}
                                  </span>
                                </li>
                              )}

                              {selectedVariantData?.size && (
                                <li class="size">
                                  <span class="specs-title">Size</span>
                                  {selectedVariantData &&
                                    selectedVariantData.size}
                                </li>
                              )}

                              {selectedVariantData?.color && (
                                <li class="color">
                                  <span class="specs-title">Color</span>
                                  <span class="specs-text">
                                    {selectedVariantData &&
                                      selectedVariantData.color}
                                  </span>
                                </li>
                              )}
                              <li class="weight">
                                <span class="specs-title">Weight</span>
                                <span class="specs-text">11.5lbs</span>
                              </li>

                              {seatHeightData && (
                                <li className="seat-height">
                                  <span className="specs-title">
                                    Seat Height
                                  </span>
                                  <span
                                    className="specs-text"
                                    dangerouslySetInnerHTML={{
                                      __html: seatHeightData.description,
                                    }}
                                  ></span>
                                </li>
                              )}
                            </ul>
                            <ul
                              class="list-colors"
                              data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                            >
                              {productFilteredVariantData &&
                                productFilteredVariantData.map(
                                  (variantData, index) => {
                                    return (
                                      <li key={index} class="list-colors-item">
                                        <div
                                          class="container-input active"
                                          data-set-color={
                                            variantData.variant.color
                                          }
                                          onClick={() =>
                                            handleImageChange({
                                              index: index,
                                              selectedVariantData:
                                                variantData.variant,
                                              productSnapshots:
                                                productSnapshots,
                                            })
                                          }
                                        >
                                          <label>
                                            <input
                                              type="radio"
                                              name="colors"
                                              value={variantData.variant.color}
                                              checked={
                                                index === selectedVariantIndex
                                              }
                                            />
                                            <div class="container-img">
                                              <img
                                                src={
                                                  variantData.variant.imageSrc
                                                }
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
                                <button
                                  onClick={() =>
                                    handleQuantityChange(+cartQuantity - 1)
                                  }
                                  type="button"
                                  class="minus"
                                >
                                  <i class="icon-minus no-mobile"></i>
                                  <i class="icon-minus-2 no-desktop"></i>
                                </button>
                                <input
                                  type="number"
                                  min="1"
                                  value={cartQuantity}
                                  placeholder="1"
                                  class="input-number"
                                  onInput={(e) =>
                                    handleQuantityChange(e.target.value)
                                  }
                                />
                                <button
                                  onClick={() =>
                                    handleQuantityChange(+cartQuantity + 1)
                                  }
                                  type="button"
                                  class="plus"
                                >
                                  <i class="icon-plus no-mobile"></i>
                                  <i class="icon-plus-2 no-desktop"></i>
                                </button>
                              </div>
                              <button
                                class="btn-add-to-cart btn-red btn-hover-white"
                                onClick={handleAddToCart}
                              >
                                <div class="split-chars">
                                  <span>Add to cart</span>
                                </div>
                              </button>
                            </div>
                            {productData &&
                              productData.product.customTextFields.length >
                                0 && (
                                <div
                                  style={{ paddingTop: "20px" }}
                                  className="container-product-notes container-info-text "
                                >
                                  <h3 className="title-info-text split-words">
                                    <label>Product notes</label>
                                  </h3>
                                </div>
                              )}

                            {productData &&
                              productData.product.customTextFields.map(
                                (data, index) => {
                                  const { title, mandatory } = data;
                                  return (
                                    <React.Fragment key={index}>
                                      <div
                                        style={{ paddingTop: "10px" }}
                                        className="container-product-notes "
                                      >
                                        <div className="container-input product-notes">
                                          <input
                                            name="product_notes"
                                            type="text"
                                            placeholder={title}
                                            required={mandatory}
                                          />
                                        </div>
                                        <div className="container-submit">
                                          <button type="submit">
                                            <i className="icon-arrow-right"></i>
                                          </button>
                                        </div>
                                      </div>
                                    </React.Fragment>
                                  );
                                }
                              )}
                            {/* <div
                              class="container-product-notes mt-lg-55 mt-tablet-35 mt-phone-55"
                              data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                            >
                              <div class="container-submit">
                                <button type="submit">
                                  <i class="icon-arrow-right"></i>
                                </button>
                              </div>
                            </div> */}
                          </div>
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
