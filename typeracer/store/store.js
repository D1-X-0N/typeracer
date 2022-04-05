import { configureStore } from "@reduxjs/toolkit";
import randTextReducer from "./reducerRandText";
import inputReducer from "./reducerInput";

export const store = configureStore({
  reducer: {
    randText: randTextReducer,
    input: inputReducer,
  },
});
