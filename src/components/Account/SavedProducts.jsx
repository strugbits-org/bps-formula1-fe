"use client";
import { useEffect, useState } from "react";
import { SaveProductButton } from "../Common/SaveProductButton";
import AddToCartModal from "../Product/AddToCartModal";
import SuccessModal from "../Common/SuccessModal";
import AnimateLink from "../Common/AnimateLink";
import ErrorModal from "../Common/ErrorModal";
import {
  getProductSnapShots,
  getProductVariants,
  getSavedProductData,
} from "@/services/apiServices";
import { resetSlideIndex, updatedWatched } from "@/utils/AnimationFunctions";
import { getUserAuth } from "@/utils/GetUser";
import { ProductListItem } from "../Common/ProductListItem";

const SavedProducts = ({ savedProductPageData, savedProductData }) => {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [selectedProductData, setSelectedProductData] = useState(null);
  const [selectedVariantData, setSelectedVariantData] = useState(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [savedProductsData, setSavedProductsData] = useState();
  const [productSnapshots, setProductSnapshots] = useState();
  const [productFilteredVariantData, setProductFilteredVariantData] =
    useState();
  const pageSize = 20;
  let totalCount;

  const handleUnSaveProduct = (productId) => {
    setSavedProductsData((prevData) =>
      prevData.filter(
        (productData) => productData.data.product._id !== productId
      )
    );
  };

  const handleLoadMore = async () => {
    const authToken = getUserAuth();
    const data = {
      limit: pageSize,
      skip: savedProductData.length,
    };
    const response = await getSavedProductData(data, authToken);
    setSavedProductsData({
      ...response,
      _items: [...savedProductData, ...response._items],
    });
    updatedWatched();
  };

  useEffect(() => {
    totalCount = savedProductData._totalCount;
    setSavedProductsData(savedProductData);
  }, [savedProductData]);

  // const getSelectedProductSnapShots = async (productData) => {
  //   setSelectedProductData(productData);
  //   try {
  //     const product_id = productData.product._id;
  //     const [productSnapshotData, productVariantsData] = await Promise.all([
  //       getProductSnapShots(product_id),
  //       getProductVariants(product_id),
  //     ]);

  //     let dataMap = new Map(
  //       productVariantsData.map((item) => [item.sku, item])
  //     );
  //     let filteredVariantData;
  //     if (productVariantsData && productData) {
  //       filteredVariantData = productData.variantData =
  //         productData.variantData.filter((variant) => {
  //           if (dataMap.has(variant.sku)) {
  //             const dataItem = dataMap.get(variant.sku);
  //             variant.variant.variantId = dataItem._id;
  //             return true;
  //           }
  //           return false;
  //         });
  //     }
  //     setProductSnapshots(productSnapshotData);
  //     setProductFilteredVariantData(filteredVariantData);
  //     if (filteredVariantData && filteredVariantData.length > 0) {
  //       handleImageChange({
  //         index: 0,
  //         selectedVariantData: filteredVariantData[0].variant,
  //         productSnapshots: productSnapshotData,
  //         modalUrl: filteredVariantData[0].zipUrl,
  //       });
  //     }
  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  // };

  // const handleImageChange = ({
  //   index,
  //   selectedVariantData,
  //   productSnapshots,
  //   modalUrl,
  // }) => {
  //   if (productSnapshots) {
  //     const selectedVariantFilteredData = productSnapshots.find(
  //       (variant) => variant.colorVariation === selectedVariantData.variantId
  //     );

  //     if (selectedVariantFilteredData && selectedVariantFilteredData?.images) {
  //       const combinedVariantData = {
  //         ...selectedVariantData,
  //         ...selectedVariantFilteredData,
  //         modalUrl: modalUrl,
  //       };

  //       setSelectedVariantIndex(index);
  //       setSelectedVariantData(combinedVariantData);
  //     } else {
  //       const combinedVariantData = {
  //         ...selectedVariantData,
  //         ...selectedVariantFilteredData,
  //         modalUrl: modalUrl,
  //         images: [{ src: selectedVariantData.imageSrc }],
  //       };
  //       setSelectedVariantIndex(index);
  //       setSelectedVariantData(combinedVariantData);
  //     }
  //   }
  //   resetSlideIndex();
  // };

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
                  {savedProductData && savedProductData.length === 0 ? (
                    <div style={{ margin: "20vh auto" }}>
                      <h6 className="fs--20 text-center split-words ">
                        No Products Found
                      </h6>
                    </div>
                  ) : (
                    savedProductData?.map((productData, index) => {
                      const { product, variantData, f1Members } = productData;
                      return (
                        <ProductListItem
                          index={index}
                          product={{ ...product, preview: false }}
                          variantData={variantData}
                          f1Members={f1Members}
                          searchResults={savedProductData}
                        />
                      );
                    })
                  )}
                </ul>
                {totalCount > pageSize &&
                  savedProductData.length !== totalCount && (
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
      {/* 
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
        productData={savedProductData}
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
      /> */}
    </>
  );
};

export default SavedProducts;
