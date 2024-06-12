"use client";
import AddToCartModal from "./Product/AddToCartModal";
import FilterButton from "./Common/FilterButton";
import { useEffect, useState } from "react";
import AnimateLink from "./Common/AnimateLink";
import SuccessModal from "./Common/SuccessModal";
import ErrorModal from "./Common/ErrorModal";
import { SaveProductButton } from "./Common/SaveProductButton";
import {
  getProductSnapShots,
  getProductVariants,
  getSearchProducts,
} from "@/services/scApiCalls";
import {
  markPageLoaded,
  pageLoadEnd,
  resetSlideIndex,
  updatedWatched,
} from "@/utils/AnimationFunctions";
import { productImageURL } from "@/utils/GenerateImageURL";
import { getSavedProductData } from "@/services/apiServices";

const Search = ({ collections, colors, searchTerm }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProductData, setSelectedProductData] = useState(null);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [selectedVariantData, setSelectedVariantData] = useState(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [productFilteredVariantData, setProductFilteredVariantData] =
    useState();
  const [productSnapshots, setProductSnapshots] = useState();
  const [savedProductsData, setSavedProductsData] = useState([]);

  const handleSearchResults = async ({
    collections = [],
    colors = [],
    firstLoad = false,
  }) => {
    const result = await getSearchProducts(collections, colors, searchTerm);
    setSearchResults(result._items.map((x) => x.data));
    if (firstLoad) {
      markPageLoaded(false);
    } else {
      pageLoadEnd();
    }
    updatedWatched();
  };

  useEffect(() => {
    const collectionIds = collections.map((x) => x._id);
    handleSearchResults({
      collections: collectionIds,
      colors,
      firstLoad: true,
    });
  }, [searchTerm]);

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
  const fetchSavedProductsData = async () => {
    const data = {
      limit: "1000",
      skip: "0",
    };
    const response = await getSavedProductData(data);
    setSavedProductsData(response);
  }

  useEffect(() => {
    fetchSavedProductsData();
  }, []);

  return (
    <>
      <section className="search pt-lg-150 pb-95">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="container-title mb-30">
                <h1
                  className="fs--30 text-uppercase white-1 split-words"
                  data-aos="d:loop"
                >
                  Search result
                </h1>
                <FilterButton
                  collections={collections}
                  colors={colors}
                  handleFilterChange={handleSearchResults}
                />
              </div>
              <ul
                className="list-search grid-lg-20 grid-md-50 grid-50"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                {searchResults.map((item, index) => {
                  const { product, variantData } = item;

                  return (
                    <li key={item._id} className="grid-item">
                      <div
                        key={item._id}
                        className="product-link small saved-products landscape-fix active"
                        data-product-category
                        data-product-location
                        data-product-colors
                      >
                        <div className="container-tags">
                          <SaveProductButton
                            productData={item}
                            savedProductsData={savedProductsData}
                            setSavedProductsData={setSavedProductsData}
                          />
                        </div>
                        <AnimateLink
                          to={`/product/${product.slug}`}
                          className="link"
                        >
                          <div className="container-top">
                            <h2 className="product-title">{product.name}</h2>
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
                                      src={productImageURL({
                                        wix_url: variant.variant.imageSrc,
                                        w: "518",
                                        h: "518",
                                        fit: "fill",
                                        q: "95",
                                      })}
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
                                        src={productImageURL({
                                          wix_url: variant.variant.imageSrc,
                                          w: "518",
                                          h: "518",
                                          fit: "fill",
                                          q: "95",
                                        })}
                                        data-preload
                                        className="media"
                                        alt="search-4"
                                      />
                                    </div>
                                  </li>
                                );
                              })}
                          </ul>
                          {variantData.length > 2 && (
                            <div className="colors-number">
                              <span>+{variantData.length - 2}</span>
                            </div>
                          )}
                        </div>
                        <btn-modal-open
                          onClick={() =>
                            getSelectedProductSnapShots(searchResults[index])
                          }
                          group="modal-product"
                          class="modal-add-to-cart"
                        >
                          <span>Add to cart</span>
                          <i className="icon-cart"></i>
                        </btn-modal-open>
                      </div>
                    </li>
                  );
                })}
                {searchResults.length === 0 && (
                  <h6
                    className="fs--40 text-center split-words white-1"
                    data-aos="d:loop"
                  >
                    No Products Found
                  </h6>
                )}
              </ul>
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
        setProductSnapshots={setProductSnapshots}
        setProductFilteredVariantData={setProductFilteredVariantData}
        savedProductsData={savedProductsData}
        setSavedProductsData={setSavedProductsData}
      />
    </>
  );
};

export default Search;
