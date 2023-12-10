import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./reducers/basketSlice";
import restaurantSlice from "./reducers/restaurantSlice";

export const store = configureStore({
  reducer: {
    basket: basketSlice.reducer,
    restaurant: restaurantSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
