import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    // errorElement: <PageNotFound />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
