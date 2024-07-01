import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../slices/themeSlice";
import countriesSlice from "../slices/countriesSlice/countriesSlice";

export const store = configureStore({
  reducer: {
    toggle: themeSlice,
    countries: countriesSlice
  },
});
