import Account from "./Index";

const ChangePassword = () => {
  return (
    <>
      <Account />
      <div id="main-transition">
        <div
          class="wrapper"
          id="pg-my-account-change-password"
          data-scroll-container
        >
          <main>
            <section class="my-account-intro section-change-password">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-4 col-md-8 offset-lg-4 offset-md-4 column-1">
                    <div class="wrapper-top">
                      <h1
                        class="fs--60 lh-110 red-1 text-uppercase split-words"
                        data-aos="d:loop"
                      >
                        Change password
                      </h1>
                      <p
                        class="fs--16 fs-tablet-12 mt-md-15 mt-phone-10"
                        data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                      >
                        Enter your new password below
                      </p>
                    </div>
                    <div
                      class="wrapper-bottom mt-lg-50 mt-tablet-25 mt-phone-35"
                      data-aos="fadeIn .8s ease-in-out .2s, d:loop"
                    >
                      <div class="container-password" data-form-container>
                        <form class="form-password form-password">
                          <input
                            type="hidden"
                            name="subject"
                            value="[password]"
                          />
                          <div class="container-input container-input-password col-lg-12">
                            <label for="login-password-old">
                              Enter your old password
                            </label>
                            <input
                              id="login-password-old"
                              class="password"
                              name="password"
                              type="password"
                              placeholder="* * * * * *"
                              required
                            />
                            <div class="toggle-password">
                              <i class="icon-password"></i>
                              <i class="icon-password-hide"></i>
                            </div>
                          </div>
                          <div class="container-input container-input-password col-lg-12">
                            <label for="login-password-new-1">
                              Enter your NEW password
                            </label>
                            <input
                              id="login-password-new-1"
                              class="password"
                              name="password"
                              type="password"
                              placeholder="* * * * * *"
                              required
                            />
                            <div class="toggle-password">
                              <i class="icon-password"></i>
                              <i class="icon-password-hide"></i>
                            </div>
                          </div>
                          <div class="container-input container-input-password col-lg-12">
                            <label for="login-password-new-2">
                              Confirm your NEW password
                            </label>
                            <input
                              id="login-password-new-2"
                              class="password"
                              name="password"
                              type="password"
                              placeholder="* * * * * *"
                              required
                            />
                            <div class="toggle-password">
                              <i class="icon-password"></i>
                              <i class="icon-password-hide"></i>
                            </div>
                          </div>
                          <div class="container-submit flex-mobile-center col-lg-12 mt-tablet-15 mt-phone-40">
                            <button
                              type="submit"
                              class="bt-submit btn-medium-wide btn-red btn-hover-black-white w-lg-100"
                            >
                              <span class="submit-text split-chars">
                                <span>Reset password</span>
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
          </main>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
