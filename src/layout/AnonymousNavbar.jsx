import { Link } from "react-router-dom";

const AnonymousNavbar = () => {
  return (
    <header id="header" data-parent-submenu>
      <div className="container-header-sign-in">
        <div className="container-h-1 order-phone-2 mr-phone-10">
          <Link
            to="/gallery"
            className="btn-small btn-dark btn-hover-white-black"
          >
            <div className="split-chars">
              <span>Gallery</span>
            </div>
          </Link>
        </div>
        <div className="container-h-2 mx-md-45 order-phone-1">
          <a
            href="index.html"
            className="logo"
            data-pjax
            aria-label="Blueprint Studios | F1 Las Vegas Grand Prix"
          >
            <span>Blueprint Studios | F1 Las Vegas Grand Prix</span>
          </a>
        </div>
        <div className="container-h-3 order-phone-3">
          {/* <button
            className="btn-small btn-red btn-hover-white btn-sign-in"
            data-href="index.html#sign-in"
          >
            <i className="icon-profile"></i>
            <div className="split-chars">
              <span className="no-phone">Sign In</span>
            </div>
          </button> */}
          <Link
            to="/sign-in"
            className="btn-small btn-red btn-hover-white btn-sign-in"
          >
            <i className="icon-profile"></i>
            <div className="split-chars">
              <span className="no-phone">Sign In</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="container-header-logged">
        <div className="container-h-1 order-mobile-2">
          <div className="container-dropdown dropdown-collections">
            <button className="btn-dropdown" data-set-submenu="collections">
              <span>Collections</span>
              <i className="icon-arrow-down"></i>
            </button>
            <div
              className="wrapper-list-dropdown"
              data-get-submenu="collections"
            >
              <ul className="list-dropdown">
                <li>
                  <a href="collections.html" className="link-dropdown">
                    <span>All</span>
                  </a>
                </li>
                <li>
                  <a href="collections.html" className="link-dropdown">
                    <span>Legacy</span>
                  </a>
                </li>
                <li>
                  <a href="collections.html" className="link-dropdown">
                    <span>Neon house</span>
                  </a>
                </li>
                <li>
                  <a href="collections.html" className="link-dropdown">
                    <span>Classic Vegas</span>
                  </a>
                </li>
                <li>
                  <a href="collections.html" className="link-dropdown">
                    <span>Paddock</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container-dropdown dropdown-category">
            <button className="btn-dropdown" data-set-submenu="category">
              <span>Categories</span>
              <i className="icon-arrow-down"></i>
            </button>
            <div className="wrapper-list-dropdown" data-get-submenu="category">
              <ul className="list-dropdown">
                <li>
                  <a href="products.html" className="link-dropdown">
                    <span>All</span>
                  </a>
                </li>
                <li>
                  <a href="products.html" className="link-dropdown">
                    <span>Highboys</span>
                  </a>
                </li>
                <li>
                  <a href="products.html" className="link-dropdown">
                    <span>Barstools</span>
                  </a>
                </li>
                <li>
                  <a href="products.html" className="link-dropdown">
                    <span>Cafe tables</span>
                  </a>
                </li>
                <li>
                  <a href="products.html" className="link-dropdown">
                    <span>Communal</span>
                  </a>
                </li>
                <li>
                  <a href="products.html" className="link-dropdown">
                    <span>Banquettes</span>
                  </a>
                </li>
                <li>
                  <a href="products.html" className="link-dropdown">
                    <span>Chairs</span>
                  </a>
                </li>
                <li>
                  <a href="products.html" className="link-dropdown">
                    <span>Bars</span>
                  </a>
                </li>
                <li>
                  <a href="products.html" className="link-dropdown">
                    <span>Greenery</span>
                  </a>
                </li>
                <li>
                  <a href="products.html" className="link-dropdown">
                    <span>Lighting</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-h-2 mx-lg-45 order-mobile-1">
          <a
            href="index.html"
            className="logo"
            data-pjax
            aria-label="Blueprint Studios | F1 Las Vegas Grand Prix"
          >
            <span>Blueprint Studios | F1 Las Vegas Grand Prix</span>
          </a>
        </div>
        <div className="container-h-3 order-mobile-3">
          <div className="container-form" data-get-submenu="search">
            <form
              action="search.html"
              className="form-search header-search"
              data-pjax
              data-search-form
            >
              <div className="container-input input-header">
                <label htmlFor="search" className="split-chars">
                  Search
                </label>
                <input type="search" className="search" name="for" required />
                <div className="container-submit">
                  <button
                    type="submit"
                    className="btn-submit"
                    data-cursor-style="white"
                  >
                    <span className="hide">search</span>
                    <i className="icon-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <button className="btn-search no-desktop" data-set-submenu="search">
            <i className="icon-search"></i>
          </button>
          <a href="my-account.html" className="link-account">
            <i className="icon-profile"></i>
          </a>
          <a href="cart.html" className="link-cart">
            <i className="icon-cart"></i>
          </a>
        </div>
      </div>
    </header>
  );
};
export default AnonymousNavbar;
