import { createSlice } from "@reduxjs/toolkit";
import {
  HomeBottomLeftLink,
  HomeBottomRightSocialLinks,
  homePageData,
} from "../thunks/homePageThunk";

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
          pagesData: action.payload,
        };
      })
      .addCase(homePageData.rejected, handleRejected)

      .addCase(HomeBottomRightSocialLinks.pending, handlePending)
      .addCase(HomeBottomRightSocialLinks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pages = {
          ...state.pages,
          rightSectionIcons: action.payload,
        };
      })
      .addCase(HomeBottomRightSocialLinks.rejected, handleRejected)

      .addCase(HomeBottomLeftLink.pending, handlePending)
      .addCase(HomeBottomLeftLink.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pages = {
          ...state.pages,
          leftSectionLinks: action.payload,
        };
      })
      .addCase(HomeBottomLeftLink.rejected, handleRejected);

    //   SIGNIN DATA
  },
});

export default dataSlice.reducer;
