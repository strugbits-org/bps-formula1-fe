import React from "react";

import { SaveProductButton } from "../Common/SaveProductButton";
import useProductFunctions from "@/hooks/useProductFunction";
import { productImageURL } from "@/utils/GenerateImageURL";
import AddToCartModal from "../Product/AddToCartModal";
import SuccessModal from "../Common/SuccessModal";
import AnimateLink from "../Common/AnimateLink";
import ErrorModal from "../Common/ErrorModal";

export const ProductListItem = ({
  index,
  product,
  variantData,
  f1Members,
  searchResults,
}) => {
  const {
    selectedVariantIndex,
    selectedVariantData,
    productSnapshots,
    successMessageVisible,
    errorMessageVisible,
    productFilteredVariantData,
    getSelectedProductSnapShots,
    handleImageChange,
    setSuccessMessageVisible,
    setErrorMessageVisible,
    setSelectedVariantData,
    setProductFilteredVariantData,
    setProductSnapshots,
  } = useProductFunctions(index, product, variantData);

  const handleAddToCart = () => {
    setSuccessMessageVisible(true);
  };

  return (
    <li key={product._id} className="grid-item">
      <div className="product-link small saved-products active">
        <div className="container-tags">
          <SaveProductButton
            productId={product._id}
            members={f1Members}
            // onUnSave={() => handleUnSaveProduct(product._id)}
          />
        </div>
        <AnimateLink to={`product/${product.slug}`} className="link">
          <div className="container-top">
            <h2 className="product-title">{product.name}</h2>
          </div>
          <div className="wrapper-product-img">
            {variantData.slice(0, 2).map((variant, index) => (
              <div
                key={index}
                className="container-img product-img"
                data-get-product-link-color={variant.color[0]}
                data-default-product-link-active={index === 0}
              >
                <img
                  src={variant.variant.imageSrc}
                  style={{ padding: "70px" }}
                  data-preload
                  className="media"
                  alt="search-1"
                />
              </div>
            ))}
          </div>
          <div className="container-bottom">
            <div className="price">{product.formattedPrice}</div>
          </div>
        </AnimateLink>
        <div className="container-color-options">
          <ul className="list-color-options">
            {variantData.slice(0, 2).map((variant, index) => (
              <li
                key={index}
                className="list-item"
                data-set-product-link-color={variant.color[0]}
                data-default-product-link-active={index === 0}
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
            ))}
          </ul>
          <div className="colors-number">
            <span>+3</span>
          </div>
        </div>
        <button
          // group="modal-product"
          class="modal-add-to-cart"
          onClick={() => {
            getSelectedProductSnapShots();
          }}
        >
          <span>Add to cart</span>
          <i class="icon-cart"></i>
        </button>
      </div>
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
      {product.preview && (
        <AddToCartModal
          productData={searchResults[index]}
          errorMessageVisible={errorMessageVisible} // Corrected prop name
          setErrorMessageVisible={setErrorMessageVisible}
          successMessageVisible={successMessageVisible} // Corrected prop name
          setSuccessMessageVisible={setSuccessMessageVisible}
          productSnapshots={productSnapshots}
          productFilteredVariantData={productFilteredVariantData}
          selectedVariantData={selectedVariantData}
          setSelectedVariantData={setSelectedVariantData}
          handleImageChange={handleImageChange}
          selectedVariantIndex={selectedVariantIndex}
          setProductSnapshots={setProductSnapshots}
          setProductFilteredVariantData={setProductFilteredVariantData}
        />
      )}
    </li>
  );
};

export const ProductListItemMain = ({
  index,
  product,
  variantData,
  f1Members,
  searchResults,
}) => {
  const {
    selectedVariantIndex,
    selectedVariantData,
    productSnapshots,
    successMessageVisible,
    errorMessageVisible,
    productFilteredVariantData,
    getSelectedProductSnapShots,
    handleImageChange,
    setSuccessMessageVisible,
    setErrorMessageVisible,
    setSelectedVariantData,
    setProductFilteredVariantData,
    setProductSnapshots,
  } = useProductFunctions(index, product, variantData);

  const handleAddToCart = () => {
    setSuccessMessageVisible(true);
  };

  return (
    <li key={product._id} className="grid-item" data-aos="d:loop">
      <div
        className="product-link large active"
        data-product-category
        data-product-location
        data-product-colors
      >
        <div className="container-tags">
          {/* <BestSellerTag subCategory={subCategory} /> */}
          <SaveProductButton productId={product._id} members={f1Members} />
        </div>
        <AnimateLink to={`product/${product.slug}`} className="link">
          <div className="container-top">
            <h2 className="product-title">{product.name}</h2>
            <div className="container-copy">
              <button className="btn-copy copy-link">
                <span>{"defaultVariantSku"}</span>
                <i className="icon-copy"></i>
              </button>
              <input
                type="text"
                className="copy-link-url"
                value={"defaultVariantSku"}
                style={{
                  position: "absolute",
                  opacity: 0,
                  pointerEvents: "none",
                }}
              />
            </div>
            <div className="container-info">
              <div className="dimensions">
                {product.additionalInfoSections?.map((data, index) => {
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
                })}
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
                      data-get-product-link-color={variantData.color[0]}
                      data-default-product-link-active={index === 0}
                    >
                      <img
                        style={{
                          padding: "100px",
                        }}
                        src={productImageURL({
                          wix_url: variantData.variant.imageSrc,
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
            <div className="price">{product.formattedPrice}</div>
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
                      data-set-product-link-color={variantData.color[0]}
                      onMouseEnter={() => handleImageHover(variantData)}
                      data-default-product-link-active={index === 0}
                    >
                      <div className="container-img">
                        <img
                          src={productImageURL({
                            wix_url: variantData.variant.imageSrc,
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
          onClick={() => getSelectedProductSnapShots()}
          group="modal-product"
          class="modal-add-to-cart"
        >
          <span>Add to cart</span>
          <i class="icon-cart"></i>
        </btn-modal-open>
      </div>
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
      {product.preview && (
        <AddToCartModal
          productData={searchResults[index]}
          errorMessageVisible={errorMessageVisible} // Corrected prop name
          setErrorMessageVisible={setErrorMessageVisible}
          successMessageVisible={successMessageVisible} // Corrected prop name
          setSuccessMessageVisible={setSuccessMessageVisible}
          productSnapshots={productSnapshots}
          productFilteredVariantData={productFilteredVariantData}
          selectedVariantData={selectedVariantData}
          setSelectedVariantData={setSelectedVariantData}
          handleImageChange={handleImageChange}
          selectedVariantIndex={selectedVariantIndex}
          setProductSnapshots={setProductSnapshots}
          setProductFilteredVariantData={setProductFilteredVariantData}
        />
      )}
    </li>
  );
};
