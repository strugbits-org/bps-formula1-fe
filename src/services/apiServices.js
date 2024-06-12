import { getToken } from "@/utils/GetUser";
import { getDataFetchFunction } from "./fetchFunction";

const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const getBackgroundImages = async () => {
  try {
    const response = await getDataFetchFunction({
      dataCollectionId: "BackgroundImagesF1",
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

export const getModalLogos = async () => {
  try {
    const response = await getDataFetchFunction({
      dataCollectionId: "ModalLogos",
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
