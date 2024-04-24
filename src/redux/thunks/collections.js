import { createAsyncThunk } from "@reduxjs/toolkit";
import createWixClient from "../../config/WixConfig";
import { handleCollectionLoaded } from "../../utils/CollectionsLoader";

const WixClient = createWixClient();
export const collectionsData = createAsyncThunk(
  "data/collectionsData",
  async () => {
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
      handleCollectionLoaded();

      return desiredData;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);


