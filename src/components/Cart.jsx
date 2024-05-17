import RequestForQuote from "./Common/RequestForQuote";
import AnimateLink from "./Common/AnimateLink";
import { useEffect, useState } from "react";
import { markPageLoaded, updatedWatched } from "@/utils/AnimationFunctions";
import { generateImageURL } from "@/utils/GenerateImageURL";
import { AddProductToCart, getProductsCart, removeProductFromCart, updateProductsCart } from "@/services/cartServices";

const Cart = () => {
  const [cart, setCart] = useState(null);

  const addToCart = async () => {
    try {
      const lineItems = [
        {
          catalogReference: {
            appId: "215238eb-22a5-4c36-9e7b-e7c08025e04e",
            catalogItemId: "0825d779-f01f-4a87-9777-8a5fbf895c06",
            options: {
              "variantId": "bef25cb9-f158-4fd2-89c5-7fd5700de244",
              "customTextFields": {
                label: "Hope you enjoy the coffee! :)",
                label2: "Hello"
              }
            }
          },
          quantity: 2
        },
        {
          catalogReference: {
            appId: "215238eb-22a5-4c36-9e7b-e7c08025e04e",
            catalogItemId: "0825d779-f01f-4a87-9777-8a5fbf895c06",
            options: {
              "variantId": "e1ffe39b-7a0e-42c8-92f3-3373a5471513",
              "customTextFields": {
                label: "Hope you enjoy the coffee! :)",
                label2: "Hello"
              }
            }
          },
          quantity: 2
        },
      ]
      const response = await AddProductToCart(lineItems);
      setCart(response.cart);
    } catch (error) {
      console.log("error", error);
    }
  }
  const getCart = async () => {
    try {
      const response = await getProductsCart();
      setCart(response);
      markPageLoaded();
    } catch (error) {
      console.log("error", error);
      markPageLoaded();
    }
  }
  const removeProduct = async (id) => {
    try {
      const response = await removeProductFromCart([id]);
      setCart(response.cart);
    } catch (error) {
      console.log("error", error);
    }
  }
  const findColor = (descriptionLines) => {
    return descriptionLines.filter((x) => x.colorInfo !== undefined).map((x) => x.colorInfo.original)
  }
  const updateProducts = async (id, quantity) => {
    try {
      const lineItems = [{ id, quantity }]
      const response = await updateProductsCart(lineItems);
      setCart(response.cart);
    } catch (error) {
      console.log("error", error);
    }
  }
  const handleQuantityChange = async (id, quantity) => {
    if (quantity < 1000 && quantity > 0) {
      const updatedLineItems = cart.lineItems.map((x) => {
        if (id === x._id) {
          x.quantity = quantity;
        }
        return x;
      })
      setCart({ ...cart, lineItems: updatedLineItems });
      console.log("updatedLineItems", updatedLineItems);
    }
  }

  useEffect(() => {
    getCart();
  }, [])

  useEffect(() => {
    console.log("cart", cart);
    updatedWatched();
  }, [cart])


  return (
    <>
      <section className="cart-intro pb-lg-80 pb-tablet-70 pb-phone-135">
        <div className="container-fluid pos-relative z-5">
          <button onClick={updateProducts} className="btn-small" style={{ color: "white", border: "1px solid red", marginRight: "12px" }}>Update</button>
          <button onClick={addToCart} className="btn-small" style={{ color: "white", border: "1px solid red", marginRight: "12px" }}>Add to Cart</button>
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
                      const { _id, quantity, productName, image, fullPrice, physicalProperties, descriptionLines } = item;
                      const colors = findColor(descriptionLines).join("-");
                      return (
                        <li key={index} className="list-item">
                          <input type="hidden" name="sku[]" value="MODCH09" />
                          <div className="cart-product">
                            <div className="container-img">
                              <img
                                src={generateImageURL({ wix_url: image, h: "150", w: "150" })}
                                data-preload
                                className="media"
                                alt="product"
                                style={{ padding: "8px" }}
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
                                  <button onClick={() => removeProduct(_id)} type="button" className="btn-cancel">
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
                                  <div className="container-input container-input-quantity js-running">
                                    <button onClick={() => handleQuantityChange(_id, +quantity - 1)} type="button" className="minus">
                                      <i className="icon-minus no-mobile"></i>
                                      <i className="icon-minus-2 no-desktop"></i>
                                    </button>
                                    <input
                                      type="number"
                                      min="0"
                                      value={quantity}
                                      placeholder="1"
                                      className="input-number"
                                      onInput={(e) => handleQuantityChange(_id, e.target.value)}
                                    // onBlur={(e) => handleQuantityChange(_id, e.target.value)}
                                    />
                                    <button onClick={() => handleQuantityChange(_id, +quantity + 1)} type="button" className="plus">
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
                  {cart?.lineItems.length === 0 && (
                    <h6
                      className="fs--40 text-center split-words white-1"
                      style={{ margin: "28vh auto" }}
                      data-aos="d:loop"
                    >
                      No Products in Cart
                    </h6>
                  )}
                  {cart?.lineItems.length !== 0 && (
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
                  )}
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
