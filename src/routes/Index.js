// Layouts

import AnonymousLayout from "../layout/AnonymousLayout";
import SignedUserLayout from "../layout/SignedUserLayout";

// Pages

import Collections from "../pages/Collections";
import CollectionsPost from "../pages/CollectionsPost";
import CollectionsCategory from "../pages/CollectionsCategory";
import { renderRoutes } from "./generate-routes";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Account from "../pages/Account/Index";
import Products from "../pages/Products";
import ProductPost from "../pages/ProductsPost";
import MyAccount from "../pages/Account/MyAccount";
import ChangePassword from "../pages/Account/ChangePassword";
import QuotesHistory from "../pages/Account/QuotesHistory";
import SavedProducts from "../pages/Account/SavedProducts";

export const routes = [
  {
    layout: AnonymousLayout,
    routes: [
      {
        name: "Home",
        title: "Home page",
        component: Home,
        path: "/home",
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
        path: "/home",
      },
      {
        name: "Collection",
        title: "Collection page",
        component: Collections,
        path: "/collections",
      },
      {
        name: "Account",
        title: "Account page",
        component: Account,
        path: "/account",
        routes: [
          {
            name: "My Account",
            title: "My Account",
            hasSiderLink: true,
            component: MyAccount,
            path: "/account/my-account",
          },
          {
            name: "Change Password",
            title: "Change Password",
            hasSiderLink: true,
            component: ChangePassword,
            path: "/account/change-password",
          },
          {
            name: "Quotes History",
            title: "Quotes History",
            hasSiderLink: true,
            component: QuotesHistory,
            path: "/account/quotes-history",
          },
          {
            name: "Saved Products",
            title: "Saved Products",
            hasSiderLink: true,
            component: SavedProducts,
            path: "/account/saved-products",
          },
        ],
      },
      {
        name: "Collection post",
        title: "Collection post page",
        component: CollectionsPost,
        path: "/collection-post",
      },
      {
        name: "Collections category",
        title: "Collections category page",
        component: CollectionsCategory,
        path: "/collections-category",
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
        path: "/product-post",
      },
      {
        name: "Cart",
        title: "Cart page",
        component: ProductPost,
        path: "/cart",
      },
    ],
  },
];

export const Routes = renderRoutes(routes);
