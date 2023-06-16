import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
  moiddleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
