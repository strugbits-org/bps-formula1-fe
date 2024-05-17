import AddToCartModal from "./Product/AddToCartModal";
import FilterButton from "./Common/FilterButton";
import { useState } from "react";
import AnimateLink from "./Common/AnimateLink";
import SuccessModal from "./Common/SuccessModal";
import ErrorModal from "./Common/ErrorModal";
import { SaveProductButton } from "./Common/SaveProductButton";

const Search = ({
  collections,
  colors,
  searchedProducts,
  handleFilterChange,
}) => {
  const [selectedProductData, setSelectedProductData] = useState(null);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
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
                  const { product, members, variantData } = item;

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
                            members={members}
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
                            setSelectedProductData(searchedProducts[index])
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
          buttonLabel={"Try Again!"}
          message={"Product Successfully Added to Cart!"}
        />
      )}
      {errorMessageVisible && (
        <ErrorModal
          buttonLabel={"Ok"}
          message={"Something went wrong, please try again"}
        />
      )}
      <AddToCartModal
        productData={selectedProductData}
        setProductData={setSelectedProductData}
        setErrorMessageVisible={setErrorMessageVisible}
        setSuccessMessageVisible={setSuccessMessageVisible}
      />
    </>
  );
};

export default Search;
