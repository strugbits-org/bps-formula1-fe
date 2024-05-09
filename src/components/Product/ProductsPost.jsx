// import usePageInitialization from "../../hooks/usePageInitialization";
import OtherCollections from "../Common/OtherCollections";
import MatchedProducts from "../Common/MatchedProducts";
import AnimateLink from "../Common/AnimateLink";
import Link from "next/link";

const breadCrumbData = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collections" },
  { name: "Collection detail", href: "/collections" },
  { name: "Category", href: "/collections-category" },
  { name: "Product list", href: "#" },
];

const productImages = [
  {
    source: "images/products/img-01.png",
    bool: false,
  },
  {
    source: "images/products/img-02.png",
    bool: false,
  },
  {
    source: "images/products/img-03.png",
    bool: false,
  },
  {
    source: "images/3d.svg",
    imgSource: "images/products/chair/0_",
    bool: true,
  },
  {
    source: "images/products/img-01.png",
    bool: false,
  },
  {
    source: "images/products/img-02.png",
    bool: false,
  },
  {
    source: "images/products/img-03.png",
    bool: false,
  },
  {
    source: "images/3d.svg",
    imgSource: "images/products/chair/0_",
    bool: true,
  },
  {
    source: "images/products/img-01.png",
    bool: false,
  },
  {
    source: "images/products/img-02.png",
    bool: false,
  },
  {
    source: "images/products/img-03.png",
    bool: false,
  },
  {
    source: "images/3d.svg",
    imgSource: "images/products/chair/0_",
    bool: true,
  },
];

