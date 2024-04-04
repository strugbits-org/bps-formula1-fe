import { combineReducers } from "@reduxjs/toolkit";

import galleryPageSlice from "./slices/galleryPageSlice";
import dataReducer from "./slices/homePageDataSlice";

const rootReducer = combineReducers({
  data: dataReducer,
  gallery: galleryPageSlice,
});

export default rootReducer;
