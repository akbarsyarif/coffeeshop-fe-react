import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productId: null,
};

const historySlice = createSlice({
  name: "userHistory",
  initialState,
  reducers: {
    addInfo: (prevState, { payload }) => {
      return {
        ...prevState,
        productId: payload,
      };
    },
    delInfo: (prevState) => {
      return {
        ...prevState,
        productId: null,
      };
    },
  },
});

export const { addInfo, delInfo } = historySlice.actions;
export default historySlice.reducer;
