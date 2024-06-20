"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { markPageLoaded, pageLoadStart, updatedWatched } from "@/utils/AnimationFunctions";
import OtherCollections from "../Common/OtherCollections";
import BackgroundImages from "../Common/BackgroundImages";
import FilterButton from "../Common/FilterButton";
import SuccessModal from "../Common/SuccessModal";
import AddToCartModal from "./AddToCartModal";
import ErrorModal from "../Common/ErrorModal";
import { SaveProductButton } from "../Common/SaveProductButton";
import AnimateLink from "../Common/AnimateLink";
import { productImageURL } from "@/utils/GenerateImageURL";

const Products = ({ products, collectionsData, categoriesData, colorsData, savedProducts }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageSize = 9;

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [pageLimit, setPageLimit] = useState(pageSize);
  const [activeColors, setActiveColors] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);

  const [selectedCollection, setSelectedCollection] = useState();
  const [selectedCategory, setSelectedCategory] = useState();

  const [activeFilters, setActiveFilters] = useState({
    collections: [],
    categories: [],
    colors: []
  });

  const subCategory = searchParams.get("subCategory");
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [selectedProductData, setSelectedProductData] = useState(null);
  const [selectedVariantData, setSelectedVariantData] = useState(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [productSnapshots, setProductSnapshots] = useState();
  const [productFilteredVariantData, setProductFilteredVariantData] = useState();
  const [savedProductsData, setSavedProductsData] = useState(savedProducts);
  const [selectedVariants, setSelectedVariants] = useState({});


  const handleVariantSelection = (productIndex, variant) => {
    setSelectedVariants((prevSelectedVariants) => ({
      ...prevSelectedVariants,
      [productIndex]: variant,
    }));
  };

  const getSelectedProductSnapShots = async (productData) => {
    setSelectedProductData(productData);

    if (!productData || !productData.product || !productData.product._id) {
      console.log("Invalid product data provided");
      return;
    }

    try {
      const { productSnapshotData, productVariantsData } = productData;

      const variantDataMap = new Map(productVariantsData.map((variant) => [variant.sku.toLowerCase(), variant]));

      const filteredVariantData = productData.variantData.filter((variant) => {
        const normalizedSku = variant.sku.toLowerCase();
        const matchedVariant = variantDataMap.get(normalizedSku);

        if (matchedVariant) {
          variant.variant.variantId = matchedVariant._id;
          return true;
        }
        return false;
      });

      setProductSnapshots(productSnapshotData);
      setProductFilteredVariantData(filteredVariantData);

      if (filteredVariantData.length > 0) {
        handleImageChange({
          index: 0,
          selectedVariantData: filteredVariantData[0].variant,
          productSnapshots: productSnapshotData,
          modalUrl: filteredVariantData[0].zipUrl,
        });
      }
    } catch (error) {
      console.error("Failed to fetch product snapshots or variants:", error);
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
  };

  const handleImageHover = (variantData) => {
    setSelectedVariant(variantData.variant);
  };

  const changeQuery = (key, value) => {
    pageLoadStart();
    const newParams = new URLSearchParams(searchParams);
    newParams.set(key, value);
    router.push(`?${newParams.toString()}`);
  };

  const handleFilterChange = async ({
    collections,
    categories,
    colors,
  }) => {
    let newFilters = {
      collections: collections ? collections : activeFilters.collections,
      categories: categories ? categories : activeFilters.categories,
      colors: colors ? colors : activeFilters.colors,
    };

    if ((!collections || collections.length === 0) && selectedCollection) {
      const collectionId = selectedCollection._id;
      newFilters.collections = [collectionId];
    }

    if ((!categories || categories.length === 0) && selectedCategory) {
      const categoryId = selectedCategory?.parentCollection?._id || selectedCategory._id;
      newFilters.categories = [categoryId];
    }

    const filteredProductsData = products.filter(product => {
      const hasCollection = newFilters.collections.length === 0 || newFilters.collections.some(collectionId => product.f1Collection?.some(x => x._id === collectionId));
      const hasCategory = newFilters.categories.length === 0 || newFilters.categories.some(categoryId => product.subCategory?.some(x => x._id === categoryId));
      const hasColor = newFilters.colors.length === 0 || newFilters.colors.some(color => product.colors?.includes(color));

      return hasCollection && hasCategory && hasColor;
    });

    setActiveFilters(newFilters);

    setPageLimit(pageSize);
    setFilteredProducts(filteredProductsData);
    setSelectedVariants({});
    markPageLoaded();
  };

  const setInitialData = async () => {
    const collection = searchParams.get("collection");
    const category = searchParams.get("category");
    const subCategory = searchParams.get("subCategory");

    const selectedCollectionData = collectionsData.find(x => x.collectionSlug === collection);
    setSelectedCollection(selectedCollectionData);

    let selectedCategoryData;
    if (subCategory) {
      selectedCategoryData = categoriesData.find(item => item.level2Collections.some(x => x._id === subCategory)).level2Collections.find(x => x._id === subCategory);
    } else {
      selectedCategoryData = categoriesData.find(x => x.parentCollection._id === category);
    }
    setSelectedCategory(selectedCategoryData);

    const activeCategory = subCategory || category || "00000000-000000-000000-000000000001";
    const selectedColorsData = colorsData.find(x => x.category === activeCategory)?.colors || [];
    setActiveColors(selectedColorsData);

    if (subCategory) {
      setActiveCategories([]);
    } else if (category) {
      const level2Collections = selectedCategoryData?.level2Collections.map(x => ({ ...x, type: "subCategory" })) || [];
      setActiveCategories(level2Collections);
    } else {
      const parentCategories = categoriesData.map(x => ({ ...x.parentCollection, type: "category" }));
      setActiveCategories(parentCategories);
    }

    const filteredProductsData = products.filter(product => {
      if (!selectedCollectionData && !selectedCategoryData) {
        return true;
      }

      const categoryId = selectedCategoryData?.parentCollection?._id || selectedCategoryData._id;
      const hasCollection = selectedCollectionData ? product.f1Collection.some(x => x._id === selectedCollectionData._id) : false;
      const hasCategory = selectedCategoryData ? product.subCategory.some(x => x._id === categoryId) : false;

      if (selectedCollectionData && !selectedCategoryData) {
        return hasCollection;
      }
      if (!selectedCollectionData && selectedCategoryData) {
        return hasCategory;
      }
      return hasCollection && hasCategory;
    });

    setPageLimit(pageSize);
    setSelectedVariants({});
    setFilteredProducts(filteredProductsData);
    setTimeout(markPageLoaded, 900);
  };

  useEffect(() => { setInitialData() }, [searchParams]);


  return (
    <>
      <section className="products-intro">
        <div className="container-fluid pos-relative z-5">
          <div class="row row-1">
            <div className="col-lg-1 col-mobile-9 offset-lg-1 column-1 order-mobile-1">
              <h1
                className="fs--30 fs-tablet-20 text-uppercase white-1 split-words"
                data-aos="d:loop"
              >
                {selectedCategory?.parentCollection?.name || selectedCategory?.name}
              </h1>
            </div>
            <div className="col-lg-8 column-2 order-mobile-3 mt-mobile-15">
              {subCategory === null && (
                <ul
                  className="list-tags"
                  data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                >
                  {activeCategories.map((data, index) => {
                    const { name, _id, type } = data;
                    return (
                      <li key={index} className="list-item">
                        <button
                          className="btn-tag js-running"
                          onClick={() => {
                            changeQuery(type, _id);
                          }}
                        >
                          <span>{name}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div
              class="col-lg-1 col-mobile-3 column-filter column-3 order-mobile-2"
              data-aos="fadeIn .8s ease-in-out .2s, d:loop"
            >
              <FilterButton
                collections={collectionsData}
                categories={activeCategories}
                colors={activeColors}
                handleFilterChange={handleFilterChange}
              />
            </div>
          </div>

          <div className="row row-2 mt-lg-60 mt-mobile-30 pb-lg-80">
            <div className="col-lg-10 offset-lg-1 column-1">
              {selectedCollection && (
                <div className="container-title">
                  <h2 className="fs-lg-24 white-1 text-center text-uppercase">
                    <span
                      className="fs-mobile-13 fw-400 mr-15"
                      data-aos="fadeIn .8s ease-in-out .6s, d:loop"
                    >
                      Collection
                    </span>
                    <span
                      className="fs-tablet-20 fs-phone-16 font-2 mt-5 split-chars"
                      data-delay="400"
                      data-aos="d:loop"
                    >
                      {selectedCollection.collectionName}
                    </span>
                  </h2>
                </div>
              )}

              <ul className="list-products grid-lg-33 grid-md-50 mt-lg-60 mt-mobile-30">
                {filteredProducts.slice(0, pageLimit).map((data, index) => {
                  const { product, variantData } = data;
                  const selectedVariant = selectedVariants[index] || variantData[0];
                  const defaultVariantSku = selectedVariant.sku;
                  const defaultVariantImage = selectedVariant.variant.imageSrc;
                  const isActive = selectedVariant !== variantData[0];
                  return (
                    <li key={index} className="grid-item" data-aos="d:loop">
                      <div
                        className={`product-link large ${isActive ? "active" : ""
                          }`}
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
                        <div className="container-top">
                          <h2 className="product-title">{product.name}</h2>
                          <div className="container-copy">
                            <button className="btn-copy copy-link">
                              <span>{defaultVariantSku}</span>
                              <i className="icon-copy"></i>
                            </button>
                            <input
                              type="text"
                              className="copy-link-url"
                              defaultValue={defaultVariantSku}
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
                        <AnimateLink
                          to={`product/${product.slug}`}
                          className="link"
                        >
                          <div className="wrapper-product-img">
                            {variantData.map((selectedData, index) => {
                              return (
                                <React.Fragment key={index}>
                                  {index < 4 && (
                                    <div
                                      className="container-img product-img"
                                      data-get-product-link-color={
                                        selectedData.color[0]
                                      }
                                      data-default-product-link-active={
                                        index === 0
                                      }
                                    >
                                      <img
                                        // src={defaultVariantImage}
                                        src={productImageURL({
                                          wix_url: defaultVariantImage,
                                          w: "373",
                                          h: "373",
                                          fit: "fill",
                                          q: "95",
                                        })}
                                        className="media"
                                        alt="product"
                                      />
                                    </div>
                                  )}
                                </React.Fragment>
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
                            {variantData.map((selVariantData, idx) => {
                              return (
                                <React.Fragment key={idx}>
                                  {idx < 4 && (
                                    <li
                                      className="list-item"
                                      data-set-product-link-color={
                                        selVariantData.color[0]
                                      }
                                      onMouseEnter={() => {
                                        handleImageHover(
                                          filteredProducts[index].variantData[
                                          idx
                                          ]
                                        );
                                        handleVariantSelection(
                                          index,
                                          selVariantData
                                        );
                                      }}
                                      data-default-product-link-active={
                                        idx === 0
                                      }
                                    >
                                      <div className="container-img">
                                        <img
                                          src={productImageURL({
                                            wix_url:
                                              selVariantData.variant.imageSrc,
                                            w: "39",
                                            h: "39",
                                            fit: "fill",
                                            q: "95",
                                          })}
                                          data-preload
                                          className="media"
                                          alt="product"
                                        />
                                      </div>
                                    </li>
                                  )}
                                </React.Fragment>
                              );
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
                            getSelectedProductSnapShots(filteredProducts[index])
                          }
                          group="modal-product"
                          class="modal-add-to-cart"
                        >
                          <span>Add to cart</span>
                          <i class="icon-cart"></i>
                        </btn-modal-open>
                      </div>
                    </li>
                  );
                })}
              </ul>
              {filteredProducts.length === 0 && (
                <h6
                  className="fs--40 text-center split-words white-1"
                  data-aos="d:loop"
                >
                  No Products Found
                </h6>
              )}
              {pageLimit < filteredProducts.length && (
                <div className="flex-center mt-30">
                  <button
                    onClick={() => { setPageLimit(prev => prev + pageSize); updatedWatched() }}
                    class="btn-medium btn-red btn-hover-white"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
                    <div class="split-chars">
                      <span>Load more</span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-fixed no-tablet" data-aos="d:loop">
          <BackgroundImages pageSlug="products" />
        </div>
      </section>
      <OtherCollections data={collectionsData} />
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
        setProductData={setSelectedProductData}
        setErrorMessageVisible={setErrorMessageVisible}
        setSuccessMessageVisible={setSuccessMessageVisible}
        productData={selectedProductData}
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

export default Products;
