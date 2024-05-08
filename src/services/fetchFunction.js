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

export const selectedCollectionData = async (dataCollectionId,slug) => {
  try {
    const options = { dataCollectionId };
    const { items } = await WixClient.items.queryDataItems(options).eq("collectionSlug",slug).find();
    return items.map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};
export const fetchReferenceData = async (dataCollectionId,references) => {
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

export const fetchCategoriesReferenceData = async (dataCollectionId,references,selectedCollectionId) => {
  try {
    const options = {
      dataCollectionId,
      includeReferencedItems: references,
    };
    const { items } = await WixClient.items.queryDataItems(options).hasSome("f1Collections",[selectedCollectionId]).find();
    return items.map((item) => item.data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default fetchData;
