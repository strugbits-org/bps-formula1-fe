import Products from "@/components/Product/Products";
import {
  getCollectionColors,
  getCollectionsData,
  getSelectedCategoryData,
  getSelectedCollectionData,
} from "@/services/apiServices";
import { listProducts } from "@/services/fetchFunction";
import { markPageLoaded, pageLoadEnd, pageLoadStart, updatedWatched } from "@/utils/AnimationFunctions";
import { useEffect, useState } from "react";

export default function Page({
  collectionsData,
  selectedCategory,
  colors,
  collection,
  category,
}) {
  const [productsResponse, setProductsResponse] = useState(null);
  const [productsCollection, setProductsCollection] = useState([]);
  const pageSize = 6;

  const selectedCategories = selectedCategory.level2Collections.filter((x) => x._id).map((x) => x._id);

  const handleLoadMore = async (categories, colors) => {
    const response = await listProducts(collection._id, categories, pageSize, colors, productsCollection.length);
    setProductsCollection(prev => [...prev, ...response._items.map(item => item.data)]);
    setProductsResponse(response);
    updatedWatched();
  }

  const handleProductsFiter = async (collection, category, colors, firstLoad = false) => {
    try {
      if (!firstLoad) pageLoadStart();
      const response = await listProducts(collection, category, pageSize, colors);
      setProductsCollection(response._items.map(item => item.data));
      setProductsResponse(response);
      if (firstLoad) {
        markPageLoaded(false);
      } else {
        pageLoadEnd()
      };
      updatedWatched();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleProductsFiter(collection._id, selectedCategories, colors?.colors, true);
  }, [])

  return (
    <Products
      filteredProducts={productsCollection}
      collectionsData={collectionsData}
      collection={collection}
      selectedCategory={selectedCategory}
      category={category}
      colors={colors}
      totalCount={productsResponse?._totalCount}
      handleProductsFiter={handleProductsFiter}
      handleLoadMore={handleLoadMore}
      pageSize={pageSize}
    />
  );
}

export const getServerSideProps = async (context) => {
  const collection = await getSelectedCollectionData(context.query.collection);
  const category = context.query.category;


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
      collection: collection[0],
      category,
    },
  };
};
