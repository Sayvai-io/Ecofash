import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

// Function to save the Redux state to local storage
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (e) {
    console.warn("Could not save state", e);
  }
}

// Function to load the Redux state from local storage
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load state", e);
    return undefined;
  }
}

const store = configureStore({
  reducer: {
    language: userReducer,
  },
  // Preload the store with the state from local storage if it exists
  preloadedState: loadFromLocalStorage(),
});

// Subscribe to store updates and save them to local storage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
