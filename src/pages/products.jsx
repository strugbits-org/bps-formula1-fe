import Products from "@/components/Product/Products";
import {
  fetchProducts,
  getCollectionColors,
  getCollectionsData,
  getSelectedCategoryData,
  getSelectedCollectionData,
} from "@/services/apiServices";
import { markPageLoaded, pageLoadEnd, pageLoadStart, updatedWatched } from "@/utils/AnimationFunctions";
import { parseArrayFromParams } from "@/utils/utils";
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
  const [selectedColors, setSelectedColors] = useState(colors?.colors);
  const [selectedCollections, setSelectedCollections] = useState(selectedCollection.map((x) => x._id));
  const pageSize = 9;


  const handleLoadMore = async () => {
    let subCategories = parseArrayFromParams(router.query.subCategories);
    if ((selectedCategory !== undefined || selectedCategory !== null) && subCategories.length === 0) {
      subCategories = selectedCategory?.level2Collections.filter((x) => x._id).map((x) => x._id);
    }
    let collections = selectedCollections;
    if (selectedCollections.length === 0) {
      collections = collectionsData.map((x) => x._id);
    }
    const response = await fetchProducts(collections, subCategories, pageSize, selectedColors, productsCollection.length);
    setProductsCollection(prev => [...prev, ...response._items.map(item => item.data)]);
    setProductsResponse(response);
    updatedWatched();
  }

  const handleProductsFilter = async (
    firstLoad = false,
    disableLoader = false,
  ) => {
    try {
      let subCategories = parseArrayFromParams(router.query.subCategories);

      if (selectedCategory !== undefined && selectedCategory !== null && subCategories.length === 0) {
        subCategories = selectedCategory?.level2Collections.filter((x) => x._id).map((x) => x._id);
      }

      let collections = selectedCollections;
      if (selectedCollections.length === 0) {
        collections = collectionsData.map((x) => x._id);
      }

      if (!firstLoad && !disableLoader) pageLoadStart();
      const response = await fetchProducts(collections, subCategories, pageSize, selectedColors);
      setProductsCollection(response._items.map((item) => item.data));
      setProductsResponse(response);
      if (firstLoad) {
        markPageLoaded(false);
      } else if (!disableLoader) {
        pageLoadEnd();
      }
      updatedWatched();
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    handleProductsFilter(true, false);
  }, [router, selectedColors]);

  return (
    <Products
      filteredProducts={productsCollection}
      collectionsData={collectionsData}
      selectedCollection={selectedCollection}
      selectedCategory={selectedCategory}
      category={category}
      colors={selectedColors}
      totalCount={productsResponse?._totalCount}
      handleLoadMore={handleLoadMore}
      pageSize={pageSize}
      setSelectedColors={setSelectedColors}
      setSelectedCollections={setSelectedCollections}
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
  } else if (collection) {
    const category = "00000000-000000-000000-000000000001";
    const selectedCollection = await getSelectedCollectionData(collection);
    const [collectionsData, colors] = await Promise.all([
      getCollectionsData(),
      getCollectionColors(category),
    ]);
    return {
      props: {
        collectionsData,
        selectedCategory: null,
        colors: colors,
        selectedCollection: selectedCollection,
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
