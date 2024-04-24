import { galleryPageData } from "../thunks/galleryPageThunk";
import { createSlice } from "@reduxjs/toolkit";
import {
  homeBottomLeftLink,
  homeBottomRightSocialLinks,
} from "../thunks/homePageThunk";
import { collectionsData } from "../thunks/collections";
const initialState = {
  homeStatus: "idle",
  galleryStatus: "idle",
  userSignIn: false,
  pages: {},
  error: null,
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const handlePending = (state) => {
      state.galleryStatus = "loading";
      state.error = null;
    };
    const handleRejected = (state, action) => {
      state.galleryStatus = "failed";
      state.error = action.error.message;
    };

    builder
      //   GALLERY PAGE DATA

      .addCase(collectionsData.pending, handlePending)
      .addCase(collectionsData.fulfilled, (state, action) => {
        state.galleryStatus = "succeeded";
        state.pages = {
          ...state.pages,
          collectionsData: action.payload,
        };
      })
      .addCase(collectionsData.rejected, handleRejected)

      .addCase(galleryPageData.pending, handlePending)
      .addCase(galleryPageData.fulfilled, (state, action) => {
        state.galleryStatus = "succeeded";
        state.pages = {
          ...state.pages,
          galleryPageData: action.payload,
        };
      })
      .addCase(galleryPageData.rejected, handleRejected)

      .addCase(homeBottomLeftLink.pending, handlePending)
      .addCase(homeBottomLeftLink.fulfilled, (state, action) => {
        state.galleryStatus = "succeeded";
        state.pages = {
          ...state.pages,
          bottomLinks: action.payload,
        };
      })
      .addCase(homeBottomLeftLink.rejected, handleRejected)

      .addCase(homeBottomRightSocialLinks.pending, handlePending)
      .addCase(homeBottomRightSocialLinks.fulfilled, (state, action) => {
        state.galleryStatus = "succeeded";
        state.pages = {
          ...state.pages,
          bottomSocialLinks: action.payload,
        };
      })
      .addCase(homeBottomRightSocialLinks.rejected, handleRejected);
  },
});

export default gallerySlice.reducer;
