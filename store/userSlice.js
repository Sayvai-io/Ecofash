import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "language",
  initialState: {
    language: "en",
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      console.log("changed");
    },
  },
});

export const { setLanguage } = userSlice.actions;

export default userSlice.reducer;
