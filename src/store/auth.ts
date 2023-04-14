import { createSlice } from "@reduxjs/toolkit";

const INITIAL__STATE = {
  token: "",
};

const authentication = createSlice({
  name: "auth",
  initialState: INITIAL__STATE,
  reducers: {
    login(state, action) {
      // save information
      state.token = action.payload;

      // save token to the local storage
      localStorage.setItem("token", state.token);
    },
    logout(state) {
      // clear token variable
      state.token = "";

      // delete token from local storage
      localStorage.removeItem("token");
    },
  },
});

export const authActions = authentication.actions;

export default authentication.reducer;
