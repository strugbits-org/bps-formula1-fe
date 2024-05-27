import {
  getProductSnapShots,
  getProductVariants,
} from "@/services/apiServices";
import AnimateLink from "../Common/AnimateLink";
import { SaveProductButton } from "../Common/SaveProductButton";
import AddToCartModal from "./AddToCartModal";
import { useState } from "react";
import { resetSlideIndex } from "@/utils/AnimationFunctions";

const ProductCard = ({
  index,
  product,
  f1Members,
  variantData,
  searchedProducts,
}) => {
  const [selectedProductData, setSelectedProductData] = useState(null);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [selectedVariantData, setSelectedVariantData] = useState(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [productFilteredVariantData, setProductFilteredVariantData] =
    useState();
  const [productSnapshots, setProductSnapshots] = useState();

  const getSelectedProductSnapShots = async (productData) => {
    console.log(productData, "productData>>");
    console.log(productSnapshots, "productSnapshots>>");
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
  return (
    <>
      <li className="grid-item">
        <div
          className="product-link small saved-products landscape-fix active"
          data-product-category
          data-product-location
          data-product-colors
        >
          <div className="container-tags">
            <SaveProductButton productId={product._id} members={f1Members} />
          </div>
          <AnimateLink to={`/product/${product.slug}`} className="link">
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
                      data-get-product-link-color={variant.color[0]}
                      data-default-product-link-active={index === 0}
                    >
                      <img
                        src={variant.variant.imageSrc}
                        data-preload
                        className="media"
                        alt="search-1"
                      />
                    </div>
                  );
                })}
            </div>
            <div className="container-bottom">
              <div className="price">{product.formattedPrice}</div>
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
            onClick={() => {
              setTimeout(() => {
                getSelectedProductSnapShots(searchedProducts);
              }, 2000);
            }}
            group="modal-product"
            class="modal-add-to-cart"
          >
            <span>Add to cart</span>
            <i className="icon-cart"></i>
          </btn-modal-open>
        </div>
      </li>

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
      />
    </>
  );
};

export default ProductCard;
