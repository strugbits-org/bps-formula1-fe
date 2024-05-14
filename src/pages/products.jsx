import Products from "@/components/Product/Products";
import {
  getCollectionColors,
  getCollectionsData,
  getSelectedCategoryData,
  getSelectedCollectionData,
} from "@/services/apiServices";
import { listProducts } from "@/services/fetchFunction";
import { markPageLoaded, pageLoadEnd, pageLoadStart, updatedWatched } from "@/utils/AnimationFunctions";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page({
  collectionsData,
  selectedCategory,
  colors,
  selectedCollection,
  category,
}) {
  const router = useRouter();
  const [productsResponse, setProductsResponse] = useState(null);
  const [productsCollection, setProductsCollection] = useState([]);
  const pageSize = 9;

  const selectedCategories = selectedCategory?.level2Collections.filter((x) => x._id).map((x) => x._id) || [];

  const handleLoadMore = async (categories, colors) => {
    const response = await listProducts(selectedCollection?._id || null, categories, pageSize, colors || [], productsCollection.length);
    setProductsCollection(prev => [...prev, ...response._items.map(item => item.data)]);
    setProductsResponse(response);
    updatedWatched();
  }

  const handleProductsFilter = async (
    collection,
    category,
    colors,
    firstLoad = false
  ) => {
    try {
      if (!firstLoad) pageLoadStart();
      const response = await listProducts(
        collection,
        category,
        pageSize,
        colors
      );
      setProductsCollection(response._items.map((item) => item.data));
      setProductsResponse(response);
      if (firstLoad) {
        markPageLoaded(false);
      } else {
        pageLoadEnd();
      }
      updatedWatched();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleProductsFilter(
      selectedCollection?._id || null,
      selectedCategories,
      colors?.colors || [],
      true
    );
  }, [router]);

  return (
    <Products
      filteredProducts={productsCollection}
      collectionsData={collectionsData}
      selectedCollection={selectedCollection}
      selectedCategory={selectedCategory}
      category={category}
      colors={colors}
      totalCount={productsResponse?._totalCount}
      handleProductsFilter={handleProductsFilter}
      handleLoadMore={handleLoadMore}
      pageSize={pageSize}
    />
  );
}

export const getServerSideProps = async (context) => {
  const collection = context.query.collection;
  const category = context.query.category;
  if (collection && collection !== "all" && category) {
    const selectedCollection = await getSelectedCollectionData(collection);

    const [collectionsData, selectedCategory, colors] = await Promise.all([
      getCollectionsData(),
      getSelectedCategoryData(category),
      getCollectionColors(category)
    ]);
    return {
      props: {
        collectionsData,
        selectedCategory: selectedCategory[0],
        colors,
        selectedCollection: selectedCollection[0],
        category,
      },
    };
  } else if (category) {
    const [collectionsData, selectedCategory, colors] = await Promise.all([
      getCollectionsData(),
      getSelectedCategoryData(category),
      getCollectionColors(category)
    ]);
    return {
      props: {
        collectionsData,
        selectedCategory: selectedCategory[0],
        colors,
        selectedCollection: null,
        category,
      },
    };
  } else {
    const [collectionsData] = await Promise.all([
      getCollectionsData(),
    ]);
    return {
      props: {
        collectionsData,
      },
    };
  }
};
