import { createAsyncThunk } from "@reduxjs/toolkit";
import createWixClient from "../../config/WixConfig";

const WixClient = createWixClient();

export const galleryPageData = createAsyncThunk(
  "data/galleryPageData",
  async () => {
    try {
      let options = {
        dataCollectionId: "GalleryPage_f1",
      };
      const { items: fetchGalleryData } = await WixClient.items
        .queryDataItems(options)
        .find();
      return fetchGalleryData[0].data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
