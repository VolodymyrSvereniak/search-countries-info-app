import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";
import { searchByCountry } from "./countriesConfig";

const initialState = {
  countries: [],
  status: "idle", // idle, loading, succeeded, failed
  error: null,
};

export const getCountriesDetails = createAsyncThunk(
  "countriesDetails/getCountriesDetails",
  async (name) => {
    try {
      const result = await axios.get(searchByCountry(name));
      console.log(result.data)
      return result.data;
    } catch (error) {
      console.log(error.message);
      throw Error("Failed to load list of countries");
    }
  }
);

const countriesDetailsSlice = createSlice({
  name: "countriesDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getCountriesDetails.pending,
      (state) => {
        state.status = "loading";
      },
      builder.addCase(
        getCountriesDetails.fulfilled,
        (state, action) => {
          state.status = "succeeded";
          state.countries = action.payload;
        },
        builder.addCase(getCountriesDetails.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
      )
    );
  },
});

const countriesDetailsSelector = (state) => state.countriesDetails;

export const selectedCountriesDetails = createSelector(
  countriesDetailsSelector,
  (selectedCountriesDetalsState) => {
    const { countries, status, error } = selectedCountriesDetalsState;
    return { countries, status, error };
  }
);

export default countriesDetailsSlice.reducer;
