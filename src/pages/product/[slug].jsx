import ProductPost from '@/components/Product/ProductsPost';
import {
  getCollectionsData,
  getCollectionsPostPageData,
  getPairItWithProducts,
  getPairItWithProductsId,
  getProductPostPageData,
  getProductSnapShots,
  getSelectedProductDetails,
  getSelectedProductId,
} from "@/services/apiServices";
import { markPageLoaded } from "@/utils/AnimationFunctions";

export default function Page({
  productPostPageData,
  selectedProductDetails,
  matchedProductsData,
  collectionsData,
  data,
}) {
  markPageLoaded();
  return (
    <ProductPost
      productPostPageData={productPostPageData[0]}
      selectedProductDetails={selectedProductDetails[0]}
      matchedProductsData={matchedProductsData}
      collectionsData={collectionsData}
      productSnapshots={data}
    />
  );
}

export const getServerSideProps = async (context) => {
  const slug = context.query.slug;
  const res = await getSelectedProductId(slug);
  let pairedProductIds;
  const selectedProductId = res[0]._id;
  if (selectedProductId) {
    const pairIWithRes = await getPairItWithProductsId(selectedProductId);
    pairedProductIds = pairIWithRes.map((item) => item.pairedProductId);
  }

  const [
    productPostPageData,
    selectedProductDetails,
    matchedProductsData,
    collectionsData,
    data,
  ] = await Promise.all([
    getProductPostPageData(),
    getSelectedProductDetails(selectedProductId),
    getPairItWithProducts(pairedProductIds),
    getCollectionsData(),
    getProductSnapShots("626075_98c3cd3b54fe49aa9222a55e23dc0556~mv2.jpg"),
  ]);

  return {
    props: {
      productPostPageData,
      selectedProductDetails,
      matchedProductsData,
      collectionsData,
      data,
    },
  };
};