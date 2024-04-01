import { Link } from "react-router-dom";

import usePageInitialization from "../hooks/usePageInitialization";
import AddToCartModal from "./Product/AddToCartModal";

import productImageBrown from "../images/products/img-01-brown.png";
import productImageBlue from "../images/products/img-01-blue.png";
import productImage from "../images/products/img-01.png";
import FilterButton from "../components/FilterButton";

const Search = () => {
  usePageInitialization("pg-search", ".initScript", ".products");

  return (
    <>
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

                <FilterButton />
              </div>
              <ul
                class="list-search grid-lg-20 grid-md-50 grid-50"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => {
                  return (
                    <li key={index} class="grid-item">
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
                        <Link to="/products-post" class="link">
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
                                alt="search-1"
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
                                alt="search-2"
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
                                alt="search-3"
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
                                  alt="search-4"
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
                                  alt="search-4"
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
                                  alt="search-"
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

      <AddToCartModal />
    </>
  );
};

export default Search;
