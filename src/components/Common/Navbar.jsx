"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams, useParams } from "next/navigation";

import { pageLoadEnd, pageLoadStart } from "@/utils/AnimationFunctions";
import AnimateLink from "@/components/Common/AnimateLink";
import { useCookies } from "react-cookie";
import { getProductsCart } from "@/services/cartServices";
import { calculateTotalCartQuantity } from "@/utils/utils";
import { useQueryState } from 'nuqs'


const Navbar = ({ homePageData, collectionsData, categoriesData }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  // const collection = searchParams.get("collection");
  // const category = searchParams.get("category");

  // const collection = searchParams.get("collection");

  const [collection, setCollection] = useQueryState("collection", { history: 'push' });
  const [category, setCategory] = useQueryState("category", { history: 'push' });
  const [subCategory, setSubCategory] = useQueryState("subCategory", { history: 'push' });

  const [cookies, setCookie] = useCookies(["cartQuantity", "authToken"]);
  const [collectionDropdownOpen, setCollectionDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState({
    collectionName: null,
    collectionSlug: null,
  });
  const [selectedCategory, setSelectedCategory] = useState();
  const [activeCategoriesData, setActiveCategoriesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(router.query || "");
  const [searchFor, setSearchFor] = useQueryState("for", { history: 'push' });
  const [cartQuantity, setCartQuantity] = useState(0);
  const categoryDropdownRef = useRef(null);
  const collectionsDropdownRef = useRef(null);

  const getActiveCategories = async () => {
    let categories;
    if (searchParams.has("collection")) {
      const selectedCollectionSlug = selectedCollection.collectionSlug;
      const selectedCollections = collectionsData.filter(x => x.collectionSlug === selectedCollectionSlug).map(x => x._id);
      categories = categoriesData.filter(category => category.f1Collections?.some(x => selectedCollections.includes(x._id)));
    } else {
      categories = categoriesData;
    }

    const _selectedCategory = categories.find(x => x.parentCollection._id === category)?.parentCollection?.name;
    if (_selectedCategory && !selectedCollection.collectionSlug) setSelectedCategory(_selectedCategory);
    setActiveCategoriesData(categories);
    return categories;
  };


  useEffect(() => {
    getActiveCategories();
  }, [selectedCollection, searchParams]);

  useEffect(() => {
    if (!category && !collection && !selectedCategory && !selectedCollection) {
      setSelectedCategory(null);
      setSelectedCollection({
        collectionName: null,
        collectionSlug: null,
      });
    }
    const _selectedCollection = collectionsData.find(
      (x) => x.collectionSlug === collection
    );

    if (_selectedCollection)
      setSelectedCollection({
        collectionName: _selectedCollection.collectionName,
        collectionSlug: _selectedCollection.collectionSlug,
      });
    const _selectedCategory = activeCategoriesData.find(
      (x) => x.parentCollection._id === category
    )?.parentCollection?.name;
    if (_selectedCategory) setSelectedCategory(_selectedCategory);

    if (
      typeof window !== "undefined" &&
      pathname === "/" &&
      window.location.hash !== "#sign-in" &&
      window.location.hash !== "#create-account" &&
      window.location.hash !== "#confirm-email"
    ) {
      document.body.setAttribute("data-home-state", "");
    }

    if (params.slug) {
      const paramsCollection = collectionsData.find(
        (x) => x.collectionSlug === params.slug
      );
      setSelectedCollection({
        collectionName: paramsCollection?.collectionName,
        collectionSlug: paramsCollection?.collectionSlug,
      });
    }
  }, [pathname, router, searchParams]);

  const handleCollectionSelection = (name, collectionSlug) => {
    pageLoadStart();
    setSelectedCollection({
      collectionName: name,
      collectionSlug: collectionSlug,
    });
    collectionsDropdownRef.current.removeActive();
    setCollectionDropdownOpen(false);
    setTimeout(() => {
      if (pathname === "/products") {
        setCollection(collectionSlug);
        setCategory(null);
        setSubCategory(null);
        setSelectedCategory("All");
      } else {
        pageLoadStart();
        setTimeout(() => {
          router.push(`/collections/${collectionSlug}`);
        }, 1000);
      }
    }, 300);
  };

  const handleCategorySelection = (name, id) => {
    pageLoadStart();
    setSelectedCategory(name);
    categoryDropdownRef.current.removeActive();
    setCategoryDropdownOpen(false);
    setTimeout(() => {
      if (category === id) {
        if (subCategory) {
          setSubCategory(null);
        } else {
          setTimeout(pageLoadEnd, 600);
        }
        return;
      }

      const isProductsPage = pathname === "/products";
      const isAllCategory = id === "all";
      if (isProductsPage) {
        if (isAllCategory) {
          if (category || subCategory) {
            setCategory(null);
            setSubCategory(null);
          } else {
            setTimeout(pageLoadEnd, 600);
          }
          setSelectedCategory("All");
        } else {
          setCategory(id);
          if (subCategory) setSubCategory(null);
        }
        return;
      }

      const collectionSlug = selectedCollection.collectionSlug;
      if (!isProductsPage && isAllCategory) {
        router.push(`/products${collectionSlug ? '?collection=' + collectionSlug : ''}`);
        return;
      }

      if (!isProductsPage && id !== null) {
        if (collectionSlug) {
          router.push(`/products?collection=${collectionSlug}&category=${id}`);
        } else {
          router.push(`/products?category=${id}`);
        }
        return;
      }
    }, 300);
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    if (pathname === "/search") {
      setSearchFor(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      pageLoadStart();
      if (pathname === "/search") {
        setTimeout(() => {
          pageLoadEnd();
        }, 600);
      } else {
        router.push("/search?for=" + searchTerm);
      }
    } catch (error) { }
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
    setSearchTerm(searchFor);
  }, []);

  const linkTo = cookies.authToken ? "/collections" : "/";

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
            deleteHash={true}
          >
            <span>Blueprint Studios | F1 Las Vegas Grand Prix</span>
          </AnimateLink>
        </div>
        <div className="container-h-3 order-phone-3">
          {pathname === "/gallery" ||
            pathname === "/error" ||
            pathname === "/privacy-and-policy" ||
            pathname === "/reset-password" ||
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
              ref={collectionsDropdownRef}
            >
              <span>{selectedCollection.collectionName || "COLLECTIONS"}</span>
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
                    setSelectedCollection({
                      collectionName: "All",
                      collectionSlug: "all",
                    });
                    setSelectedCategory("All");
                    setCollectionDropdownOpen(false);
                    pageLoadStart();
                    if (pathname === "/products") setTimeout(pageLoadEnd, 1000);
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
              ref={categoryDropdownRef}
            >
              <span>{selectedCategory || "CATEGORIES"}</span>
              <i className="icon-arrow-down"></i>
            </button>
            <div
              className={`wrapper-list-dropdown ${categoryDropdownOpen ? "active" : "leave"
                }`}
              data-get-submenu="category"
            >
              <ul className="list-dropdown">
                <li onClick={() => handleCategorySelection("All", "all")}>
                  <span className="link-dropdown cursor-pointer">
                    <span>All</span>
                  </span>
                </li>
                {activeCategoriesData.map((data, index) => {
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
            to={linkTo}
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
