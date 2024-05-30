import React, { useState } from "react";
import { SaveProductButton } from "../Common/SaveProductButton";
import AnimateLink from "../Common/AnimateLink";
import SuccessModal from "../Common/SuccessModal";
import ErrorModal from "../Common/ErrorModal";
import {
  getProductSnapShots,
  getProductVariants,
} from "@/services/apiServices";
import { resetSlideIndex } from "@/utils/AnimationFunctions";
import AddToCartModal from "../Product/AddToCartModal";

const ProductListItem = ({
  index,
  product,
  variantData,
  f1Members,
  searchResults,
}) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedVariantData, setSelectedVariantData] = useState(null);
  const [productSnapshots, setProductSnapshots] = useState([]);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [productFilteredVariantData, setProductFilteredVariantData] =
    useState();

  console.log(product, "product<<>>");
  const getSelectedProductSnapShots = async () => {
    setSelectedVariantIndex(index);

    try {
      const product_id = product._id;
      const [productSnapshotData, productVariantsData] = await Promise.all([
        getProductSnapShots(product_id),
        getProductVariants(product_id),
      ]);

      let dataMap = new Map(
        productVariantsData.map((item) => [item.sku, item])
      );

      let filteredVariantData = variantData.filter((variant) => {
        if (dataMap.has(variant.sku)) {
          const dataItem = dataMap.get(variant.sku);
          variant.variant.variantId = dataItem._id;
          return true;
        }
        return false;
      });
      setProductFilteredVariantData(filteredVariantData);

      setProductSnapshots(productSnapshotData);

      if (filteredVariantData.length > 0) {
        handleImageChange({
          index: index,
          selectedVariantData: filteredVariantData[0].variant,
          productSnapshots: productSnapshotData,
          modalUrl: filteredVariantData[0].zipUrl,
        });
      }
      product.preview = true;
      console.log(product._id, "product._id>>>>>>>>>>>>");
      setTimeout(() => {
        const modal_group = document.querySelector(
          `modal-group[name='${product._id}']`
        );
        modal_group.open();
      }, 10);
      console.log(modal_group, "modal_group>>");
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
  console.log(product, "product2222222222222<<>>");

  const handleAddToCart = () => {
    // Your logic to handle adding the product to the cart
    setSuccessMessageVisible(true); // Example: show success modal
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
          //   group="modal-product"
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

export default ProductListItem;
