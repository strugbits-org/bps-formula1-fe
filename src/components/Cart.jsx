import RequestForQuote from "./Common/RequestForQuote";
import AnimateLink from "./Common/AnimateLink";
import { wixAddToCart, wixCreateCart, wixDeleteCart, wixGetCart } from "@/services/fetchFunction";
import { useEffect, useState } from "react";
import { markPageLoaded } from "@/utils/AnimationFunctions";
import { generateImageURL } from "@/utils/GenerateImageURL";

const Cart = () => {

  const cartId = "53d7f28d-89c0-4231-bfe1-9d357824a8c3";

  const [cart, setCart] = useState(null);

  const addToCart = async () => {
    const id = cartId;
    const options = {
      lineItems: [
        {
          catalogReference: {
            appId: "215238eb-22a5-4c36-9e7b-e7c08025e04e",
            catalogItemId: "c4b9d758-bbc3-67a7-4d03-0dec21340e23",
            options: {
              "variantId": "495e4e11-70b2-464b-b662-17b4621976b7",
              "customTextFields": {
                label: "Hope you enjoy the coffee! :)",
                label2: "Hello"
              }
            }
          },
          quantity: 2
        }
      ]
    };
    const response = await wixAddToCart(id, options);
    console.log("addToCart response", response);
  }

  const getCart = async () => {
    const id = cartId;
    const response = await wixGetCart(id);
    setCart(response);
    markPageLoaded();
    console.log("getCart response", response);
  }
  const createCart = async () => {
    const options = {
      lineItems: [
        {
          catalogReference: {
            appId: "215238eb-22a5-4c36-9e7b-e7c08025e04e",
            catalogItemId: "c4b9d758-bbc3-67a7-4d03-0dec21340e23",
            options: {
              "variantId": "495e4e11-70b2-464b-b662-17b4621976b7",
              "customTextFields": [
                {
                  label: "Hope you enjoy the coffee! :)"
                },
                {
                  label2: "Hope you enjoy the coffee! 2 :)"
                },
              ]
            }
          },
          quantity: 2
        }
      ]
    };
    const response = await wixCreateCart(options);
    console.log("createCart response", response);
  }

  const deleteCart = async () => {
    const id = cartId;
    const response = await wixDeleteCart(id);
    console.log("deleteCart response", response);
  }

  const findColor = (descriptionLines) => {
    return descriptionLines.filter((x) => x.colorInfo !== undefined).map((x)=>x.colorInfo.original)
  }

  useEffect(() => {
    getCart();
  }, [])


  return (
    <>
      <section className="cart-intro pb-lg-80 pb-tablet-70 pb-phone-135">
        <div className="container-fluid pos-relative z-5">
          {/* <button onClick={addToCart} className="btn-small" style={{ color: "white", border: "1px solid red", marginRight: "12px" }}>Add to Cart</button>
          <button onClick={createCart} className="btn-small" style={{ color: "white", border: "1px solid red", marginRight: "12px" }}>Create Cart</button>
          <button onClick={getCart} className="btn-small" style={{ color: "white", border: "1px solid red", marginRight: "12px" }}>Get Cart</button>
          <button onClick={deleteCart} className="btn-small" style={{ color: "white", border: "1px solid red", marginRight: "12px" }}>Delete Cart</button> */}
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="container-title">
                <h1
                  className="fs--30 text-uppercase white-1 split-words"
                  data-aos="d:loop"
                >
                  Your cart
                </h1>
                <div
                  className="total-price text-lg-right text-mobile-center mt-mobile-20"
                  data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                >
                  <div className="fs--30 fs-tablet-30 fw-400 red-1 text-uppercase">
                    Total {cart?.subtotal.formattedConvertedAmount}
                  </div>
                  <p className="fs--10 white-1 mt-5">
                    *Estimated value for the cart. Shipping and customization
                    costs will be additional.
                  </p>
                </div>
              </div>
              <div data-form-container-cart>
                <form action="" className="form-cart">
                  <ul
                    className="list-cart list-cart-product mt-35"
                    data-aos="d:loop"
                  >
                    {cart?.lineItems.map((item, index) => {
                      const { productName, image, fullPrice, physicalProperties, descriptionLines } = item;
                      const colors = findColor(descriptionLines).join("-");
                      console.log("colors", colors);
                      return (
                        <li key={index} className="list-item">
                          <input type="hidden" name="sku[]" value="MODCH09" />
                          <div className="cart-product">
                            <div className="container-img">
                              <img
                                src={generateImageURL(image)}
                                data-preload
                                className="media"
                                alt="product"
                              />
                            </div>
                            <div className="wrapper-product-info">
                              <div className="container-top">
                                <div className="container-product-name">
                                  <h2 className="product-name">
                                    {productName.original}
                                  </h2>
                                  <AnimateLink
                                    to={"/products"}
                                    className="btn-view"
                                  >
                                    <span>View</span>
                                    <i className="icon-arrow-right"></i>
                                  </AnimateLink>
                                </div>
                                <div className="container-price">
                                  <div className="price">{fullPrice.formattedAmount}</div>
                                  <button type="button" className="btn-cancel">
                                    <i className="icon-close"></i>
                                  </button>
                                </div>
                              </div>
                              <div className="container-specs">
                                <ul className="list-specs">
                                  <li className="sku">
                                    <span className="specs-title">SKU</span>
                                    <span className="specs-text">{physicalProperties.sku}</span>
                                  </li>
                                  <li className="collection">
                                    <span className="specs-title">
                                      Collection
                                    </span>
                                    <span className="specs-text">Paddock</span>
                                  </li>
                                  <li className="color">
                                    <span className="specs-title">Color</span>
                                    <span className="specs-text">
                                      {colors}
                                    </span>
                                  </li>
                                  <li className="additional-note">
                                    <span className="specs-title">
                                      Additional note
                                    </span>
                                    <input
                                      type="text"
                                      placeholder="Lorem Ipsum"
                                    />
                                  </li>
                                </ul>
                                <div className="quantity">
                                  <span className="fs--18 no-mobile">
                                    Quantity
                                  </span>
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
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="container-btn mt-md-90 mt-phone-40">
                    <button
                      className="btn-medium-wide btn-red btn-hover-white bt-submit"
                      data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                    >
                      <div className="split-chars">
                        <span>Request for quote</span>
                      </div>
                    </button>
                    <AnimateLink
                      to="/products"
                      className="btn-small-wide btn-gray btn-hover-red mt-lg-30 mt-mobile-20"
                      data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                    >
                      <div className="split-chars">
                        <span>Continue shopping</span>
                      </div>
                    </AnimateLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-fixed" data-aos="d:loop">
          <div className="container-img">
            <img
              src="images/img-01.jpg"
              data-preload
              className="no-mobile media"
              data-parallax-top
              data-translate-y="-20%"
              alt="asd"
            />
            <img
              src="images/img-02.jpg"
              data-preload
              className="no-desktop media"
              alt="asd"
            />
          </div>
        </div>
      </section>

      <RequestForQuote />
    </>
  );
};
export default Cart;
