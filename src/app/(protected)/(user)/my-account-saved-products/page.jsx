import SavedProducts from "@/components/Account/SavedProducts";
import {
  getProductSnapShots,
  getProductVariants,
  getSavedProductData,
  getSavedProductPageData,
} from "@/services/scApiCalls";

export default async function Page() {

  const [
    savedProducts,
    savedProductPageData
  ] = await Promise.all([
    getSavedProductData(),
    getSavedProductPageData()
  ]);

  const productsData = await Promise.all(savedProducts.map(async (productData) => {
    const productId = productData.product._id;
    const [productSnapshotData, productVariantsData] = await Promise.all([
      getProductSnapShots(productId),
      getProductVariants(productId)
    ]);
    productData.productSnapshotData = productSnapshotData;
    productData.productVariantsData = productVariantsData;
    return productData;
  }));

  return (
    <SavedProducts savedProductPageData={savedProductPageData} savedProducts={productsData} />
  );
}
