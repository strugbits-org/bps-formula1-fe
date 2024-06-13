import Products from "@/components/Product/Products";
import {
  fetchProducts,
  getAllCategoriesData,
  getAllColorsData,
  getCollectionsData,
} from "@/services/scApiCalls";


export default async function Page() {
  const [
    products,
    collectionsData,
    categoriesData,
    colorsData,
  ] = await Promise.all([
    fetchProducts(),
    getCollectionsData(),
    getAllCategoriesData(),
    getAllColorsData(),
  ]);

  return (
    <Products products={products} collectionsData={collectionsData} categoriesData={categoriesData} colorsData={colorsData} />
  );
}
