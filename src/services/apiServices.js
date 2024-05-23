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
  fetchMultipleData,
  fetchSingleItemData,
} from "./fetchFunction";

const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;

// HOME PAGE APIS
// export const getHomePageData = () => fetchData("HomePageContentF1");
export const getHomePageData = () =>
  fetchSingleItemData({
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

// export const getHomeBottomRightSocialLinks = () =>
//   fetchData("SocialMediaLinksF1");
export const getHomeBottomRightSocialLinks = () =>
  fetchMultipleData({
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

// export const getHomeBottomLeftLink = () =>
//   fetchData("HomePageBottomLeftLinksF1");
export const getHomeBottomLeftLink = () =>
  fetchMultipleData({
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

// REGISTRATION PAGE APIS
export const getSignInPage = () =>
  fetchSingleItemData({
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

export const getCreateAccountForm = () =>
  fetchSingleItemData({
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
export const getCreateAccountDropdown = () =>
  fetchMultipleData({
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

// GALLERY PAGE APIS
export const getGalleryPageData = () =>
  fetchSingleItemData({
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

// COLLECTIONS DATA
export const getCollectionsData = () =>
  fetchMultipleData({
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

// export const getSelectedCollectionData = (slug) =>
//   selectedCollectionData("CollectionsF1", slug);

export const getSelectedCollectionData = (slug) =>
  fetchMultipleData({
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
export const getFilterCategory = (selectedCollectionId) =>
  fetchMultipleData({
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

// COLLECTIONS PAGE API
export const getCollectionsPageData = () =>
  fetchSingleItemData({
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

// COLLECTIONS POST PAGE DATA
export const getCollectionsPostPageData = () =>
  fetchSingleItemData({
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
export const getTermsAndConditionsPageData = () =>
  fetchSingleItemData({
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

// PRIVACY AND POLICY APIS
export const getPrivacyAndPolicyPageData = () =>
  fetchSingleItemData({
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

// FOOTER APIS
export const getFooterData = () =>
  fetchSingleItemData({
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
export const getFooterLinksData = () =>
  fetchMultipleData({
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

// USER ACCOUNT APIS
export const getMyAccountPageData = () =>
  fetchSingleItemData({
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

export const getChangePasswordPageData = () =>
  fetchSingleItemData({
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

export const getQuoteHistoryPageData = () =>
  fetchSingleItemData({
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

export const getSavedProductPageData = () =>
  fetchSingleItemData({
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