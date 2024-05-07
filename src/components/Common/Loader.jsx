const Loader = () => {
  return (
    <div id="loader">
      <div className="wrapper-loader">
        <div className="container-logos">
          <div className="wrapper-img logo-formula-1">
            <div className="container-img">
              <img
                src="/images/logo-formula-1.svg"
                data-preload
                className="media"
                alt="logo"
              />
            </div>
            <div className="bar"></div>
          </div>
          <div className="wrapper-img logo-blueprint-rentals">
            <div className="container-img">
              <img
                src="/images/logo-blueprint-rentals.svg"
                data-preload
                className="media"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="loading-progressbar align-self-end"></div>
    </div>
  );
};

export default Loader;
