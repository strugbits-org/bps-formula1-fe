import { combineReducers } from "@reduxjs/toolkit";

import dataReducer from "./slices/homePageDataSlice";
import galleryPageSlice from "./slices/galleryPageSlice";
import collectionsPageSlice from "./slices/collectionsPageSlice";

const rootReducer = combineReducers({
  data: dataReducer,
  gallery: galleryPageSlice,
  collections: collectionsPageSlice,
});

export default rootReducer;
