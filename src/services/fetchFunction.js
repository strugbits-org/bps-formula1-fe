import createWixClient from "@/config/WixConfig";
import { getUserAuth } from "@/utils/GetUser";
const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;

const WixClient = createWixClient();
const fetchData = async (dataCollectionId) => {
  try {
    const options = { dataCollectionId };
    const { items } = await WixClient.items.queryDataItems(options).find();
    return items.map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchDataa = async (bodyData) => {
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF0dGFAZ21haWwuY29tIiwiaWF0IjoxNzE2NDU3NDkwfQ.NxcFUFbmhwjvvl4QfZjNrXWASaJpwvKjmpjyta0HF-k";
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF0dGFAZ21haWwuY29tIiwiaWF0IjoxNzE2NDUwMDAxfQ.CJ8HduOJ99dJyDuBPUChlr3mqBwCI2dWUpXJZSxSZxI";
  try {
    // const {
    //   dataCollectionId,
    //   includeReferencedItems,
    //   returnTotalCount,
    //   contains,
    //   limit,
    //   eq,
    //   ne,
    //   hasSome,
    //   skip,
    // } = req.body;
    // const bodyData = {
    //   dataCollectionId: "HomePageContentF1",
    // };

    const headers = {
      "Content-Type": "application/json",
    };

    if (authToken) {
      headers.authorization = authToken;
    }
    const response = await fetch(`${base_url}formula1/wix/queryDataItems`, {
      method: "POST",
      headers,
      body: JSON.stringify(bodyData),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch single Items data");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const selectedCollectionData = async (dataCollectionId, slug) => {
  try {
    const options = { dataCollectionId };
    const { items } = await WixClient.items
      .queryDataItems(options)
      .eq("collectionSlug", slug)
      .find();
    return items.map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchReferenceData = async (dataCollectionId, references) => {
  try {
    const options = {
      dataCollectionId,
      includeReferencedItems: references,
    };
    const { items } = await WixClient.items.queryDataItems(options).find();

    return items.map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchCollectionColorsArray = async (
  dataCollectionId,
  categories
) => {
  try {
    const options = {
      dataCollectionId,
    };
    const { items } = await WixClient.items
      .queryDataItems(options)
      .hasSome("category", categories)
      .find();

    return items.map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchCollectionColors = async (dataCollectionId, category) => {
  try {
    const options = {
      dataCollectionId,
    };
    const { items } = await WixClient.items
      .queryDataItems(options)
      .eq("category", category)
      .find();

    return items.map((item) => item.data)[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

export const selectedCategoryData = async (
  dataCollectionId,
  references,
  slug
) => {
  try {
    const options = {
      dataCollectionId,
      includeReferencedItems: references,
    };
    const { items } = await WixClient.items
      .queryDataItems(options)
      .hasSome("parentCollection", [slug])
      .find();

    return items.map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchCategoriesReferenceData = async (
  dataCollectionId,
  references,
  selectedCollectionId
) => {
  try {
    const options = {
      dataCollectionId,
      includeReferencedItems: references,
    };
    const { items } = await WixClient.items
      .queryDataItems(options)
      .hasSome("f1Collections", selectedCollectionId)
      .find();

    return items
      .filter((x) => x.data.parentCollection.slug !== "all-products")
      .map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const listProducts = async (
  collections = [],
  categories = [],
  pageSize = 9,
  colors = [],
  skip = 0
) => {
  try {
    const options = {
      dataCollectionId: "locationFilteredVariant",
      includeReferencedItems: [
        "category",
        "product",
        "subCategory",
        "members",
        "f1Collection",
      ],
      returnTotalCount: true,
    };
    let query = WixClient.items
      .queryDataItems(options)
      .ne("hidden", true)
      .eq("isF1", true);

    if (collections.length !== 0) {
      query = query.hasSome("f1Collection", collections);
    }

    if (colors.length !== 0) {
      query = query.hasSome("colors", colors);
    }

    if (categories.length !== 0) {
      query = query.hasSome("subCategory", categories);
    }

    const response = await query.limit(pageSize).skip(skip).find();
    return response;
  } catch (error) {
    console.log("error", error);
    throw new Error(error.message);
  }
};

export const fetchSearchData = async (collections, colors, searchTerm) => {
  try {
    const options = {
      dataCollectionId: "locationFilteredVariant",
      includeReferencedItems: [
        "category",
        "product",
        "subCategory",
        "f1Collection",
      ],
      returnTotalCount: true,
    };

    let query = WixClient.items
      .queryDataItems(options)
      .ne("hidden", true)
      .eq("isF1", true);

    if (collections.length !== 0) {
      query = query.hasSome("f1Collection", collections);
    }

    if (colors.length !== 0) {
      query = query.hasSome("colors", colors);
    }

    const response = await query.contains("search", searchTerm).find();
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchCategoriesReferenceDataa = async (
  dataCollectionId,
  references,
  slug
) => {
  try {
    const options = {
      dataCollectionId,
      includeReferencedItems: references,
    };

    const { items } = await WixClient.items
      .queryDataItems(options)
      .ne("hidden", true)
      .eq("isF1", true)
      .hasSome("category", [slug])
      .find();
    return items.map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchSelectedProductId = async (dataCollectionId, slug) => {
  try {
    const options = {
      dataCollectionId,
    };

    const { items } = await WixClient.items
      .queryDataItems(options)
      .eq("slug", slug)
      .find();

    return items.map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchPairItWithProductsIds = async (dataCollectionId, slug) => {
  try {
    const options = {
      dataCollectionId,
    };

    const { items } = await WixClient.items
      .queryDataItems(options)
      .eq("productId", slug)
      .find();

    return items.map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchPairItWithProducts = async (
  dataCollectionId,
  references,
  productId
) => {
  try {
    const options = {
      dataCollectionId,
      includeReferencedItems: references,
    };

    const { items } = await WixClient.items
      .queryDataItems(options)
      .hasSome("product", productId)
      .find();
    return items.map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchProductDetails = async (
  dataCollectionId,
  references,
  slug
) => {
  try {
    const options = {
      dataCollectionId,
      includeReferencedItems: references,
    };

    const { items } = await WixClient.items
      .queryDataItems(options)
      .eq("product", slug)
      .find();
    return items.map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchProductVariants = async (
  dataCollectionId,
  selectedProductId
) => {
  try {
    const options = {
      dataCollectionId,
    };

    const { items } = await WixClient.items
      .queryDataItems(options)
      .eq("productId", selectedProductId)
      .find();

    return items.map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchProductSnapshots = async (dataCollectionId, slug) => {
  try {
    const options = {
      dataCollectionId,
    };

    const { items } = await WixClient.items
      .queryDataItems(options)
      .eq("productId", slug)
      .find();
    return items.map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchQuotes = async (authToken) => {
  try {
    const response = await fetch(`${base_url}formula1/wix/getAllPriceQuote`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: authToken,
      },
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

export default fetchData;
