import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosLogin } from "../../https/auth";

const initialState = {
  isUserAvailable: false,
  token: null,
  userInfo: null,
  error: null,
  isPending: false, //bisa untuk animasi laoding
  isRejected: false, //bisa untuk errormessage
  isFulfilled: false,
};

const loginThunk = createAsyncThunk("user/login", async (body, { rejectWithValue }) => {
  try {
    const { data } = await axiosLogin(body);
    console.log(data);

    return data;
  } catch (error) {
    const errObj = {
      status: error.response.status,
      message: error.response.data.msg,
    };
    return rejectWithValue(errObj);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (prevState) => {
        return {
          ...prevState,
          isPending: true,
          isRejected: false,
          isFulfilled: false,
          error: null,
        };
      })
      .addCase(loginThunk.rejected, (prevState, { payload }) => {
        return {
          ...prevState,
          isPending: false,
          isRejected: true,
          error: payload,
        };
      })
      .addCase(loginThunk.fulfilled, (prevState, { payload }) => {
        return {
          ...prevState,
          isPending: false,
          isFulfilled: true,
          isUserAvailable: true,
          token: payload.token,
          userInfo: payload.userInfo,
        };
      });
  },
});

export const userAction = {
  ...userSlice.actions,
  loginThunk,
};
export default userSlice.reducer;
