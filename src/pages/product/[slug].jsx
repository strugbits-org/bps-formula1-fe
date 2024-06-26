import ProductPost from '@/components/Product/ProductsPost';
import {
  getCollectionsData,
  getPairItWithProducts,
  getPairItWithProductsId,
  getProductPostPageData,
  getProductSnapShots,
  getProductVariants,
  getSelectedProductDetails,
  getSelectedProductId,
} from "@/services/apiServices";
import { markPageLoaded } from "@/utils/AnimationFunctions";

export default function Page({
  productPostPageData,
  selectedProductDetails,
  matchedProductsData,
  collectionsData,
  productSnapshots,
}) {
  markPageLoaded();

  return (
    <ProductPost
      productPostPageData={productPostPageData}
      selectedProductDetails={selectedProductDetails[0]}
      matchedProductsData={matchedProductsData}
      collectionsData={collectionsData}
      productSnapshots={productSnapshots}
    />
  );
}

export const getServerSideProps = async (context) => {
  const slug = context.query.slug;

  const res = await getSelectedProductId(slug);
  const selectedProductId = res[0]._id;

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
  ] = await Promise.all([
    getProductPostPageData(),
    getSelectedProductDetails(selectedProductId),
    getPairItWithProducts(pairedProductIds),
    getCollectionsData(),
    getProductSnapShots(selectedProductId),
  ]);
  if (selectedProductDetails.length === 0) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }

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

  return {
    props: {
      productPostPageData,
      selectedProductDetails,
      matchedProductsData,
      collectionsData,
      productSnapshots,
    },
  };
};