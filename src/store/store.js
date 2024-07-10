import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../slices/themeSlice";
import countriesSlice from "../slices/countriesSlice/countriesSlice";
import countryDetailsSlice from "../slices/countriesSlice/countryDetailsSlice";

export const store = configureStore({
  reducer: {
    toggle: themeSlice,
    countries: countriesSlice,
    countryDetails: countryDetailsSlice
  },
});
