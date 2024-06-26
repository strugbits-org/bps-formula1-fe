import { useEffect } from "react";
import AnimateLink from "./AnimateLink";
import ModalLogos from "./ModalLogos";

const RequestForQuote = () => {
  useEffect(() => {
    document.body.setAttribute("data-form-cart-state", "success");
  }, []);

  return (
    <div id="reloading-area">
      <div className="feedback-quote-request-confirmed" data-modal-area>
        <div className="feedback-container">
          <div className="feedback-item">
            <section className="feedback">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <div className="content" data-feedback-area>
                      <ModalLogos />

                      <h2
                        className="fs--70 mt-lg-105 mt-mobile-110 mb-lg-75 mb-mobile-90 text-center text-uppercase split-words"
                        data-aos="d:loop"
                      >
                        Quote request confirmed
                      </h2>
                      <div className="container-btn">
                        <AnimateLink
                          to={"/my-account"}
                          className="btn-small-wide btn-red btn-my-account btn-hover-black"
                          data-close-feedback
                          data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                        >
                          <i className="icon-profile"></i>
                          <span className="split-chars">
                            <span>My Account</span>
                          </span>
                        </AnimateLink>
                        <AnimateLink
                          to={"/collections"}
                          className="btn-small-wide btn-gray btn-back-to-collections btn-hover-red-white mt-md-30 mt-phone-20"
                          data-close-feedback
                          data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                        >
                          <div className="split-chars">
                            <span>Back to collections</span>
                          </div>
                        </AnimateLink>
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

export default RequestForQuote;
