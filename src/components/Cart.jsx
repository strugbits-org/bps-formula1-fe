'use client';
import RequestForQuote from './Common/RequestForQuote';
import AnimateLink from './Common/AnimateLink';
import { useEffect, useState } from 'react';
import { markPageLoaded, updatedWatched } from '@/utils/AnimationFunctions';
import { generateImageURL } from '@/utils/GenerateImageURL';
import { calculateTotalCartQuantity, extractSlugFromUrl, findColor, setCookie } from '@/utils/utils';
import BackgroundImages from './Common/BackgroundImages';
import { createPriceQuote, removeProductFromCart, updateProductsCart } from '@/services/scApiCalls';

const Cart = ({ data, backgroundData }) => {
  const [cart, setCart] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [quoteStatus, setQuoteStatus] = useState('');
  const [cartProcessing, setCartProcessing] = useState(false);

  const removeProduct = async (id) => {
    try {
      const response = await removeProductFromCart([id]);
      const total = calculateTotalCartQuantity(response.cart.lineItems)
      setCookie("cartQuantity", total)
      setCartItems(response.cart.lineItems);
      setCart(response.cart);
    } catch (error) {
      console.log('error', error);
    }
  };
  const updateProducts = async (id, quantity) => {
    try {
      const lineItems = [{ id, quantity }];
      const response = await updateProductsCart(lineItems);
      const total = calculateTotalCartQuantity(response.cart.lineItems)
      setCookie("cartQuantity", total);
      setCart(response.cart);
    } catch (error) {
      console.log('error', error);
    }
  };
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
  };
  const handleSubmitQuote = async () => {
    try {
      setCartProcessing(true);
      updatedWatched();
      const lineItems = cartItems.map((x) => {
        return {
          id: x._id,
          name: x.physicalProperties.sku,
          description: x.productName.original,
          quantity: x.quantity,
          fullItem: x,
        };
      });
      await createPriceQuote(lineItems);
      setCookie("cartQuantity", 0);
      setQuoteStatus('success');
    } catch (error) {
      console.log('error', error);
    } finally {
      updatedWatched();
      setCartProcessing(false);
    }
  };

  useEffect(() => {
    if (data?.lineItems) {
      setCartItems(data.lineItems);
      setCart(data);
      const total = calculateTotalCartQuantity(data.lineItems);
      setCookie("cartQuantity", total);
    }
    markPageLoaded();
  }, []);

  useEffect(() => {
    updatedWatched();
  }, [cartItems]);

  return (
    <>
      <section className="cart-intro pb-lg-80 pb-tablet-70 pb-phone-135">
        <div className="container-fluid pos-relative z-5">
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
                  <div
                    style={{ display: 'none' }}
                    className="fs--30 fs-tablet-30 fw-400 red-1 text-uppercase"
                  >
                    {/* Total {cart?.subtotal.formattedConvertedAmount || "$0.00"} */}
                  </div>
                  {/* <p className="fs--10 white-1 mt-5">
                    *Estimated value for the cart. Shipping and customization
                    costs will be additional.
                  </p> */}
                </div>
              </div>
              <div data-form-container-cart>
                <div className="form-cart js-running">
                  <ul
                    className="list-cart list-cart-product mt-35"
                    data-aos="d:loop"
                  >
                    {cartItems.map((item, index) => {
                      const {
                        _id,
                        quantity,
                        productName,
                        url,
                        image,
                        physicalProperties,
                        descriptionLines,
                        catalogReference,
                      } = item;
                      const colors = findColor(descriptionLines).join('-');
                      const customTextFields =
                        catalogReference.options.customTextFields;
                      return (
                        <li key={index} className="list-item">
                          <input type="hidden" name="sku[]" value="MODCH09" />

                          <div className="cart-product">
                            <div class="wrapper-img">
                              <div className="container-img">
                                <img
                                  src={generateImageURL({
                                    wix_url: image,
                                    h: '150',
                                    w: '150',
                                  })}
                                  data-preload
                                  className="media"
                                  alt="product"
                                />
                              </div>
                            </div>
                            <div className="wrapper-product-info">
                              <div className="container-top">
                                <div className="container-product-name">
                                  <h2 className="product-name">
                                    {productName.original}
                                  </h2>
                                  <AnimateLink
                                    to={'/product' + extractSlugFromUrl(url)}
                                    className="btn-view"
                                  >
                                    <span>View</span>
                                    <i className="icon-arrow-right"></i>
                                  </AnimateLink>
                                </div>
                                <div className="container-price">
                                  <div className="price"></div>
                                  <button
                                    onClick={() => removeProduct(_id)}
                                    type="button"
                                    className="btn-cancel"
                                  >
                                    <i className="icon-close"></i>
                                  </button>
                                </div>
                              </div>
                              <div className="container-specs">
                                <ul className="list-specs">
                                  <li className="sku">
                                    <span className="specs-title">SKU</span>
                                    <span className="specs-text">
                                      {physicalProperties.sku}
                                    </span>
                                  </li>
                                  <li className="collection">
                                    <span className="specs-title">
                                      Collection
                                    </span>
                                    <span className="specs-text">
                                      {customTextFields.collection}
                                    </span>
                                  </li>
                                  <li className="color">
                                    <span className="specs-title">Color</span>
                                    <span className="specs-text">{colors}</span>
                                  </li>
                                  {/* <li className="additional-note">
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
                                  </li> */}
                                </ul>
                                <div className="quantity">
                                  <span className="fs--18 no-mobile">
                                    Quantity
                                  </span>
                                  <div className="container-input container-input-quantity js-running">
                                    <button
                                      onClick={() =>
                                        handleQuantityChange(_id, quantity - 1)
                                      }
                                      type="button"
                                      className="minus"
                                    >
                                      <i className="icon-minus no-mobile"></i>
                                      <i className="icon-minus-2 no-desktop"></i>
                                    </button>
                                    <input
                                      type="number"
                                      min="0"
                                      value={quantity}
                                      placeholder="1"
                                      className="input-number"
                                      onInput={(e) =>
                                        handleQuantityChange(
                                          _id,
                                          e.target.value,
                                          true
                                        )
                                      }
                                      onBlur={(e) =>
                                        updateProducts(_id, e.target.value)
                                      }
                                    />
                                    <button
                                      onClick={() =>
                                        handleQuantityChange(_id, quantity + 1)
                                      }
                                      type="button"
                                      className="plus"
                                    >
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
                      style={{ margin: '28vh auto' }}
                      data-aos="d:loop"
                    >
                      No Products in Cart
                    </h6>
                  )}
                  <div className="container-btn mt-md-90 mt-phone-40">
                    {cartItems.length !== 0 && (
                      <button
                        onClick={handleSubmitQuote}
                        className={`btn-medium-wide btn-red btn-hover-white ${cartProcessing ? 'events-disabled' : ''
                          }`}
                        data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                      >
                        <div className="split-chars">
                          <span>
                            {cartProcessing
                              ? 'Requesting for quote...'
                              : 'Request for quote'}
                          </span>
                        </div>
                      </button>
                    )}
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-fixed" data-aos="d:loop">
          <BackgroundImages pageSlug="cart" data={backgroundData} />
        </div>
      </section>
      {quoteStatus === 'success' && <RequestForQuote />}
    </>
  );
};
export default Cart;
