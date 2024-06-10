import ProductPost from "@/components/Product/ProductsPost";
import {
  getCollectionsData,
  getPairItWithProducts,
  getPairItWithProductsId,
  getProductPostPageData,
  getProductSnapShots,
  getProductVariants,
  getSavedProductData,
  getSelectedProductDetails,
  getSelectedProductId,
} from "@/services/apiServices";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Page({ params }) {
  const slug = params.slug;
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken")?.value;

  const data = {
    limit: "20",
    skip: "0",
  };

  const res = await getSelectedProductId(slug);
  let selectedProductId;
  if (res) {
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
    savedProductsData,
  ] = await Promise.all([
    getProductPostPageData(),
    getSelectedProductDetails(selectedProductId),
    getPairItWithProducts(pairedProductIds),
    getCollectionsData(),
    getProductSnapShots(selectedProductId),
    getSavedProductData(data, authToken),
  ]);

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
      matchedProductsData={matchedProductsData}
      collectionsData={collectionsData}
      productSnapshots={productSnapshots}
      savedProductsData={savedProductsData}
    />
  );
}

// import { cookies } from "next/headers";
//  const cookieStore = cookies();
//   const authToken = cookieStore.get("authToken")?.value;

//   const data = {
//     limit: "20",
//     skip: "0",
//   };
// getSavedProductData(data, authToken)
