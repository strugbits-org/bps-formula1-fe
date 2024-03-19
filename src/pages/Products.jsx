import { Link } from "react-router-dom";
import collectionImage from "../images/gallery/img-09.jpg";
const CollectionData = [
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
];
const productCategory = [
  "Accent chairs",
  "Arm chairs",
  "Conference chairs",
  "Dining chairs",
  "Lounge chairs",
  "Office chairs",
  "Seat chairs",
  "Swivel chairs",
];

const Products = () => {
  return (
    <div>
      <div id="main-transition">
        <div className="wrapper" id="pg-products" data-scroll-container>
          <main>
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
                      {productCategory.map((data, index) => {
                        return (
                          <li key={index} className="list-item">
                            <button className="btn-tag ">
                              <span>{data}</span>
                            </button>
                          </li>
                        );
                      })}
                      {/* <li className="list-item">
                        <button className="btn-tag active">
                          <span></span>
                        </button>
                      </li> */}
                    </ul>
                  </div>
                  <div
                    className="col-lg-1 col-mobile-3 column-filter column-3 order-mobile-2"
                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                  >
                    <div className="container-filter-products">
                      <button className="btn-filter">
                        <i className="icon-filter"></i>
                      </button>
                      <div className="wrapper-content" data-filter-area>
                        <div className="wrapper-overflow">
                          <form
                            action=""
                            className="form-filter wrapper-list-filter"
                          >
                            <div className="container-list">
                              <h3 className="filter-title">Category</h3>
                              <div className="list-filter">
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="chairs"
                                      value="Chairs"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Chairs</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="tables"
                                      value="Tables"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Tables</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="sofas"
                                      value="Sofas"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Sofas</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="barstools"
                                      value="Barstools"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">
                                      Barstools
                                    </span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="benches"
                                      value="Benches"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Benches</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="ottomans"
                                      value="Ottomans"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Ottomans</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="banquettes"
                                      value="Banquettes"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">
                                      Banquettes
                                    </span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="displays"
                                      value="Displays"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Displays</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="charging"
                                      value="Charging"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Charging</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="lighting"
                                      value="Lighting"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Lighting</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="mirrors"
                                      value="Mirrors"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Mirrors</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="textiles"
                                      value="Textiles"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Textiles</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="scenic"
                                      value="Scenic"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Scenic</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="experiences"
                                      value="Experiences"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">
                                      Experiences
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="container-list">
                              <h3 className="filter-title">Collections</h3>
                              <div className="list-filter">
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="legacy"
                                      value="Legacy"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Legacy</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="neon_house"
                                      value="Neon House"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">
                                      Neon House
                                    </span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="classic_vegas"
                                      value="Classic"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Classic</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="paddock"
                                      value="Paddock"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Paddock</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="container-list">
                              <h3 className="filter-title">Colors</h3>
                              <div className="list-filter">
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="black"
                                      value="Black"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Black</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="brown"
                                      value="Brown"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Brown</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="gold"
                                      value="Gold"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Gold</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="grey"
                                      value="Grey"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Grey</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="pink"
                                      value="Pink"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Pink</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="red"
                                      value="Red"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Red</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="white"
                                      value="White"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">White</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="yellow"
                                      value="Yellow"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">Yellow</span>
                                  </label>
                                </div>
                                <div className="container-checkbox list-filter-item">
                                  <label className="checkbox-box">
                                    <input
                                      type="checkbox"
                                      required
                                      name="multicolor"
                                      value="Multicolor"
                                    />
                                    <span className="checkmark"></span>
                                    <span className="filter-tag">
                                      Multicolor
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
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
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data, index) => {
                        {
                          return (
                            <li className="grid-item" data-aos="d:loop">
                              <div
                                key={index}
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
                                  <a
                                    href="javascript:void(0)"
                                    className="btn-copy copy-link"
                                  >
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
                                <Link to="/product-post" className="link">
                                  <div className="container-top">
                                    <h2 className="product-title">
                                      Pilot Chairred
                                    </h2>
                                    <div className="container-info">
                                      <div className="dimensions">
                                        <span>24”L X 30”W X 37”H</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wrapper-product-img">
                                    <div
                                      className="container-img product-img"
                                      data-get-product-link-color="red"
                                      data-default-product-link-active
                                    >
                                      <img
                                        src="images/products/img-01.png"
                                        data-preload
                                        className="media"
                                      />
                                    </div>
                                    <div
                                      className="container-img product-img"
                                      data-get-product-link-color="yellow"
                                    >
                                      <img
                                        src="images/products/img-01-blue.png"
                                        data-preload
                                        className="media"
                                      />
                                    </div>
                                    <div
                                      className="container-img product-img"
                                      data-get-product-link-color="blue"
                                    >
                                      <img
                                        src="images/products/img-01-brown.png"
                                        data-preload
                                        className="media"
                                      />
                                    </div>
                                  </div>
                                  <div className="container-bottom">
                                    <div className="price">$ 99.99</div>
                                  </div>
                                </Link>
                                <div className="container-color-options">
                                  <ul className="list-color-options">
                                    <li
                                      className="list-item"
                                      data-set-product-link-color="red"
                                      data-default-product-link-active
                                    >
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          className="media"
                                        />
                                      </div>
                                    </li>
                                    <li
                                      className="list-item"
                                      data-set-product-link-color="yellow"
                                    >
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-01-blue.png"
                                          data-preload
                                          className="media"
                                        />
                                      </div>
                                    </li>
                                    <li
                                      className="list-item"
                                      data-set-product-link-color="blue"
                                    >
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-01-brown.png"
                                          data-preload
                                          className="media"
                                        />
                                      </div>
                                    </li>
                                  </ul>
                                  <div className="colors-number">
                                    <span>+3</span>
                                  </div>
                                </div>
                                <btn-modal-open
                                  group="modal-product"
                                  className="modal-add-to-cart"
                                >
                                  <span>Add to cart</span>
                                  <i className="icon-cart"></i>
                                </btn-modal-open>
                              </div>
                            </li>
                          );
                        }
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
                    src="images/img-01.jpg"
                    data-preload
                    className="no-mobile media"
                    data-parallax-top
                    data-translate-y="-20%"
                  />
                  <img
                    src="images/img-02.jpg"
                    data-preload
                    className="no-desktop media"
                  />
                </div>
              </div>
            </section>
            <section className="section-other-collections pos-relative mt-tablet-100 mt-phone-65 pb-lg-90 pb-tablet-40 pb-phone-165">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <h2
                      className="fs--30 fs-mobile-20 text-uppercase text-center white-1 split-words"
                      data-aos="d:loop"
                    >
                      Other collections
                    </h2>
                    <ul
                      className="list-other-collections grid-md-50 mt-35"
                      data-aos="d:loop"
                    >
                      {CollectionData.map((data, index) => {
                        const { name, image, link } = data;
                        return (
                          <li key={index} className="grid-item">
                            <Link to={link} className="collection-link large">
                              <h3 className="collection-title">{name}</h3>
                              <div className="container-img">
                                <img
                                  src={image}
                                  data-preload
                                  className="media"
                                />
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
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
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          className="media"
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          className="media"
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
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          className="media"
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          className="media"
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
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          className="media"
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          className="media"
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
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          className="media"
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          className="media"
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
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          className="media"
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          className="media"
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
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          className="media"
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          className="media"
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
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          className="media"
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          className="media"
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
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          className="media"
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          className="media"
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
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          className="media"
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          className="media"
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
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          className="media"
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          className="media"
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
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          className="media"
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          className="media"
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
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          className="media"
                                        />
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          className="media"
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
                              <input
                                type="hidden"
                                name="sku[]"
                                value="MODCH09"
                              />
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
                                  <span className="specs-title">
                                    Seat Height
                                  </span>
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
    </div>
  );
};

export default Products;
