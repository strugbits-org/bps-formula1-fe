import { useLocation, useNavigate } from 'react-router-dom';
import usePageInitialization from '../hooks/usePageInitialization';

import { AnimationFunction } from '../utils/AnimationFunctions';
import AnimateLink from '../components/AnimateLink';
import { useEffect, useState } from 'react';
import { categoryFilter } from "../utils/Categories";
import { collectionFilter } from "../utils/Collections";

const Navbar = () => {
  const navigate = useNavigate();
  usePageInitialization("pg-home", ".initScript", ".home");

  const [collectionDropdownOpen, setCollectionDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState("Collections");
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  // Function to handle selection of a collection

  const location = useLocation();
  const [previousPath, setPreviousPath] = useState(null);
  useEffect(() => {
    // Store the previous path when the location changes
    if (location) {
      setPreviousPath(location);
      if (location.pathname === "/" && location.hash !== "#sign-in") {
        document.body.setAttribute("data-home-state", "");
      }
    }
  }, [location]);

  const handleCollectionSelection = (name) => {
    setSelectedCollection(name);
    setCollectionDropdownOpen(false);
    navigate("/collections");
  };
  const handleCategorySelection = (name) => {
    setSelectedCategory(name);
    setCategoryDropdownOpen(false);
    navigate("/products");
  };

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

  const signIn = () => {
    try {
      navigate("/#sign-in");
      document.body.setAttribute("data-home-state", "sign-in");
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
          {previousPath?.pathname === "/gallery" ? (
            <button
              onClick={signIn}
              className="btn-small btn-red btn-hover-white"
            >
              <i className="icon-profile"></i>
              <div className="split-chars">
                <span className="no-phone">Sign In</span>
              </div>
            </button>
          ) : (
            <button
              className="btn-small btn-red btn-hover-white btn-sign-in"
              data-href="index.html#sign-in"
            >
              <i className="icon-profile"></i>
              <div className="split-chars">
                <span className="no-phone">Sign In</span>
              </div>
            </button>
          )}
        </div>
      </div>
      <div className="container-header-logged">
        <div className="container-h-1 order-mobile-2">
          <div className="container-dropdown dropdown-collections">
            <button
              onClick={() => setCollectionDropdownOpen(true)}
              className="btn-dropdown"
              data-set-submenu="collections"
            >
              <span>{selectedCollection}</span>
              <i className="icon-arrow-down"></i>
            </button>
            <div
              className={`wrapper-list-dropdown ${
                collectionDropdownOpen ? "active" : "leave"
              }`}
              data-get-submenu="collections"
            >
              <ul className="list-dropdown ">
                {collectionFilter.map((data, index) => {
                  const { name } = data;
                  return (
                    <li
                      key={index}
                      onClick={() => handleCollectionSelection(name)}
                    >
                      <span className="link-dropdown">
                        <span>{name}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="container-dropdown dropdown-category">
            <button
              onClick={() => setCategoryDropdownOpen(true)}
              className="btn-dropdown"
              data-set-submenu="category"
            >
              <span>{selectedCategory}</span>
              <i className="icon-arrow-down"></i>
            </button>
            <div
              className={`wrapper-list-dropdown ${
                categoryDropdownOpen ? "active" : "leave"
              }`}
              data-get-submenu="category"
            >
              <ul className="list-dropdown">
                {categoryFilter.map((data, index) => {
                  const { name } = data;
                  return (
                    <li
                      key={index}
                      onClick={() => handleCategorySelection(name)}
                    >
                      <span className="link-dropdown">
                        <span>{name}</span>
                      </span>
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
export default Navbar;
