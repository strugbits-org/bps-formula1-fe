import { getToken } from "@/utils/GetUser";
import { getDataFetchFunction } from "./fetchFunction";

const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;

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
export const getSavedProductData = async (payload, returnTotalCount = false) => {
  try {
    const authToken = getToken();
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
