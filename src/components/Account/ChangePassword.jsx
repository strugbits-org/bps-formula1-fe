import usePageInitialization from "@/hooks/usePageInitialization";

const ChangePassword = ({ changePasswordPageData }) => {
  usePageInitialization(
    "pg-my-account-change-password",
    ".initScript",
    ".changePassword"
  );
  return (
    <section className="my-account-intro section-change-password">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-8 offset-lg-4 offset-md-4 column-1">
            <div className="wrapper-top">
              <h1
                className="fs--60 lh-110 red-1 text-uppercase split-words"
                data-aos="d:loop"
              >
                {changePasswordPageData && changePasswordPageData.pageTitle}
              </h1>
              <p
                className="fs--16 fs-tablet-12 mt-md-15 mt-phone-10"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                {changePasswordPageData &&
                  changePasswordPageData.pageDescription}
              </p>
            </div>
            <div
              className="wrapper-bottom mt-lg-50 mt-tablet-25 mt-phone-35"
              data-aos="fadeIn .8s ease-in-out .2s, d:loop"
            >
              <div className="container-password" data-form-container>
                <form className="form-password form-password">
                  <input type="hidden" name="subject" value="[password]" />
                  <div className="container-input container-input-password col-lg-12">
                    <label htmlFor="login-password-old">
                      {changePasswordPageData &&
                        changePasswordPageData.enterYourOldPasswordInputLabel}
                    </label>
                    <input
                      id="login-password-old"
                      className="password"
                      name="password"
                      type="password"
                      placeholder="* * * * * *"
                      required
                    />
                    <div className="toggle-password">
                      <i className="icon-password"></i>
                      <i className="icon-password-hide"></i>
                    </div>
                  </div>
                  <div className="container-input container-input-password col-lg-12">
                    <label htmlFor="login-password-new-1">
                      {changePasswordPageData &&
                        changePasswordPageData.enterYourNewPasswordInputLabel}
                    </label>
                    <input
                      id="login-password-new-1"
                      className="password"
                      name="password"
                      type="password"
                      placeholder="* * * * * *"
                      required
                    />
                    <div className="toggle-password">
                      <i className="icon-password"></i>
                      <i className="icon-password-hide"></i>
                    </div>
                  </div>
                  <div className="container-input container-input-password col-lg-12">
                    <label htmlFor="login-password-new-2">
                      {changePasswordPageData &&
                        changePasswordPageData.confirmYourNewPasswordInputLabel}
                    </label>
                    <input
                      id="login-password-new-2"
                      className="password"
                      name="password"
                      type="password"
                      placeholder="* * * * * *"
                      required
                    />
                    <div className="toggle-password">
                      <i className="icon-password"></i>
                      <i className="icon-password-hide"></i>
                    </div>
                  </div>
                  <div className="container-submit flex-mobile-center col-lg-12 mt-tablet-15 mt-phone-40">
                    <button
                      type="submit"
                      className="bt-submit btn-medium-wide btn-red btn-hover-black-white w-lg-100"
                    >
                      <span className="submit-text split-chars">
                        <span>
                          {" "}
                          {changePasswordPageData &&
                            changePasswordPageData.resetPasswordButtonLabel}
                        </span>
                      </span>
                    </button>
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

export default ChangePassword;
