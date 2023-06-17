import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  moiddleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
