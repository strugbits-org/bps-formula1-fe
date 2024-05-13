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
export const fetchSearchData = async (dataCollectionId, references, query) => {
  try {
    const options = {
      dataCollectionId,
      includeReferencedItems: references,
    };
    const { items } = await WixClient.items.queryDataItems(options).ne('hidden', true).eq('isF1', true).contains("search", query).find();
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

    return items.map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};


export const listProducts = async (collection, categories = [], pageSize = 8, colors = [], skip = null) => {
  try {
    const options = {
      dataCollectionId: "locationFilteredVariant",
      includeReferencedItems: ["category", "product", 'subCategory'],
      "returnTotalCount": true,
    };

    const response = await WixClient.items.queryDataItems(options).ne('hidden', true).eq('isF1', true).eq("f1Collection", collection).hasSome("subCategory", categories).hasSome("colors", colors).limit(pageSize).skip(2).find();
    return response;
  } catch (error) {
    console.log("error", error);
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

export default fetchData;
