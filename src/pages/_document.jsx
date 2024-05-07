import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="modulepreload" href="/assets/loader.js" />
        <link rel="modulepreload" href="/assets/app2.js" />
        <link rel="modulepreload" href="/assets/product-link-color.js" />
        <link rel="modulepreload" href="/assets/pjax.js" />
        <link rel="modulepreload" href="/assets/data-set-get.js" />
        <link rel="modulepreload" href="/assets/screen-size.js" />
        <link rel="modulepreload" href="/assets/navigation.js" />
        <link rel="modulepreload" href="/assets/product-content.js" />
        <link rel="modulepreload" href="/assets/cancel-product.js" />
        <link rel="modulepreload" href="/assets/form-cart.js" />
        <link rel="modulepreload" href="/assets/form-sign-in.js" />
        <link rel="modulepreload" href="/assets/forms.js" />
        <link rel="modulepreload" href="/assets/collections.js" />
        <link rel="modulepreload" href="/assets/filter-products.js" />
        <link rel="preload" as="style" href="/assets/utils.css" />
        <link rel="preload" as="style" href="/assets/app.css" />

        <script type="module" src={"/assets/loader.js"}></script>
        <script type="module" src={"/assets/app2.js"}></script>
        <script type="module" src={"/assets/product-content.js"}></script>
        <script type="module" src={"/assets/cancel-product.js"}></script>
        <script type="module" src={"/assets/form-cart.js"}></script>
        <script type="module" src={"/assets/form-sign-in.js"}></script>
        <script type="module" src={"/assets/forms.js"}></script>
        <script type="module" src={"/assets/collections.js"}></script>
        <script type="module" src={"/assets/filter-products.js"}></script>
        <link rel="stylesheet" href={"/assets/utils.css"} />
        <link rel="stylesheet" href={"/assets/app.css"} />
      </Head>
      <body
        // className={inter.className}
        data-scroll-direction="initial"
        data-load="first-loading"
        className="overflow-hidden"
      >
        <span className="initScript d-none"></span>
        <span className="home d-none"></span>
        <span className="updateWatched d-none"></span>
        <span className="galleryLightBox d-none"></span>
        <span className="collections d-none"></span>
        <span className="products d-none"></span>
        <span className="productsPost d-none"></span>
        <span className="cartPage d-none"></span>
        <span className="myAccount d-none"></span>
        <span className="savedProducts d-none"></span>
        <span className="quotesHistory d-none"></span>
        <span className="changePassword d-none"></span>
        <span className="galleryImages d-none"></span>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
