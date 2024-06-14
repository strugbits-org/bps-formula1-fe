import ProductIndex from "@/components/Product";
import {
  fetchProducts,
  getCollectionColors,
  getCollectionsData,
} from "@/services/scApiCalls";


export default async function Page() {
  const pageSize = 9;

  const [
    collectionsData,
    products,
    colors
  ] = await Promise.all([
    getCollectionsData(),
    fetchProducts([], [], pageSize, []),
    getCollectionColors("00000000-000000-000000-000000000001")
  ]);

  return (
    <ProductIndex collectionsData={collectionsData} products={products} colorsData={colors} />
  );
}
