const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const fetchData = async (bodyData) => {
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF0dGFAZ21haWwuY29tIiwiaWF0IjoxNzE2NDU3NDkwfQ.NxcFUFbmhwjvvl4QfZjNrXWASaJpwvKjmpjyta0HF-k";
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF0dGFAZ21haWwuY29tIiwiaWF0IjoxNzE2NDUwMDAxfQ.CJ8HduOJ99dJyDuBPUChlr3mqBwCI2dWUpXJZSxSZxI";
  try {
    // const {
    //   dataCollectionId,
    //   includeReferencedItems,
    //   returnTotalCount,
    //   contains,
    //   limit,
    //   eq,
    //   ne,
    //   hasSome,
    //   skip,
    // } = req.body;
    // const bodyData = {
    //   dataCollectionId: "HomePageContentF1",
    // };

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
