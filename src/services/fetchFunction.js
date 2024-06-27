const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const getDataFetchFunction = async (bodyData, defaultAuthToken) => {
  const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9zeWVkMUBnbWFpbC5jb20iLCJpYXQiOjE3MTgyMDM3MjV9.48BCkA8s98XmR9myOWDQxcDU60xLp91EH5rUmbc7KFc";
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

export default getDataFetchFunction;
