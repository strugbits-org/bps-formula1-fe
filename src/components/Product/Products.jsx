import OtherCollections from "../Common/OtherCollections";
import FilterButton from "../Common/FilterButton";
import AnimateLink from "../Common/AnimateLink";
import AddToCartModal from "./AddToCartModal";
import RenderImage from "@/utils/RenderImage";
import React from "react";
import { generateImageURL } from "@/utils/GenerateImageURL";
import { hexToColorName } from "@/utils/ColorConverter";

const chairCategory = [
  "Accent chairs",
  "Arm chairs",
  "Conference chairs",
  "Dining chairs",
  "Lounge chairs",
  "Office chairs",
  "Seat chairs",
  "Swivel chairs",
];

const Products = ({
  filteredProducts,
  collectionsData,
  selectedCategoryData,
}) => {
  return (
    <>
      <section className="products-intro">
        <div className="container-fluid pos-relative z-5">
          <div className="row row-1">
            <div className="col-lg-1 col-mobile-9 offset-lg-1 column-1 order-mobile-1">
              <h1
                className="fs--30 fs-tablet-20 text-uppercase white-1 split-words"
                data-aos="d:loop"
              >
                Chairs
              </h1>
            </div>
            <div className="col-lg-8 column-2 order-mobile-3 mt-mobile-15">
              <ul
                className="list-tags"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                {selectedCategoryData?.level2Collections?.map((data, index) => {
                  const { name } = data;
                  if (name) {
                    return (
                      <li key={index} className="list-item">
                        <button className="btn-tag ">
                          {/* active- className for active button */}
                          <span>{name}</span>
                        </button>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>

            <FilterButton />
          </div>

          <div className="row row-2 mt-lg-60 mt-mobile-30 pb-lg-80">
            <div className="col-lg-10 offset-lg-1 column-1">
              <div className="container-title">
                <h2 className="fs-lg-24 white-1 text-center text-uppercase">
                  <span
                    className="fs-mobile-13 fw-400 mr-15"
                    data-aos="fadeIn .8s ease-in-out .6s, d:loop"
                  >
                    Collection
                  </span>
                  <span
                    className="fs-tablet-20 fs-phone-16 font-2 mt-5 split-chars"
                    data-delay="400"
                    data-aos="d:loop"
                  >
                    Classic Vegas
                  </span>
                </h2>
              </div>
              <ul className="list-products grid-lg-33 grid-md-50 mt-lg-60 mt-mobile-30">
                {filteredProducts.map((data, index) => {
                  const { product } = data;
                  console.log(product.additionalInfoSections, "product>>");
                  return (
                    <li key={index} className="grid-item" data-aos="d:loop">
                      <div
                        className="product-link large active"
                        data-product-category
                        data-product-location
                        data-product-colors
                      >
                        <div className="container-tags">
                          <div className="best-seller">
                            <span>Best Seller</span>
                          </div>
                          <button className="btn-bookmark">
                            <i className="icon-bookmark"></i>
                          </button>
                        </div>
                        <div className="container-copy">
                          <a href="/#" className="btn-copy copy-link">
                            <span>MODCH39</span>
                            <i className="icon-copy"></i>
                          </a>
                          <input
                            type="text"
                            className="copy-link-url"
                            value="MODCH39"
                            style={{
                              position: "absolute",
                              opacity: 0,
                              pointerEvents: "none",
                            }}
                          />
                        </div>
                        <AnimateLink to="/products/1" className="link">
                          <div className="container-top">
                            <h2 className="product-title">{product.name}</h2>
                            <div className="container-info">
                              <div className="dimensions">
                                {product.additionalInfoSections.map(
                                  (data, index) => {
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
                                  }
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="wrapper-product-img">
                            {product.productOptions.Color
                              ? product.productOptions.Color.choices.map(
                                  (option, index) => {
                                    const colorName = hexToColorName(
                                      option.value
                                    );
                                    return (
                                      <React.Fragment key={index}>
                                        {index < 4 && (
                                          <div
                                            className="container-img product-img"
                                            data-get-product-link-color={
                                              colorName
                                            }
                                            data-default-product-link-active
                                          >
                                            <img
                                              style={{
                                                padding: "100px",
                                              }}
                                              width={100}
                                              src={generateImageURL({
                                                wix_url: option.mainMedia,
                                                w: "1000",
                                                h: "1000",
                                                fit: "fit",
                                                q: "95",
                                              })}
                                              className="media"
                                              alt="product"
                                            />
                                          </div>
                                        )}
                                      </React.Fragment>
                                    );
                                  }
                                )
                              : product.productOptions["Color "]
                              ? product.productOptions["Color "].choices.map(
                                  (option, index) => (
                                    <React.Fragment key={index}>
                                      {index < 4 && (
                                        <div
                                          className="container-img product-img"
                                          data-get-product-link-color={
                                            colorName
                                          }
                                          data-default-product-link-active
                                        >
                                          <img
                                            src={generateImageURL({
                                              wix_url: option.mainMedia
                                                ? option.mainMedia
                                                : item.mainMedia,
                                              w: "1000",
                                              h: "1000",
                                              fit: "fit",
                                              q: "95",
                                            })}
                                            className="media"
                                            alt="product"
                                          />
                                        </div>
                                      )}
                                    </React.Fragment>
                                  )
                                )
                              : null}
                            {/* <div
                              className="container-img product-img"
                              data-get-product-link-color="red"
                              data-default-product-link-active
                            >
                              <img
                                src={RenderImage(product.mainMedia)}
                                data-preload
                                className="media"
                                alt="product"
                              />
                            </div>
                            <div
                              className="container-img product-img"
                              data-get-product-link-color="yellow"
                            >
                              <img
                                src="/images/products/img-01-blue.png"
                                data-preload
                                className="media"
                                alt="product"
                              />
                            </div>
                            <div
                              className="container-img product-img"
                              data-get-product-link-color="blue"
                            >
                              <img
                                src="/images/products/img-01-brown.png"
                                data-preload
                                className="media"
                                alt="product"
                              />
                            </div> */}
                          </div>
                          <div className="container-bottom">
                            <div className="price">
                              {product.formattedPrice}
                            </div>
                          </div>
                        </AnimateLink>
                        <div className="container-color-options">
                          <ul className="list-color-options">
                            {product.productOptions.Color
                              ? product.productOptions.Color.choices.map(
                                  (option, index) => {
                                    console.log(option, "ahghj");

                                    const colorName = hexToColorName(
                                      option.value
                                    );
                                    console.log("Color Name:", colorName);
                                    return (
                                      <React.Fragment key={index}>
                                        {index < 4 && (
                                          <li
                                            className="list-item"
                                            data-set-product-link-color={
                                              colorName
                                            }
                                            // data-default-product-link-active
                                          >
                                            <div className="container-img">
                                              <img
                                                src={generateImageURL({
                                                  wix_url: option.mainMedia
                                                    ? option.mainMedia
                                                    : item.mainMedia,
                                                  w: "24",
                                                  h: "24",
                                                  fit: "fit",
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
                                  }
                                )
                              : item.productOptions["Color "]
                              ? item.productOptions["Color "].choices.map(
                                  (option, index) => (
                                    <React.Fragment key={index}>
                                      {index < 4 && (
                                        <li key={index}>
                                          <div className="container-img">
                                            <img
                                              src={generateImageURL({
                                                wix_url: option.mainMedia
                                                  ? option.mainMedia
                                                  : item.mainMedia,
                                                w: "24",
                                                h: "24",
                                                fit: "fit",
                                                q: "95",
                                              })}
                                              data-preload
                                              className="media"
                                              alt=""
                                            />
                                          </div>
                                        </li>
                                      )}
                                    </React.Fragment>
                                  )
                                )
                              : null}
                          </ul>
                          {product.productOptions.Color &&
                          product.productOptions.Color.choices.length > 4 ? (
                            <div className="colors-number">
                              <span>
                                +
                                {product.productOptions.Color.choices.length -
                                  4}
                              </span>
                            </div>
                          ) : product.productOptions["Color "] &&
                            product.productOptions["Color "].choices.length >
                              4 ? (
                            <div className="colors-number">
                              <span>
                                +
                                {product.productOptions["Color "].choices
                                  .length - 4}
                              </span>
                            </div>
                          ) : null}
                        </div>
                        <btn-modal-open
                          group="modal-product"
                          class="modal-add-to-cart"
                        >
                          <span>Add to cart</span>
                          <i class="icon-cart"></i>
                        </btn-modal-open>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="flex-center mt-30">
                <button
                  className="btn-medium btn-red btn-hover-white"
                  data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                >
                  <div className="split-chars">
                    <span>Load more</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-fixed no-tablet" data-aos="d:loop">
          <div className="container-img">
            <img
              src="/images/img-01.jpg"
              data-preload
              className="no-mobile media"
              data-parallax-top
              data-translate-y="-20%"
              alt="product"
            />
            <img
              src="/images/img-02.jpg"
              data-preload
              className="no-desktop media"
              alt="product"
            />
          </div>
        </div>
      </section>
      <OtherCollections data={collectionsData} />
      <AddToCartModal />
    </>
  );
};

export default Products;
