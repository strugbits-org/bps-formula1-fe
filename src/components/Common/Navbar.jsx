"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

import { pageLoadStart } from "@/utils/AnimationFunctions";
import AnimateLink from "@/components/Common/AnimateLink";
import { useCookies } from 'react-cookie';
import { getProductsCart } from "@/services/cartServices";
import { calculateTotalCartQuantity } from "@/utils/utils";

const Navbar = ({ homePageData, collectionsData, categoriesData }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [cookies, setCookie] = useCookies(['cartQuantity', 'authToken']);

  const [collectionDropdownOpen, setCollectionDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState(router.query.for || "");
  const [cartQuantity, setCartQuantity] = useState(0);
  // Function to handle selection of a collection

  useEffect(() => {
    if (router) {
      const _selectedCollection = collectionsData.find(x => x.collectionSlug === router.query.slug || x.collectionSlug === router.query.collection)?.collectionName;
      if (_selectedCollection) setSelectedCollection(_selectedCollection);
      const _selectedCategory = categoriesData.find(x => x.parentCollection._id === router.query.category)?.parentCollection?.name;
      if (_selectedCategory) setSelectedCategory(_selectedCategory);

      if (
        pathname === "/" &&
        router.asPath !== "#sign-in" &&
        router.asPath !== "#create-account"
      ) {
        document.body.setAttribute("data-home-state", "");
      }
    }
  }, [pathname, router]);

  const handleCollectionSelection = (name, collectionSlug) => {
    setSelectedCollection(name);
    setCollectionDropdownOpen(false);
    pageLoadStart();
    if (router.pathname === "/products") {
      const queryParams = new URLSearchParams(router.query);
      queryParams.set("collection", collectionSlug);
      queryParams.delete("category");
      queryParams.delete("subCategory");
      router.push({ pathname: router.pathname, query: queryParams.toString() });
    } else {
      router.push(`/collections/${collectionSlug}`)
    }
  };
  const handleCategorySelection = (name, id) => {
    setSelectedCategory(name);
    setCategoryDropdownOpen(false);
    pageLoadStart();
    if (id === "all" && router.query.collection === undefined) {
      router.push(`/products`);
    } else if (id === "all" && router.query.collection !== undefined) {
      const queryParams = new URLSearchParams(router.query);
      queryParams.delete("category");
      queryParams.delete("subCategory");
      router.push({ pathname: router.pathname === "/products" ? router.pathname : `/products`, query: queryParams.toString() });
    } else {
      const queryParams = new URLSearchParams(router.query);
      queryParams.set("category", id);
      queryParams.delete("subCategory");
      router.push({ pathname: router.pathname === "/products" ? router.pathname : `/products`, query: queryParams.toString() });
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      pageLoadStart();
      setTimeout(() => {
        router.push("/search?for=" + searchTerm);
      }, 1000);
    } catch (error) { }
  };


  useEffect(() => {
    if (cookies?.cartQuantity === undefined && cookies?.authToken !== undefined) getCartTotalQuantity();
    setCartQuantity(cookies.cartQuantity);
  }, [cookies]);

  const getCartTotalQuantity = async () => {
    const response = await getProductsCart();
    const total = calculateTotalCartQuantity(response.lineItems);
    setCookie("cartQuantity", total);
  }
  useEffect(() => {
    if (cookies?.authToken !== undefined) getCartTotalQuantity();
  }, []);

  // const signIn = () => {
  //   try {
  //     // AnimationFunction();
  //     navigate("/#sign-in");
  //     document.body.setAttribute("data-home-state", "sign-in");
  //   } catch (error) {}
  // };
  return (
    <header id="header" data-parent-submenu>
      <div className="container-header-sign-in">
        <div className="container-h-1 order-phone-2 mr-phone-10">
          {/* <a
            href="gallery.html"
            className="btn-small btn-dark btn-hover-white-black"
          >
            <div className="split-chars">
              <span>Gallery</span>
            </div>
          </a> */}
          <AnimateLink
            to={homePageData?.galleryButtonRedirection || "/gallery"}
            className="btn-small btn-dark btn-hover-white-black"
          >
            <div className="split-chars">
              <span>{homePageData?.galleryButtonLabel}</span>
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
          {pathname === "/gallery" ||
            pathname === "/privacy-and-policy" ||
            pathname === "/terms-and-condition" ? (
            <AnimateLink
              to="/#sign-in"
              // onClick={signIn}
              className="btn-small btn-red btn-hover-white btn-sign-in"
            // data-href="index.html#sign-in"
            >
              <i className="icon-profile"></i>
              <div className="split-chars">
                <span className="no-phone">
                  {homePageData?.signInButtonLabel}
                </span>
              </div>
            </AnimateLink>
          ) : (
            <button
              className="btn-small btn-red btn-hover-white btn-sign-in"
              data-href="index.html#sign-in"
            >
              <i className="icon-profile"></i>
              <div className="split-chars">
                <span className="no-phone">
                  {homePageData?.signInButtonLabel}
                </span>
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
              <span>{selectedCollection || "COLLECTIONS"}</span>
              <i className="icon-arrow-down"></i>
            </button>
            <div
              className={`wrapper-list-dropdown ${collectionDropdownOpen ? "active" : "leave"
                }`}
              data-get-submenu="collections"
            >
              <ul className="list-dropdown ">
                <li
                  onClick={() => {
                    setSelectedCollection("All");
                    setCollectionDropdownOpen(false);
                    pageLoadStart();
                    router.push("/products");
                  }}
                >
                  <span className="link-dropdown cursor-pointer">
                    <span>All</span>
                  </span>
                </li>
                {collectionsData
                  .sort((a, b) => a.order - b.order)
                  .map((data, index) => {
                    const { collectionName, collectionSlug } = data;
                    return (
                      <li
                        key={index}
                        className="cursor-pointer"
                        onClick={() =>
                          handleCollectionSelection(
                            collectionName,
                            collectionSlug
                          )
                        }
                      >
                        <span className="link-dropdown">
                          <span>{collectionName}</span>
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
              <span>{selectedCategory || "CATEGORIES"}</span>
              <i className="icon-arrow-down"></i>
            </button>
            <div
              className={`wrapper-list-dropdown ${categoryDropdownOpen ? "active" : "leave"}`}
              data-get-submenu="category"
            >
              <ul className="list-dropdown">
                <li onClick={() => handleCategorySelection("All", "all")}>
                  <span className="link-dropdown cursor-pointer">
                    <span>All</span>
                  </span>
                </li>
                {categoriesData.map((data, index) => {
                  const { name } = data.parentCollection;
                  return (
                    <li
                      key={index}
                      onClick={() =>
                        handleCategorySelection(
                          data.parentCollection.name,
                          data.parentCollection._id
                        )
                      }
                    >
                      <span className="link-dropdown cursor-pointer">
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
              <div
                className={`container-input input-header ${searchTerm !== "" ? "preenchido" : ""
                  }`}
              >
                <label htmlFor="search" className="split-chars">
                  Search
                </label>
                <input
                  type="search"
                  className="search"
                  name="for"
                  value={searchTerm}
                  onChange={handleInputChange}
                  required
                />
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
          <AnimateLink to="/cart" className="link-cart">
            <i className="icon-cart"></i>
            <span class="item-number">
              {cartQuantity < 100 ? cartQuantity : "99+"}
            </span>
          </AnimateLink>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
