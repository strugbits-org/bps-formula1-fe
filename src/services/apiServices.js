import fetchData, {
  fetchSearchData,
  fetchCategoriesReferenceData,
  fetchCategoriesReferenceDataa,
  selectedCategoryData,
  fetchCollectionColors,
  fetchProductDetails,
  fetchSelectedProductId,
  fetchPairItWithProducts,
  fetchPairItWithProductsIds,
  fetchProductSnapshots,
  fetchProductVariants,
  listProducts,
  fetchCollectionColorsArray,
  fetchDataa,
} from "./fetchFunction";

const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;

// HOME PAGE APIS
// export const getHomePageData = () => fetchData("HomePageContentF1");
export const getHomePageData = async () => {
  const response = await fetchDataa({
    dataCollectionId: "HomePageContentF1",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: null,
    skip: null,
  });
  return response._items.map((x) => x.data)[0];
};
// export const getHomeBottomRightSocialLinks = () =>
//   fetchData("SocialMediaLinksF1");
export const getHomeBottomRightSocialLinks = async () => {
  const response = await fetchDataa({
    dataCollectionId: "SocialMediaLinksF1",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: null,
    skip: null,
  });
  return response._items.map((x) => x.data);
};
// export const getHomeBottomLeftLink = () =>
//   fetchData("HomePageBottomLeftLinksF1");
export const getHomeBottomLeftLink = async () => {
  const response = await fetchDataa({
    dataCollectionId: "HomePageBottomLeftLinksF1",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: null,
    skip: null,
  });

  return response._items.map((x) => x.data);
};
// REGISTRATION PAGE APIS
export const getSignInPage = async () => {
  const response = await fetchDataa({
    dataCollectionId: "SignInPageF1",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: null,
    skip: null,
  });
  return response._items.map((x) => x.data)[0];
};

export const getCreateAccountForm = async () => {
  const response = await fetchDataa({
    dataCollectionId: "CreateAccountPageF11",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: null,
    skip: null,
  });
  return response._items.map((x) => x.data)[0];
};

export const getCreateAccountDropdown = async () => {
  const response = await fetchDataa({
    dataCollectionId: "HospitalitySpaceLocatedOptionsF1",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: null,
    skip: null,
  });
  return response._items.map((x) => x.data);
};
// GALLERY PAGE APIS
export const getGalleryPageData = async () => {
  const response = await fetchDataa({
    dataCollectionId: "GalleryPageF1",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: null,
    skip: null,
  });
  return response._items.map((x) => x.data)[0];
};
// COLLECTIONS DATA
export const getCollectionsData = async () => {
  const response = await fetchDataa({
    dataCollectionId: "CollectionsF1",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: null,
    skip: null,
  });
  return response._items.map((x) => x.data);
};
// export const getSelectedCollectionData = (slug) =>
//   selectedCollectionData("CollectionsF1", slug);

export const getSelectedCollectionData = async (slug) => {
  const response = await fetchDataa({
    dataCollectionId: "CollectionsF1",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: [
      {
        key: "collectionSlug",
        value: slug,
      },
    ],
    ne: null,
    hasSome: null,
    skip: null,
  });
  return response._items.map((x) => x.data);
};
// CATEGORY DATA
export const getCategoriesData = (collectionsIds) =>
  fetchCategoriesReferenceData(
    "BPSCatalogStructure",
    ["f1Collections", "parentCollection"],
    collectionsIds
  );

export const getSelectedCategoryData = (slug) =>
  selectedCategoryData(
    "BPSCatalogStructure",
    ["parentCollection", "level2Collections"],
    slug
  );

export const getCollectionColors = (category) =>
  fetchCollectionColors("colorFilterCache", category);

export const getCollectionColorsArray = (categories) =>
  fetchCollectionColorsArray("colorFilterCache", categories);

// fetchReferenceData("BPSCatalogStructure",["f1Collections", "parentCollection"]);

// export const getFilterCategory = (selectedCollectionId) =>
//   fetchCategoriesReferenceData(
//     "BPSCatalogStructure",
//     ["parentCollection"],
//     [selectedCollectionId]
//   );
export const getFilterCategory = async (selectedCollectionId) => {
  const response = await fetchDataa({
    dataCollectionId: "BPSCatalogStructure",
    includeReferencedItems: ["parentCollection"],
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: [
      {
        key: "f1Collections",
        values: [selectedCollectionId],
      },
    ],
    skip: null,
  });
  return response._items.map((x) => x.data);
};
// COLLECTIONS PAGE API
export const getCollectionsPageData = async () => {
  const response = await fetchDataa({
    dataCollectionId: "CollectionsPageDataF1",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: null,
    skip: null,
  });
  return response._items.map((x) => x.data)[0];
};
// COLLECTIONS POST PAGE DATA
export const getCollectionsPostPageData = async () => {
  const response = await fetchDataa({
    dataCollectionId: "CollectionsPostPageDataF1",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: null,
    skip: null,
  });
  return response._items.map((x) => x.data)[0];
};
// PRODUCTS PAGE APIS
export const getFilteredProducts = (collection, category, pageSize, colors) =>
  listProducts(
    "locationFilteredVariant",
    ["category", "product", "subCategory"],
    slug
  );

