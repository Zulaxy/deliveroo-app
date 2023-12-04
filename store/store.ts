import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./reducers/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
