import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    language: userReducer,
  },
});

export default store;
