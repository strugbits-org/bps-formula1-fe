import { galleryPageData } from "../thunks/galleryPageThunk";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  pages: {},
  error: null,
};

export const gallerySlice = createSlice({
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
      //   GALLERY PAGE DATA
      .addCase(galleryPageData.pending, handlePending)
      .addCase(galleryPageData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pages = {
          ...state.pages,
          galleryPageData: {
            ...state.pages.galleryPageData,
            ...action.payload,
          },
        };
      })
      .addCase(galleryPageData.rejected, handleRejected);
  },
});

export default gallerySlice.reducer;
