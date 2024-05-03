import usePageInitialization from "../../hooks/usePageInitialization";
import AnimateLink from "../Common/AnimateLink";
import CartModal from "../Common/CartModal";

const QuotesHistory = () => {
  usePageInitialization(
    "pg-my-account-quotes-history",
    ".initScript",
    ".quotesHistory"
  );
  return (
    <>
      <section class="my-account-intro section-quotes-history">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8 offset-lg-3 offset-md-4">
              <h1
                class="fs--60 red-1 text-uppercase split-words"
                data-aos="d:loop"
              >
                Quotes history
              </h1>
              <div class="no-results d-none">
                <h2 class="fs--30 fw-400 red-1 split-words" data-aos="d:loop">
                  No quotes history
                </h2>
              </div>
              <ul
                class="list-quotes-history mt-lg-70 mt-mobile-30"
                data-aos="d:loop"
              >
                {[1, 2, 3, 4].map((data, index) => {
                  return (
                    <li key={index} class="list-item">
                      <div class="content">
                        <div class="name-date">
                          <h2 class="name">Ferrari</h2>
                          <div class="date">February, 09h, 2024</div>
                        </div>
                        <div class="value">$ 45.000</div>
                        <div class="container-btn">
                          <btn-modal-open
                            group="modal-quotes-history"
                            class="btn-small btn-white-red btn-hover-red-white"
                          >
                            <div class="split-chars">
                              <span>View</span>
                            </div>
                            <i class="icon-arrow-diagonal"></i>
                          </btn-modal-open>
                          <AnimateLink
                            to="/cart"
                            className="btn-small btn-red btn-hover-black"
                          >
                            <div class="split-chars">
                              <span>Order again</span>
                            </div>
                            <i class="icon-arrow-diagonal"></i>
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

      <CartModal />
    </>
  );
};

export default QuotesHistory;
