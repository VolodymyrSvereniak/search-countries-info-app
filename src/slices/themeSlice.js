import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
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

export const {setTheme, toggleTheme} = themeSlice.actions;

export const currentTheme = state => state.toggle;

export default themeSlice.reducer;