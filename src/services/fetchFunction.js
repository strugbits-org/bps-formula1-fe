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




export const selectedCategoryData = async (dataCollectionId,references, slug) => {
  try {
    const options = { dataCollectionId ,
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

export const fetchProductSnapshots = async (
  dataCollectionId,
  references,
  slug
) => {
  try {
    const options = {
      dataCollectionId,
    };

    const { items } = await WixClient.items
      .queryDataItems(options)
      .eq("productId", "0825d779-f01f-4a87-9777-8a5fbf895c06")
      .find();

    console.log(items, "items>>>");
    return items.map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default fetchData;
