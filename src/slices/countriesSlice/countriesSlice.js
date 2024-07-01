import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ALL_COUNTRIES } from "./countriesConfig";

const initialState = {
  countries: [],
  status: "idle", // idle, loading, succeedded, failed
  error: null,
};

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async () => {
    const result = await axios.get(ALL_COUNTRIES);
    console.log(result.data);
    return result.data;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getCountries.pending,
      (state, action) => {},
      builder.addCase(
        getCountries.fulfilled,
        (state, action) => {
          state.countries = action.payload;
        },
        builder.addCase(getCountries.rejected, (state, action) => {})
      )
    );
  },
});

export const selectedCountries = (state) => {
  const { countries, loading, error } = state.countries;
  return { countries, loading, error };
};

export default countriesSlice.reducer;
