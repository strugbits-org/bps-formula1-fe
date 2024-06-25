import { getToken } from "@/utils/GetUser";

const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;
const revalidate_time = +process.env.NEXT_PUBLIC_REVALIDATE_TIME || 86400;

export const fetchData = async (bodyData) => {
  const authToken = getToken();
  try {
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
      throw new Error("Failed to fetch Items data");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const getDataFetchFunction = async (bodyData, defaultAuthToken) => {
  const authToken = defaultAuthToken || getToken();
  const paramsData = JSON.stringify(bodyData);
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    if (authToken) headers.authorization = authToken;

    const options = {
      method: "GET",
      headers,
      cache: "force-cache",
      next: { tags: ["all", bodyData.dataCollectionId], },
    }

    const response = await fetch(
      `${base_url}formula1/wix/queryDataItems?payload=${paramsData}`,
      options
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Items data");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export default fetchData;
