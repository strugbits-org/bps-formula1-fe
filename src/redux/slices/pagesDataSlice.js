import { createSlice } from "@reduxjs/toolkit";
import {
  homeBottomLeftLink,
  homeBottomRightSocialLinks,
  homePageData,
} from "../thunks/homePageThunk";
import { createAccountForm, signInForm } from "../thunks/registrationPageThunk";
import { galleryPageData } from "../thunks/galleryPageThunk";

const initialState = {
  status: "idle",
  pages: {},
  error: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const handlePending = (state) => {
      state.status = "loading";
      state.error = null;
    };
    const handleRejected = (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    };

    builder
      // HOME DATA
      .addCase(homePageData.pending, handlePending)
      .addCase(homePageData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pages = {
          ...state.pages,
          homePageData: action.payload,
        };
      })
      .addCase(homePageData.rejected, handleRejected)

      .addCase(homeBottomRightSocialLinks.pending, handlePending)
      .addCase(homeBottomRightSocialLinks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pages = {
          ...state.pages,
          rightSectionIcons: action.payload,
        };
      })
      .addCase(homeBottomRightSocialLinks.rejected, handleRejected)

      .addCase(homeBottomLeftLink.pending, handlePending)
      .addCase(homeBottomLeftLink.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pages = {
          ...state.pages,
          leftSectionLinks: action.payload,
        };
      })
      .addCase(homeBottomLeftLink.rejected, handleRejected)

      //   SIGNIN DATA
      .addCase(signInForm.pending, handlePending)
      .addCase(signInForm.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pages = state.pages = {
          ...state.pages,
          signInPage: action.payload,
        };
      })
      .addCase(signInForm.rejected, handleRejected)

      //   CREATE ACCOUNT DATA
      .addCase(createAccountForm.pending, handlePending)
      .addCase(createAccountForm.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pages = state.pages = {
          ...state.pages,
          createAccountPage: action.payload,
        };
      })
      .addCase(createAccountForm.rejected, handleRejected)

      //   GALLERY PAGE DATA
      .addCase(galleryPageData.pending, handlePending)
      .addCase(galleryPageData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pages = state.pages = {
          ...state.pages,
          galleryPage: action.payload,
        };
      })
      .addCase(galleryPageData.rejected, handleRejected);
  },
});

export default dataSlice.reducer;
