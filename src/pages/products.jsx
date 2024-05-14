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

  const handleLoadMore = async (collections, categories, colors) => {
    const response = await listProducts(collections, categories, pageSize, colors, productsCollection.length);
    setProductsCollection(prev => [...prev, ...response._items.map(item => item.data)]);
    setProductsResponse(response);
    updatedWatched();
  }

  const handleProductsFilter = async (
    collection,
    category,
    colors,
    firstLoad = false,
    disableLoader = false,
  ) => {
    try {
      if (!firstLoad && !disableLoader) pageLoadStart();
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
      } else if(!disableLoader) {
        pageLoadEnd();
      }
      updatedWatched();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleProductsFilter(
      selectedCollection.map((x) => x._id),
      selectedCategories,
      colors?.colors || [],
      true,
      false,
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
        selectedCollection: selectedCollection,
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
        selectedCollection: [],
        category,
      },
    };
  } else {
    const category = "00000000-000000-000000-000000000001";
    const [collectionsData, colors] = await Promise.all([
      getCollectionsData(),
      getCollectionColors(category),
    ]);
    return {
      props: {
        collectionsData,
        selectedCategory: null,
        colors,
        selectedCollection: [],
      },
    };
  }
};
