import OtherCollections from "../Common/OtherCollections";
import FilterButton from "../Common/FilterButton";
import AnimateLink from "../Common/AnimateLink";
import AddToCartModal from "./AddToCartModal";
import React, { useEffect, useState } from "react";
import {
  getCategoriesData,
  getProductSnapShots,
  getProductVariants,
  getSelectedProductDetails,
} from "@/services/apiServices";
import { useRouter } from "next/router";
import { pageLoadStart } from "@/utils/AnimationFunctions";
import { parseArrayFromParams } from "@/utils/utils";
import { BestSeller } from "@/utils/BestSeller";
import useUserData from "@/hooks/useUserData";
import { getUserAuth } from "@/utils/GetUser";
import { BestSellerTag } from "../Common/BestSellerTag";
import { SaveProductButton } from "../Common/SaveProductButton";
import SuccessModal from "../Common/SuccessModal";
import ErrorModal from "../Common/ErrorModal";

const Products = ({
  filteredProducts,
  collectionsData,
  selectedCategory,
  selectedCollection,
  colors,
  totalCount,
  pageSize,
  handleLoadMore,
  setSelectedColors,
  setSelectedCollections,
}) => {
  const router = useRouter();
  const { memberId } = useUserData();
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [selectedProductData, setSelectedProductData] = useState(null);
  const [mainCategories, setMainCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [productSnapshots, setProductSnapshots] = useState();
  const [productFilteredVariantData, setProductFilteredVariantData] =
    useState();
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedVariantData, setSelectedVariantData] = useState(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const getSelectedProductSnapShots = async (productData) => {
    setSelectedProductData(productData);
    try {
      const res = await getProductSnapShots(productData.product._id);
      setProductSnapshots(res);

      const productVariantsData = await getProductVariants(
        productData.product._id
      );

      let dataMap = new Map(
        productVariantsData.map((item) => [item.sku.toLowerCase(), item])
      );

      let filteredVariantData;
      if (productVariantsData && productData) {
        filteredVariantData = productData.variantData.filter((variant) => {
          const normalizedSku = variant.sku.toLowerCase();
          if (dataMap.has(normalizedSku)) {
            const dataItem = dataMap.get(normalizedSku);
            variant.variant.variantId = dataItem._id;
            return true;
          }
          return false;
        });
      }
      setProductFilteredVariantData(filteredVariantData);

      if (filteredVariantData && filteredVariantData.length > 0) {
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
  const handleFilter = (id) => {
    pageLoadStart();
    const queryParams = new URLSearchParams(router.query);
    const categories = parseArrayFromParams(router.query.subCategories);
    if (categories.includes(id)) {
      queryParams.set(
        "subCategories",
        JSON.stringify(categories.filter((el) => el !== id))
      );
      router.push({ pathname: router.pathname, query: queryParams.toString() });
    } else {
      queryParams.set("subCategories", JSON.stringify([...categories, id]));
      router.push({ pathname: router.pathname, query: queryParams.toString() });
    }
  };

  const handleImageHover = (variantData) => {
    setSelectedVariant(variantData.variant);
  };

  const changeCategory = (id) => {
    pageLoadStart();
    router.query.category = id;
    router.push(router);
  };

  useEffect(() => {
    const getMainCategories = async () => {
      if (selectedCategory === undefined || selectedCategory === null) {
        const categories = await getCategoriesData(
          collectionsData.map((x) => x._id)
        );
        setMainCategories(categories);
      }
    };
    getMainCategories();
    const _selectedCategories = parseArrayFromParams(
      router.query.subCategories
    );
    setSelectedCategories(_selectedCategories);
  }, [router]);

  const handleFilterChange = (collections, colors) => {
    setSelectedColors(colors);
    setSelectedCollections(collections);
  };

  return (
    <>
      <section className="products-intro">
        <div className="container-fluid pos-relative z-5">
          <div className="row row-1">
            <div className="col-lg-1 col-mobile-9 offset-lg-1 column-1 order-mobile-1">
              <h1
                className="fs--30 fs-tablet-20 text-uppercase white-1 split-words"
                data-aos="d:loop"
              >
                {selectedCategory?.parentCollection?.name}
              </h1>
            </div>
            <div className="col-lg-8 column-2 order-mobile-3 mt-mobile-15">
              <ul
                className="list-tags"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                {selectedCategory?.level2Collections !== undefined
                  ? selectedCategory?.level2Collections?.map((data, index) => {
                      const { name, _id } = data;
                      if (name) {
                        return (
                          <li key={index} className="list-item">
                            <button
                              className={`btn-tag js-running ${
                                selectedCategories.includes(_id) ? "active" : ""
                              }`}
                              onClick={() => {
                                handleFilter(_id);
                              }}
                            >
                              <span>{name}</span>
                            </button>
                          </li>
                        );
                      }
                    })
                  : mainCategories.map((data, index) => {
                      return (
                        <li key={index} className="list-item">
                          <button
                            className="btn-tag"
                            onClick={() =>
                              changeCategory(data.parentCollection._id)
                            }
                          >
                            <span>{data.parentCollection.name}</span>
                          </button>
                        </li>
                      );
                    })}
              </ul>
            </div>

            <FilterButton
              collections={collectionsData}
              colors={colors}
              handleFilterChange={handleFilterChange}
            />
          </div>

          <div className="row row-2 mt-lg-60 mt-mobile-30 pb-lg-80">
            <div className="col-lg-10 offset-lg-1 column-1">
              {selectedCollection.length === 1 && (
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
                      {selectedCollection[0]?.collectionName}
                    </span>
                  </h2>
                </div>
              )}
              <ul className="list-products grid-lg-33 grid-md-50 mt-lg-60 mt-mobile-30">
                {filteredProducts.map((data, index) => {
                  const { product, variantData, members, subCategory } = data;

                  let productIsSaved = false;
                  if (members && members.length > 0) {
                    productIsSaved = members.includes(memberId);
                  }
                  let defaultVariantSku;
                  if (selectedVariant === null) {
                    setSelectedVariant(variantData);
                  }
                  if (selectedVariant) {
                    const defaultVariant = variantData.find(
                      (variant) => variant.sku === selectedVariant.sku // Replace 'MODCH39' with the SKU you want to use as default
                    );
                    defaultVariantSku = defaultVariant
                      ? defaultVariant.sku
                      : variantData[0].sku;
                  }

                  return (
                    <li key={index} className="grid-item" data-aos="d:loop">
                      <div
                        className="product-link large active"
                        data-product-category
                        data-product-location
                        data-product-colors
                      >
                        <div className="container-tags">
                          <BestSellerTag subCategory={subCategory} />
                          <SaveProductButton
                            productId={product._id}
                            members={members}
                          />
                          {/* {productIsSaved || productSaved[product._id] ? (
                            <button
                              className="btn-bookmark productSavedColor"
                              onClick={() =>
                                handleUnSaveProduct(product._id, index)
                              }
                            >
                              <i className="icon-bookmark"></i>
                            </button>
                          ) : (
                            <button
                              className="btn-bookmark"
                              onClick={() =>
                                handleSaveProduct(product._id, index)
                              }
                            >
                              <i className="icon-bookmark"></i>
                            </button>
                          )} */}
                        </div>
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
                        <AnimateLink
                          to={`product/${product.slug}`}
                          className="link"
                        >
                          <div className="container-top">
                            <h2 className="product-title">{product.name}</h2>
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
                              return (
                                <React.Fragment key={index}>
                                  {index < 4 && (
                                    <div
                                      className="container-img product-img"
                                      data-get-product-link-color={
                                        variantData.color[0]
                                      }
                                      data-default-product-link-active={
                                        index === 0
                                      }
                                    >
                                      <img
                                        style={{
                                          padding: "100px",
                                        }}
                                        width={100}
                                        src={variantData.variant.imageSrc}
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
                            {variantData.map((variantData, index) => {
                              return (
                                <React.Fragment key={index}>
                                  {index < 4 && (
                                    <li
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
              {totalCount > pageSize &&
                filteredProducts.length !== totalCount && (
                  <div className="flex-center mt-30">
                    <button
                      onClick={handleLoadMore}
                      className="btn-medium btn-red btn-hover-white"
                      data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                    >
                      <div className="split-chars">
                        <span>Load more</span>
                      </div>
                    </button>
                  </div>
                )}
            </div>
          </div>
        </div>
        <div className="bg-fixed no-tablet" data-aos="d:loop">
          <div className="container-img">
            <img
              src="/images/img-01.jpg"
              data-preload
              className="no-mobile media"
              data-parallax-top
              data-translate-y="-20%"
              alt="product"
            />
            <img
              src="/images/img-02.jpg"
              data-preload
              className="no-desktop media"
              alt="product"
            />
          </div>
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
      />
    </>
  );
};

export default Products;