export const getFilterProducts = (slug) =>
  fetchCategoriesReferenceDataa(
    "locationFilteredVariant",
    ["category", "product", "subCategory"],
    slug
  );

// PRODUCT POST PAGE APIS
export const getProductPostPageData = () => fetchData("ProductPostPageF1");

export const getSelectedProductId = (slug) =>
  fetchSelectedProductId("Stores/Products", slug);

export const getSelectedProductDetails = (slug) =>
  fetchProductDetails(
    "locationFilteredVariant",
    ["category", "product", "subCategory", "f1Collection"],
    slug
  );
export const getPairItWithProductsId = (slug) =>
  fetchPairItWithProductsIds("BPSPairItWith", slug);

export const getPairItWithProducts = (productId) =>
  fetchPairItWithProducts(
    "locationFilteredVariant",
    ["category", "product", "subCategory", "f1Collection"],
    productId
  );
export const getProductVariants = (selectedProductId) =>
  fetchProductVariants("Stores/Variants", selectedProductId);

export const getProductSnapShots = (imageVariationId) =>
  fetchProductSnapshots("BPSProductImages", imageVariationId);

// TERMS AND CONDITIONS APIS
export const getTermsAndConditionsPageData = async () => {
  const response = await fetchDataa({
    dataCollectionId: "TermsandConditionsPageContentF1",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: null,
    skip: null,
  });
  return response._items.map((x) => x.data)[0];
};
// PRIVACY AND POLICY APIS
export const getPrivacyAndPolicyPageData = async () => {
  const response = await fetchDataa({
    dataCollectionId: "PrivacyandPolicyPageContentF1",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: null,
    skip: null,
  });
  return response._items.map((x) => x.data)[0];
};
// FOOTER APIS
export const getFooterData = async () => {
  const response = await fetchDataa({
    dataCollectionId: "FooterDataF1",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: null,
    skip: null,
  });
  return response._items.map((x) => x.data)[0];
};

export const getFooterLinksData = async () => {
  const response = await fetchDataa({
    dataCollectionId: "FooterLinksDataF1",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: null,
    skip: null,
  });
  return response._items.map((x) => x.data);
};
// USER ACCOUNT APIS
export const getMyAccountPageData = async () => {
  const response = await fetchDataa({
    dataCollectionId: "MyAccountPageDataF1",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: null,
    skip: null,
  });
  return response._items.map((x) => x.data)[0];
};
export const getChangePasswordPageData = async () => {
  const response = await fetchDataa({
    dataCollectionId: "ChangePasswordPageDataF1",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: null,
    skip: null,
  });
  return response._items.map((x) => x.data)[0];
};
export const getQuoteHistoryPageData = async () => {
  const response = await fetchDataa({
    dataCollectionId: "QuotesHistoryPageDataF1",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: null,
    skip: null,
  });
  return response._items.map((x) => x.data)[0];
};
export const getSavedProductPageData = async () => {
  const response = await fetchDataa({
    dataCollectionId: "SavedProductPageData",
    includeReferencedItems: null,
    returnTotalCount: null,
    contains: null,
    limit: null,
    eq: null,
    ne: null,
    hasSome: null,
    skip: null,
  });
  return response._items.map((x) => x.data)[0];
};
// SAVED PRODUCT PAGE APIS
export const getSavedProductData = async (payload, authToken) => {
  try {
    const response = await fetch(`${base_url}formula1/wix/getSavedProducts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching saved products:", error);
    return [];
  }
};

export const fetchCartProducts = (
  collections,
  categories,
  pageSize,
  colors,
  skip
) => listProducts(collections, categories, pageSize, colors, skip);

export const fetchProducts = (
  collections,
  categories,
  pageSize,
  colors,
  skip
) => listProducts(collections, categories, pageSize, colors, skip);

export const getSearchProducts = (collections, colors, searchTerm) =>
  fetchSearchData(collections, colors, searchTerm);