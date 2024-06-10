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
  savedProductsData,
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
      savedProductsData,
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
    savedProductsData,
  ]);

  const updatedDescription = selectedProductDetails.product.description.replace(
    /color:#000000;/g,
    "color:#ffffff"
  );

  return (
    <>
      <section class="product-post-intro" data-product-content>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-7 offset-lg-1 column-1">
              <ul
                class="list-slider-product"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                <li
                  class="wrapper-slider-product"
                  data-default-active
                  data-get-color={selectedVariant && selectedVariant.color}
                >
                  <div class="slider-product">
                    {/* <BestSellerTag
                      subCategory={
                        selectedProductDetails &&
                        selectedProductDetails.subCategory
                      }
                      class="best-seller-tag"
                    /> */}

                    <div class="swiper-container reset-slide-enabled">
                      <div class="swiper-wrapper">
                        {selectedVariant &&
                          selectedVariant.images?.map((imageData, index) => {
                            return (
                              <div key={index} class="swiper-slide">
                                <div class="container-img">
                                  <img
                                    src={generateImageURL({
                                      wix_url: imageData.src,
                                      w: "671",
                                      h: "671",
                                      fit: "fill",
                                      q: "95",
                                    })}
                                    style={{ padding: "80px" }}
                                    data-preload
                                    class="media"
                                    alt={`product-${index}`}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        {selectedVariant?.modalUrl && (
                          <div class="swiper-slide slide-360">
                            <i class="icon-360"></i>
                            <div class="container-img">
                              <ModalCanvas3d path={selectedVariant?.modalUrl} />
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
                          {selectedVariant &&
                            selectedVariant.images?.map((data, index) => {
                              const { src } = data;
                              return (
                                <div
                                  key={index}
                                  class={`swiper-slide  ${
                                    index === selectedVariantIndex
                                      ? "active"
                                      : ""
                                  }`}
                                >
                                  <div class="wrapper-img">
                                    <div class="container-img">
                                      <img
                                        src={generateImageURL({
                                          wix_url: src,
                                          w: "168",
                                          h: "168",
                                          fit: "fill",
                                          q: "95",
                                        })}
                                        style={{ padding: "20px" }}
                                        data-preload
                                        class="media"
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
            <div class="col-lg-3 column-2 mt-tablet-20 mt-phone-10">
              <Breadcrumb selectedProductDetails={selectedProductDetails} />

              <div class="container-product-description">
                <div class={`form-cart js-running formCartMargin`}>
                  <input type="hidden" name="sku[]" value="MODCH09" />
                  <div class="wrapper-product-name">
                    <div class="container-product-name">
                      <h1
                        class="fs--40 fs-phone-30 product-name split-words"
                        data-aos="d:loop"
                      >
                        {selectedProductDetails.product.name}
                      </h1>
                      <div
                        class="fs-lg-30 fs-tablet-30 fs-phone-20 fw-400 red-1 mt-phone-5"
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
                      savedProductsData={savedProductsData}
                    />
                  </div>
                  <ul
                    class="list-specs mt-lg-35 mt-tablet-40 mt-phone-15"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
                    {selectedVariant && selectedVariant.sku && (
                      <li class="sku">
                        <span class="specs-title">SKU</span>
                        <span class="specs-text">
                          {selectedVariant && selectedVariant.sku}
                        </span>
                      </li>
                    )}

                    {selectedVariant && selectedVariant.size && (
                      <li class="size">
                        <span class="specs-title">Size</span>
                        <span
                          class="specs-text"
                          dangerouslySetInnerHTML={{
                            __html: selectedVariant.size,
                          }}
                        ></span>
                      </li>
                    )}

                    {selectedVariant && selectedVariant.color && (
                      <li class="color">
                        <span class="specs-title">Color</span>
                        <span class="specs-text">
                          {selectedVariant && selectedVariant.color}
                        </span>
                      </li>
                    )}
                    <li class="weight">
                      <span class="specs-title">Weight</span>
                      <span class="specs-text">11.5lbs</span>
                    </li>

                    {seatHeightData && (
                      <li class="seat-height">
                        <span class="specs-title">Seat Height</span>
                        <span
                          class="specs-text"
                          dangerouslySetInnerHTML={{
                            __html: seatHeightData.description,
                          }}
                        ></span>
                      </li>
                    )}
                  </ul>

                  {/* Variants */}
                  <ul
                    class="list-colors"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
                    {selectedProductDetails.variantData.map(
                      (variantData, index) => {
                        return (
                          <li key={index} class="list-colors-item">
                            <div
                              class="container-input"
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
                                <div class="container-img">
                                  <img
                                    src={productImageURL({
                                      wix_url: variantData.variant.imageSrc,
                                      w: "49",
                                      h: "49",
                                      fit: "fill",
                                      q: "95",
                                    })}
                                    data-preload
                                    class="media"
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
                    class="container-add-to-cart mt-md-40 mt-phone-20"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
                    <div class="container-input container-input-quantity js-running">
                      <button
                        onClick={() => handleQuantityChange(+cartQuantity - 1)}
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
                        onInput={(e) => handleQuantityChange(e.target.value)}
                      />
                      <button
                        onClick={() => handleQuantityChange(+cartQuantity + 1)}
                        type="button"
                        class="plus"
                      >
                        <i class="icon-plus no-mobile"></i>
                        <i class="icon-plus-2 no-desktop"></i>
                      </button>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      class="btn-add-to-cart btn-red btn-hover-white"
                    >
                      <div class="split-chars">
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
                        class="container-product-notes container-info-text "
                      >
                        <h3 class="title-info-text split-words" data-aos="">
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
                            <div class="container-product-notes mb-20">
                              <div class="container-input product-notes">
                                <input
                                  name="product_notes"
                                  type="text"
                                  placeholder={title}
                                  required={mandatory}
                                />
                              </div>
                              {/* <div class="container-submit">
                                <button type="submit">
                                  <i class="icon-arrow-right"></i>
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
                    class="container-info-text description mt-lg-25 mt-tablet-40 mt-mobile-30"
                    data-aos=""
                  >
                    <h3 class="title-info-text split-words" data-aos="">
                      <span>
                        {productPostPageData &&
                          productPostPageData.descriptionLabel}
                      </span>
                    </h3>
                    <div class="wrapper-text" data-aos="fadeIn .8s ease-in-out">
                      <div
                        ref={descriptionRef}
                        class="text"
                        dangerouslySetInnerHTML={{
                          __html: updatedDescription,
                        }}
                      ></div>
                    </div>
                    <button
                      class="btn-read-more"
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
                  <div class="container-info-text " data-aos="">
                    <h3 class="title-info-text split-words" data-aos="">
                      {productPostPageData &&
                        productPostPageData.downloadsLabel}
                    </h3>
                    <div
                      class="container-btn"
                      data-aos="fadeIn .8s ease-in-out"
                    >
                      {selectedProductDetails.productDocs.map((data, index) => {
                        const { fileName, downloadUrl } = data;
                        return (
                          <a key={index} href={downloadUrl} download={fileName}>
                            <button class="btn-small-tag btn-gray btn-hover-red">
                              <div class="split-chars">
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
                    class="container-info-text mt-lg-25 mt-tablet-40 mt-mobile-30"
                    data-aos=""
                  >
                    <h3 class="title-info-text split-words" data-aos="">
                      {productPostPageData &&
                        productPostPageData.productFoundInLabel}
                    </h3>
                    <div
                      class="container-btn"
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
                            class="btn-small-tag btn-gray btn-hover-red"
                          >
                            <div class="split-chars">
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
