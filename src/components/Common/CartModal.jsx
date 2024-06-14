import AnimateLink from "./AnimateLink";
import { extractSlugFromUrl, findColor } from "@/utils/utils";
import { generateImageURL } from "@/utils/GenerateImageURL";
import { formatCustomDate } from "../Account/QuotesHistory";
import ModalLogos from "./ModalLogos";

const CartModal = ({ data, handleAddToCart }) => {
  const totalPrice = data?.lineItems?.reduce((total, item) => {
    return total + Number(item.price) * item.quantity;
  }, 0);
  const issueDate = formatCustomDate(data?.dates.issueDate);
  function calculateTotalPrice(item) {
    const price = parseFloat(item.price);
    const quantity = item.quantity;
    const totalPrice = price * quantity;

    return totalPrice;
  }
  return (
    <div id="reloading-area">
      <modal-group name="modal-quotes-history" class="modal-quotes-history">
        <modal-container>
          <modal-item>
            <div class="wrapper-section">
              <section class="section-modal-quotes-history">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-10 offset-md-1">
                      <div
                        class="modal-content"
                        data-modal-area
                        data-form-container-cart
                      >
                        <div class="container-title">
                          <div class="title">
                            <h2 class="fs--45 text-uppercase">
                              {data && data.title}
                            </h2>
                            <p class="fs--12 mt-5">{issueDate}</p>
                          </div>
                          <div class="total-price text-lg-right text-mobile-center mt-mobile-20">
                            <div class="fs--30 fs-tablet-30 fw-400 red-1 text-uppercase">
                              {/* Total $ {totalPrice}* */}
                            </div>
                            <p class="fs--10 mt-5">
                              {/* *Estimated value for the cart. Shipping and
                              customization costs will be additional. */}
                            </p>
                          </div>
                        </div>
                        <form class="form-cart mt-lg-60 mt-mobile-40">
                          <ul
                            class="list-cart list-cart-product"
                            data-aos="d:loop"
                          >
                            {data &&
                              data.lineItems.length > 0 &&
                              data.lineItems.map((data, index) => {
                                const {
                                  productName,
                                  physicalProperties,
                                  quantity,
                                  image,
                                  descriptionLines,
                                  url,
                                  catalogReference,
                                } = data.fullItem;
                                const colors =
                                  findColor(descriptionLines).join("-");
                                const customTextFields =
                                  catalogReference.options.customTextFields;
                                return (
                                  <li key={index} class="list-item">
                                    <input
                                      type="hidden"
                                      name="sku[]"
                                      value="MODCH09"
                                    />
                                    <div class="cart-product">
                                      <div class="container-img">
                                        <img
                                          src={generateImageURL({
                                            wix_url: image,
                                            h: "150",
                                            w: "150",
                                          })}
                                          data-preload
                                          class="media"
                                          alt="product"
                                        />
                                      </div>
                                      <div class="wrapper-product-info">
                                        <div class="container-top">
                                          <div class="container-product-name">
                                            <h2 class="product-name">
                                              {productName.original}
                                            </h2>
                                            <AnimateLink
                                              to={
                                                "/product" +
                                                extractSlugFromUrl(url)
                                              }
                                              className="btn-view"
                                            >
                                              <span>View</span>
                                              <i className="icon-arrow-right"></i>
                                            </AnimateLink>
                                          </div>
                                          <div class="container-price">
                                            <div class="price">
                                              ${calculateTotalPrice(data)}
                                            </div>
                                            {/* <button
                                            type="button"
                                            class="btn-cancel"
                                          >
                                            <i class="icon-close"></i>
                                          </button> */}
                                          </div>
                                        </div>
                                        <div class="container-specs">
                                          <ul class="list-specs">
                                            <li class="sku">
                                              <span class="specs-title">
                                                SKU
                                              </span>
                                              <span class="specs-text">
                                                {physicalProperties.sku}
                                              </span>
                                            </li>
                                            <li class="collection">
                                              <span class="specs-title">
                                                Collection
                                              </span>
                                              <span class="specs-text">
                                                {customTextFields.collection}
                                              </span>
                                            </li>
                                            <li class="color">
                                              <span class="specs-title">
                                                Color
                                              </span>
                                              <span class="specs-text">
                                                {colors}
                                              </span>
                                            </li>
                                            {/* <li class="additional-note">
                                              <span class="specs-title">
                                                Additional note
                                              </span>
                                              <input
                                                type="text"
                                                placeholder="Lorem Ipsum"
                                              />
                                            </li> */}
                                          </ul>
                                          <div class="quantity">
                                            <span class="fs--18 no-mobile">
                                              Quantity
                                            </span>
                                            <div class="container-input container-input-quantity">
                                              {/* <button
                                                type="button"
                                                class="minus"
                                                disabled
                                              >
                                                <i class="icon-minus no-mobile"></i>
                                                <i class="icon-minus-2 no-desktop"></i>
                                              </button> */}
                                              <input
                                                type="number"
                                                min="0"
                                                value={quantity}
                                                placeholder={quantity}
                                                class="input-number"
                                                disabled
                                              />
                                              {/* <button
                                                type="button"
                                                class="plus"
                                                disabled
                                              >
                                                <i class="icon-plus no-mobile"></i>
                                                <i class="icon-plus-2 no-desktop"></i>
                                              </button> */}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                );
                              })}
                          </ul>
                        </form>
                        <div class="flex-center mt-lg-65 mt-tablet-55 mt-phone-35">
                          <button
                            onClick={() => handleAddToCart(data.lineItems)}
                            className="btn-medium-wide btn-red btn-hover-white-1 manual-modal-close"
                          >
                            <span class="split-chars">
                              <span>Order Again</span>
                            </span>
                          </button>
                        </div>
                        <div class="container-btn-modal-close">
                          <btn-modal-close class="btn-close">
                            <i class="icon-close"></i>
                          </btn-modal-close>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </modal-item>
        </modal-container>
      </modal-group>
      <div class="feedback-quote-request-confirmed" data-modal-area>
        <div class="feedback-container">
          <div class="feedback-item">
            <section class="feedback">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-6 offset-lg-3">
                    <div class="content" data-feedback-area>
                      <ModalLogos />
                      <h2
                        class="fs--70 mt-lg-105 mt-mobile-110 mb-lg-75 mb-mobile-90 text-center text-uppercase split-words"
                        data-aos="d:loop"
                      >
                        Quote request confirmed
                      </h2>
                      <div class="container-btn">
                        <a
                          href="my-account.html"
                          class="btn-small-wide btn-red btn-my-account btn-hover-black"
                          data-close-feedback
                          data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                        >
                          <i class="icon-profile"></i>
                          <span class="split-chars">
                            <span>My Account</span>
                          </span>
                        </a>
                        <a
                          href="collections.html"
                          class="btn-small-wide btn-gray btn-back-to-collections btn-hover-red-white mt-md-30 mt-phone-20"
                          data-close-feedback
                          data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                        >
                          <div class="split-chars">
                            <span>Back to collections</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
