import Products from "@/components/Product/Products";
import { fetchProducts, getCollectionColors, getCollectionColorsArray, getCollectionsData, getSelectedCategoryData, getSelectedCollectionData } from "@/services/apiServices";
import { markPageLoaded, pageLoadEnd, pageLoadStart, updatedWatched } from "@/utils/AnimationFunctions";
import { extractUniqueColors, parseArrayFromParams } from "@/utils/utils";
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

  const handleProductsFilter = async (firstLoad = false, disableLoader = false) => {
    try {
      console.log("handleProductsFilter called");
      if (!firstLoad && !disableLoader) pageLoadStart();
      const response = await fetchProducts(filterCollections, filterCategory, pageSize, filterColors);
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
    };
    if (category === undefined) {
      setSelectedCategoryData([]);
      setfilterCategory([]);
    };

    const collectionChanged = collection !== selectedCollection && collection !== undefined && collection !== null;
    const categoryChanged = category !== selectedCategory && category !== undefined && category !== null;

    if (collectionChanged && categoryChanged) {
      const [collectionsResponse, categoryResponse] = await Promise.all([
        getSelectedCollectionData(collection),
        getSelectedCategoryData(category)
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

    let colors;
    if (subCategory) {
      const colorData = await getCollectionColors(subCategory);
      colors = colorData.colors;
    } else if (category) {
      const colorData = await getCollectionColors(category);
      colors = colorData.colors;
    } else {
      const allProducts = "00000000-000000-000000-000000000001";
      const colorData = await getCollectionColors(allProducts);
      colors = colorData.colors;
    }

    setColors(colors);
    setReloadTrigger(prev => !prev);
    setFiltersReady(true);
  };

  useEffect(() => {
    handleRouterChange();
  }, [router]);

  // useEffect(() => {
  //   if (selectedCollectionData.length !== 0) {
  //     let collections = selectedCollectionData.map((x) => x._id);
  //     if (collections.length === 0) {
  //       collections = collectionsData.map((x) => x._id);
  //     }
  //     setfilterCollections(collections);
  //   } else {
  //     setfilterCollections([]);
  //   }
  // }, [selectedCollectionData]);

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
  }

  //   {
  //     "parentCollection": {
  //         "link-collections-all": "/collections/",
  //         "name": "CHAIRS",
  //         "mainMedia": "wix:image://v1/614034_103e8f4ab0ae4536a38b319d3eb437ed~mv2.png/missing-media.png#originWidth=500&originHeight=500",
  //         "_id": "77f8aa7c-38c7-ac49-ef1e-fea401cdc075",
  //         "link-copy-of-category-name-2": "/category/chairs",
  //         "link-category-name": "/ccategory/chairs",
  //         "link-copy-of-category-name": "/copy-of-category/chairs",
  //         "slug": "chairs-1",
  //         "categoryPageUrl": "/category/chairs-1",
  //         "link-collections-name": "/collections/chairs"
  //     },
  //     "level2Collections": [
  //         {
  //             "link-collections-all": "/collections/",
  //             "name": "CONFERENCE CHAIRS",
  //             "mainMedia": "wix:image://v1/614034_103e8f4ab0ae4536a38b319d3eb437ed~mv2.png/missing-media.png#originWidth=500&originHeight=500",
  //             "_id": "0032c60b-6336-3f13-3581-61cd6e657611",
  //             "link-copy-of-category-name-2": "/category/conference-chairs",
  //             "link-category-name": "/ccategory/conference-chairs",
  //             "link-copy-of-category-name": "/copy-of-category/conference-chairs",
  //             "slug": "conference-chairs",
  //             "categoryPageUrl": "/category/conference-chairs",
  //             "link-collections-name": "/collections/conference-chairs"
  //         }
  //     ],
  //     "_id": "ceb2cdfa-b79c-4a13-9d3e-7c3e13abc88e",
  //     "_owner": "626075c8-8f31-44b0-bd65-e5859e8e09a6",
  //     "_createdDate": {
  //         "$date": "2022-09-19T14:04:47.882Z"
  //     },
  //     "_updatedDate": {
  //         "$date": "2024-05-13T09:23:14.189Z"
  //     },
  //     "hideMenu": true,
  //     "column": 2,
  //     "displayOrder": 40
  // }

  const setFilterCategoryData = (data) => {
    if (data.length !== 0) {
      let filterCategories;
      if (router.query.subCategory) {
        filterCategories = [router.query.subCategory];
        setfilterCategory(filterCategories);
        return;
      }
      if (data[0].level2Collections.length !== 0) {
        filterCategories = data[0].level2Collections.filter((x) => x._id).map((x) => x._id);
      } else {
        filterCategories = [data[0].parentCollection._id]
      }
      setfilterCategory(filterCategories);
    } else {
      setfilterCategory([]);
    }
  }

  useEffect(() => {
    if (filtersReady) {
      handleProductsFilter(true, false);
    }
  }, [filtersReady, reloadTrigger]);

  useEffect(() => {
    if (filtersReady) {
      console.log("filterColors", filterColors);
      console.log("filterCollections", filterCollections);
      console.log("filterCategory", filterCategory);
    }
  }, [filterColors, filterCollections])

  return (
    <Products
      filteredProducts={productsCollection}
      collectionsData={collectionsData}
      selectedCollection={selectedCollectionData}
      selectedCategory={selectedCategoryData}
      colors={colors}
      totalCount={productsResponse?._totalCount}
      handleLoadMore={handleLoadMore}
      pageSize={pageSize}
      setFilterColors={setFilterColors}
      setfilterCollections={setfilterCollections}
    />
  );
}

export const getServerSideProps = async () => {
  const collectionsData = await getCollectionsData();
  return {
    props: {
      collectionsData
    },
  };
};
