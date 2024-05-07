import usePageInitialization from "../../hooks/usePageInitialization";

const AddToCartModal = () => {
  usePageInitialization(
    "pg-products-post",
    ".initScript",
    ".productsPost",
    ".cartPage"
  );

  return (
    <div id="reloading-area">
      <modal-group name="modal-product" className="modal-product">
        <modal-container>
          <modal-item>
            <div className="wrapper-section">
              <section className="section-modal-product">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <div
                        className="wrapper-product-info"
                        data-modal-area
                        data-product-content
                      >
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
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-01.png"
                                        data-preload
                                        className="media"
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-02.png"
                                        data-preload
                                        className="media"
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-03.png"
                                        data-preload
                                        className="media"
                                        alt="product"
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
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-02.png"
                                        data-preload
                                        className="media"
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-03.png"
                                        data-preload
                                        className="media"
                                        alt="product"
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
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-02.png"
                                        data-preload
                                        className="media"
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-03.png"
                                        data-preload
                                        className="media"
                                        alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                          <li
                            className="wrapper-slider-product"
                            data-get-color="blue"
                          >
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
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-02.png"
                                        data-preload
                                        className="media"
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-03.png"
                                        data-preload
                                        className="media"
                                        alt="product"
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
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-02.png"
                                        data-preload
                                        className="media"
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-03.png"
                                        data-preload
                                        className="media"
                                        alt="product"
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
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-02.png"
                                        data-preload
                                        className="media"
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-03.png"
                                        data-preload
                                        className="media"
                                        alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                          <li
                            className="wrapper-slider-product"
                            data-get-color="red"
                          >
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
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-02.png"
                                        data-preload
                                        className="media"
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-03.png"
                                        data-preload
                                        className="media"
                                        alt="product"
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
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-02.png"
                                        data-preload
                                        className="media"
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-03.png"
                                        data-preload
                                        className="media"
                                        alt="product"
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
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-02.png"
                                        data-preload
                                        className="media"
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-03.png"
                                        data-preload
                                        className="media"
                                        alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                          <li
                            className="wrapper-slider-product"
                            data-get-color="pink"
                          >
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
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-02.png"
                                        data-preload
                                        className="media"
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-03.png"
                                        data-preload
                                        className="media"
                                        alt="product"
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
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-02.png"
                                        data-preload
                                        className="media"
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-03.png"
                                        data-preload
                                        className="media"
                                        alt="product"
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
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-02.png"
                                        data-preload
                                        className="media"
                                        alt="product"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-slide">
                                    <div className="container-img">
                                      <img
                                        src="images/products/img-03.png"
                                        data-preload
                                        className="media"
                                        alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                                            alt="product"
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
                        <div className="container-product-description">
                          <form
                            action="cart.html"
                            className="form-cart"
                            data-pjax
                          >
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
                                <span className="specs-text">
                                  19”L X 15.5”W X 27.5”H
                                </span>
                              </li>
                              <li className="color">
                                <span className="specs-title">Color</span>
                                <span className="specs-text">
                                  Yellow - Birch
                                </span>
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
                                        alt="product"
                                      />
                                    </div>
                                  </label>
                                </div>
                              </li>
                              <li className="list-colors-item">
                                <div
                                  className="container-input"
                                  data-set-color="blue"
                                >
                                  <label>
                                    <input
                                      type="radio"
                                      name="colors"
                                      value="blue"
                                    />
                                    <div className="container-img">
                                      <img
                                        src="images/products/thumb.png"
                                        data-preload
                                        className="media"
                                        alt="product"
                                      />
                                    </div>
                                  </label>
                                </div>
                              </li>
                              <li className="list-colors-item">
                                <div
                                  className="container-input"
                                  data-set-color="red"
                                >
                                  <label>
                                    <input
                                      type="radio"
                                      name="colors"
                                      value="red"
                                    />
                                    <div className="container-img">
                                      <img
                                        src="images/products/thumb.png"
                                        data-preload
                                        className="media"
                                        alt="product"
                                      />
                                    </div>
                                  </label>
                                </div>
                              </li>
                              <li className="list-colors-item">
                                <div
                                  className="container-input"
                                  data-set-color="pink"
                                >
                                  <label>
                                    <input
                                      type="radio"
                                      name="colors"
                                      value="pink"
                                    />
                                    <div className="container-img">
                                      <img
                                        src="images/products/thumb.png"
                                        data-preload
                                        className="media"
                                        alt="product"
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
                              <button
                                className="btn-add-to-cart btn-red btn-hover-white"
                                type="submit"
                              >
                                <div className="split-chars">
                                  <span>Add to cart</span>
                                </div>
                              </button>
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
                        <btn-modal-close>
                          <i className="icon-close"></i>
                        </btn-modal-close>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </modal-item>
        </modal-container>
      </modal-group>
    </div>
  );
};
export default AddToCartModal;
