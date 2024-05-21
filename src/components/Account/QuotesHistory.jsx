import { useState } from "react";
import AnimateLink from "../Common/AnimateLink";
import CartModal from "../Common/CartModal";

const QuotesHistory = ({ quoteHistoryPageData, quotesData }) => {
  const [itemData, setItemData] = useState();
  const formatCustomDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "2-digit" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );

    const day = date.getDate();
    const dayWithSuffix = `${day < 10 ? "0" : ""}${day}h`;

    return formattedDate.replace(/\d{2}/, dayWithSuffix);
  };

  console.log(quotesData, "quotesData>>");
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
                {quotesData &&
                  quotesData.map((quote, index) => {
                    const { data } = quote;
                    const totalPrice = data.lineItems.reduce((total, item) => {
                      return total + Number(item.price);
                    }, 0);

                    const issueDate = formatCustomDate(data.dates.issueDate);

                    return (
                      <li key={index} className="list-item">
                        <div className="content">
                          <div className="name-date">
                            <h2 className="name">{data.title}</h2>
                            <div className="date">{issueDate}</div>
                          </div>
                          <div className="value">$ {totalPrice}</div>
                          <div className="container-btn">
                            <btn-modal-open
                              group="modal-quotes-history"
                              class="btn-small btn-white-red btn-hover-red-white"
                              onClick={() =>
                                setItemData(quotesData[index].data.lineItems)
                              }
                            >
                              <div class="split-chars">
                                <span>View</span>
                              </div>
                              <i className="icon-arrow-diagonal"></i>
                            </btn-modal-open>
                            <AnimateLink
                              to="/cart"
                              className="btn-small btn-red btn-hover-black"
                            >
                              <div className="split-chars">
                                <span>Order again</span>
                              </div>
                              <i className="icon-arrow-diagonal"></i>
                            </AnimateLink>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CartModal data={itemData} />
    </>
  );
};

export default QuotesHistory;
