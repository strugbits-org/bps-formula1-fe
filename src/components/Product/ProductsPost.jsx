import OtherCollections from "../Common/OtherCollections";
import MatchedProducts from "../Common/MatchedProducts";
import AnimateLink from "../Common/AnimateLink";
import Link from "next/link";
import { productData } from "@/utils/ProductData";
import RenderImage from "@/utils/RenderImage";
import React, { useEffect, useRef, useState } from "react";
import ProductSnapshots from "../Common/productSnapshots";
import { useRouter } from "next/router";
import { pageLoadEnd, pageLoadStart } from "@/utils/AnimationFunctions";
import { BestSeller } from "@/utils/BestSeller";
import { SaveProductButton } from "../Common/SaveProductButton";
import { AddProductToCart } from "@/services/cartServices";
import { usePathname } from "next/navigation";
import Breadcrumb from "../Common/BreadCrumbData";
import { BestSellerTag } from "../Common/BestSellerTag";

const ProductPost = ({
  productPostPageData,
  selectedProductDetails,
  matchedProductsData,
  collectionsData,
  productSnapshots,
}) => {
  const router = useRouter();
  const [selectedVariant, setSelectedVariant] = useState(
    selectedProductDetails.variantData[0].variant
  );
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [modalURL, setModalURL] = useState("");
  const [cartQuantity, setCartQuantity] = useState(1);

  console.log(productSnapshots, "productSnapshots>>");
  const handleImageChange = (index) => {
    setSelectedVariantIndex(index);
    setSelectedVariant(selectedProductDetails.variantData[index].variant);
  };

  const productFoundRedirection = (subCategoryId) => {
    const queryParams = new URLSearchParams(router.query);

    const categoryId = selectedProductDetails.category._id;
    const collectionSlug = selectedProductDetails.f1Collection.collectionSlug;
    queryParams.set("collection", collectionSlug);
    queryParams.set("category", categoryId);
    queryParams.set("subCategories", JSON.stringify([subCategoryId]));
    queryParams.delete("slug");
    router.push({ pathname: "/products", query: queryParams.toString() });
    pageLoadStart();
  };

  function findUseCaseImages(array, variantId) {
    for (let item of array) {
      if (item.colorVariation === variantId) {
        return item.usecaseImages;
      }
    }
    return null;
  }

  const productSnapShots = findUseCaseImages(
    productSnapshots,
    selectedVariant.variantId
  );

  const handlePrevButtonClick = () => {
    const prevIndex =
      (selectedVariantIndex - 1 + selectedProductDetails.variantData.length) %
      selectedProductDetails.variantData.length;
    handleImageChange(prevIndex);
  };

  const handleNextButtonClick = () => {
    const nextIndex =
      (selectedVariantIndex + 1) % selectedProductDetails.variantData.length;
    handleImageChange(nextIndex);
  };

  const descriptionRef = useRef(null);

  useEffect(() => {
    const descriptionElement = descriptionRef.current;
    if (productData) {
      let url = productData.zipUrl;
      if (url) {
        let newUrl = url.replace(/0\.jpg$/, "");
        setModalURL(newUrl);
      }
    }
    if (descriptionElement) {
      descriptionElement.innerHTML = descriptionElement.innerHTML.replace(
        /<span style="color:#000000;">/g,
        '<span style="color:#ffffff;">'
      );
    }
  }, [productData]);

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
      const product = {
        catalogReference: {
          appId: "215238eb-22a5-4c36-9e7b-e7c08025e04e",
          catalogItemId: product_id,
          options: {
            variantId: variant_id,
            customTextFields: {
              collection: selectedProductDetails.f1Collection.collectionName,
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
                  data-get-color={
                    selectedProductDetails.variantData[selectedVariantIndex]
                      .variant.color
                  }
                >
                  <div className="slider-product">
                    <BestSellerTag
                      subCategory={
                        selectedProductDetails &&
                        selectedProductDetails.subCategory
                      }
                      className="best-seller-tag"
                    />

                    {BestSeller[selectedProductDetails.category._id] && (
                      <div class="best-seller-tag">
                        <span>Best Seller</span>
                      </div>
                    )}
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        {selectedProductDetails.variantData.map(
                          (variantData, index) => {
                            return (
                              <div
                                key={index}
                                className={`swiper-slide ${
                                  index === selectedVariantIndex
                                    ? "swiper-slide-active"
                                    : ""
                                }`}
                              >
                                <div
                                  className="container-img"
                                  onClick={() => handleImageChange(index)}
                                >
                                  <img
                                    style={{ padding: "100px" }}
                                    src={variantData.variant.imageSrc}
                                    data-preload
                                    className="media"
                                    alt={`product-${index}`}
                                  />
                                </div>
                              </div>
                            );
                          }
                        )}
                        {modalURL ? (
                          <div className="swiper-slide slide-360">
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
                          <div className="swiper-slide slide-360">
                            <i className="icon-360"></i>
                            <div className="container-img">
                              <canvas
                                className="infinite-image-scroller"
                                data-frames="49"
                                data-path="https://super-drivers.s3.us-east-2.amazonaws.com/BPS+ONLINE/F1/3DProds/_demosku/0_"
                                data-extension="jpg"
                              ></canvas>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className="swiper-button-prev"
                      onClick={handlePrevButtonClick}
                    >
                      <i className="icon-arrow-left"></i>
                    </div>
                    <div
                      className="swiper-button-next"
                      onClick={handleNextButtonClick}
                    >
                      <i className="icon-arrow-right"></i>
                    </div>
                  </div>

                  <div className="wrapper-slider-thumb no-mobile">
                    <div className="slider-product-thumb">
                      <div className="swiper-container">
                        <div className="swiper-wrapper">
                          {selectedProductDetails.variantData.map(
                            (variantData, index) => (
                              <div
                                key={index}
                                className={`swiper-slide ${
                                  index === selectedVariantIndex ? "active" : ""
                                }`}
                              >
                                <div className="wrapper-img">
                                  <div
                                    className="container-img"
                                    onClick={() => handleImageChange(index)}
                                  >
                                    <img
                                      style={{ padding: "20px" }}
                                      src={variantData.variant.imageSrc}
                                      data-preload
                                      className="media"
                                      alt={`product-thumb-${index}`}
                                    />
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                          {selectedProductDetails &&
                            selectedProductDetails.zipUrl && (
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
                <div className="form-cart js-running">
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
                      members={selectedProductDetails.members}
                      dataAos="fadeIn .8s ease-in-out .2s, d:loop"
                    />
                  </div>
                  <ul
                    className="list-specs mt-lg-35 mt-tablet-40 mt-phone-15"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
                    {selectedVariant.sku && (
                      <li className="sku">
                        <span className="specs-title">SKU</span>
                        <span className="specs-text">
                          {selectedVariant.sku}
                        </span>
                      </li>
                    )}
                    {selectedProductDetails.product.additionalInfoSections
                      .length !== 0 && (
                      <li className="size">
                        <span className="specs-title">Size</span>
                        {selectedProductDetails.product.additionalInfoSections.map(
                          (data, index) => {
                            const { title, description } = data;
                            if (title === "Size") {
                              return (
                                <span
                                  key={index}
                                  className="specs-text"
                                  dangerouslySetInnerHTML={{
                                    __html: description,
                                  }}
                                ></span>
                              );
                            }
                            return null;
                          }
                        )}
                      </li>
                    )}
                    {selectedVariant.color && (
                      <li className="color">
                        <span className="specs-title">Color</span>
                        <span className="specs-text">
                          {selectedVariant.color}
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
                      (variantData, index) => (
                        <li key={index} className="list-colors-item">
                          <div
                            className="container-input"
                            data-set-color={variantData.variant.color}
                            onClick={() => handleImageChange(index)}
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
                                  src={variantData.variant.imageSrc}
                                  data-preload
                                  className="media"
                                  alt="pro-product"
                                />
                              </div>
                            </label>
                          </div>
                        </li>
                      )
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
                <div className="wrapper-text" data-aos="fadeIn .8s ease-in-out">
                  <div
                    ref={descriptionRef}
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: productData.product.description,
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

              {/* Downloads */}
              {selectedProductDetails &&
                selectedProductDetails.productDocs?.length > 0 && (
                  <div className="container-info-text" data-aos="">
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
                  <div className="container-info-text" data-aos="">
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

      {productSnapShots && productSnapShots.length > 0 && (
        <ProductSnapshots data={productSnapShots} />
      )}

      {matchedProductsData.length > 0 && (
        <MatchedProducts matchedProductsData={matchedProductsData} />
      )}
      <OtherCollections data={collectionsData} />
    </>
  );
};

export default ProductPost;
