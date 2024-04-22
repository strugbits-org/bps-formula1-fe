import { createAsyncThunk } from "@reduxjs/toolkit";
import createWixClient from "../../config/WixConfig";

const WixClient = createWixClient();
export const collectionsData = createAsyncThunk("data/collectionsData", async () => {
  try {
    let options = {
      dataCollectionId: "Collections_f1",
    };
    const { items: collectionsItemData } = await WixClient.items
      .queryDataItems(options)
      .find();
    const desiredData = [];
    for (let i = 0; i < collectionsItemData.length; i++) {
      const element = collectionsItemData[i];
      desiredData.push(element.data);
    }
    return desiredData
  } catch (error) {
    throw new Error(error.message);
  }
});


