import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    toggleLogin: (state) => {
      state.loggedIn = !state.loggedIn;
    },
  },
});

export const { toggleLogin } = loginSlice.actions;

export default loginSlice.reducer;