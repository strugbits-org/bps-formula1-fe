import productImage from "../images/products/img-01.png";
import productImageBlue from "../images/products/img-01-blue.png";
import productImageBrown from "../images/products/img-01-brown.png";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <>
      <div id="main-transition">
        <div class="wrapper" id="pg-search" data-scroll-container>
          <main>
            <section class="search pt-lg-150 pb-95">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-10 offset-lg-1">
                    <div class="container-title mb-30">
                      <h1
                        class="fs--30 text-uppercase white-1 split-words"
                        data-aos="d:loop"
                      >
                        Search result
                      </h1>
                      <div
                        class="pos-relative z-5"
                        data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                      >
                        <div class="container-filter-products">
                          <button class="btn-filter">
                            <i class="icon-filter"></i>
                          </button>
                          <div class="wrapper-content" data-filter-area>
                            <div class="wrapper-overflow">
                              <form
                                action=""
                                class="form-filter wrapper-list-filter"
                              >
                                <div class="container-list">
                                  <h3 class="filter-title">Category</h3>
                                  <div class="list-filter">
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="chairs"
                                          value="Chairs"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Chairs</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="tables"
                                          value="Tables"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Tables</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="sofas"
                                          value="Sofas"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Sofas</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="barstools"
                                          value="Barstools"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">
                                          Barstools
                                        </span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="benches"
                                          value="Benches"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Benches</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="ottomans"
                                          value="Ottomans"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Ottomans</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="banquettes"
                                          value="Banquettes"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">
                                          Banquettes
                                        </span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="displays"
                                          value="Displays"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Displays</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="charging"
                                          value="Charging"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Charging</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="lighting"
                                          value="Lighting"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Lighting</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="mirrors"
                                          value="Mirrors"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Mirrors</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="textiles"
                                          value="Textiles"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Textiles</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="scenic"
                                          value="Scenic"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Scenic</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="experiences"
                                          value="Experiences"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">
                                          Experiences
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div class="container-list">
                                  <h3 class="filter-title">Collections</h3>
                                  <div class="list-filter">
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="legacy"
                                          value="Legacy"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Legacy</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="neon_house"
                                          value="Neon House"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">
                                          Neon House
                                        </span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="classic_vegas"
                                          value="Classic"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Classic</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="paddock"
                                          value="Paddock"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Paddock</span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div class="container-list">
                                  <h3 class="filter-title">Colors</h3>
                                  <div class="list-filter">
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="black"
                                          value="Black"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Black</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="brown"
                                          value="Brown"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Brown</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="gold"
                                          value="Gold"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Gold</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="grey"
                                          value="Grey"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Grey</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="pink"
                                          value="Pink"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Pink</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="red"
                                          value="Red"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Red</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="white"
                                          value="White"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">White</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="yellow"
                                          value="Yellow"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">Yellow</span>
                                      </label>
                                    </div>
                                    <div class="container-checkbox list-filter-item">
                                      <label class="checkbox-box">
                                        <input
                                          type="checkbox"
                                          required
                                          name="multicolor"
                                          value="Multicolor"
                                        />
                                        <span class="checkmark"></span>
                                        <span class="filter-tag">
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
                    <ul
                      class="list-search grid-lg-20 grid-md-50 grid-50"
                      data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, index) => {
                        return (
                          <li class="grid-item">
                            <div
                              key={index}
                              class="product-link small saved-products landscape-fix active"
                              data-product-category
                              data-product-location
                              data-product-colors
                            >
                              <div class="container-tags">
                                <button class="btn-bookmark">
                                  <i class="icon-bookmark"></i>
                                </button>
                              </div>
                              <Link to="/product-post" class="link">
                                <div class="container-top">
                                  <h2 class="product-title">Pilot Chairred</h2>
                                </div>
                                <div class="wrapper-product-img">
                                  <div
                                    class="container-img product-img"
                                    data-get-product-link-color="red"
                                    data-default-product-link-active
                                  >
                                    <img
                                      src={productImage}
                                      data-preload
                                      class="media"
                                    />
                                  </div>
                                  <div
                                    class="container-img product-img"
                                    data-get-product-link-color="yellow"
                                  >
                                    <img
                                      src={productImageBlue}
                                      data-preload
                                      class="media"
                                    />
                                  </div>
                                  <div
                                    class="container-img product-img"
                                    data-get-product-link-color="blue"
                                  >
                                    <img
                                      src={productImageBrown}
                                      data-preload
                                      class="media"
                                    />
                                  </div>
                                </div>
                                <div class="container-bottom">
                                  <div class="price">$ 99.99</div>
                                </div>
                              </Link>
                              <div class="container-color-options">
                                <ul class="list-color-options">
                                  <li
                                    class="list-item"
                                    data-set-product-link-color="red"
                                    data-default-product-link-active
                                  >
                                    <div class="container-img">
                                      <img
                                        src="images/products/img-01.png"
                                        data-preload
                                        class="media"
                                      />
                                    </div>
                                  </li>
                                  <li
                                    class="list-item"
                                    data-set-product-link-color="yellow"
                                  >
                                    <div class="container-img">
                                      <img
                                        src="images/products/img-01-blue.png"
                                        data-preload
                                        class="media"
                                      />
                                    </div>
                                  </li>
                                  <li
                                    class="list-item"
                                    data-set-product-link-color="blue"
                                  >
                                    <div class="container-img">
                                      <img
                                        src="images/products/img-01-brown.png"
                                        data-preload
                                        class="media"
                                      />
                                    </div>
                                  </li>
                                </ul>
                                <div class="colors-number">
                                  <span>+3</span>
                                </div>
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
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <div id="reloading-area">
        <modal-group name="modal-product" class="modal-product">
          <modal-container>
            <modal-item>
              <div class="wrapper-section">
                <section class="section-modal-product">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-lg-10 offset-lg-1">
                        <div
                          class="wrapper-product-info"
                          data-modal-area
                          data-product-content
                        >
                          <ul
                            class="list-slider-product"
                            data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                          >
                            <li
                              class="wrapper-slider-product"
                              data-default-active
                              data-get-color="yellow"
                            >
                              <div class="slider-product">
                                <div class="best-seller-tag">
                                  <span>Best Seller</span>
                                </div>
                                <div class="swiper-container">
                                  <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="swiper-button-prev">
                                  <i class="icon-arrow-left"></i>
                                </div>
                                <div class="swiper-button-next">
                                  <i class="icon-arrow-right"></i>
                                </div>
                              </div>
                              <div class="wrapper-slider-thumb no-mobile">
                                <div class="slider-product-thumb">
                                  <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              class="wrapper-slider-product"
                              data-get-color="blue"
                            >
                              <div class="slider-product">
                                <div class="best-seller-tag">
                                  <span>Best Seller</span>
                                </div>
                                <div class="swiper-container">
                                  <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="swiper-button-prev">
                                  <i class="icon-arrow-left"></i>
                                </div>
                                <div class="swiper-button-next">
                                  <i class="icon-arrow-right"></i>
                                </div>
                                <div class="swiper-pagination no-desktop no-tablet"></div>
                              </div>
                              <div class="wrapper-slider-thumb no-mobile">
                                <div class="slider-product-thumb">
                                  <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              class="wrapper-slider-product"
                              data-get-color="red"
                            >
                              <div class="slider-product">
                                <div class="best-seller-tag">
                                  <span>Best Seller</span>
                                </div>
                                <div class="swiper-container">
                                  <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="swiper-button-prev">
                                  <i class="icon-arrow-left"></i>
                                </div>
                                <div class="swiper-button-next">
                                  <i class="icon-arrow-right"></i>
                                </div>
                                <div class="swiper-pagination no-desktop no-tablet"></div>
                              </div>
                              <div class="wrapper-slider-thumb no-mobile">
                                <div class="slider-product-thumb">
                                  <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              class="wrapper-slider-product"
                              data-get-color="pink"
                            >
                              <div class="slider-product">
                                <div class="best-seller-tag">
                                  <span>Best Seller</span>
                                </div>
                                <div class="swiper-container">
                                  <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-01.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-02.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide">
                                      <div class="container-img">
                                        <img
                                          src="images/products/img-03.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </div>
                                    <div class="swiper-slide slide-360">
                                      <i class="icon-360"></i>
                                      <div class="container-img">
                                        <canvas
                                          class="infinite-image-scroller"
                                          data-frames="49"
                                          data-path="images/products/chair/0_"
                                          data-extension="jpg"
                                        ></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="swiper-button-prev">
                                  <i class="icon-arrow-left"></i>
                                </div>
                                <div class="swiper-button-next">
                                  <i class="icon-arrow-right"></i>
                                </div>
                                <div class="swiper-pagination no-desktop no-tablet"></div>
                              </div>
                              <div class="wrapper-slider-thumb no-mobile">
                                <div class="slider-product-thumb">
                                  <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-01.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-02.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img">
                                          <div class="container-img">
                                            <img
                                              src="images/products/img-03.png"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="swiper-slide">
                                        <div class="wrapper-img img-3d">
                                          <div class="container-img">
                                            <img
                                              src="images/3d.svg"
                                              data-preload
                                              class="media"
                                            />
                                          </div>
                                          <span class="hide">360</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div class="container-product-description">
                            <form
                              action="cart.html"
                              class="form-cart"
                              data-pjax
                            >
                              <input
                                type="hidden"
                                name="sku[]"
                                value="MODCH09"
                              />
                              <div class="wrapper-product-name">
                                <div class="container-product-name">
                                  <h1
                                    class="fs--40 fs-phone-30 product-name split-words"
                                    data-aos="d:loop"
                                  >
                                    Pilot Chairred
                                  </h1>
                                  <div
                                    class="fs-lg-30 fs-tablet-30 fs-phone-20 fw-400 red-1 mt-phone-5"
                                    data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                                  >
                                    $ 99.99
                                  </div>
                                </div>
                                <button
                                  class="btn-bookmark"
                                  data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                                >
                                  <i class="icon-bookmark"></i>
                                </button>
                              </div>
                              <ul
                                class="list-specs mt-lg-35 mt-tablet-40 mt-phone-15"
                                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                              >
                                <li class="sku">
                                  <span class="specs-title">SKU</span>
                                  <span class="specs-text">MODCH09</span>
                                </li>
                                <li class="size">
                                  <span class="specs-title">Size</span>
                                  <span class="specs-text">
                                    19”L X 15.5”W X 27.5”H
                                  </span>
                                </li>
                                <li class="color">
                                  <span class="specs-title">Color</span>
                                  <span class="specs-text">Yellow - Birch</span>
                                </li>
                                <li class="weight">
                                  <span class="specs-title">Weight</span>
                                  <span class="specs-text">11.5lbs</span>
                                </li>
                                <li class="seat-height">
                                  <span class="specs-title">Seat Height</span>
                                  <span class="specs-text">17” H</span>
                                </li>
                              </ul>
                              <ul
                                class="list-colors"
                                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                              >
                                <li class="list-colors-item">
                                  <div
                                    class="container-input active"
                                    data-set-color="yellow"
                                  >
                                    <label>
                                      <input
                                        type="radio"
                                        name="colors"
                                        value="yellow"
                                        checked
                                      />
                                      <div class="container-img">
                                        <img
                                          src="images/products/thumb.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </label>
                                  </div>
                                </li>
                                <li class="list-colors-item">
                                  <div
                                    class="container-input"
                                    data-set-color="blue"
                                  >
                                    <label>
                                      <input
                                        type="radio"
                                        name="colors"
                                        value="blue"
                                      />
                                      <div class="container-img">
                                        <img
                                          src="images/products/thumb.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </label>
                                  </div>
                                </li>
                                <li class="list-colors-item">
                                  <div
                                    class="container-input"
                                    data-set-color="red"
                                  >
                                    <label>
                                      <input
                                        type="radio"
                                        name="colors"
                                        value="red"
                                      />
                                      <div class="container-img">
                                        <img
                                          src="images/products/thumb.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </label>
                                  </div>
                                </li>
                                <li class="list-colors-item">
                                  <div
                                    class="container-input"
                                    data-set-color="pink"
                                  >
                                    <label>
                                      <input
                                        type="radio"
                                        name="colors"
                                        value="pink"
                                      />
                                      <div class="container-img">
                                        <img
                                          src="images/products/thumb.png"
                                          data-preload
                                          class="media"
                                        />
                                      </div>
                                    </label>
                                  </div>
                                </li>
                              </ul>
                              <div
                                class="container-add-to-cart mt-md-40 mt-phone-20"
                                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                              >
                                <div class="container-input container-input-quantity">
                                  <button type="button" class="minus">
                                    <i class="icon-minus no-mobile"></i>
                                    <i class="icon-minus-2 no-desktop"></i>
                                  </button>
                                  <input
                                    type="number"
                                    min="0"
                                    value="1"
                                    placeholder="1"
                                    class="input-number"
                                  />
                                  <button type="button" class="plus">
                                    <i class="icon-plus no-mobile"></i>
                                    <i class="icon-plus-2 no-desktop"></i>
                                  </button>
                                </div>
                                <button
                                  class="btn-add-to-cart btn-red btn-hover-white"
                                  type="submit"
                                >
                                  <div class="split-chars">
                                    <span>Add to cart</span>
                                  </div>
                                </button>
                              </div>
                              <div
                                class="container-product-notes mt-lg-55 mt-tablet-35 mt-phone-55"
                                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                              >
                                <div class="container-input product-notes">
                                  <label>Product notes</label>
                                  <input
                                    name="product_notes"
                                    type="text"
                                    placeholder="Enter you text"
                                  />
                                </div>
                                <div class="container-submit">
                                  <button type="submit">
                                    <i class="icon-arrow-right"></i>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                          <btn-modal-close>
                            <i class="icon-close"></i>
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
    </>
  );
};

export default Search;
