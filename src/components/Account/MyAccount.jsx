"use client";
import usePageInitialization from "@/hooks/usePageInitialization";

const MyAccount = ({ myAccountPageData }) => {
  usePageInitialization("pg-my-account", ".initScript", ".myAccount");

  return (
    <section className="my-account-intro section-my-account">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-lg-3 offset-md-4 column-1">
            <div className="wrapper-top" data-aos="d:loop">
              <h1
                className="fs--60 red-1 text-uppercase split-words"
                data-aos="d:loop"
              >
                {myAccountPageData && myAccountPageData.mainTitle}
              </h1>
              <p
                className="fs--16 fs-tablet-12 mt-lg-5 mt-mobile-15"
                data-aos="fadeIn .8s ease-in-out .4s, d:loop"
              >
                {myAccountPageData && myAccountPageData.mainDescription}
              </p>
              <h2
                className="fs--16 fs-tablet-12 fw-600 text-uppercase mt-lg-45 mt-mobile-15 split-words"
                data-aos="d:loop"
              >
                {myAccountPageData && myAccountPageData.subTitle}
              </h2>
              <p
                className="fs--16 fs-tablet-12 mt-lg-10 mt-mobile-5"
                data-aos="fadeIn .8s ease-in-out .4s, d:loop"
              >
                {myAccountPageData && myAccountPageData.subDescription}
              </p>
            </div>
            <div
              className="wrapper-bottom"
              data-aos="fadeIn .8s ease-in-out .4s, d:loop"
            >
              <div className="container-text mb-lg-55 mb-tablet-25 mb-phone-35">
                <p className="fs--16 fs-tablet-12">
                  {myAccountPageData && myAccountPageData.loginEmailTitle}
                </p>
                <span className="email">gabriel@petrikor.design</span>
                <p className="fs--16 fs-tablet-12">
                  {myAccountPageData && myAccountPageData.loginEmailNote}
                </p>
              </div>
              <div className="container-account" data-form-container>
                <form className="form-account form-my-account">
                  <input type="hidden" name="subject" value="[account]" />
                  <div className="container-input col-lg-3">
                    <label for="account-first-name">First name</label>
                    <input
                      id="account-first-name"
                      name="first_name"
                      type="text"
                      placeholder="NAME"
                      required
                    />
                  </div>
                  <div className="container-input col-lg-3">
                    <label for="account-last-name">Last name</label>
                    <input
                      id="account-last-name"
                      name="last_name"
                      type="text"
                      placeholder="LAST NAME"
                      required
                    />
                  </div>
                  <div className="container-input col-lg-3">
                    <label for="account-company">Company</label>
                    <input
                      id="account-company"
                      name="company"
                      type="text"
                      placeholder="COMPANY"
                      required
                    />
                  </div>
                  <div className="container-input col-lg-3">
                    <label for="account-phone">Phone Number</label>
                    <input
                      id="account-phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (415) 000-0000"
                      required
                    />
                  </div>
                  <div className="container-input col-lg-3">
                    <label for="account-email">E-mail</label>
                    <input
                      id="account-email"
                      name="email"
                      type="email"
                      placeholder="exemple@myemail.com"
                      required
                    />
                  </div>
                  <div className="container-input container-select col-lg-9">
                    <div className="container-select-hospitality-space">
                      <label for="account-hospitality-space">
                        Where is your hospitality space located?
                      </label>
                      <div className="select">
                        <i className="icon-arrow-down no-desktop"></i>
                        <div className="wrapper-select">
                          <select
                            className="main-select"
                            name="hospitality_space"
                          >
                            <option value="Choice">Choice</option>
                            <option value="Paddock">Paddock</option>
                            <option value="Koval">Koval</option>
                            <option value="Skybox">Skybox</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="container-select-specify-other input-hide">
                      <div className="wrapper-input">
                        <label for="account-other">Specify</label>
                        <input
                          id="account-other"
                          name="other"
                          type="text"
                          placeholder="OTHER"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="container-submit flex-mobile-center col-lg-6 mt-lg-30 mt-tablet-15 mt-phone-40">
                    <button
                      type="submit"
                      className="bt-submit btn-medium-wide btn-red btn-hover-black-white w-lg-100"
                    >
                      <span className="submit-text split-chars">
                        <span>
                          {" "}
                          {myAccountPageData &&
                            myAccountPageData.updateInfoButtonLabel}
                        </span>
                      </span>
                    </button>
                  </div>
                  <div className="container-discard flex-mobile-center col-12 mt-lg-30 mt-mobile-20">
                    <a
                      href="my-account.html"
                      type=""
                      className="btn-small-wide btn-white btn-hover-black-white btn-discard"
                    >
                      <div className="split-chars">
                        <span>
                          {" "}
                          {myAccountPageData &&
                            myAccountPageData.discordButtonLabel}
                        </span>
                      </div>
                    </a>
                  </div>
                </form>
                <h3 data-aos="fadeIn" data-form-error>
                  Error, Try again!
                </h3>
                <h3 data-aos="fadeIn" data-form-success>
                  Success!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
