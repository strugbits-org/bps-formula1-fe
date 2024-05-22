import { useEffect, useState } from "react";
import AddToCartModal from "../Product/AddToCartModal";
import { SaveProductButton } from "../Common/SaveProductButton";
import SuccessModal from "../Common/SuccessModal";
import ErrorModal from "../Common/ErrorModal";
import AnimateLink from "../Common/AnimateLink";
import {
  getProductSnapShots,
  getProductVariants,
} from "@/services/apiServices";

const SavedProducts = ({
  savedProductPageData,
  savedProductData,
  totalCount,
  pageSize,
  handleLoadMore,
}) => {
  const [savedProductsData, setSavedProductsData] = useState(savedProductData);
  const [selectedProductData, setSelectedProductData] = useState(null);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [selectedVariantData, setSelectedVariantData] = useState(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [productSnapshots, setProductSnapshots] = useState();
  const [productFilteredVariantData, setProductFilteredVariantData] =
    useState();

  const handleUnSaveProduct = (productId) => {
    setSavedProductsData((prevData) =>
      prevData.filter(
        (productData) => productData.data.product._id !== productId
      )
    );
  };

  useEffect(() => {
    setSavedProductsData(savedProductData);
  }, [savedProductData]);

  const getSelectedProductSnapShots = async (productData) => {
    setSelectedProductData(productData);
    try {
      const res = await getProductSnapShots(productData.product._id);
      setProductSnapshots(res);

      const productVariantsData = await getProductVariants(
        productData.product._id
      );
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
      if (
        filteredVariantData &&
        filteredVariantData.length > 0 &&
        res &&
        res.length > 0
      ) {
        handleImageChange({
          index: 0,
          selectedVariantData: filteredVariantData[0].variant,
          productSnapshots: res,
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
  }) => {
    if (productSnapshots) {
      const selectedVariantFilteredData = productSnapshots.find(
        (variant) => variant.colorVariation === selectedVariantData.variantId
      );

      if (selectedVariantFilteredData && selectedVariantFilteredData?.images) {
        const combinedVariantData = {
          ...selectedVariantData,
          ...selectedVariantFilteredData,
        };

        setSelectedVariantIndex(index);
        setSelectedVariantData(combinedVariantData);
      } else {
        const combinedVariantData = {
          ...selectedVariantData,
          ...selectedVariantFilteredData,
          images: [{ src: selectedVariantData.imageSrc }],
        };
        setSelectedVariantIndex(index);
        setSelectedVariantData(combinedVariantData);
      }
    }
  };
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
                  {savedProductsData && savedProductsData.length === 0 ? (
                    <div style={{ margin: "20vh auto" }}>
                      <h6
                        className="fs--20 text-center split-words "
                        data-aos="d:loop"
                      >
                        No Products Found
                      </h6>
                    </div>
                  ) : (
                    savedProductsData?.map((productData, index) => {
                      const { product, variantData, members } =
                        productData.data;
                      return (
                        <li key={index} className="grid-item">
                          <div
                            className="product-link small saved-products active"
                            data-product-category
                            data-product-location
                            data-product-colors
                          >
                            <div className="container-tags">
                              {/* <SaveProductButton
                                productId={product._id}
                                members={members}
                              /> */}

                              <SaveProductButton
                                productId={product._id}
                                members={members}
                                onUnSave={() =>
                                  handleUnSaveProduct(product._id)
                                }
                              />
                            </div>
                            <AnimateLink
                              to={`product/${product.slug}`}
                              className="link"
                            >
                              <div className="container-top">
                                <h2 className="product-title">
                                  {product.name}
                                </h2>
                              </div>
                              <div className="wrapper-product-img">
                                {variantData
                                  .filter((x, index) => index < 2)
                                  .map((variant, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className="container-img product-img"
                                        data-get-product-link-color={
                                          variant.color[0]
                                        }
                                        data-default-product-link-active={
                                          index === 0
                                        }
                                      >
                                        <img
                                          src={variant.variant.imageSrc}
                                          style={{
                                            padding: "70px",
                                          }}
                                          data-preload
                                          className="media"
                                          alt="search-1"
                                        />
                                      </div>
                                    );
                                  })}
                              </div>
                              <div className="container-bottom">
                                <div className="price">
                                  {" "}
                                  {product.formattedPrice}
                                </div>
                              </div>
                            </AnimateLink>
                            <div className="container-color-options">
                              <ul className="list-color-options">
                                {variantData
                                  .filter((x, index) => index < 2)
                                  .map((variant, index) => {
                                    return (
                                      <li
                                        key={index}
                                        className="list-item"
                                        data-set-product-link-color={
                                          variant.color[0]
                                        }
                                        data-default-product-link-active={
                                          index === 0
                                        }
                                      >
                                        <div className="container-img">
                                          <img
                                            src={variant.variant.imageSrc}
                                            data-preload
                                            className="media"
                                            alt="search-4"
                                          />
                                        </div>
                                      </li>
                                    );
                                  })}
                              </ul>
                              <div className="colors-number">
                                <span>+3</span>
                              </div>
                            </div>
                            <btn-modal-open
                              group="modal-product"
                              class="modal-add-to-cart"
                              onClick={() =>
                                getSelectedProductSnapShots(
                                  savedProductsData[index].data
                                )
                              }
                            >
                              <span>Add to cart</span>
                              <i class="icon-cart"></i>
                            </btn-modal-open>
                          </div>
                        </li>
                      );
                    })
                  )}
                </ul>
                {totalCount > pageSize &&
                  savedProductsData.length !== totalCount && (
                    <div className="flex-center mt-lg-60 mt-tablet-40 mt-phone-45">
                      <button
                        onClick={handleLoadMore}
                        className="btn-medium btn-red btn-hover-white"
                      >
                        <span className="split-chars">
                          <span>Load more</span>
                        </span>
                      </button>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {successMessageVisible && (
        <SuccessModal
          buttonLabel={"Ok"}
          message={"Product Successfully Added to Cart!"}
          setSuccessMessageVisible={setSuccessMessageVisible}
        />
      )}
      {errorMessageVisible && (
        <ErrorModal
          buttonLabel={"Try Again!"}
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
      />
    </>
  );
};

export default SavedProducts;
