// app/your-page/head.tsx

export default function Head() {
  return (
    <>
      <title>Blueprint Studios | F1 Las Vegas Grand Prix</title>
      <link rel="shortcut icon" href="/favicon.png" />
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

      <script type="module" src="/assets/loader.js"></script>
      <script type="module" src="/assets/app2.js"></script>
      <script type="module" src="/assets/product-content.js"></script>
      <script type="module" src="/assets/cancel-product.js"></script>
      <script type="module" src="/assets/form-cart.js"></script>
      <script type="module" src="/assets/form-sign-in.js"></script>
      <script type="module" src="/assets/forms.js"></script>
      <script type="module" src="/assets/collections.js"></script>
      <script type="module" src="/assets/filter-products.js"></script>
      <link rel="stylesheet" href="/assets/utils.css" />
      <link rel="stylesheet" href="/assets/app.css" />
    </>
  );
}
