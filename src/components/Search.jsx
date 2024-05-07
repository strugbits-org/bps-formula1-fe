import { Link } from "react-router-dom";

import usePageInitialization from "../hooks/usePageInitialization";
import AddToCartModal from "./Product/AddToCartModal";

import productImageBrown from "../images/products/img-01-brown.png";
import productImageBlue from "../images/products/img-01-blue.png";
import productImage from "../images/products/img-01.png";
import FilterButton from "./Common/FilterButton";

const Search = () => {
  usePageInitialization("pg-search", ".initScript", ".products");

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

                <FilterButton />
              </div>
              <ul
                className="list-search grid-lg-20 grid-md-50 grid-50"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => {
                  return (
                    <li key={index} className="grid-item">
                      <div
                        key={index}
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
                        <Link to="/products-post" className="link">
                          <div className="container-top">
                            <h2 className="product-title">Pilot Chairred</h2>
                          </div>
                          <div className="wrapper-product-img">
                            <div
                              className="container-img product-img"
                              data-get-product-link-color="red"
                              data-default-product-link-active
                            >
                              <img
                                src={productImage}
                                data-preload
                                className="media"
                                alt="search-1"
                              />
                            </div>
                            <div
                              className="container-img product-img"
                              data-get-product-link-color="yellow"
                            >
                              <img
                                src={productImageBlue}
                                data-preload
                                className="media"
                                alt="search-2"
                              />
                            </div>
                            <div
                              className="container-img product-img"
                              data-get-product-link-color="blue"
                            >
                              <img
                                src={productImageBrown}
                                data-preload
                                className="media"
                                alt="search-3"
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
                                  alt="search-4"
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
                                  alt="search-4"
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
                                  alt="search-"
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
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AddToCartModal />
    </>
  );
};

export default Search;
