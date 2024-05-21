import SavedProducts from "@/components/Account/SavedProducts";
import {
  getSavedProductData,
  getSavedProductPageData,
} from "@/services/apiServices";
import { markPageLoaded, updatedWatched } from "@/utils/AnimationFunctions";
import { getUserAuth } from "@/utils/GetUser";
import { useEffect, useState } from "react";

export default function Page({ savedProductPageData, savedProductData }) {

  const [productsData, setProductsData] = useState(savedProductData);
  const pageSize = 20;

  const handleLoadMore = async () => {
    const authToken = getUserAuth();
    const data = {
      limit: pageSize,
      skip: productsData._items.length,
    }
    const response = await getSavedProductData(data, authToken);
    setProductsData({ ...response, _items: [...productsData._items, ...response._items] });
    updatedWatched();
  }

  useEffect(() => {
    markPageLoaded();
  }, [])
console.log(productsData, "productsData>>");
  return (
    <SavedProducts
      savedProductPageData={savedProductPageData[0]}
      savedProductData={productsData._items}
      totalCount={productsData._totalCount}
      pageSize={pageSize}
      handleLoadMore={handleLoadMore}
    />
  );
}

export const getServerSideProps = async (context) => {
  const { req } = context;
  const authToken = req.cookies.authToken;
  const data = {
    limit: "20",
    skip: "0",
  }
  const [savedProductPageData, savedProductData] = await Promise.all([
    getSavedProductPageData(),
    getSavedProductData(data, authToken),
  ]);

  return {
    props: {
      savedProductPageData,
      savedProductData: savedProductData,
    },
  };
};
