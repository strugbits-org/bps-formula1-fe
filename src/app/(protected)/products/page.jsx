import Products from "@/components/Product/Products";
import { getSavedProductData } from "@/services/scApiCalls";
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
    savedProductsData
  ] = await Promise.all([
    fetchProducts(),
    getCollectionsData(),
    getAllCategoriesData(),
    getAllColorsData(),
    getSavedProductData(),
  ]);


  return (
    <Products products={products} collectionsData={collectionsData} categoriesData={categoriesData} colorsData={colorsData} savedProducts={savedProductsData} />
  );
}
