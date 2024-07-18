import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";
import { ALL_COUNTRIES } from "./countriesConfig";

const initialState = {
  countries: [],
  filteredCountries: [],
  status: "idle", // idle, loading, succeeded, failed
  error: null,
};

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async () => {
    try {
      const result = await axios.get(ALL_COUNTRIES);
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error.message);
      throw Error("Failed to load list of countries");
    }
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    filterCountries: (state, action) => {
      state.filteredCountries = state.countries.filter((country) =>
        country.name.common.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterByRegion: (state, action) => {
      state.filteredCountries = state.countries.filter((country) =>
        country.region.includes(action.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCountries.pending,
      (state) => {
        state.status = "loading";
      },
      builder.addCase(
        getCountries.fulfilled,
        (state, action) => {
          state.status = "succeeded";
          state.countries = action.payload;
          state.filteredCountries = action.payload;
        },
        builder.addCase(getCountries.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
      )
    );
  },
});

export const { filterCountries, filterByRegion } = countriesSlice.actions;

const countriesSelector = (state) => state.countries;

export const selectedCountries = createSelector(
  countriesSelector,
  (countriesSelectorState) => {
    const { filteredCountries } = countriesSelectorState;
    return { filteredCountries };
  }
);

export default countriesSlice.reducer;
