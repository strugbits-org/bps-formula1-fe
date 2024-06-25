import { redirect } from "next/navigation";

import ProductPost from "@/components/Product/ProductsPost";
import {
  fetchAllProducts,
  getAllCategoriesData,
  getCollectionsData,
  getPairItWithProducts,
  getPairItWithProductsId,
  getProductFound,
  getProductPostPageData,
  getProductSnapShots,
  getProductVariants,
  getSelectedProductDetails,
  getSelectedProductId,
} from "@/services/scApiCalls";

export const generateStaticParams = async () => {
  try {
    const all_products = await fetchAllProducts() || [];
    const paths = all_products.map((data) => ({ slug: data.product.slug }));
    return paths;
  } catch (error) {
    console.log("Error:", error);
  }
}


export default async function Page({ params }) {
  const { slug } = params;

  const res = await getSelectedProductId(slug);
  let selectedProductId;
  if (res?.length) {
    selectedProductId = res[0]._id;
  } else {
    redirect("/error");
  }

  let pairedProductIds;
  let productVariantsData;
  let dataMap;

  if (selectedProductId) {
    const pairIWithRes = await getPairItWithProductsId(selectedProductId);
    pairedProductIds = pairIWithRes.map((item) => item.pairedProductId);

    productVariantsData = await getProductVariants(selectedProductId);
    dataMap = new Map(productVariantsData.map((item) => [item.sku, item]));
  }

  const [
    productPostPageData,
    selectedProductDetails,
    matchedProductsData,
    collectionsData,
    productSnapshots,
    productFound,
    categoriesData,
  ] = await Promise.all([
    getProductPostPageData(),
    getSelectedProductDetails(selectedProductId),
    getPairItWithProducts(pairedProductIds),
    getCollectionsData(),
    getProductSnapShots(selectedProductId),
    getProductFound(),
    getAllCategoriesData(),
  ]);

  const productsData = await Promise.all(
    matchedProductsData.map(async (productData) => {
      const productId = productData.product._id;
      const [productSnapshotData, productVariantsData] = await Promise.all([
        getProductSnapShots(productId),
        getProductVariants(productId),
      ]);
      productData.productSnapshotData = productSnapshotData;
      productData.productVariantsData = productVariantsData;
      return productData;
    })
  );

  let filteredVariantData;
  if (productVariantsData && selectedProductDetails) {
    filteredVariantData = selectedProductDetails[0].variantData =
      selectedProductDetails[0].variantData.filter((variant) => {
        if (dataMap.has(variant.sku)) {
          const dataItem = dataMap.get(variant.sku);
          variant.variant.variantId = dataItem._id;
          return true;
        }
        return false;
      });
  }
  return (
    <ProductPost
      productPostPageData={productPostPageData}
      selectedProductDetails={selectedProductDetails[0]}
      matchedProductsData={productsData}
      collectionsData={collectionsData}
      productSnapshots={productSnapshots}
      productFoundData={productFound}
      categoriesData={categoriesData}
    />
  );
}
