import { useNavigate } from "react-router-dom";

import { AnimationFunction } from "../utils/AnimationFunctions";
import AnimateLink from "../components/AnimateLink";

const collectionFilter = [
  {
    name: "All",
    href: "/collections",
  },
  {
    name: "Legacy",
    href: "/collections",
  },
  {
    name: "Neon house",
    href: "/collections",
  },
  {
    name: "Classic Vegas",
    href: "/collections",
  },
  {
    name: "Paddock",
    href: "/collections",
  },
];
const categoryFilter = [
  {
    name: "All",
    href: "/products",
  },
  {
    name: "Highboys",
    href: "/products",
  },
  {
    name: "Barstools",
    href: "/products",
  },
  {
    name: "Cafe tables",
    href: "/products",
  },
  {
    name: "Communal",
    href: "/products",
  },
  {
    name: "Banquettes",
    href: "/products",
  },
  {
    name: "Chairs",
    href: "/products",
  },
  {
    name: "Bars",
    href: "/products",
  },
  {
    name: "Greenery",
    href: "/products",
  },
  {
    name: "Lighting",
    href: "/products",
  },
];
const SignedUserNavbar = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      AnimationFunction();
      setTimeout(() => {
        // Replace this with your navigation logic
        navigate("/search");
      }, 1000);
    } catch (error) {}
  };
  return (
    <header id="header" data-parent-submenu>
      <div className="container-header-sign-in">
        <div className="container-h-1 order-phone-2 mr-phone-10">
          <AnimateLink
            to="/gallery"
            className="btn-small btn-dark btn-hover-white-black"
          >
            <div className="split-chars">
              <span>Gallery</span>
            </div>
          </AnimateLink>
        </div>
        <div className="container-h-2 mx-md-45 order-phone-1">
          <AnimateLink
            to="/"
            className="logo"
            data-pjax
            aria-label="Blueprint Studios | F1 Las Vegas Grand Prix"
          >
            <span>Blueprint Studios | F1 Las Vegas Grand Prix</span>
          </AnimateLink>
        </div>
        <div className="container-h-3 order-phone-3">
          <button
            className="btn-small btn-red btn-hover-white btn-sign-in"
            data-href="index.html#sign-in"
          >
            <i className="icon-profile"></i>
            <div className="split-chars">
              <span className="no-phone">Sign In</span>
            </div>
          </button>
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
                {collectionFilter.map((data, index) => {
                  const { name, href } = data;
                  return (
                    <li key={index}>
                      <AnimateLink to={href} className="link-dropdown">
                        <span>{name}</span>
                      </AnimateLink>
                    </li>
                  );
                })}
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
                {categoryFilter.map((data, index) => {
                  const { name, href } = data;
                  return (
                    <li key={index}>
                      <AnimateLink to={href} className="link-dropdown">
                        <span>{name}</span>
                      </AnimateLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="container-h-2 mx-lg-45 order-mobile-1">
          <AnimateLink
            to="/"
            className="logo"
            data-pjax
            aria-label="Blueprint Studios | F1 Las Vegas Grand Prix"
          >
            <span>Blueprint Studios | F1 Las Vegas Grand Prix</span>
          </AnimateLink>
        </div>
        <div className="container-h-3 order-mobile-3">
          <div className="container-form" data-get-submenu="search">
            <form
              onSubmit={handleSubmit}
              className="form-search header-search"
              data-pjax
              data-search-form
            >
              <div className="container-input input-header">
                <label for="search" className="split-chars">
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
          <AnimateLink to="/my-account" className="link-account">
            <i className="icon-profile"></i>
          </AnimateLink>
          <AnimateLink to="/cart" className="link-account">
            <i className="icon-cart"></i>
          </AnimateLink>
        </div>
      </div>
    </header>
  );
};
export default SignedUserNavbar;
