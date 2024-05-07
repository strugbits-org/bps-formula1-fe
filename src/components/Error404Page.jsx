const Error404Page = () => {
  return (
    <>
      <section className="section-error section-intro" data-aos="d:loop">
        <div className="container-fluid pos-relative z-5">
          <div className="row">
            <div className="col-12 column">
              <h1 className="font-2 text-center text-uppercase white-1">
                <span
                  className="fs--25 fs-phone-20 page-not-found split-chars"
                  data-aos="d:loop"
                >
                  Page not found
                </span>
                <span
                  className="fs--200 mt-lg-20 mt-mobile-10 split-chars"
                  data-aos="d:loop"
                >
                  404
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="container-logo-bottom">
          <div className="logo-bottom">
            <div className="container-img">
              <img
                src="images/logo-formula-1.svg"
                data-preload
                className="media"
                alt="product"
              />
            </div>
            <div className="container-text">
              <h2 className="font-2 fs--20 fs-tablet-9 fs-phone-11 text-uppercase">
                Las Vegas Grand Prix
              </h2>
              <h3 className="fs--14 fs-mobile-7 mt-lg-20 mt-mobile-10 text-uppercase">
                Hospitality Furnishings & Event Decor
              </h3>
            </div>
          </div>
        </div>
        <div className="container-fluid container-footer no-phone">
          <div className="row row-1">
            <div className="col-lg-3 col-md-6 offset-lg-1 column-1">
              <a
                href="privacy-policy.html"
                className="fs--14 font-3 text-uppercase btn-underlined-gray mr-50"
              >
                <span>Privacy Policy</span>
              </a>
              <a
                href="https://www.blueprintstudios.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="fs--14 font-3 text-uppercase btn-underline-gray"
              >
                <span>© BLUEPRINT STUDIOS 2023</span>
              </a>
            </div>
            <div className="col-lg-2 col-md-6 offset-lg-5 column-2">
              <ul className="list-social-media">
                <li>
                  <a href="index.html" className="link-social-media">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="index.html" className="link-social-media">
                    <i className="icon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="index.html" className="link-social-media">
                    <i className="icon-x"></i>
                  </a>
                </li>
                <li>
                  <a href="index.html" className="link-social-media">
                    <i className="icon-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-img" data-aos="d:loop">
          <div className="container-img bg-img">
            <img
              src="images/home/img-01.jpg"
              data-preload
              className="media"
              alt="product"
            />
          </div>
        </div>
      </section>

      <div id="reloading-area"></div>
    </>
  );
};

export default Error404Page;
