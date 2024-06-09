import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "../slices/toggleSlice";

export const store = configureStore({
  reducer: {
    toggleSlice
  },
});
