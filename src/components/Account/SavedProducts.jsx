import { useEffect, useState } from "react";
import AddToCartModal from "../Product/AddToCartModal";
import { SaveProductButton } from "../Common/SaveProductButton";
import SuccessModal from "../Common/SuccessModal";
import ErrorModal from "../Common/ErrorModal";

const SavedProducts = ({
  savedProductPageData,
  savedProductData,
  totalCount,
  pageSize,
  handleLoadMore,
}) => {
  const [savedProductsData, setSavedProductsData] = useState(savedProductData);
  const [selectedProductData, setSelectedProductData] = useState(null);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const handleUnSaveProduct = (productId) => {
    setSavedProductsData((prevData) =>
      prevData.filter(
        (productData) => productData.data.product._id !== productId
      )
    );
  };

  useEffect(() => {
    setSavedProductsData(savedProductData);
  }, [savedProductData]);

  return (
    <>
      <section className="my-account-intro section-saved-products">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-lg-3 offset-md-4 column-1">
              <div className="wrapper-top">
                <h1
                  className="fs--60 red-1 text-uppercase split-words"
                  data-aos="d:loop"
                >
                  {savedProductPageData && savedProductPageData.pageTitle}
                </h1>
              </div>
              <div className="wrapper-bottom mt-lg-55 mt-tablet-45 mt-phone-25">
                <ul
                  className="list-saved-products grid-lg-25 grid-mobile-50"
                  data-aos="fadeIn .8s ease-in-out .4s, d:loop"
                >
                  {savedProductData && savedProductData.length === 0 ? (
                    <div style={{ margin: "20vh auto" }}>
                      <h6
                        className="fs--20 text-center split-words "
                        data-aos="d:loop"
                      >
                        No Products Found
                      </h6>
                    </div>
                  ) : (
                    savedProductsData.map((productData, index) => {
                      const { product, variantData, members } =
                        productData.data;
                      return (
                        <li key={index} className="grid-item">
                          <div
                            className="product-link small saved-products active"
                            data-product-category
                            data-product-location
                            data-product-colors
                          >
                            <div className="container-tags">
                              {/* <SaveProductButton
                                productId={product._id}
                                members={members}
                              /> */}

                              <SaveProductButton
                                productId={product._id}
                                members={members}
                                onUnSave={() =>
                                  handleUnSaveProduct(product._id)
                                }
                              />
                            </div>
                            <a href="products.html" className="link">
                              <div className="container-top">
                                <h2 className="product-title">
                                  {product.name}
                                </h2>
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
                                          style={{
                                            padding: "70px",
                                          }}
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
                                  {" "}
                                  {product.formattedPrice}
                                </div>
                              </div>
                            </a>
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
                              <div className="colors-number">
                                <span>+3</span>
                              </div>
                            </div>
                            <btn-modal-open
                              group="modal-product"
                              class="modal-add-to-cart"
                              onClick={() =>
                                setSelectedProductData(
                                  savedProductData[index].data
                                )
                              }
                            >
                              <span>Add to cart</span>
                              <i class="icon-cart"></i>
                            </btn-modal-open>
                          </div>
                        </li>
                      );
                    })
                  )}
                </ul>
                {totalCount > pageSize &&
                  savedProductData.length !== totalCount && (
                    <div className="flex-center mt-lg-60 mt-tablet-40 mt-phone-45">
                      <button
                        onClick={handleLoadMore}
                        className="btn-medium btn-red btn-hover-white"
                      >
                        <span className="split-chars">
                          <span>Load more</span>
                        </span>
                      </button>
                    </div>
                  )}
              </div>
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
      />
      <AddToCartModal
        productData={selectedProductData}
        setProductData={setSelectedProductData}
      />
    </>
  );
};

export default SavedProducts;
