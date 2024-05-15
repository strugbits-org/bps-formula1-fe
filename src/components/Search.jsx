import AddToCartModal from "./Product/AddToCartModal";
import FilterButton from "./Common/FilterButton";
import Link from "next/link";
import { useState } from "react";
import AnimateLink from "./Common/AnimateLink";

const Search = ({ collections, colors, searchedProducts, handleFilterChange }) => {
  const [selectedProductData, setSelectedProductData] = useState(null);
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
                <FilterButton collections={collections} colors={colors} handleFilterChange={handleFilterChange} />
              </div>
              <ul
                className="list-search grid-lg-20 grid-md-50 grid-50"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                {searchedProducts.map((item) => {
                  const { variantData, product } = item;

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
                          <button className="btn-bookmark">
                            <i className="icon-bookmark"></i>
                          </button>
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
                                    data-default-product-link-active
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
                              .map((variant) => {
                                return (
                                  <li
                                    className="list-item"
                                    data-set-product-link-color={
                                      variant.color[0]
                                    }
                                    data-default-product-link-active
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
                          onClick={() => setSelectedProductData(product)}
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
                    No Products found
                  </h6>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AddToCartModal
        productData={selectedProductData}
        setProductData={setSelectedProductData}
      />
    </>
  );
};

export default Search;
