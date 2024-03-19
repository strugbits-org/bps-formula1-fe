import { useLocation } from "react-router-dom";
import Loader from "./components/loader";
import { Routes } from "./routes/Index";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const location = useLocation();
  const pathname =
    location.pathname.trim() === "/" ? "home" : location.pathname.substring(1); // Remove leading slash
  const cleanPath = pathname.split("/")[0].trim();

  const [isSignedIn, setIsSignedIn] = useState(true);

  // Function to update the data-login-state attribute
  useEffect(() => {
    if (isSignedIn) {
      document.body.setAttribute("data-login-state", "logged");
    } else {
      document.body.setAttribute("data-login-state", "sign-in");
    }
  }, [isSignedIn]);

  return (
    <div>
      {" "}
      <Helmet>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta name="format-detection" content="telephone=no" />
        <title>Blueprint Studios | F1 Las Vegas Grand Prix</title>
        <meta
          property="og:title"
          content="Blueprint Studios | F1 Las Vegas Grand Prix"
        />
        <meta name="description" content="" />
        <meta property="og:description" content="" />
        <meta name="keywords" content="" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:type" content="image/jpeg" />
        <link rel="canonical" href="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta name="creator" content="Petrikór + Programatório" />
        <meta
          name="author"
          content="Blueprint Studios | F1 Las Vegas Grand Prix"
        />
        <meta
          property="og:site_name"
          content="Blueprint Studios | F1 Las Vegas Grand Prix"
        />
        <meta property="og:locale" content="en" />
        <link rel="icon" type="image/png" href="images/favicon.png" />

        <link
          rel="stylesheet"
          href={process.env.PUBLIC_URL + "/assets/utils.css"}
        />
        <link
          rel="stylesheet"
          href={process.env.PUBLIC_URL + "/assets/app.css"}
        />

        <script
          type="module"
          src={process.env.PUBLIC_URL + "/assets/loader.js"}
        ></script>
        <script
          type="module"
          src={process.env.PUBLIC_URL + "/assets/app2.js"}
        ></script>
        <script
          type="module"
          src={process.env.PUBLIC_URL + "/assets/product-content.js"}
        ></script>
        <script
          type="module"
          src={process.env.PUBLIC_URL + "/assets/cancel-product.js"}
        ></script>
        <script
          type="module"
          src={process.env.PUBLIC_URL + "/assets/form-cart.js"}
        ></script>
        <script
          type="module"
          src={process.env.PUBLIC_URL + "/assets/form-sign-in.js"}
        ></script>
        <script
          type="module"
          src={process.env.PUBLIC_URL + "/assets/forms.js"}
        ></script>
        <script
          type="module"
          src={process.env.PUBLIC_URL + "/assets/collections.js"}
        ></script>
        <script
          type="module"
          src={process.env.PUBLIC_URL + "/assets/filter-products.js"}
        ></script>
      </Helmet>
      <Loader />
      {/* <Navbar /> */}
      {/* <Home /> */}
      <div id={`${cleanPath}`} data-scroll-container>
        <main>
          {/* <Outlet /> */}
          <Routes isAuthorized={isSignedIn} />
        </main>
      </div>
    </div>
  );
}

export default App;
