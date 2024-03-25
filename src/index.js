import React from "react";

import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

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
//       {
//         element: <MyAccount />,
//         path: "account/my-account",
//       },
//       {
//         element: <ChangePassword />,
//         path: "account/change-password",
//       },
//       {
//         element: <QuotesHistory />,
//         path: "account/quotes-history",
//       },
//       {
//         element: <SavedProducts />,
//         path: "account/saved-products",
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// <React.StrictMode>
{
  /* <RouterProvider router={router} /> */
}
{
  /* </React.StrictMode> */
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
