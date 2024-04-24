import { createSlice } from "@reduxjs/toolkit";

import { collectionsData } from "../thunks/collections";
const initialState = {
  homeStatus: "idle",
  galleryStatus: "idle",
  collectionsStatus: "idle",
  userSignIn: false,
  pages: {},
  error: null,
};

export const collectionsSlice = createSlice({
  name: "collections",
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
      //   Collections DATA
      .addCase(collectionsData.pending, handlePending)
      .addCase(collectionsData.fulfilled, (state, action) => {
        state.collectionsStatus = "succeeded";
        state.pages = state.pages = {
          ...state.pages,
          collectionData: action.payload,
        };
      })
      .addCase(collectionsData.rejected, handleRejected);
  },
});

export default collectionsSlice.reducer;
