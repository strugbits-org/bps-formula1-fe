"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { pageLoadEnd, pageLoadStart } from "@/utils/AnimationFunctions";
import AnimateLink from "@/components/Common/AnimateLink";
import { useCookies } from "react-cookie";
import { getProductsCart } from "@/services/cartServices";
import { calculateTotalCartQuantity } from "@/utils/utils";
import { getCategoriesData } from "@/services/apiServices";

const Navbar = ({ homePageData, collectionsData }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const collection = searchParams.get("collection");
  const category = searchParams.get("category");

  const [cookies, setCookie] = useCookies(["cartQuantity", "authToken"]);
  const [collectionDropdownOpen, setCollectionDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState({
    collectionName: null,
    collectionSlug: null,
  });
  const [selectedCategory, setSelectedCategory] = useState();
  const [categoriesData, setCategoriesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(router.query || "");
  const [cartQuantity, setCartQuantity] = useState(0);

  
const getCate = async (collectionSlug) => {
  try {
    let selectedCollections;
    if (collectionSlug) {
      selectedCollections = collectionsData
        .filter((x) => x.collectionSlug === collectionSlug)
        .map((x) => x._id);
    } else {
      selectedCollections = collectionsData
        .filter((x) => x.collectionSlug === selectedCollection.collectionSlug)
        .map((x) => x._id);
    }

    const res = await getCategoriesData(selectedCollections);

    const _selectedCategory = res.find(
      (x) => x.parentCollection._id === category
    )?.parentCollection?.name;
    if (_selectedCategory) setSelectedCategory(_selectedCategory);
    setCategoriesData(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};
useEffect(() => {
  getCate();
}, []);

useEffect(() => {
  const _selectedCollection = collectionsData.find(
    (x) => x.collectionSlug === collection
  )?.collectionName;

  if (_selectedCollection)
    setSelectedCollection({
      collectionName: _selectedCollection,
      collectionSlug: null,
    });
  const _selectedCategory = categoriesData.find(
    (x) => x.parentCollection._id === category
  )?.parentCollection?.name;
  if (_selectedCategory) setSelectedCategory(_selectedCategory);

  if (
    typeof window !== "undefined" &&
    pathname === "/" &&
    window.location.hash !== "#sign-in" &&
    window.location.hash !== "#create-account"
  ) {
    document.body.setAttribute("data-home-state", "");
  }
}, [pathname, router, searchParams]);

  const handleCollectionSelection = (name, collectionSlug) => {
    pageLoadStart();
    setSelectedCollection({
      collectionName: name,
      collectionSlug: collectionSlug,
    });
    setCollectionDropdownOpen(false);
    if (pathname === "/products") {
      const queryParams = new URLSearchParams(searchParams);
      queryParams.set("collection", collectionSlug);
      queryParams.delete("category");
      queryParams.delete("subCategory");
      router.push(`${pathname}?${queryParams.toString()}`);
      setSelectedCategory(null);
    } else {
      router.push(`/collections/${collectionSlug}`);
    }
    getCate(collectionSlug);
  };

  const handleCategorySelection = (name, id) => {
    pageLoadStart();
    setSelectedCategory(name);
    setCategoryDropdownOpen(false);
    const queryParams = new URLSearchParams(searchParams);
    const collectionName = selectedCollection.collectionSlug;
    if (
      pathname !== "/products" &&
      id === "all" &&
      (selectedCategory === "" || selectedCategory === "All")
    ) {
      setTimeout(() => {
        pageLoadEnd();
      }, 1000);
      return;
    }

    if (pathname !== "/products" && id === "all" && collectionName === null) {
      router.push(`/products`);
    }

    if (pathname !== "/products" && id === "all" && collectionName !== null) {
      queryParams.set("collection", collectionName);
      queryParams.delete("category");
      queryParams.delete("subCategory");
      const newPathname = pathname === "/products" ? pathname : "/products";
      router.push(`${newPathname}?${queryParams.toString()}`);
    }

    if (
      pathname !== "/products" &&
      id !== null &&
      id !== "all" &&
      collectionName === null
    ) {
      queryParams.set("category", id);
      queryParams.delete("subCategory");
      const newPathname = pathname === "/products" ? pathname : "/products";
      router.push(`${newPathname}?${queryParams.toString()}`);
    }

    if (pathname !== "/products" && id !== null && collectionName !== null) {
      queryParams.set("collection", collectionName);
      queryParams.set("category", id);
      queryParams.delete("subCategory");
      const newPathname = pathname === "/products" ? pathname : "/products";
      router.push(`${newPathname}?${queryParams.toString()}`);
    }

    // PRODUCTS PAGE LOGIC
    if (pathname === "/products" && id === "all" && collection !== null) {
      queryParams.delete("category");
      queryParams.delete("subCategory");
      const newPathname = pathname === "/products" ? pathname : "/products";
      router.push(`${newPathname}?${queryParams.toString()}`);
    }

    if (
      pathname === "/products" &&
      id !== null &&
      id !== "all" &&
      collection !== null
    ) {
      queryParams.set("category", id);
      queryParams.delete("subCategory");
      const newPathname = pathname === "/products" ? pathname : "/products";
      router.push(`${newPathname}?${queryParams.toString()}`);
    }

    if (pathname === "/products" && id !== null && id !== "all") {
      queryParams.set("category", id);
      queryParams.delete("subCategory");
      const newPathname = pathname === "/products" ? pathname : "/products";
      router.push(`${newPathname}?${queryParams.toString()}`);
    }

    const category = queryParams.get("category");
    if ((pathname === "/products" && id === "all") || category === id) {
      setTimeout(() => {
        pageLoadEnd();
      }, 1000);
      return;
    }

    // if (
    //   pathname === "/products" &&
    //   (selectedCategory === "" || selectedCategory === "All")
    // ) {
    //   queryParams.delete("collection");
    // }
    // if (pathname === "/products") {
    //   queryParams.set("collection", collection);
    // }

    // if (collectionName && collectionName !== "all") {
    //   queryParams.set("collection", collectionName);
    // } else {
    //   queryParams.delete("collection");
    // }

    // queryParams.set("category", id);
    // queryParams.delete("subCategory");
    // const newPathname = pathname === "/products" ? pathname : "/products";
    // router.push(`${newPathname}?${queryParams.toString()}`);
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
    } catch (error) {}
  };

  useEffect(() => {
    if (cookies?.cartQuantity === undefined && cookies?.authToken !== undefined)
      getCartTotalQuantity();
    setCartQuantity(cookies.cartQuantity);
  }, [cookies]);

  const getCartTotalQuantity = async () => {
    const response = await getProductsCart();
    const total = calculateTotalCartQuantity(response.lineItems);
    setCookie("cartQuantity", total);
  };
  useEffect(() => {
    if (cookies?.authToken !== undefined) {
      getCartTotalQuantity();
      document.body.setAttribute("data-login-state", "logged");
    }
  }, []);

  return (
    <header id="header" data-parent-submenu>
      <div className="container-header-sign-in">
        <div className="container-h-1 order-phone-2 mr-phone-10">
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
              className="btn-small btn-red btn-hover-white btn-sign-in"
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
              <span>{selectedCollection.collectionName || "COLLECTIONS"}</span>
              <i className="icon-arrow-down"></i>
            </button>
            <div
              className={`wrapper-list-dropdown ${
                collectionDropdownOpen ? "active" : "leave"
              }`}
              data-get-submenu="collections"
            >
              <ul className="list-dropdown ">
                <li
                  onClick={() => {
                    setSelectedCollection({
                      collectionName: "All",
                      collectionSlug: "all",
                    });
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
              className={`wrapper-list-dropdown ${
                categoryDropdownOpen ? "active" : "leave"
              }`}
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
                className={`container-input input-header ${
                  searchTerm !== "" ? "preenchido" : ""
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
