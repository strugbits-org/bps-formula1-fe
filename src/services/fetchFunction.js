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


export const fetchCategoriesReferenceDataa = async (dataCollectionId, references, selectedCollectionId) => {
  try {
    const options = {
      dataCollectionId,
    };
    // "77f8aa7c-38c7-ac49-ef1e-fea401cdc075"
    // .hasSome("category", ['e230b0a4-002c-431b-9b00-3badc1bdf992'])
    const { items } = await WixClient.items.queryDataItems(options).ne('hidden', true).eq('isF1', true).hasSome("category", ["77f8aa7c-38c7-ac49-ef1e-fea401cdc075"]).find();
    console.log(items, '>>>>>>>>');
    return items.map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default fetchData;
