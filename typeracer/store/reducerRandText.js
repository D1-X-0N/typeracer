import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valueRu: "",
  valueEn: "",
  loading: false,
};

export const randText = createSlice({
  name: "randText",
  initialState,
  reducers: {
    addRandomTextRu: (state, action) => {
      state.valueRu = action.payload;
    },
    addRandomTextEn: (state, action) => {
      state.valueEn = action.payload;
    },
    setLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { addRandomTextRu, addRandomTextEn, setLoading } =
  randText.actions;

export default randText.reducer;

export const RandTextWithMiddlewares = () => (dispatch, getState) => {
  console.log(getState());
  dispatch(setLoading());
  const setRandText = async () => {
    try {
      const response = await fetch(
        "https://fish-text.ru/get?type=sentence&number=1"
      );
      const result = await response.json();
      console.log(result.text);
      dispatch(addRandomTextRu(result.text));
      if (result.text.length > 0) {
        const res = await fetch(
          "https://translate.argosopentech.com/translate",
          {
            method: "POST",
            body: JSON.stringify({
              q: `${result.text}`,
              source: "ru",
              target: "en",
            }),
            headers: { "Content-Type": "application/json" },
          }
        );
        const trText = await res.json();
        dispatch(setLoading());
        dispatch(addRandomTextEn(trText.translatedText));
      } else {
        throw new Error("Text is empty");
      }
    } catch (err) {
      console.log(err);
    }
  };
  setRandText();
};

export const selectRandTextRu = (state) => state.randText.valueRu;
export const selectRandTextEn = (state) => state.randText.valueEn;
export const selectRandTextLoading = (state) => state.randText.loading;
