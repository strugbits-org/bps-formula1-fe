import Search from "@/components/Search";
import {
  fetchProducts,
  getAllColorsData,
  getCollectionColors,
  getCollectionsData,
  getProductSnapShots,
  getProductVariants,
  getSavedProductData,
} from "@/services/scApiCalls";

export default async function Page() {

  const category = "00000000-000000-000000-000000000001";

  const [
    products,
    collections,
    colorsData,
    savedProductsData
  ] = await Promise.all([
    fetchProducts(),
    getCollectionsData(),
    getCollectionColors(category),
    getSavedProductData()
  ]);

  const productsData = await Promise.all(products.map(async (productData) => {
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
    <Search
      products={productsData}
      collections={collections}
      colorsData={colorsData.colors}
      savedProducts={savedProductsData}
    />
  );
}