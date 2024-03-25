import AnimateLink from "../../components/AnimateLink";
import { useEffect } from "react";
import OtherCollections from "../../components/OtherCollections";

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
  useEffect(() => {
    document.body.dataset.pg = "pg-products";

    document.querySelector(".initScript").click();
    setTimeout(() => {
      document.querySelector(".updateWatched").click();
    }, 2000);
  }, []);
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
                    <form action="" className="form-filter wrapper-list-filter">
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
                              <span className="filter-tag">Barstools</span>
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
                              <span className="filter-tag">Banquettes</span>
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
                              <span className="filter-tag">Experiences</span>
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
                              <span className="filter-tag">Neon House</span>
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
                              <span className="filter-tag">Multicolor</span>
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
                          <AnimateLink to="/products-post" className="link">
                            <div className="container-top">
                              <h2 className="product-title">Pilot Chairred</h2>
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
                                  class="media"
                                />
                              </div>
                              <div
                                className="container-img product-img"
                                data-get-product-link-color="yellow"
                              >
                                <img
                                  src="images/products/img-01-blue.png"
                                  data-preload
                                  class="media"
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
                          </AnimateLink>
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
                            class="modal-add-to-cart"
                          >
                            <span>Add to cart</span>
                            <i class="icon-cart"></i>
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
      <OtherCollections />
    </>
  );
};

export default Products;
