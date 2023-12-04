import { createSlice } from "@reduxjs/toolkit";
import { DishTypes } from "../../types";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { RootState } from "../store";

interface Dishes {
  _id: string;
  id: string;
  name: string;
  description: string;
  price: string;
  image: SanityAsset;
}

export interface BasketSlice {
  items: Dishes[];
}

const initialState: BasketSlice = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    // removeFromBasket: (state, action) => {
    //   // state.items = -1;
    // },
  },
});

export const { addToBasket } = basketSlice.actions;

export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketItemsById = (state: RootState, id: string) =>
  state.basket.items.filter((item) => item._id === id);

export default basketSlice.reducer;
