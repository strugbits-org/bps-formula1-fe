import { getToken } from "@/utils/GetUser";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const revalidate_time = +process.env.NEXT_PUBLIC_REVALIDATE_TIME || 86400;

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

    const response = await fetch(`${base_url}/api/wix/queryDataItems?payload=${encodeURIComponent(paramsData)}`,
      options
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Items data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export default getDataFetchFunction;
