import ProductIndex from "@/components/Product";
import {
  fetchProducts,
  getCollectionsData,
} from "@/services/scApiCalls";


export default async function Page() {
  const pageSize = 9;

  const [
    collectionsData,
    products
  ] = await Promise.all([
    getCollectionsData(),
    fetchProducts([], [], pageSize,[])
  ]);
  
  return (
    <ProductIndex collectionsData={collectionsData} products={products} />
  );
}
