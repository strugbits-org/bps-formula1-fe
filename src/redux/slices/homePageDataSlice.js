import { createSlice } from "@reduxjs/toolkit";
import {
  homeBottomLeftLink,
  homeBottomRightSocialLinks,
  homePageData,
  privacyAndPolicy,
  termsAndCondition,
} from "../thunks/homePageThunk";
import {
  createAccountDropdown,
  createAccountForm,
  signInForm,
  signInUser,
} from "../thunks/registrationPageThunk";
import { collectionsData } from "../thunks/collections";

const initialState = {
  homeStatus: "idle",
  galleryStatus: "idle",
  userSignIn: false,
  pages: {},
  error: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const handlePending = (state) => {
      state.homeStatus = "loading";
      state.error = null;
    };
    const handleRejected = (state, action) => {
      state.homeStatus = "failed";
      state.error = action.error.message;
    };

    builder
      .addCase(signInUser.rejected, handleRejected)
      .addCase(signInUser.pending, handlePending)
      .addCase(signInUser.fulfilled, (state, action) => {
        state.userSignIn = true;
      })

      // HOME DATA
      .addCase(homePageData.pending, handlePending)
      .addCase(homePageData.fulfilled, (state, action) => {
        state.homeStatus = "succeeded";
        state.pages = {
          ...state.pages,
          homePageData: action.payload,
        };
      })
      .addCase(homePageData.rejected, handleRejected)

      .addCase(homeBottomRightSocialLinks.pending, handlePending)
      .addCase(homeBottomRightSocialLinks.fulfilled, (state, action) => {
        state.homeStatus = "succeeded";
        state.pages = {
          ...state.pages,
          rightSectionIcons: action.payload,
        };
      })
      .addCase(homeBottomRightSocialLinks.rejected, handleRejected)

      .addCase(homeBottomLeftLink.pending, handlePending)
      .addCase(homeBottomLeftLink.fulfilled, (state, action) => {
        state.homeStatus = "succeeded";
        state.pages = {
          ...state.pages,
          leftSectionLinks: action.payload,
        };
      })
      .addCase(homeBottomLeftLink.rejected, handleRejected)

      //   SIGNIN DATA
      .addCase(signInForm.pending, handlePending)
      .addCase(signInForm.fulfilled, (state, action) => {
        state.homeStatus = "succeeded";
        state.pages = state.pages = {
          ...state.pages,
          signInPage: action.payload,
        };
      })
      .addCase(signInForm.rejected, handleRejected)

      //   CREATE ACCOUNT DATA
      .addCase(createAccountForm.pending, handlePending)
      .addCase(createAccountForm.fulfilled, (state, action) => {
        state.homeStatus = "succeeded";
        state.pages = state.pages = {
          ...state.pages,
          createAccountPage: action.payload,
        };
      })
      .addCase(createAccountForm.rejected, handleRejected)

      //   CREATE ACCOUNT DROPDOWN DATA
      .addCase(createAccountDropdown.pending, handlePending)
      .addCase(createAccountDropdown.fulfilled, (state, action) => {
        state.homeStatus = "succeeded";
        state.pages = state.pages = {
          ...state.pages,
          createAccountDropdown: action.payload,
        };
      })
      .addCase(createAccountDropdown.rejected, handleRejected)

      //   Privacy
      .addCase(privacyAndPolicy.pending, handlePending)
      .addCase(privacyAndPolicy.fulfilled, (state, action) => {
        state.homeStatus = "succeeded";
        state.pages = state.pages = {
          ...state.pages,
          privacy: action.payload,
        };
      })
      .addCase(privacyAndPolicy.rejected, handleRejected)

      .addCase(termsAndCondition.pending, handlePending)
      .addCase(termsAndCondition.fulfilled, (state, action) => {
        state.homeStatus = "succeeded";
        state.pages = state.pages = {
          ...state.pages,
          terms: action.payload,
        };
      })
      .addCase(termsAndCondition.rejected, handleRejected)

      //   Collections DATA
      .addCase(collectionsData.pending, handlePending)
      .addCase(collectionsData.fulfilled, (state, action) => {
        state.homeStatus = "succeeded";
        state.pages = state.pages = {
          ...state.pages,
          collectionData: action.payload,
        };
      })
      .addCase(collectionsData.rejected, handleRejected);
  },
});


export default dataSlice.reducer;
