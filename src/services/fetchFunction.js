import createWixClient from "@/config/WixConfig";

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

export const selectedCollectionData = async (dataCollectionId, slug) => {
  try {
    const options = { dataCollectionId };
    const { items } = await WixClient.items.queryDataItems(options).eq("collectionSlug", slug).find();
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






export const fetchCollectionColorsArray = async (dataCollectionId, categories) => {
  try {
    const options = {
      dataCollectionId,
    };
    const { items } = await WixClient.items.queryDataItems(options).hasSome("category", categories).find();

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
    const { items } = await WixClient.items.queryDataItems(options).eq("category", category).find();

    return items.map((item) => item.data)[0];
  } catch (error) {
    throw new Error(error.message);
  }
};

export const selectedCategoryData = async (dataCollectionId, references, slug) => {
  try {
    const options = {
      dataCollectionId,
      includeReferencedItems: references,

    };
    const { items } = await WixClient.items.queryDataItems(options).hasSome("parentCollection", [slug]).find();

    return items.map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchCategoriesReferenceData = async (dataCollectionId, references, selectedCollectionId) => {
  try {
    const options = {
      dataCollectionId,
      includeReferencedItems: references,
    };
    const { items } = await WixClient.items.queryDataItems(options).hasSome("f1Collections", selectedCollectionId).find();

    return items.filter((x) => x.data.parentCollection.slug !== "all-products").map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};


export const listProducts = async (collections = [], categories = [], pageSize = 9, colors = [], skip = 0) => {
  try {
    const options = {
      dataCollectionId: "locationFilteredVariant",
      includeReferencedItems: ["category", "product", "subCategory", "members","f1Collection"],
      returnTotalCount: true,
    };
    let query = WixClient.items.queryDataItems(options).ne('hidden', true).eq('isF1', true);

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
      includeReferencedItems: ["category", "product", 'subCategory'],
      "returnTotalCount": true,
    };

    let query = WixClient.items.queryDataItems(options).ne('hidden', true).eq('isF1', true);

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

export const fetchCategoriesReferenceDataa = async (dataCollectionId, references, slug) => {
  try {
    const options = {
      dataCollectionId,
      includeReferencedItems: references,

    };

    const { items } = await WixClient.items.queryDataItems(options).ne('hidden', true).eq('isF1', true).hasSome("category", [slug]).find();
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

export default fetchData;
