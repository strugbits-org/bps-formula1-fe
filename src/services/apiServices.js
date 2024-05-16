import fetchData, {
  fetchSearchData,
  fetchCategoriesReferenceData,
  fetchCategoriesReferenceDataa,
  selectedCategoryData,
  selectedCollectionData,
  fetchCollectionColors,
  fetchProductDetails,
  fetchSelectedProductId,
  fetchPairItWithProducts,
  fetchPairItWithProductsIds,
  fetchProductSnapshots,
  fetchProductVariants,
  listProducts,
  fetchCollectionColorsArray,
} from "./fetchFunction";

// HOME PAGE APIS
export const getHomePageData = () => fetchData("HomePageContentF1");
export const getHomeBottomRightSocialLinks = () =>
  fetchData("SocialMediaLinksF1");
export const getHomeBottomLeftLink = () =>
  fetchData("HomePageBottomLeftLinksF1");

export const fetchCartProducts = (collections, categories, pageSize, colors, skip) => listProducts(collections, categories, pageSize, colors, skip);

export const fetchProducts = (collections, categories, pageSize, colors, skip) => listProducts(collections, categories, pageSize, colors, skip);

export const getSearchProducts = (collections, colors, searchTerm) => fetchSearchData(collections, colors, searchTerm);



// REGISTRATION PAGE APIS
export const getSignInPage = () => fetchData("SignInPageF1");
export const getCreateAccountForm = () => fetchData("CreateAccountPageF11");
export const getCreateAccountDropdown = () =>
  fetchData("HospitalitySpaceLocatedOptionsF1");

// GALLERY PAGE APIS
export const getGalleryPageData = () => fetchData("GalleryPageF1");

// COLLECTIONS DATA
export const getCollectionsData = () => fetchData("Collectionsf1");
export const getSelectedCollectionData = (slug) =>
  selectedCollectionData("Collectionsf1", slug);

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

export const getFilterCategory = (selectedCollectionId) =>
  fetchCategoriesReferenceData(
    "BPSCatalogStructure",
    ["parentCollection"],
    [selectedCollectionId]
  );

// COLLECTIONS PAGE API
export const getCollectionsPageData = () => fetchData("CollectionsPageDataF1");

// COLLECTIONS POST PAGE DATA
export const getCollectionsPostPageData = () =>
  fetchData("CollectionsPostPageDataF1");

// PRODUCTS PAGE APIS
export const getFilteredProducts = (collection, category, pageSize, colors) =>
listProducts("locationFilteredVariant", ["category", "product", 'subCategory'], slug);

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
    ["category", "product", "subCategory"],
    productId
  );
export const getProductVariants = (selectedProductId) =>
  fetchProductVariants("Stores/Variants", selectedProductId);

export const getProductSnapShots = (imageVariationId) =>
  fetchProductSnapshots("BPSProductImages", imageVariationId);

// TERMS AND CONDITIONS APIS
export const getTermsAndConditionsPageData = () =>
  fetchData("TermsandConditionsPageContentF1");

// PRIVACY AND POLICY APIS
export const getPrivacyAndPolicyPageData = () =>
  fetchData("PrivacyandPolicyPageContentF1");

// FOOTER APIS
export const getFooterData = () => fetchData("FooterDataF1");
export const getFooterLinksData = () => fetchData("FooterLinksDataF1");

// USER ACCOUNT APIS
export const getMyAccountPageData = () => fetchData("MyAccountPageDataF1");

export const getChangePasswordPageData = () =>
  fetchData("ChangePasswordPageDataF1");

export const getQuoteHistoryPageData = () =>
  fetchData("QuotesHistoryPageDataF1");

export const getSavedProductPageData = () => fetchData("SavedProductPageData");
