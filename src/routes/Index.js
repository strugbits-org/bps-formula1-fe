// Layouts

import AnonymousLayout from "../layout/AnonymousLayout";
import SignedUserLayout from "../layout/SignedUserLayout";

import { renderRoutes } from "./generate-routes";
// Pages
import PrivacyAndPolicy from "../pages/PrivacyAndPolicy";
import TermsAndCondition from "../pages/TermsAndCondition";
import Error404Page from "../pages/Error404Page";

import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Collections from "../pages/Collection/Collections";
import CollectionsPost from "../pages/Collection/CollectionsPost";
import CollectionsCategory from "../pages/Collection/CollectionsCategory";

import MyAccount from "../pages/Account/MyAccount";
import ChangePassword from "../pages/Account/ChangePassword";
import QuotesHistory from "../pages/Account/QuotesHistory";
import SavedProducts from "../pages/Account/SavedProducts";

import Products from "../pages/Product/Products";
import ProductPost from "../pages/Product/ProductsPost";

import Cart from "../pages/Cart";
import Search from "../pages/Search";

export const routes = [
  {
    layout: AnonymousLayout,
    routes: [
      {
        name: "Privacy and Policy",
        title: "Privacy and Policy page",
        component: PrivacyAndPolicy,
        path: "/privacy-and-policy",
      },
      {
        name: "Terms and Condition",
        title: "Terms and Condition page",
        component: TermsAndCondition,
        path: "/terms-and-condition",
      },
      {
        name: "Error 404",
        title: "Error 404 page",
        component: Error404Page,
        path: "/error",
      },
    ],
  },
  {
    layout: SignedUserLayout,
    routes: [
      {
        name: "Home",
        title: "Home page",
        component: Home,
        path: "/",
      },
      {
        name: "Gallery",
        title: "Gallery page",
        component: Gallery,
        path: "/gallery",
      },
      {
        name: "Collection",
        title: "Collection page",
        component: Collections,
        path: "/collections",
      },
      {
        name: "Collection post",
        title: "Collection post page",
        component: CollectionsPost,
        path: "/collections-post",
      },
      {
        name: "Collections category",
        title: "Collections category page",
        component: CollectionsCategory,
        path: "/collections-category",
      },
      {
        name: "My Account",
        title: "My Account",
        component: MyAccount,
        path: "/my-account",
      },
      {
        name: "Change Password",
        title: "Change Password",
        component: ChangePassword,
        path: "/my-account-change-password",
      },
      {
        name: "Quotes History",
        title: "Quotes History",
        component: QuotesHistory,
        path: "/my-account-quotes-history",
      },
      {
        name: "Saved Products",
        title: "Saved Products",
        component: SavedProducts,
        path: "/my-account-saved-products",
      },

      {
        name: "Products",
        title: "Products page",
        component: Products,
        path: "/products",
      },
      {
        name: "Product post",
        title: "Product post page",
        component: ProductPost,
        path: "/products-post",
      },
      {
        name: "Cart",
        title: "Cart page",
        component: Cart,
        path: "/cart",
      },
      {
        name: "Search",
        title: "Search page",
        component: Search,
        path: "/search",
      },
    ],
  },
];

export const Routes = renderRoutes(routes);
