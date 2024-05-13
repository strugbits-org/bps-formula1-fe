import OtherCollections from "../Common/OtherCollections";
import MatchedProducts from "../Common/MatchedProducts";
import AnimateLink from "../Common/AnimateLink";
import Link from "next/link";
import { productData } from "@/utils/ProductData";
import RenderImage from "@/utils/RenderImage";

const breadCrumbData = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collections" },
  { name: "Collection detail", href: "/collections" },
  { name: "Category", href: "/collections-category" },
  { name: "Product list", href: "#" },
];

const ProductPost = ({
  productPostPageData,
  selectedProductDetails,
  matchedProductsData,
  collectionsData,
  productSnapshots,
}) => {
  console.log(selectedProductDetails, "selectedProductDetails>>");
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
                  data-get-color="yellow"
                >
                  <div className="slider-product">
                    <div className="best-seller-tag">
                      <span>Best Seller</span>
                    </div>
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        {selectedProductDetails.variantData.map(
                          (variantData, index) => {
                            const { variant } = variantData;
                            const segments = variant.imageSrc.split("/");

                            const filename = segments[segments.length - 1];

                            return (
                              <div key={index} className="swiper-slide">
                                <div className="container-img">
                                  <img
                                    style={{
                                      padding: "100px",
                                    }}
                                    src={variant.imageSrc}
                                    data-preload
                                    className="media"
                                    alt={`product-${index}`}
                                  />
                                </div>
                              </div>
                            );
                          }
                        )}{" "}
                      </div>
                    </div>
                    <div className="swiper-button-prev">
                      <i className="icon-arrow-left"></i>
                    </div>
                    <div className="swiper-button-next">
                      <i className="icon-arrow-right"></i>
                    </div>
                  </div>

                  <div className="wrapper-slider-thumb no-mobile">
                    <div className="slider-product-thumb">
                      <div className="swiper-container">
                        <div className="swiper-wrapper">
                          {selectedProductDetails.variantData.map(
                            (variantData, index) => {
                              return (
                                <div key={index} className="swiper-slide">
                                  <div className={`wrapper-img `}>
                                    <div className="container-img">
                                      <img
                                        style={{
                                          padding: "20px",
                                        }}
                                        src={variantData.variant.imageSrc}
                                        data-preload
                                        className="media"
                                        alt={`product-test-${index}`}
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 column-2 mt-tablet-20 mt-phone-10">
              <ul className="list-breadcrumb" data-aos="fadeIn .8s ease-in-out">
                {breadCrumbData.map((data, index) => {
                  const { name, href } = data;
                  return (
                    <li key={index} className="list-breadcrumb-item">
                      <AnimateLink to={href} className="breadcrumb">
                        <span>{name}</span>
                      </AnimateLink>
                    </li>
                  );
                })}
              </ul>
              <div className="container-product-description">
                <form action="cart.html" className="form-cart" data-pjax>
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
                    <button
                      className="btn-bookmark"
                      data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                    >
                      <i className="icon-bookmark"></i>
                    </button>
                  </div>
                  <ul
                    className="list-specs mt-lg-35 mt-tablet-40 mt-phone-15"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
                    <li className="sku">
                      <span className="specs-title">SKU</span>
                      <span className="specs-text">MODCH09</span>
                    </li>
                    <li className="size">
                      <span className="specs-title">Size</span>
                      {selectedProductDetails.product.additionalInfoSections.map(
                        (data, index) => {
                          const { title, description } = data;
                          if (title == "Size") {
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
                        }
                      )}
                    </li>
                    <li className="color">
                      <span className="specs-title">Color</span>
                      <span className="specs-text">Yellow - Birch</span>
                    </li>
                    <li className="weight">
                      <span className="specs-title">Weight</span>
                      <span className="specs-text">11.5lbs</span>
                    </li>
                    <li className="seat-height">
                      <span className="specs-title">Seat Height</span>
                      {selectedProductDetails.product.additionalInfoSections.map(
                        (data, index) => {
                          const { title, description } = data;
                          if (title == "Seat Height") {
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
                        }
                      )}
                    </li>
                  </ul>
                  <ul
                    className="list-colors"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
                    {/* {selectedProductDetails.variantData.map(
                      (variantData, index) => {
                        return (
                          <li key={index} className="list-colors-item">
                            <div
                              className="container-input "
                              data-set-color={variantData.color[0]}
                            >
                              <label>
                                <input
                                  type="radio"
                                  name="colors"
                                  value={variantData.color[0]}
                                  checked
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
                        );
                      }
                    )} */}
                    <li className="list-colors-item">
                      <div
                        className="container-input active"
                        data-set-color="yellow"
                      >
                        <label>
                          <input
                            type="radio"
                            name="colors"
                            value="yellow"
                            checked
                          />
                          <div className="container-img">
                            <img
                              src="/images/products/thumb.png"
                              data-preload
                              className="media"
                              alt="pro-product"
                            />
                          </div>
                        </label>
                      </div>
                    </li>
                    <li className="list-colors-item">
                      <div className="container-input" data-set-color="blue">
                        <label>
                          <input type="radio" name="colors" value="blue" />
                          <div className="container-img">
                            <img
                              src="/images/products/thumb.png"
                              data-preload
                              className="media"
                              alt="pro-product"
                            />
                          </div>
                        </label>
                      </div>
                    </li>
                    <li className="list-colors-item">
                      <div className="container-input" data-set-color="red">
                        <label>
                          <input type="radio" name="colors" value="red" />
                          <div className="container-img">
                            <img
                              src="/images/products/thumb.png"
                              data-preload
                              className="media"
                              alt="pro-product"
                            />
                          </div>
                        </label>
                      </div>
                    </li>
                    <li className="list-colors-item">
                      <div className="container-input" data-set-color="pink">
                        <label>
                          <input type="radio" name="colors" value="pink" />
                          <div className="container-img">
                            <img
                              src="/images/products/thumb.png"
                              data-preload
                              className="media"
                              alt="pro-product"
                            />
                          </div>
                        </label>
                      </div>
                    </li>
                  </ul>
                  <div
                    className="container-add-to-cart mt-md-40 mt-phone-20"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
                    <div className="container-input container-input-quantity">
                      <button type="button" className="minus">
                        <i className="icon-minus no-mobile"></i>
                        <i className="icon-minus-2 no-desktop"></i>
                      </button>
                      <input
                        type="number"
                        min="0"
                        value="1"
                        placeholder="1"
                        className="input-number"
                      />
                      <button type="button" className="plus">
                        <i className="icon-plus no-mobile"></i>
                        <i className="icon-plus-2 no-desktop"></i>
                      </button>
                    </div>
                    <Link
                      href="/cart"
                      className="btn-add-to-cart btn-red btn-hover-white"
                    >
                      <div className="split-chars">
                        <span>
                          {productPostPageData &&
                            productPostPageData.addToCartButtonLabel}
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="container-product-notes mt-lg-55 mt-tablet-35 mt-phone-55"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
                    <div className="container-input product-notes">
                      <label>
                        {productPostPageData &&
                          productPostPageData.productNotesLabel}
                      </label>
                      <input
                        name="product_notes"
                        type="text"
                        placeholder="Enter you text"
                      />
                    </div>
                    <div className="container-submit">
                      <button type="submit">
                        <i className="icon-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
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
              <div className="container-info-text" data-aos="">
                <h3 className="title-info-text split-words" data-aos="">
                  {productPostPageData && productPostPageData.downloadsLabel}
                </h3>
                <div
                  className="container-btn"
                  data-aos="fadeIn .8s ease-in-out"
                >
                  <button className="btn-small-tag btn-gray btn-hover-red">
                    <div className="split-chars">
                      <span>Technical drawing</span>
                    </div>
                  </button>
                  <button className="btn-small-tag btn-gray btn-hover-red">
                    <div className="split-chars">
                      <span>Installation video</span>
                    </div>
                  </button>
                </div>
              </div>
              <div className="container-info-text" data-aos="">
                <h3 className="title-info-text split-words" data-aos="">
                  {productPostPageData &&
                    productPostPageData.productFoundInLabel}
                </h3>
                <div
                  className="container-btn"
                  data-aos="fadeIn .8s ease-in-out"
                >
                  <button className="btn-small-tag btn-gray btn-hover-red">
                    <div className="split-chars">
                      <span>Chars</span>
                    </div>
                  </button>
                  <button className="btn-small-tag btn-gray btn-hover-red">
                    <div className="split-chars">
                      <span>Accent Charis</span>
                    </div>
                  </button>
                  <button className="btn-small-tag btn-gray btn-hover-red">
                    <div className="split-chars">
                      <span>Outdoor Furniture</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products-snapshots pt-lg-355 pt-tablet-55 pt-phone-35">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h2
                className="fs--30 fs-mobile-20 text-uppercase text-center white-1 mb-35 split-words"
                data-aos="d:loop"
              >
                Snapshots
              </h2>
              <div className="module-snapshots-gallery-100 module-snapshots-gallery">
                <div className="module-column" data-aos="d:loop">
                  <div className="container-img">
                    <img
                      src={RenderImage(
                        productSnapshots[1]?.usecaseImages[0].src
                      )}
                      data-preload
                      className="media"
                      alt="pro-product"
                    />
                  </div>
                </div>
              </div>
              <div className="module-snapshots-gallery-50 module-snapshots-gallery">
                {productSnapshots &&
                  productSnapshots[1]?.usecaseImages?.map((data, index) => {
                    const { src } = data;
                    console.log(data, "datacv>>");
                    return (
                      <div
                        key={index}
                        className="module-column"
                        data-aos="d:loop"
                      >
                        <div className="container-img">
                          <img
                            src={RenderImage(src)}
                            data-preload
                            className="media"
                            alt="product-njk"
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {matchedProductsData.length > 0 && (
        <MatchedProducts matchedProductsData={matchedProductsData} />
      )}
      <OtherCollections data={collectionsData} />
    </>
  );
};

export default ProductPost;
