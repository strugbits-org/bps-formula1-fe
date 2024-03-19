const SecondLoader = () => {
  return (
    <div id="loader">
      <div class="wrapper-loader">
        <div class="container-logos">
          <div class="wrapper-img logo-formula-1">
            <div class="container-img">
              <img src="images/logo-formula-1.svg" data-preload class="media" />
            </div>
            <div class="bar"></div>
          </div>
          <div class="wrapper-img logo-blueprint-rentals">
            <div class="container-img">
              <img
                src="images/logo-blueprint-rentals.svg"
                data-preload
                class="media"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="loading-progressbar align-self-end"></div>
    </div>
  );
};

export default SecondLoader;
