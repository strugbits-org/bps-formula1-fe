import Products from "@/components/Product/Products";
import {
  getCollectionsData,
  getFilterProducts,
  getSelectedCategoryData,
} from "@/services/apiServices";
import { markPageLoaded } from "@/utils/AnimationFunctions";

export default function Page({
  filteredProducts,
  collectionsData,
  selectedCategoryData,
}) {
  markPageLoaded();
  return (
    <Products
      filteredProducts={filteredProducts}
      collectionsData={collectionsData}
      selectedCategoryData={selectedCategoryData[0]}
    />
  );
}

export const getServerSideProps = async (context) => {
  const slug = context.query.category;
  const res = await getSelectedCategoryData(slug);
  const [filteredProducts, collectionsData] = await Promise.all([
    getFilterProducts(slug),
    getCollectionsData(),
  ]);
  return {
    props: {
      filteredProducts,
      collectionsData,
      selectedCategoryData: res,
    },
  };
};