const ProductPost = () => {
  const status = "succeeded";
  // usePageInitialization(
  //   status,
  //   "pg-products",
  //   ".initScript",
  //   ".productsPost",
  //   ".cartPage"
  // );

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
                        {productImages.map((data, index) => {
                          const { source, bool } = data;
                          return (
                            <>
                              {bool ? (
                                <div className="swiper-slide slide-360">
                                  <i className="icon-360"></i>
                                  <div className="container-img">
                                    <canvas
                                      className="infinite-image-scroller"
                                      data-frames="49"
                                      data-path={data.imgSource}
                                      data-extension="jpg"
                                    ></canvas>
                                  </div>
                                </div>
                              ) : (
                                <div key={index} className="swiper-slide">
                                  <div className="container-img">
                                    <img
                                      src={source}
                                      data-preload
                                      className="media"
                                      alt={`product-${index}`}
                                    />
                                  </div>
                                </div>
                              )}
                            </>
                          );
                        })}
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
                          {productImages.map((data, index) => {
                            const { source, bool } = data;
                            return (
                              <div key={index} className="swiper-slide">
                                <div
                                  className={`wrapper-img ${bool && "img-3"}`}
                                >
                                  <div className="container-img">
                                    <img
                                      src={source}
                                      data-preload
                                      className="media"
                                      alt={`product-test-${index}`}
                                    />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="wrapper-slider-product" data-get-color="blue">
                  <div className="slider-product">
                    <div className="best-seller-tag">
                      <span>Best Seller</span>
                    </div>
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-01.png"
                              data-preload
                              className="media"
                              alt="imageAltadf"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-02.png"
                              data-preload
                              className="media"
                              alt="asd"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-03.png"
                              data-preload
                              className="media"
                              alt="cvb"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide slide-360">
                          <i className="icon-360"></i>
                          <div className="container-img">
                            <canvas
                              className="infinite-image-scroller"
                              data-frames="49"
                              data-path="images/products/chair/0_"
                              data-extension="jpg"
                            ></canvas>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-01.png"
                              data-preload
                              className="media"
                              alt="imageAltasdf"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-02.png"
                              data-preload
                              className="media"
                              alt="cxxcvb"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-03.png"
                              data-preload
                              className="media"
                              alt="bkgh"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide slide-360">
                          <i className="icon-360"></i>
                          <div className="container-img">
                            <canvas
                              className="infinite-image-scroller"
                              data-frames="49"
                              data-path="images/products/chair/0_"
                              data-extension="jpg"
                            ></canvas>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-01.png"
                              data-preload
                              className="media"
                              alt="imageAltgthyj"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-02.png"
                              data-preload
                              className="media"
                              alt="bnmbnk"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-03.png"
                              data-preload
                              className="media"
                              alt="ioi"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide slide-360">
                          <i className="icon-360"></i>
                          <div className="container-img">
                            <canvas
                              className="infinite-image-scroller"
                              data-frames="49"
                              data-path="images/products/chair/0_"
                              data-extension="jpg"
                            ></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-button-prev">
                      <i className="icon-arrow-left"></i>
                    </div>
                    <div className="swiper-button-next">
                      <i className="icon-arrow-right"></i>
                    </div>
                    <div className="swiper-pagination no-desktop no-tablet"></div>
                  </div>
                  <div className="wrapper-slider-thumb no-mobile">
                    <div className="slider-product-thumb">
                      <div className="swiper-container">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-01.png"
                                  data-preload
                                  className="media"
                                  alt="yui"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-02.png"
                                  data-preload
                                  className="media"
                                  alt="iuoui"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-03.png"
                                  data-preload
                                  className="media"
                                  alt="gfjh"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img img-3d">
                              <div className="container-img">
                                <img
                                  src="images/3d.svg"
                                  data-preload
                                  className="media"
                                  alt="fxdgfd"
                                />
                              </div>
                              <span className="hide">360</span>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-01.png"
                                  data-preload
                                  className="media"
                                  alt="gbguyg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-02.png"
                                  data-preload
                                  className="media"
                                  alt="test-product"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-03.png"
                                  data-preload
                                  className="media"
                                  alt="test-product"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img img-3d">
                              <div className="container-img">
                                <img
                                  src="images/3d.svg"
                                  data-preload
                                  className="media"
                                  alt="test-product"
                                />
                              </div>
                              <span className="hide">360</span>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-01.png"
                                  data-preload
                                  className="media"
                                  alt="test-product"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-02.png"
                                  data-preload
                                  className="media"
                                  alt="test-product"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-03.png"
                                  data-preload
                                  className="media"
                                  alt="test-product"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img img-3d">
                              <div className="container-img">
                                <img
                                  src="images/3d.svg"
                                  data-preload
                                  className="media"
                                  alt="test-product"
                                />
                              </div>
                              <span className="hide">360</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="wrapper-slider-product" data-get-color="red">
                  <div className="slider-product">
                    <div className="best-seller-tag">
                      <span>Best Seller</span>
                    </div>
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-01.png"
                              data-preload
                              className="media"
                              alt="imageAltedtr"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-02.png"
                              data-preload
                              className="media"
                              alt="product-asd"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-03.png"
                              data-preload
                              className="media"
                              alt="product-vcv"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide slide-360">
                          <i className="icon-360"></i>
                          <div className="container-img">
                            <canvas
                              className="infinite-image-scroller"
                              data-frames="49"
                              data-path="images/products/chair/0_"
                              data-extension="jpg"
                            ></canvas>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-01.png"
                              data-preload
                              className="media"
                              alt="imageAltvbmn"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-02.png"
                              data-preload
                              className="media"
                              alt="product-bnm"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-03.png"
                              data-preload
                              className="media"
                              alt="product-mko"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide slide-360">
                          <i className="icon-360"></i>
                          <div className="container-img">
                            <canvas
                              className="infinite-image-scroller"
                              data-frames="49"
                              data-path="images/products/chair/0_"
                              data-extension="jpg"
                            ></canvas>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-01.png"
                              data-preload
                              className="media"
                              alt="imageAltil"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-02.png"
                              data-preload
                              className="media"
                              alt="product-no"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-03.png"
                              data-preload
                              className="media"
                              alt="product-no"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide slide-360">
                          <i className="icon-360"></i>
                          <div className="container-img">
                            <canvas
                              className="infinite-image-scroller"
                              data-frames="49"
                              data-path="images/products/chair/0_"
                              data-extension="jpg"
                            ></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-button-prev">
                      <i className="icon-arrow-left"></i>
                    </div>
                    <div className="swiper-button-next">
                      <i className="icon-arrow-right"></i>
                    </div>
                    <div className="swiper-pagination no-desktop no-tablet"></div>
                  </div>
                  <div className="wrapper-slider-thumb no-mobile">
                    <div className="slider-product-thumb">
                      <div className="swiper-container">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-01.png"
                                  data-preload
                                  className="media"
                                  alt="product-no"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-02.png"
                                  data-preload
                                  className="media"
                                  alt="product-no"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-03.png"
                                  data-preload
                                  className="media"
                                  alt="product-no"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img img-3d">
                              <div className="container-img">
                                <img
                                  src="images/3d.svg"
                                  data-preload
                                  className="media"
                                  alt="product-no"
                                />
                              </div>
                              <span className="hide">360</span>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-01.png"
                                  data-preload
                                  className="media"
                                  alt="product-no"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-02.png"
                                  data-preload
                                  className="media"
                                  alt="product-no"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-03.png"
                                  data-preload
                                  className="media"
                                  alt="product-no"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img img-3d">
                              <div className="container-img">
                                <img
                                  src="images/3d.svg"
                                  data-preload
                                  className="media"
                                  alt="product-no"
                                />
                              </div>
                              <span className="hide">360</span>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-01.png"
                                  data-preload
                                  className="media"
                                  alt="product-no"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-02.png"
                                  data-preload
                                  className="media"
                                  alt="product-no"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-03.png"
                                  data-preload
                                  className="media"
                                  alt="product-no"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img img-3d">
                              <div className="container-img">
                                <img
                                  src="images/3d.svg"
                                  data-preload
                                  className="media"
                                  alt="product-no"
                                />
                              </div>
                              <span className="hide">360</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="wrapper-slider-product" data-get-color="pink">
                  <div className="slider-product">
                    <div className="best-seller-tag">
                      <span>Best Seller</span>
                    </div>
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-01.png"
                              data-preload
                              className="media"
                              alt="product-no"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-02.png"
                              data-preload
                              className="media"
                              alt="pro-product"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-03.png"
                              data-preload
                              className="media"
                              alt="pro-product"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide slide-360">
                          <i className="icon-360"></i>
                          <div className="container-img">
                            <canvas
                              className="infinite-image-scroller"
                              data-frames="49"
                              data-path="images/products/chair/0_"
                              data-extension="jpg"
                            ></canvas>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-01.png"
                              data-preload
                              className="media"
                              alt="pro-product"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-02.png"
                              data-preload
                              className="media"
                              alt="pro-product"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-03.png"
                              data-preload
                              className="media"
                              alt="pro-product"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide slide-360">
                          <i className="icon-360"></i>
                          <div className="container-img">
                            <canvas
                              className="infinite-image-scroller"
                              data-frames="49"
                              data-path="images/products/chair/0_"
                              data-extension="jpg"
                            ></canvas>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-01.png"
                              data-preload
                              className="media"
                              alt="pro-product"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-02.png"
                              data-preload
                              className="media"
                              alt="pro-product"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="container-img">
                            <img
                              src="images/products/img-03.png"
                              data-preload
                              className="media"
                              alt="pro-product"
                            />
                          </div>
                        </div>
                        <div className="swiper-slide slide-360">
                          <i className="icon-360"></i>
                          <div className="container-img">
                            <canvas
                              className="infinite-image-scroller"
                              data-frames="49"
                              data-path="images/products/chair/0_"
                              data-extension="jpg"
                            ></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-button-prev">
                      <i className="icon-arrow-left"></i>
                    </div>
                    <div className="swiper-button-next">
                      <i className="icon-arrow-right"></i>
                    </div>
                    <div className="swiper-pagination no-desktop no-tablet"></div>
                  </div>
                  <div className="wrapper-slider-thumb no-mobile">
                    <div className="slider-product-thumb">
                      <div className="swiper-container">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-01.png"
                                  data-preload
                                  className="media"
                                  alt="pro-product"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-02.png"
                                  data-preload
                                  className="media"
                                  alt="pro-product"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-03.png"
                                  data-preload
                                  className="media"
                                  alt="pro-product"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img img-3d">
                              <div className="container-img">
                                <img
                                  src="images/3d.svg"
                                  data-preload
                                  className="media"
                                  alt="pro-product"
                                />
                              </div>
                              <span className="hide">360</span>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-01.png"
                                  data-preload
                                  className="media"
                                  alt="pro-product"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-02.png"
                                  data-preload
                                  className="media"
                                  alt="pro-product"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-03.png"
                                  data-preload
                                  className="media"
                                  alt="pro-product"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img img-3d">
                              <div className="container-img">
                                <img
                                  src="images/3d.svg"
                                  data-preload
                                  className="media"
                                  alt="pro-product"
                                />
                              </div>
                              <span className="hide">360</span>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-01.png"
                                  data-preload
                                  className="media"
                                  alt="pro-product"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-02.png"
                                  data-preload
                                  className="media"
                                  alt="pro-product"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img">
                              <div className="container-img">
                                <img
                                  src="images/products/img-03.png"
                                  data-preload
                                  className="media"
                                  alt="pro-product"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="wrapper-img img-3d">
                              <div className="container-img">
                                <img
                                  src="images/3d.svg"
                                  data-preload
                                  className="media"
                                  alt="pro-product"
                                />
                              </div>
                              <span className="hide">360</span>
                            </div>
                          </div>
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
                        Pilot Chairred
                      </h1>
                      <div
                        className="fs-lg-30 fs-tablet-30 fs-phone-20 fw-400 red-1 mt-phone-5"
                        data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                      >
                        $ 99.99
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
                      <span className="specs-text">19”L X 15.5”W X 27.5”H</span>
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
                      <span className="specs-text">17” H</span>
                    </li>
                  </ul>
                  <ul
                    className="list-colors"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
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
                              src="images/products/thumb.png"
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
                              src="images/products/thumb.png"
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
                              src="images/products/thumb.png"
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
                              src="images/products/thumb.png"
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
                        <span>Add to cart</span>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="container-product-notes mt-lg-55 mt-tablet-35 mt-phone-55"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
                    <div className="container-input product-notes">
                      <label>Product notes</label>
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
                  <span>Description</span>
                </h3>
                <div className="wrapper-text" data-aos="fadeIn .8s ease-in-out">
                  <div className="text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut ultrices ipsum purus, at aliquam mauris interdum nec.
                      Maecenas in pellentesque sapien, ut sodales augue. Sed
                      magna lacus, scelerisque quis dui eu, tempus auctor nunc.
                      In pulvinar sapien id mi mattis pulvinar. Vivamus lobortis
                      nibh in blandit pulvinar. Morbi sagittis justo vitae risus
                      tristique condimentum. Pellentesque elementum convallis
                      dui, sed aliquet odio rhoncus sed. Cras bibendum orci a
                      turpis vulputate dictum. Suspendisse egestas enim lacus,
                      eget volutpat tellus vestibulum at.
                    </p>
                    <p>
                      Maecenas in pellentesque sapien, ut sodales augue. Sed
                      magna lacus, scelerisque quis dui eu, tempus auctor nunc.
                      In pulvinar sapien id mi mattis pulvinar. Vivamus lobortis
                      nibh in blandit pulvinar. Morbi sagittis justo vitae risus
                      tristique condimentum. Pellentesque elementum convallis
                      dui, sed aliquet odio rhoncus sed. Cras bibendum orci a
                      turpis vulputate dictum. Suspendisse egestas enim lacus,
                      eget volutpat tellus vestibulum at.
                    </p>
                  </div>
                </div>
                <button
                  className="btn-read-more"
                  data-aos="fadeIn .8s ease-in-out"
                >
                  <span>Read More</span>
                </button>
              </div>
              <div className="container-info-text" data-aos="">
                <h3 className="title-info-text split-words" data-aos="">
                  Downloads
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
                  Product found in
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
                      src="images/lib/06_desktop.jpg"
                      data-preload
                      className="media"
                      alt="pro-product"
                    />
                  </div>
                </div>
              </div>
              <div className="module-snapshots-gallery-50 module-snapshots-gallery">
                <div className="module-column" data-aos="d:loop">
                  <div className="container-img">
                    <img
                      src="images/lib/06_desktop.jpg"
                      data-preload
                      className="media"
                      alt="product-njk"
                    />
                  </div>
                </div>
                <div className="module-column" data-aos="d:loop">
                  <div className="container-img">
                    <img
                      src="images/lib/06_desktop.jpg"
                      data-preload
                      className="media"
                      alt="product-njk"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MatchedProducts />
      <OtherCollections />
    </>
  );
};

export default ProductPost;
