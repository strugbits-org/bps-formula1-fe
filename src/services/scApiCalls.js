"use server";

import { getDataFetchFunction } from "./fetchFunction";
import { getAuthToken } from "./getAuthToken";

const isBuildProcess = process.env.NEXT_PUBLIC_BUILD_PROCESS === 'true';

const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;
const getAuthenticationToken = () => {
  if (isBuildProcess) {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9zeWVkMUBnbWFpbC5jb20iLCJpYXQiOjE3MTgyMDM3MjV9.48BCkA8s98XmR9myOWDQxcDU60xLp91EH5rUmbc7KFc";
  } else {
    const token = getAuthToken();
    return token;
  }
}

const serverComponentApiFetcher = async (bodyData) => {
  return await getDataFetchFunction(bodyData, getAuthenticationToken())
}

// HOME PAGE APIS
export const getHomePageData = async () => {
  try {
    const response = await serverComponentApiFetcher({
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
    if (response && response._items) {
      return response._items.map((x) => x.data)[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};

export const getHomeBottomRightSocialLinks = async () => {
  try {
    const response = await serverComponentApiFetcher({
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
    if (response && response._items) {
      return response._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};

export const getHomeBottomLeftLink = async () => {
  try {
    const response = await serverComponentApiFetcher({
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
    if (response && response._items) {
      return response._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};

// REGISTRATION PAGE APIS
export const getSignInPage = async () => {
  try {
    const response = await serverComponentApiFetcher({
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
    if (response && response._items) {
      return response._items.map((x) => x.data)[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};

export const getConfirmEmailPageData = async () => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "ConfirmEmailPageContentF1",
      includeReferencedItems: null,
      returnTotalCount: null,
      contains: null,
      limit: null,
      eq: null,
      ne: null,
      hasSome: null,
      skip: null,
    });
    if (response && response._items) {
      return response._items.map((x) => x.data)[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};

export const getResetPasswordPageData = async () => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "ResetPasswordPageContentF1",
      includeReferencedItems: null,
      returnTotalCount: null,
      contains: null,
      limit: null,
      eq: null,
      ne: null,
      hasSome: null,
      skip: null,
    });
    if (response && response._items) {
      return response._items.map((x) => x.data)[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};

export const getCreateAccountForm = async () => {
  try {
    const response = await serverComponentApiFetcher({
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
    if (response && response._items) {
      return response._items.map((x) => x.data)[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};

export const getCreateAccountDropdown = async () => {
  try {
    const response = await serverComponentApiFetcher({
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
    if (response && response._items) {
      return response._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};
// GALLERY PAGE APIS
export const getGalleryPageData = async () => {
  try {
    const response = await serverComponentApiFetcher({
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
    if (response && response._items) {
      return response._items.map((x) => x.data)[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};
// COLLECTIONS DATA
export const getCollectionsData = async () => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "CollectionsF1",
      limit: 1000
    });

    if (response && response._items) {
      return response._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};

export const getSubCategory = async (id) => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "F1CategoriesStructure",
      includeReferencedItems: ["parentCollection", "level2Collections"],
      returnTotalCount: null,
      contains: null,
      limit: null,
      hasSome: [
        {
          key: "level2Collections",
          values: id,
        },
      ],
      ne: null,
      eq: null,
      skip: null,
    });

    if (response && response._items) {
      return response._items.map((x) => x.data)[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
  }
};

export const getProductsListing = async (selectedCollectionId) => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "F1CategoriesStructure",
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

    if (response && response._items) {
      return response._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};

export const getSelectedCollectionData = async (slug) => {
  try {
    const response = await serverComponentApiFetcher({
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

    if (response && response._items) {
      return response._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};

// CATEGORY DATA
export const getAllCategoriesData = async () => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "F1CategoriesStructure",
      includeReferencedItems: ["parentCollection", "level2Collections", "f1Collections"],
      limit: 50
    });
    if (response && response._items) {
      const categoriesData = response._items.map((x) => x.data);
      const filteredData = categoriesData.filter((x) => x.parentCollection.slug !== "all-products");
      return filteredData;
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching all categories:", error);
    return [];
  }
};

export const getCategoriesData = async (collectionsIds) => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "F1CategoriesStructure",
      includeReferencedItems: ["f1Collections", "parentCollection"],
      returnTotalCount: null,
      contains: null,
      limit: null,
      eq: null,
      ne: null,
      hasSome: [
        {
          key: "f1Collections",
          values: collectionsIds,
        },
      ],
      skip: null,
    });
    console.log("getCategoriesData");
    if (response && response._items) {
      const categoriesData = response._items.map((x) => x.data);
      const filteredData = categoriesData.filter(
        (x) => x.parentCollection.slug !== "all-products"
      );
      return filteredData;
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};

export const getSelectedCategoryData = async (slug) => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "F1CategoriesStructure",
      includeReferencedItems: ["parentCollection", "level2Collections"],
      returnTotalCount: null,
      contains: null,
      limit: null,
      eq: [
        {
          key: "parentCollection",
          value: slug,
        },
      ],
      ne: null,
      hasSome: null,
      skip: null,
    });

    if (response && response._items) {
      return response._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};

export const getAllColorsData = async () => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "colorFilterCache",
      limit: 1000
    });

    if (response && response._items) {
      return response._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};

export const getCollectionColors = async (category) => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "colorFilterCache",
      returnTotalCount: null,
      contains: null,
      limit: null,
      eq: [
        {
          key: "category",
          value: category,
        },
      ],
      ne: null,
      hasSome: null,
      skip: null,
    });

    if (response && response._items) {
      return response._items.map((x) => x.data)[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
  }
};

export const getFilterCategory = async (selectedCollectionId) => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "F1CategoriesStructure",
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

    if (response && response._items) {
      return response._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
  }
};
// COLLECTIONS PAGE API
export const getCollectionsPageData = async () => {
  try {
    const response = await serverComponentApiFetcher({
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

    if (response && response._items) {
      return response._items.map((x) => x.data)[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
  }
};
// COLLECTIONS POST PAGE DATA
export const getCollectionsPostPageData = async () => {
  try {
    const response = await serverComponentApiFetcher({
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
    if (response && response._items) {
      return response._items.map((x) => x.data)[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
  }
};

// PRODUCT POST PAGE APIS
export const getProductPostPageData = async () => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "ProductPostPageF1",
      returnTotalCount: null,
      contains: null,
      limit: null,
      eq: null,
      ne: null,
      hasSome: null,
      skip: null,
    });

    if (response && response._items) {
      return response._items.map((x) => x.data)[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
  }
};

export const getSelectedProductId = async (slug) => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "Stores/Products",
      returnTotalCount: null,
      contains: null,
      limit: null,
      eq: [
        {
          key: "slug",
          value: slug,
        },
      ],
      ne: null,
      hasSome: null,
      skip: null,
    });

    if (response && response._items) {
      return response._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching selected ProductId:", error);
  }
};

export const getSelectedProductDetails = async (slug) => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "locationFilteredVariant",
      includeReferencedItems: [
        "category",
        "product",
        "subCategory",
        "f1Collection",
      ],
      returnTotalCount: null,
      contains: null,
      limit: null,
      eq: [
        {
          key: "isF1",
          value: true,
        },
        {
          key: "product",
          value: slug,
        },
      ],
      ne: [
        {
          key: "hidden",
          value: true,
        },
      ],
      hasSome: null,
      skip: null,
    });

    if (response && response._items) {
      return response._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
  }
};

export const getProductFound = async (slug) => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "F1CategoriesStructure",
      includeReferencedItems: ["parentCollection"],
      returnTotalCount: null,
      contains: null,
      limit: null,
      eq: null,
      ne: null,
      hasSome: null,
      skip: null,
    });

    if (response && response._items) {
      const categoriesData = response._items.map((x) => x.data);
      const filteredData = categoriesData.filter(
        (x) => x.parentCollection.slug !== "all-products"
      );
      return filteredData;
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
  }
};
export const getPairItWithProductsId = async (slug) => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "BPSPairItWith",
      includeReferencedItems: null,
      returnTotalCount: null,
      contains: null,
      limit: null,
      eq: [
        {
          key: "productId",
          value: slug,
        },
      ],
      ne: null,
      hasSome: null,
      skip: null,
    });

    if (response && response._items) {
      return response._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
  }
};

export const getPairItWithProducts = async (productIds) => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "locationFilteredVariant",
      includeReferencedItems: [
        "category",
        "product",
        "subCategory",
        "f1Collection",
      ],
      returnTotalCount: null,
      contains: null,
      limit: null,
      eq: [
        {
          key: "isF1",
          value: true,
        },
      ],
      ne: [
        {
          key: "hidden",
          value: true,
        },
      ],
      hasSome: [
        {
          key: "product",
          values: productIds,
        },
      ],
      skip: null,
    });
    if (response && response._items) {
      return response._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
  }
};

export const getProductVariants = async (id) => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "Stores/Variants",
      returnTotalCount: null,
      contains: null,
      limit: null,
      hasSome: null,
      ne: null,
      eq: [
        {
          key: "productId",
          value: id,
        },
      ],
      skip: null,
    });

    if (response && response._items) {
      return response._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};

export const getProductSnapShots = async (id) => {
  try {
    const response = await serverComponentApiFetcher({
      dataCollectionId: "BPSProductImages",
      returnTotalCount: null,
      contains: null,
      limit: null,
      hasSome: null,
      ne: null,
      eq: [
        {
          key: "productId",
          value: id,
        },
      ],
      skip: null,
    });

    if (response && response._items) {
      return response._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};

// TERMS AND CONDITIONS APIS
export const getTermsAndConditionsPageData = async () => {
  try {
    const response = await serverComponentApiFetcher({
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

    if (response && response._items) {
      return response._items.map((x) => x.data)[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};
// PRIVACY AND POLICY APIS
export const getPrivacyAndPolicyPageData = async () => {
  try {
    const response = await serverComponentApiFetcher({
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

    if (response && response._items) {
      return response._items.map((x) => x.data)[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};
// FOOTER APIS
export const getFooterData = async () => {
  try {
    const response = await serverComponentApiFetcher({
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

    if (response && response._items) {
      return response._items.map((x) => x.data)[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};

export const getFooterLinksData = async () => {
  try {
    const response = await serverComponentApiFetcher({
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

    if (response && response._items) {
      return response._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};
// USER ACCOUNT APIS
export const getMyAccountPageData = async () => {
  try {
    const response = await serverComponentApiFetcher({
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

    if (response && response._items) {
      return response._items.map((x) => x.data)[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};
export const getChangePasswordPageData = async () => {
  try {
    const response = await serverComponentApiFetcher({
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

    if (response && response._items) {
      return response._items.map((x) => x.data)[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};
export const getQuoteHistoryPageData = async () => {
  try {
    const response = await serverComponentApiFetcher({
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

    if (response && response._items) {
      return response._items.map((x) => x.data)[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};
export const getSavedProductPageData = async () => {
  try {
    const response = await serverComponentApiFetcher({
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

    if (response && response._items) {
      return response._items.map((x) => x.data)[0];
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
    return [];
  }
};
// SAVED PRODUCT PAGE APIS
// export const getSavedProductData = async (payload) => {
//   try {
//     const authToken = getAuthenticationToken();
//     const response = await fetch(`${base_url}formula1/wix/getSavedProducts`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: authToken,
//       },
//       body: JSON.stringify(payload),
//     });
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const data = await response.json();
//     const itemData = data.data;
//     if (itemData && itemData._items) {
//       return itemData._items.map((x) => x.data);
//     } else {
//       throw new Error("Response does not contain _items");
//     }
//   } catch (error) {
//     console.error("Error fetching saved products:", error);
//     return [];
//   }
// };

export const _fetchProducts = async (
  collections,
  categories,
  pageSize,
  colors,
  skip
) => {
  try {
    const payload = {
      dataCollectionId: "locationFilteredVariant",
      includeReferencedItems: [
        "category",
        "product",
        "subCategory",
        "f1Members",
        "f1Collection",
      ],
      returnTotalCount: true,
      contains: null,
      limit: pageSize,
      eq: [
        {
          key: "isF1",
          value: true,
        },
      ],
      ne: [
        {
          key: "hidden",
          value: true,
        },
      ],
      hasSome: [],
      skip: skip,
    };

    if (collections.length !== 0) {
      payload.hasSome.push({
        key: "f1Collection",
        values: collections,
      });
    }
    if (categories.length !== 0) {
      payload.hasSome.push({
        key: "subCategory",
        values: categories,
      });
    }
    if (colors.length !== 0) {
      payload.hasSome.push({
        key: "colors",
        values: colors,
      });
    }

    const response = await serverComponentApiFetcher(payload);
    if (response) {
      return response;
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
  }
};
export const fetchProducts = async () => {
  try {
    const payload = {
      dataCollectionId: "locationFilteredVariant",
      includeReferencedItems: [
        "category",
        "product",
        "subCategory",
        "f1Members",
        "f1Collection",
      ],
      eq: [
        {
          key: "isF1",
          value: true,
        },
      ],
      ne: [
        {
          key: "hidden",
          value: true,
        },
      ],
    };

    const response = await serverComponentApiFetcher(payload);
    if (response && response._items) {
      return response._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
  }
};

export const getSearchProducts = async (collections, colors, searchTerm) => {
  try {
    const payload = {
      dataCollectionId: "locationFilteredVariant",
      includeReferencedItems: [
        "category",
        "product",
        "subCategory",
        "f1Members",
        "f1Collection",
      ],
      returnTotalCount: true,
      contains: ["search", searchTerm],
      limit: null,
      eq: [
        {
          key: "isF1",
          value: true,
        },
      ],
      ne: [
        {
          key: "hidden",
          value: true,
        },
      ],
      hasSome: [],
      skip: null,
    };

    if (collections.length !== 0) {
      payload.hasSome.push({
        key: "f1Collection",
        values: collections,
      });
    }

    if (colors.length !== 0) {
      payload.hasSome.push({
        key: "colors",
        values: colors,
      });
    }

    const response = await serverComponentApiFetcher(payload);

    if (response) {
      return response;
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching filter category:", error);
  }
};

export const getQuotes = async (authToken) => {
  try {
    const response = await fetch(`${base_url}formula1/wix/getAllPriceQuote`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: authToken,
      },
      cache: "no-store"
    });
    if (!response.ok) {
      throw new Error("Failed to fetch quotes");
    }
    const data = await response.json();
    return data.data._items;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const fetchAllProducts = async () => {
  try {
    const payload = {
      dataCollectionId: "locationFilteredVariant",
      includeReferencedItems: ["product"],
      limit: 1000,
      eq: [
        {
          key: "isF1",
          value: true,
        },
      ],
      ne: [
        {
          key: "hidden",
          value: true,
        },
      ],
    };
    const response = await serverComponentApiFetcher(payload);
    if (response && response._items) {
      return response._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching all products:", error);
  }
};

export const getSavedProductData = async (payload, returnTotalCount = false) => {
  try {
    const authToken = getAuthenticationToken();
    const response = await fetch(`${base_url}formula1/wix/getSavedProducts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
      body: JSON.stringify(payload),
      cache: "no-store"
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const itemData = data.data;
    if (returnTotalCount && itemData) return itemData;

    if (itemData && itemData._items) {
      return itemData._items.map((x) => x.data);
    } else {
      throw new Error("Response does not contain _items");
    }
  } catch (error) {
    console.error("Error fetching saved products:", error);
    return [];
  }
};