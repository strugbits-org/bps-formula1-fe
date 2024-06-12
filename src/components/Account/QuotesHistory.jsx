"use client";
import { useEffect, useState } from "react";
import CartModal from "../Common/CartModal";
import { AddProductToCart } from "@/services/cartServices";
import { useRouter } from "next/navigation";
import { markPageLoaded, pageLoadStart } from "@/utils/AnimationFunctions";
import { checkParameters } from "@/utils/CheckParams";

export const formatCustomDate = (dateString) => {
  if (dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "2-digit" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );

    const day = date.getDate();
    const dayWithSuffix = `${day < 10 ? "0" : ""}${day}h`;

    return formattedDate.replace(/\d{2}/, dayWithSuffix);
  }
};
const QuotesHistory = ({ quoteHistoryPageData, quotesData }) => {
  const [itemData, setItemData] = useState();
  const router = useRouter();
  const handleAddToCart = async (data) => {
    try {
      const products = [];
      data.forEach((item) => {
        // Extract required information from the item
        const {
          catalogReference: {
            appId,
            catalogItemId,
            options: {
              variantId,
              customTextFields: { collection },
            },
          },
          quantity,
        } = item.fullItem;

        // Construct product object
        const product = {
          catalogReference: {
            appId,
            catalogItemId,
            options: {
              variantId,
              customTextFields: {
                collection,
                additonalInfo: "", // Assuming this is fixed for all products
              },
            },
          },
          quantity,
        };

        // Push the product object to the products array
        products.push(product);
      });
      await AddProductToCart(products);
      pageLoadStart();
      router.push("/cart");
      // handleClose();
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    const params = [quoteHistoryPageData, quotesData];
    if (checkParameters(params)) {
      markPageLoaded();
    }
  }, [quoteHistoryPageData, quotesData]);
  return (
    <>
      <section className="my-account-intro section-quotes-history">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-lg-3 offset-md-4">
              <h1
                className="fs--60 red-1 text-uppercase split-words"
                data-aos="d:loop"
              >
                {quoteHistoryPageData && quoteHistoryPageData.pageTitle}
              </h1>
              <div className="no-results d-none">
                <h2
                  className="fs--30 fw-400 red-1 split-words"
                  data-aos="d:loop"
                >
                  No quotes history
                </h2>
              </div>
              <ul
                className="list-quotes-history mt-lg-70 mt-mobile-30"
                data-aos="d:loop"
              >
                {quotesData && quotesData.length === 0 ? (
                  <div style={{ margin: "20vh auto" }}>
                    <h6 className="fs--20 text-center split-words ">
                      No Quote History Found
                    </h6>
                  </div>
                ) : (
                  quotesData.map((quote, index) => {
                    const { data } = quote;
                    const totalPrice = data.lineItems.reduce((total, item) => {
                      return total + Number(item.price) * item.quantity;
                    }, 0);
                    const issueDate = formatCustomDate(data.dates.issueDate);

                    return (
                      <li key={index} className="list-item">
                        <div className="content">
                          <div className="name-date">
                            <h2 className="name">{data.title}</h2>
                            <div className="date">{issueDate}</div>
                          </div>
                          <div className="value">
                            {/* $ {totalPrice} */}
                          </div>
                          <div className="container-btn">
                            <btn-modal-open
                              group="modal-quotes-history"
                              class="btn-small btn-white-red btn-hover-red-white"
                              onClick={() =>
                                setItemData(quotesData[index].data)
                              }
                            >
                              <div class="split-chars">
                                <span>View</span>
                              </div>
                              <i className="icon-arrow-diagonal"></i>
                            </btn-modal-open>
                            <button
                              onClick={() => handleAddToCart(data.lineItems)}
                              className="btn-small btn-red btn-hover-black"
                            >
                              <div className="split-chars">
                                <span>Order again</span>
                              </div>
                              <i className="icon-arrow-diagonal"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CartModal
        data={itemData}
        title={quoteHistoryPageData.pageTitle}
        handleAddToCart={handleAddToCart}
      />
    </>
  );
};

export default QuotesHistory;
