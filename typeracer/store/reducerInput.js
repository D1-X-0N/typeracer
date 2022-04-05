import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const inputReducer = createSlice({
  name: "input",
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeValue } = inputReducer.actions;

export default inputReducer.reducer;

export const selectInputValue = (state) => state.input.value;
