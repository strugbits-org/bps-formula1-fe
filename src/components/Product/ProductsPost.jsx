"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { SaveProductButton } from "../Common/SaveProductButton";
import ProductSnapshots from "../Common/productSnapshots";
import OtherCollections from "../Common/OtherCollections";
import MatchedProducts from "../Common/MatchedProducts";
import Breadcrumb from "../Common/BreadCrumbData";

import {
  markPageLoaded,
  pageLoadEnd,
  pageLoadStart,
  resetSlideIndex,
} from "@/utils/AnimationFunctions";
import { AddProductToCart } from "@/services/cartServices";
import ModalCanvas3d from "../Common/ModalCanvas3d";
import { generateImageURL, productImageURL } from "@/utils/GenerateImageURL";
import { getSubCategory } from "@/services/apiServices";
import { checkParameters } from "@/utils/CheckParams";

const ProductPost = ({
  productPostPageData,
  selectedProductDetails,
  matchedProductsData,
  collectionsData,
  productSnapshots,
}) => {
  const router = useRouter();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState();
  const [cartQuantity, setCartQuantity] = useState(1);
  const descriptionRef = useRef(null);
  const handleImageChange = ({ index, selectedVariantData, modalUrl }) => {
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
      setSelectedVariant(combinedVariantData);
    } else {
      const combinedVariantData = {
        ...selectedVariantData,
        ...selectedVariantFilteredData,
        modalUrl: modalUrl,
        images: [{ src: selectedVariantData.imageSrc }],
      };
      setSelectedVariantIndex(index);
      setSelectedVariant(combinedVariantData);
    }
    resetSlideIndex();
  };

  useEffect(() => {
    if (selectedProductDetails && productSnapshots) {
      const selectedVariantData = selectedProductDetails.variantData[0].variant;
      const selectedVariantFilteredData = productSnapshots.find(
        (variant) => variant.colorVariation === selectedVariantData.variantId
      );

      if (selectedVariantFilteredData && selectedVariantFilteredData.images) {
        const combinedVariantData = {
          ...selectedVariantData,
          ...selectedVariantFilteredData,
          modalUrl: selectedProductDetails.variantData[0].zipUrl,
        };

        setSelectedVariantIndex(0);
        setSelectedVariant(combinedVariantData);
      } else {
        const combinedVariantData = {
          ...selectedVariantData,
          ...selectedVariantFilteredData,
          modalUrl: selectedProductDetails.variantData[0].zipUrl,
          images: [{ src: selectedVariantData.imageSrc }],
        };
        setSelectedVariantIndex(0);
        setSelectedVariant(combinedVariantData);
      }
    }
  }, [productSnapshots, selectedProductDetails]);

  const productFoundRedirection = async (subCategoryId) => {
    const queryParams = new URLSearchParams(router.query);
    const subCategory = await getSubCategory(subCategoryId);
    if (subCategory) {
      queryParams.set("category", subCategory.parentCollection._id);
      queryParams.set("subCategory", subCategoryId);
    } else {
      queryParams.set("category", subCategoryId);
    }
    queryParams.delete("slug");
    pageLoadStart();
    router.push(`/products?${queryParams.toString()}`);
  };

  const seatHeightData =
    selectedProductDetails.product.additionalInfoSections.find(
      (data) => data.title.toLowerCase() === "seat height".toLowerCase()
    );

  const handleQuantityChange = async (value) => {
    if (value < 10000 && value > 0) {
      setCartQuantity(value);
    }
  };

  const handleAddToCart = async () => {
    try {
      pageLoadStart();
      const product_id = selectedProductDetails.product._id;
      const variant_id = selectedVariant.variantId
        .replace(product_id, "")
        .substring(1);
      const collection = selectedProductDetails.f1Collection
        .map((x) => x.collectionName)
        .join(" - ");

      const product = {
        catalogReference: {
          appId: "215238eb-22a5-4c36-9e7b-e7c08025e04e",
          catalogItemId: product_id,
          options: {
            variantId: variant_id,
            customTextFields: {
              collection: collection,
              additonalInfo: "",
            },
          },
        },
        quantity: cartQuantity,
      };
      await AddProductToCart([product]);
      router.push("/cart");
    } catch (error) {
      pageLoadEnd();
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    const params = [
      productPostPageData,
      selectedProductDetails,
      matchedProductsData,
      collectionsData,
      productSnapshots,
    ];
    if (checkParameters(params)) {
      markPageLoaded();
    }
  }, [
    productPostPageData,
    selectedProductDetails,
    matchedProductsData,
    collectionsData,
    productSnapshots,
  ]);

  const updatedDescription = selectedProductDetails.product.description.replace(
    /color:#000000;/g,
    "color:#ffffff"
  );

  return (
    <>
      <section className="product-post-intro" data-product-content>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 offset-lg-1 column-1">
              <ul
                className="list-slider-product"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                <li
                  className="wrapper-slider-product"
                  data-default-active
                  data-get-color={selectedVariant && selectedVariant.color}
                >
                  <div className="slider-product">
                    {/* <BestSellerTag
                      subCategory={
                        selectedProductDetails &&
                        selectedProductDetails.subCategory
                      }
                      className="best-seller-tag"
                    /> */}

                    <div className="swiper-container reset-slide-enabled">
                      <div className="swiper-wrapper">
                        {selectedVariant &&
                          selectedVariant.images?.map((imageData, index) => {
                            return (
                              <div key={index} className="swiper-slide">
                                <div className="container-img">
                                  <img
                                    src={generateImageURL({
                                      wix_url: imageData.src,
                                      w: "671",
                                      h: "671",
                                      fit: "fill",
                                      q: "95",
                                    })}
                                    data-preload
                                    className="media"
                                    alt={`product-${index}`}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        {selectedVariant?.modalUrl && (
                          <div className="swiper-slide slide-360">
                            <i className="icon-360"></i>
                            <div className="container-img">
                              <ModalCanvas3d path={selectedVariant?.modalUrl} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="swiper-button-prev">
                      <i className="icon-arrow-left"></i>
                    </div>
                    <div className="swiper-button-next">
                      <i className="icon-arrow-right"></i>
                    </div>
                  </div>

                  <div className="wrapper-slider-thumb no-mobile">
                    <div className="slider-product-thumb">
                      <div className="swiper-container">
                        <div className="swiper-wrapper">
                          {selectedVariant &&
                            selectedVariant.images?.map((data, index) => {
                              const { src } = data;
                              return (
                                <div
                                  key={index}
                                  className={`swiper-slide  ${
                                    index === selectedVariantIndex
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <div className="wrapper-img">
                                    <div className="container-img">
                                      <img
                                        src={generateImageURL({
                                          wix_url: src,
                                          w: "168",
                                          h: "168",
                                          fit: "fill",
                                          q: "95",
                                        })}
                                        data-preload
                                        className="media"
                                        alt={`product-thumb-${index}`}
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            })}

                          {selectedVariant?.modalUrl && (
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
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 column-2 mt-tablet-20 mt-phone-10">
              <Breadcrumb selectedProductDetails={selectedProductDetails} />

              <div className="container-product-description">
                <div className={`form-cart js-running formCartMargin`}>
                  <input type="hidden" name="sku[]" value="MODCH09" />
                  <div className="wrapper-product-name">
                    <div className="container-product-name">
                      <h1
                        className="fs--40 fs-phone-30 product-name split-words"
                        data-aos="d:loop"
                      >
                        {selectedProductDetails.product.name}
                      </h1>
                      <div
                        className="fs-lg-30 fs-tablet-30 fs-phone-20 fw-400 red-1 mt-phone-5"
                        data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                      >
                        {
                          selectedProductDetails.product
                            .formattedDiscountedPrice
                        }
                      </div>
                    </div>

                    <SaveProductButton
                      productId={selectedProductDetails.product._id}
                      members={selectedProductDetails.f1Members}
                      dataAos="fadeIn .8s ease-in-out .2s, d:loop"
                    />
                  </div>
                  <ul
                    className="list-specs mt-lg-35 mt-tablet-40 mt-phone-15"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
                    {selectedVariant && selectedVariant.sku && (
                      <li className="sku">
                        <span className="specs-title">SKU</span>
                        <span className="specs-text">
                          {selectedVariant && selectedVariant.sku}
                        </span>
                      </li>
                    )}

                    {selectedVariant && selectedVariant.size && (
                      <li className="size">
                        <span className="specs-title">Size</span>
                        <span
                          className="specs-text"
                          dangerouslySetInnerHTML={{
                            __html: selectedVariant.size,
                          }}
                        ></span>
                      </li>
                    )}

                    {selectedVariant && selectedVariant.color && (
                      <li className="color">
                        <span className="specs-title">Color</span>
                        <span className="specs-text">
                          {selectedVariant && selectedVariant.color}
                        </span>
                      </li>
                    )}
                    <li className="weight">
                      <span className="specs-title">Weight</span>
                      <span className="specs-text">11.5lbs</span>
                    </li>

                    {seatHeightData && (
                      <li className="seat-height">
                        <span className="specs-title">Seat Height</span>
                        <span
                          className="specs-text"
                          dangerouslySetInnerHTML={{
                            __html: seatHeightData.description,
                          }}
                        ></span>
                      </li>
                    )}
                  </ul>

                  {/* Variants */}
                  <ul
                    className="list-colors"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
                    {selectedProductDetails.variantData.map(
                      (variantData, index) => {
                        return (
                          <li key={index} className="list-colors-item">
                            <div
                              className="container-input"
                              data-set-color={variantData.variant.color}
                              onClick={() =>
                                handleImageChange({
                                  index: index,
                                  selectedVariantData: variantData.variant,
                                  modalUrl: variantData.zipUrl,
                                })
                              }
                            >
                              <label>
                                <input
                                  type="radio"
                                  name="colors"
                                  value={variantData.variant.color}
                                  checked={index === selectedVariantIndex}
                                  readOnly
                                />
                                <div className="container-img">
                                  <img
                                    src={productImageURL({
                                      wix_url: variantData.variant.imageSrc,
                                      w: "49",
                                      h: "49",
                                      fit: "fill",
                                      q: "95",
                                    })}
                                    data-preload
                                    className="media"
                                    alt="pro-product"
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
                    className="container-add-to-cart mt-md-40 mt-phone-20"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
                    <div className="container-input container-input-quantity js-running">
                      <button
                        onClick={() => handleQuantityChange(+cartQuantity - 1)}
                        type="button"
                        className="minus"
                      >
                        <i className="icon-minus no-mobile"></i>
                        <i className="icon-minus-2 no-desktop"></i>
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={cartQuantity}
                        placeholder="1"
                        className="input-number"
                        onInput={(e) => handleQuantityChange(e.target.value)}
                      />
                      <button
                        onClick={() => handleQuantityChange(+cartQuantity + 1)}
                        type="button"
                        className="plus"
                      >
                        <i className="icon-plus no-mobile"></i>
                        <i className="icon-plus-2 no-desktop"></i>
                      </button>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      className="btn-add-to-cart btn-red btn-hover-white"
                    >
                      <div className="split-chars">
                        <span>
                          {productPostPageData &&
                            productPostPageData.addToCartButtonLabel}
                        </span>
                      </div>
                    </button>
                  </div>

                  {selectedProductDetails &&
                    selectedProductDetails.product.customTextFields.length >
                      0 && (
                      <div
                        style={{ paddingBottom: "2px" }}
                        className="container-product-notes container-info-text "
                      >
                        <h3 className="title-info-text split-words" data-aos="">
                          <span>
                            {productPostPageData &&
                              productPostPageData.productNotesLabel}
                          </span>
                        </h3>
                      </div>
                    )}

                  {selectedProductDetails &&
                    selectedProductDetails.product.customTextFields.map(
                      (data, index) => {
                        const { title, mandatory } = data;
                        return (
                          <React.Fragment key={index}>
                            <div className="container-product-notes mb-20">
                              <div className="container-input product-notes">
                                <input
                                  name="product_notes"
                                  type="text"
                                  placeholder={title}
                                  required={mandatory}
                                />
                              </div>
                              {/* <div className="container-submit">
                                <button type="submit">
                                  <i className="icon-arrow-right"></i>
                                </button>
                              </div> */}
                            </div>
                          </React.Fragment>
                        );
                      }
                    )}
                </div>
              </div>

              {/* Description  */}
              {selectedProductDetails &&
                selectedProductDetails.product.description && (
                  <div
                    className="container-info-text description mt-lg-25 mt-tablet-40 mt-mobile-30"
                    data-aos=""
                  >
                    <h3 className="title-info-text split-words" data-aos="">
                      <span>
                        {productPostPageData &&
                          productPostPageData.descriptionLabel}
                      </span>
                    </h3>
                    <div
                      className="wrapper-text"
                      data-aos="fadeIn .8s ease-in-out"
                    >
                      <div
                        ref={descriptionRef}
                        className="text"
                        dangerouslySetInnerHTML={{
                          __html: updatedDescription,
                        }}
                      ></div>
                    </div>
                    <button
                      className="btn-read-more"
                      data-aos="fadeIn .8s ease-in-out"
                    >
                      <span>
                        {productPostPageData &&
                          productPostPageData.readMoreButtonLabel}
                      </span>
                    </button>
                  </div>
                )}

              {/* Downloads */}
              {selectedProductDetails &&
                selectedProductDetails.productDocs?.length > 0 && (
                  <div className="container-info-text " data-aos="">
                    <h3 className="title-info-text split-words" data-aos="">
                      {productPostPageData &&
                        productPostPageData.downloadsLabel}
                    </h3>
                    <div
                      className="container-btn"
                      data-aos="fadeIn .8s ease-in-out"
                    >
                      {selectedProductDetails.productDocs.map((data, index) => {
                        const { fileName, downloadUrl } = data;
                        return (
                          <a key={index} href={downloadUrl} download={fileName}>
                            <button className="btn-small-tag btn-gray btn-hover-red">
                              <div className="split-chars">
                                <span>{fileName}</span>
                              </div>
                            </button>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}

              {/* PRODUCT FOUND */}
              {selectedProductDetails &&
                selectedProductDetails.subCategory.length > 0 && (
                  <div
                    className="container-info-text mt-lg-25 mt-tablet-40 mt-mobile-30"
                    data-aos=""
                  >
                    <h3 className="title-info-text split-words" data-aos="">
                      {productPostPageData &&
                        productPostPageData.productFoundInLabel}
                    </h3>
                    <div
                      className="container-btn"
                      data-aos="fadeIn .8s ease-in-out"
                    >
                      {selectedProductDetails.subCategory.map((data, index) => {
                        const { name, _id } = data;
                        const allProductsId =
                          "00000000-000000-000000-000000000001";
                        if (allProductsId == _id) return;
                        return (
                          <button
                            key={index}
                            onClick={() => productFoundRedirection(_id)}
                            className="btn-small-tag btn-gray btn-hover-red"
                          >
                            <div className="split-chars">
                              <span>{name}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>

      {selectedVariant && selectedVariant.usecaseImages?.length > 0 && (
        <ProductSnapshots data={selectedVariant.usecaseImages} />
      )}

      {matchedProductsData.length > 0 && (
        <MatchedProducts matchedProductsData={matchedProductsData} />
      )}

      <OtherCollections data={collectionsData} />
    </>
  );
};

export default ProductPost;
