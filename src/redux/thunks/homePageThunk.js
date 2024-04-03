import { createAsyncThunk } from "@reduxjs/toolkit";
import createWixClient from "../../config/WixConfig";

const WixClient = createWixClient();
export const homeBottomRightSocialLinks = createAsyncThunk(
  "data/homeBottomRightSocialLinks",
  async () => {
    try {
      let options = {
        dataCollectionId: "HomeBottomRightSocialLinks_f1",
      };
      const { items: fetchHomeTopData } = await WixClient.items
        .queryDataItems(options)
        .find();
      const desiredData = [];
      for (let i = 0; i < fetchHomeTopData.length; i++) {
        const element = fetchHomeTopData[i];
        desiredData.push(element.data);
      }
      return desiredData;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const homePageData = createAsyncThunk("data/homePageData", async () => {
  try {
    let options = {
      dataCollectionId: "HomePageData_f1",
    };
    const { items: fetchHomeData } = await WixClient.items
      .queryDataItems(options)
      .find();
    return fetchHomeData[0].data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const homeBottomLeftLink = createAsyncThunk(
  "data/homeBottomLeftLink",
  async () => {
    try {
      let options = {
        dataCollectionId: "HomeBottomLeftLink_f1",
      };
      const { items: fetchHomeData } = await WixClient.items
        .queryDataItems(options)
        .find();
      return fetchHomeData[0].data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
