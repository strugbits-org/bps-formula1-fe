"use client";
import Products from "@/components/Product/Products";
import {
  fetchProducts,
  getCollectionColors,
  getSelectedCategoryData,
  getSelectedCollectionData,
} from "@/services/apiServices";
import {
  initAnimations,
  markPageLoaded,
  pageLoadEnd, updatedWatched,
} from "@/utils/AnimationFunctions";
import { checkParameters } from "@/utils/CheckParams";
import { debounce } from "lodash";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductIndex({ collectionsData }) {
  const pageSize = 9;
  const searchParams = useSearchParams();

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

  const [loadingData, setLoadingData] = useState(false);

  const handleLoadMore = async () => {
    try {
      setLoadingData(true);
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
      setTimeout(() => {
        initAnimations();
        updatedWatched();
      }, 1000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingData(false);
    }
  };

  const handleProductsFilter = async () => {
    try {
      setLoadingData(true);
      const response = await fetchProducts(
        filterCollections,
        filterCategory,
        pageSize,
        filterColors
      );
      setProductsCollection(response._items.map((item) => item.data));
      setProductsResponse(response);
      const isFirstLoadDone = document.body.classList.contains("first-load-done");
      updatedWatched();
      if (isFirstLoadDone) {
        pageLoadEnd();
      }
      // updatedWatched();
      // markPageLoaded(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingData(false);
    }
  };

  const handleRouterChange = async () => {
    const slug = searchParams.get("collection");
    const category = searchParams.get("category");
    const subCategory = searchParams.get("subCategory");
    setSelectedCategory(category);
    setSelectedCollection(slug);

    if (!slug) {
      setSelectedCollectionData([]);
      setfilterCollections([]);
    }
    if (!category) {
      setSelectedCategoryData([]);
      setfilterCategory([]);
    }
    if (!subCategory) setfilterCategory([]);

    const collectionChanged =
      slug !== selectedCollection && slug !== undefined && slug !== null;
    const categoryChanged =
      category !== selectedCategory &&
      category !== undefined &&
      category !== null;

    if (collectionChanged && categoryChanged) {
      const [collectionsResponse, categoryResponse] = await Promise.all([
        getSelectedCollectionData(slug),
        getSelectedCategoryData(category),
      ]);
      setSelectedCollectionData(collectionsResponse);
      setFilterCollectionsData(collectionsResponse);
      setSelectedCategoryData(categoryResponse);
      setFilterCategoryData(categoryResponse);
    } else {
      if (collectionChanged) {
        const data = await getSelectedCollectionData(slug);
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

      setfilterCategory([subCategory]);
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

  const setFilterCollectionsData = async (data) => {
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
      // let filterCategories;
      // if (data[0].level2Collections.length !== 0) {
      //   filterCategories = data[0].level2Collections
      //     .filter((x) => x._id)
      //     .map((x) => x._id);
      // } else {
      //   filterCategories = [data[0].parentCollection._id];
      // }

      let filterCategories = [data[0].parentCollection._id];

      setfilterCategory(filterCategories);
    } else {
      setfilterCategory([]);
    }
  };

  const listProducts = debounce(() => {
    handleProductsFilter();
  }, 500);

  useEffect(() => {
    if (filtersReady) {
      listProducts();
      return () => listProducts.cancel();
    }
  }, [filtersReady, reloadTrigger]);

  useEffect(() => {
    handleRouterChange();
  }, [searchParams]);

  const handlePopupFilters = () => {
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
  };

  useEffect(() => {
    markPageLoaded();
  }, []);

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
      handlePopupFilters={handlePopupFilters}
      loading={loadingData}
    />
  );
}
