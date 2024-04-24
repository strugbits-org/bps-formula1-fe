import { createAsyncThunk } from "@reduxjs/toolkit";
import createWixClient from "../../config/WixConfig";
import { handleCollectionLoaded } from "../../utils/CollectionsLoader";

const WixClient = createWixClient();

export const galleryPageData = createAsyncThunk(
  "data/galleryPageData",
  async () => {
    try {
      let options = {
        dataCollectionId: "GalleryPage_f1",
      };
      const { items: collectionsItemData } = await WixClient.items
        .queryDataItems(options)
        .find();

      handleCollectionLoaded();
      return collectionsItemData[0].data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);


