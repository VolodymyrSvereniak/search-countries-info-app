import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
    name: "toggle",
    initialState: "light",
    reducers: {
        setTheme: (_, action) => {
            return action.payload;
        },
        toggleTheme: (state) => {
            return state === "light" ? "dark" : "light";
        }
    }
})

export const {setTheme, toggleTheme} = toggleSlice.actions;

export const currentTheme = state => state.toggleSlice;

export default toggleSlice.reducer;