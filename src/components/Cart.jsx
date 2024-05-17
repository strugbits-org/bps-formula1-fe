import RequestForQuote from "./Common/RequestForQuote";
import AnimateLink from "./Common/AnimateLink";
import { useEffect, useState } from "react";
import { markPageLoaded, updatedWatched } from "@/utils/AnimationFunctions";
import { generateImageURL } from "@/utils/GenerateImageURL";
import { AddProductToCart, getProductsCart, getProductsCartTotal, removeProductFromCart, updateCartItem, updateProductsCart } from "@/services/cartServices";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = async () => {
    try {
      const lineItems = [
        {
          catalogReference: {
            appId: "215238eb-22a5-4c36-9e7b-e7c08025e04e",
            catalogItemId: "0825d779-f01f-4a87-9777-8a5fbf895c06",
            options: {
              "variantId": "e1ffe39b-7a0e-42c8-92f3-3373a5471513",
              "customTextFields": {
                collection: "Legacy",
                additonalInfo: "this is additonalInfo",
                productSlug: "/product/accent-chair-celeste",
              }
            }
          },
          quantity: 2
        },
      ]
      const response = await AddProductToCart(lineItems);
      setCartItems(response.cart.lineItems);
      setCart(response.cart);
    } catch (error) {
      console.log("error", error);
    }
  }
  const getCart = async () => {
    try {
      const response = await getProductsCart();
      setCartItems(response.lineItems);
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
      setCartItems(response.cart.lineItems);
      setCart(response.cart);
    } catch (error) {
      console.log("error", error);
    }
  }
  const findColor = (descriptionLines) => {
    return descriptionLines.filter((x) => x.colorInfo !== undefined).map((x) => x.colorInfo.original)
  }
  const formatPrice = (price, quantity) => {
    const currencySymbol = price.formattedAmount.charAt(0);
    const totalPrice = price.amount * quantity;
    const formattedPrice = totalPrice.toFixed(2);
    return `${currencySymbol}${formattedPrice}`;
  }
  function extractSlugFromUrl(url) {
    const regex = /\/([^\/]+)\/?$/;
    const match = regex.exec(url);
    if (match) {
      return match[0];
    }
    return "";
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
  const handleQuantityChange = async (id, quantity, disabled) => {
    if (quantity < 10000 && quantity > 0) {
      const updatedLineItems = cartItems.map((x) => {
        if (id === x._id) {
          x.quantity = Number(quantity);
        }
        return x;
      });
      setCartItems(updatedLineItems);
      if (!disabled) updateProducts(id, quantity);
    }
  }
  const handleNoteChange = async (id, value) => {
    const updatedLineItems = cartItems.map((x) => {
      if (id === x._id) {
        x.catalogReference.options.customTextFields.additonalInfo = value;
      }
      return x;
    });
    setCartItems(updatedLineItems);
  }
  const updateLineItem = async () => {
    try {
      const lineItems = cartItems.map((x) => { return { catalogReference: x.catalogReference, quantity: x.quantity } });
      const response = await updateCartItem(lineItems);
      console.log("response", response);
      setCart(response.cart);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getCart();
  }, [])

  useEffect(() => {
    updatedWatched();
  }, [cartItems]);

  return (
    <>
      <section className="cart-intro pb-lg-80 pb-tablet-70 pb-phone-135">
        <div className="container-fluid pos-relative z-5">
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
                    Total {cart?.subtotal.formattedConvertedAmount || "$0.00"}
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
                    {cartItems.map((item, index) => {
                      const { _id, quantity, productName, url, image, price, physicalProperties, descriptionLines, catalogReference } = item;
                      const colors = findColor(descriptionLines).join("-");
                      const customTextFields = catalogReference.options.customTextFields;
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
                                    to={"/product" + extractSlugFromUrl(url)}
                                    className="btn-view"
                                  >
                                    <span>View</span>
                                    <i className="icon-arrow-right"></i>
                                  </AnimateLink>
                                </div>
                                <div className="container-price">
                                  <div className="price">{formatPrice(price, quantity)}</div>
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
                                    <span className="specs-text">{customTextFields.collection}</span>
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
                                      value={customTextFields.additonalInfo}
                                      placeholder="Lorem Ipsum"
                                      onInput={(e) => handleNoteChange(_id, e.target.value)}
                                      onBlur={() => updateLineItem(_id)}
                                    />
                                  </li>
                                </ul>
                                <div className="quantity">
                                  <span className="fs--18 no-mobile">
                                    Quantity
                                  </span>
                                  <div className="container-input container-input-quantity js-running">
                                    <button onClick={() => handleQuantityChange(_id, quantity - 1)} type="button" className="minus">
                                      <i className="icon-minus no-mobile"></i>
                                      <i className="icon-minus-2 no-desktop"></i>
                                    </button>
                                    <input
                                      type="number"
                                      min="0"
                                      value={quantity}
                                      placeholder="1"
                                      className="input-number"
                                      onInput={(e) => handleQuantityChange(_id, e.target.value, true)}
                                      onBlur={(e) => updateProducts(_id, e.target.value)}
                                    />
                                    <button onClick={() => handleQuantityChange(_id, quantity + 1)} type="button" className="plus">
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
                  {cartItems.length === 0 && (
                    <h6
                      className="fs--40 text-center split-words white-1"
                      style={{ margin: "28vh auto" }}
                      data-aos="d:loop"
                    >
                      No Products in Cart
                    </h6>
                  )}
                  {cartItems.length !== 0 && (
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
