import Products from "@/components/Product/Products";
import {
  fetchProducts,
  getCollectionColors,
  getCollectionsData,
  getSelectedCategoryData,
  getSelectedCollectionData,
} from "@/services/apiServices";
import {
  markPageLoaded,
  pageLoadEnd,
  pageLoadStart,
  updatedWatched,
} from "@/utils/AnimationFunctions";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page({ collectionsData }) {
  const router = useRouter();
  const pageSize = 9;

  const [selectedCategory, setSelectedCategory] = useState(null); //router params
  const [selectedCollection, setSelectedCollection] = useState(null); //router params

  const [selectedCollectionData, setSelectedCollectionData] = useState([]); // selected data
  const [selectedCategoryData, setSelectedCategoryData] = useState([]); // selected data
  const [colors, setColors] = useState([]);

  const [filterCollections, setfilterCollections] = useState([]); // for filter
  const [filterCategory, setfilterCategory] = useState([]); // for filter
  const [filterColors, setFilterColors] = useState([]); // for filter

  const [productsResponse, setProductsResponse] = useState(null);
  const [productsCollection, setProductsCollection] = useState([]);

  const [filtersReady, setFiltersReady] = useState(false);
  const [reloadTrigger, setReloadTrigger] = useState(false);

  const handleLoadMore = async () => {
    const response = await fetchProducts(
      filterCollections,
      filterCategory,
      pageSize,
      filterColors,
      productsCollection.length
    );
    setProductsCollection((prev) => [
      ...prev,
      ...response._items.map((item) => item.data),
    ]);
    setProductsResponse(response);
    updatedWatched();
  };

  const handleProductsFilter = async (
    firstLoad = false,
    disableLoader = false
  ) => {
    try {
      if (!firstLoad && !disableLoader) pageLoadStart();
      const response = await fetchProducts(
        filterCollections,
        filterCategory,
        pageSize,
        filterColors
      );
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

  const handleRouterChange = async () => {
    const { collection, category, subCategory } = router.query;

    setSelectedCategory(category);
    setSelectedCollection(collection);

    if (collection === undefined) {
      setSelectedCollectionData([]);
      setfilterCollections([]);
    }
    if (category === undefined) {
      setSelectedCategoryData([]);
      setfilterCategory([]);
    }
    if (subCategory === undefined) setfilterCategory([]);

    const collectionChanged =
      collection !== selectedCollection &&
      collection !== undefined &&
      collection !== null;
    const categoryChanged =
      category !== selectedCategory &&
      category !== undefined &&
      category !== null;

    if (collectionChanged && categoryChanged) {
      const [collectionsResponse, categoryResponse] = await Promise.all([
        getSelectedCollectionData(collection),
        getSelectedCategoryData(category),
      ]);
      setSelectedCollectionData(collectionsResponse);
      setFilterCollectionsData(collectionsResponse);
      setSelectedCategoryData(categoryResponse);
      setFilterCategoryData(categoryResponse);
    } else {
      if (collectionChanged) {
        const data = await getSelectedCollectionData(collection);
        setSelectedCollectionData(data);
        setFilterCollectionsData(data);
      }

      if (categoryChanged) {
        const data = await getSelectedCategoryData(category);
        setSelectedCategoryData(data);
        setFilterCategoryData(data);
      }
    }

    let colors = [];
    if (subCategory) {
      const colorData = await getCollectionColors(subCategory);
      if (colorData && colorData.colors) {
        colors = colorData.colors;
      }
      setfilterCategory([router.query.subCategory]);
    } else if (category) {
      const colorData = await getCollectionColors(category);
      if (colorData && colorData.colors) {
        colors = colorData.colors;
      }
    } else {
      const allProducts = "00000000-000000-000000-000000000001";
      const colorData = await getCollectionColors(allProducts);
      if (colorData && colorData.colors) {
        colors = colorData.colors;
      }
    }

    setColors(colors);
    setReloadTrigger((prev) => !prev);
    setFiltersReady(true);
  };

  const setFilterCollectionsData = (data) => {
    if (data.length !== 0) {
      let collections = data.map((x) => x._id);
      if (collections.length === 0) {
        collections = collectionsData.map((x) => x._id);
      }
      setfilterCollections(collections);
    } else {
      setfilterCollections([]);
    }
  };

  const setFilterCategoryData = (data) => {
    if (data.length !== 0) {
      let filterCategories;
      if (data[0].level2Collections.length !== 0) {
        filterCategories = data[0].level2Collections
          .filter((x) => x._id)
          .map((x) => x._id);
      } else {
        filterCategories = [data[0].parentCollection._id];
      }
      setfilterCategory(filterCategories);
    } else {
      setfilterCategory([]);
    }
  };

  const listProducts = debounce(() => {
    handleProductsFilter(true, false);
  }, 500);

  useEffect(() => {
    if (filtersReady) {
      listProducts();
      return () => listProducts.cancel();
    }
  }, [filtersReady, reloadTrigger]);

  useEffect(() => {
    handleRouterChange();
  }, [router]);

  useEffect(() => {
    if (filtersReady) {
      if (filterCategory.length === 0 && selectedCategoryData.length !== 0) {
        let filterCategories;
        if (selectedCategoryData[0]?.level2Collections.length !== 0) {
          filterCategories = selectedCategoryData[0].level2Collections
            .filter((x) => x._id)
            .map((x) => x._id);
        } else {
          filterCategories = [selectedCategoryData[0].parentCollection._id];
        }
        setfilterCategory(filterCategories);
      }
      setReloadTrigger((prev) => !prev);
    }
  }, [filterColors, filterCategory, filterCollections]);

  return (
    <Products
      filteredProducts={productsCollection}
      collectionsData={collectionsData}
      selectedCollection={selectedCollectionData}
      selectedCategory={selectedCategoryData}
      colors={colors || []}
      totalCount={productsResponse?._totalCount}
      handleLoadMore={handleLoadMore}
      pageSize={pageSize}
      setFilterColors={setFilterColors}
      setfilterCollections={setfilterCollections}
      setfilterCategory={setfilterCategory}
    />
  );
}

export const getServerSideProps = async () => {
  const collectionsData = await getCollectionsData();
  return {
    props: {
      collectionsData,
    },
  };
};
