import { createAsyncThunk } from "@reduxjs/toolkit";
import createWixClient from "../../config/WixConfig";

const WixClient = createWixClient();
export const signInForm = createAsyncThunk("data/signInForm", async () => {
  try {
    let options = {
      dataCollectionId: "SignInPage_f1",
    };
    const { items: fetchSignInPageData } = await WixClient.items
      .queryDataItems(options)
      .find();
    return fetchSignInPageData[0].data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const createAccountForm = createAsyncThunk(
  "data/createAccountForm",
  async () => {
    try {
      let options = {
        dataCollectionId: "CreateAccountPage_f1",
      };
      const { items: fetchSignInPageData } = await WixClient.items
        .queryDataItems(options)
        .find();
      return fetchSignInPageData[0].data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
