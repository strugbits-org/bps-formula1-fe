// src/app/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./slices/pagesDataSlice";

const rootReducer = combineReducers({
  data: dataReducer,
  // Add other reducers here
});

export default rootReducer;
