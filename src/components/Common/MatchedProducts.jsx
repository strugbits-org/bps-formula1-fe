import { useState } from "react";

import { resetSlideIndex } from "@/utils/AnimationFunctions";
import { SaveProductButton } from "./SaveProductButton";
import AddToCartModal from "../Product/AddToCartModal";
import SuccessModal from "./SuccessModal";
import AnimateLink from "./AnimateLink";
import ErrorModal from "./ErrorModal";
import {
  getProductSnapShots,
  getProductVariants,
} from "@/services/apiServices";

const MatchedProducts = ({ matchedProductsData, savedProductsData, setSavedProductsData }) => {
  const [productFilteredVariantData, setProductFilteredVariantData] =
    useState();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [selectedVariantData, setSelectedVariantData] = useState(null);
  const [selectedProductData, setSelectedProductData] = useState(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [productSnapshots, setProductSnapshots] = useState();

  const getSelectedProductSnapShots = async (productData) => {
    setSelectedProductData(productData);
    try {
      const product_id = productData.product._id;
      const [productSnapshotData, productVariantsData] = await Promise.all([
        getProductSnapShots(product_id),
        getProductVariants(product_id),
      ]);

      let dataMap = new Map(
        productVariantsData.map((item) => [item.sku, item])
      );
      let filteredVariantData;
      if (productVariantsData && productData) {
        filteredVariantData = productData.variantData =
          productData.variantData.filter((variant) => {
            if (dataMap.has(variant.sku)) {
              const dataItem = dataMap.get(variant.sku);
              variant.variant.variantId = dataItem._id;
              return true;
            }
            return false;
          });
      }
      setProductFilteredVariantData(filteredVariantData);
      setProductSnapshots(productSnapshotData);
      if (filteredVariantData && filteredVariantData.length > 0) {
        handleImageChange({
          index: 0,
          selectedVariantData: filteredVariantData[0].variant,
          productSnapshots: productSnapshotData,
          modalUrl: filteredVariantData[0].zipUrl,
        });
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleImageChange = ({
    index,
    selectedVariantData,
    productSnapshots,
    modalUrl,
  }) => {
    if (productSnapshots) {
      const selectedVariantFilteredData = productSnapshots.find(
        (variant) => variant.colorVariation === selectedVariantData.variantId
      );

      if (selectedVariantFilteredData && selectedVariantFilteredData?.images) {
        const combinedVariantData = {
          ...selectedVariantData,
          ...selectedVariantFilteredData,
          modalUrl: modalUrl,
        };

        setSelectedVariantIndex(index);
        setSelectedVariantData(combinedVariantData);
      } else {
        const combinedVariantData = {
          ...selectedVariantData,
          ...selectedVariantFilteredData,
          modalUrl: modalUrl,
          images: [{ src: selectedVariantData.imageSrc }],
        };
        setSelectedVariantIndex(index);
        setSelectedVariantData(combinedVariantData);
      }
    }
    resetSlideIndex();
  };

  const handleImageHover = (variantData) => {
    setSelectedVariant(variantData.variant);
  };
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
                        const { product, variantData, f1Members, subCategory } =
                          data;

                        let defaultVariantSku;
                        if (selectedVariant === null) {
                          setSelectedVariant(variantData);
                        }
                        if (selectedVariant) {
                          const defaultVariant = variantData.find(
                            (variant) => variant.sku === selectedVariant.sku
                          );
                          defaultVariantSku = defaultVariant
                            ? defaultVariant.sku
                            : variantData[0].sku;
                        }
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
                                {/* <BestSellerTag subCategory={subCategory} /> */}
                                <SaveProductButton
                                  productData={data}
                                  savedProductsData={savedProductsData}
                                  setSavedProductsData={setSavedProductsData}
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
                                  <div className="container-copy">
                                    <button className="btn-copy copy-link">
                                      <span>{defaultVariantSku}</span>
                                      <i className="icon-copy"></i>
                                    </button>
                                    <input
                                      type="text"
                                      className="copy-link-url"
                                      value={defaultVariantSku}
                                      style={{
                                        position: "absolute",
                                        opacity: 0,
                                        pointerEvents: "none",
                                      }}
                                    />
                                  </div>
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
                                          data-default-product-link-active={
                                            index === 0
                                          }
                                        >
                                          <img
                                            src={variantData.variant.imageSrc}
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
                                          onMouseEnter={() =>
                                            handleImageHover(variantData)
                                          }
                                          data-default-product-link-active={
                                            index === 0
                                          }
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
                                onClick={() =>
                                  getSelectedProductSnapShots(
                                    matchedProductsData[index]
                                  )
                                }
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
      {successMessageVisible && (
        <SuccessModal
          buttonLabel={"Try Again!"}
          message={"Product Successfully Added to Cart!"}
          setSuccessMessageVisible={setSuccessMessageVisible}
        />
      )}
      {errorMessageVisible && (
        <ErrorModal
          buttonLabel={"Ok"}
          message={"Something went wrong, please try again"}
          setErrorMessageVisible={setErrorMessageVisible}
        />
      )}

      <AddToCartModal
        productData={selectedProductData}
        setProductData={setSelectedProductData}
        setErrorMessageVisible={setErrorMessageVisible}
        setSuccessMessageVisible={setSuccessMessageVisible}
        productSnapshots={productSnapshots}
        productFilteredVariantData={productFilteredVariantData}
        selectedVariantData={selectedVariantData}
        setSelectedVariantData={setSelectedVariantData}
        handleImageChange={handleImageChange}
        selectedVariantIndex={selectedVariantIndex}
        setProductSnapshots={setProductSnapshots}
        setProductFilteredVariantData={setProductFilteredVariantData}
        savedProductsData={savedProductsData}
        setSavedProductsData={setSavedProductsData}
      />
    </>
  );
};

export default MatchedProducts;
