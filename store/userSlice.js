import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "language", // You can rename this slice to "user" as it now contains both language and title
  initialState: {
    language: "en",
    title: "", // Add the title state here
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      console.log("Language changed to:", state.language);
    },
    setTitle: (state, action) => {
      state.title = action.payload;
      console.log("Title changed to:", state.title);
    },
  },
});

// Export the actions
export const { setLanguage, setTitle } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
