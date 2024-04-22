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

export const createAccountDropdown = createAsyncThunk(
  "data/createAccountDropdown",
  async () => {
    try {
      let options = {
        dataCollectionId: "CreateAccountDropdown_f1",
      };
      const { items: fetchSignInPageData } = await WixClient.items
        .queryDataItems(options)
        .find();
      const desiredData = [];
      for (let i = 0; i < fetchSignInPageData.length; i++) {
        const element = fetchSignInPageData[i];
        desiredData.push(element.data);
      }
      return desiredData;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const signInUser = createAsyncThunk(
  "data/signInUser",
  async (userData) => {
    try {
      const response = await WixClient.authentication.login(
        userData.loginEmail,
        userData.password
      );
      if (response) {
        console.log(response);
      }
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);


