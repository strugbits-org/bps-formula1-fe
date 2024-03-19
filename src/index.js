import React from "react";

import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Gallery from "./pages/Gallery";
import Collections from "./pages/Collections";
import CollectionPost from "./pages/CollectionsPost";
import CollectionCategory from "./pages/CollectionsCategory";
import Products from "./pages/Products";
import ProductPost from "./pages/ProductsPost";

// const router = createBrowserRouter([
//   {
//     path: "*",
//     element: <App />,
//     // errorElement: <PageNotFound />,
//     children: [
//       {
//         path: "home",
//         element: <Home />,
//       },
//       {
//         path: "sign-in",
//         element: <SignIn />,
//       },
//       {
//         path: "gallery",
//         element: <Gallery />,
//       },
//       {
//         path: "collections",
//         element: <Collections />,
//       },
//       { path: "collection-post", element: <CollectionPost /> },
//       { path: "collection-category", element: <CollectionCategory /> },
//       { path: "products", element: <Products /> },
//       { path: "product-post", element: <ProductPost /> },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
