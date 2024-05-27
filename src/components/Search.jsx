import AddToCartModal from "./Product/AddToCartModal";
import FilterButton from "./Common/FilterButton";
import { useState } from "react";
import AnimateLink from "./Common/AnimateLink";
import SuccessModal from "./Common/SuccessModal";
import ErrorModal from "./Common/ErrorModal";
import { SaveProductButton } from "./Common/SaveProductButton";
import {
  getProductSnapShots,
  getProductVariants,
} from "@/services/apiServices";
import { resetSlideIndex } from "@/utils/AnimationFunctions";

const Search = ({
  collections,
  colors,
  searchedProducts,
  handleFilterChange,
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
    setSelectedProductData(productData);
    try {

      const product_id = productData.product._id;
      const [
        productSnapshotData,
        productVariantsData,
      ] = await Promise.all([
        getProductSnapShots(product_id),
        getProductVariants(product_id)
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
          modalUrl: filteredVariantData[0].zipUrl
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
    modalUrl
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
                  handleFilterChange={handleFilterChange}
                />
              </div>
              <ul
                className="list-search grid-lg-20 grid-md-50 grid-50"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                {searchedProducts.map((item, index) => {
                  const { product, f1Members, variantData } = item;

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
                            productId={product._id}
                            members={f1Members}
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
                          onClick={() =>
                            getSelectedProductSnapShots(searchedProducts[index])
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
                {searchedProducts.length === 0 && (
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
      />
    </>
  );
};

export default Search;
