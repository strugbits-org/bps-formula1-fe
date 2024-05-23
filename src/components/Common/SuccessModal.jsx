import { markPageLoaded } from "@/utils/AnimationFunctions";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SuccessModal = ({ message, buttonLabel, setSuccessMessageVisible }) => {
  const router = useRouter();

  function closeModal() {
    document.body.setAttribute("data-form-cart-state", "");
    if (router.route === "/") {
      router.push("/");
    }
    setSuccessMessageVisible(false);
  }

  useEffect(() => {
    document.body.setAttribute("data-form-cart-state", "success");
  }, []);

  markPageLoaded();

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
                      <div className="container-logos">
                        <div
                          className="container-img logo-formula-1"
                          data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                        >
                          <img
                            src="/images/logo-formula-1-red.svg"
                            data-preload
                            className="media"
                            alt="product"
                          />
                        </div>
                        <div
                          className="container-img logo-blueprint"
                          data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                        >
                          <img
                            src="/images/logo-blueprint-rentals-black.svg"
                            data-preload
                            className="media"
                            alt="product"
                          />
                        </div>
                      </div>
                      <h2
                        className="fs--20 mt-lg-105 mt-mobile-110 mb-lg-75 mb-mobile-90 text-center text-uppercase split-words"
                        data-aos="d:loop"
                      >
                        {message}
                      </h2>
                      <div className="container-btn">
                        <button
                          onClick={closeModal}
                          className="btn-small-wide btn-red btn-my-account btn-hover-black"
                          data-close-feedback
                          data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                        >
                          <span className="split-chars">
                            <span>{buttonLabel || "OK!"}</span>
                          </span>
                        </button>
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

export default SuccessModal;
