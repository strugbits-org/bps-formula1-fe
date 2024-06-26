import { getToken } from "@/utils/GetUser";

const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;

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
      throw new Error("Failed to fetch single Items data");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export default fetchData;
