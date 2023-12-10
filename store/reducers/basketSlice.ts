import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { DishTypes } from "../../types";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { RootState } from "../store";

export interface Dishes {
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
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item._id === action.payload
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload}) as it's not in the basket`
        );
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketItemsById = createSelector(
  // Input selectors
  (state: RootState) => state.basket.items,
  (_, id: string) => id,

  // Result function
  (items: DishTypes[], id) => items.filter((item: DishTypes) => item._id === id)
);

export const selectBasketTotal = createSelector(
  // Input selector
  (state: RootState) => state.basket.items,

  // Result function
  (items: Dishes[]) =>
    items.reduce((total: number, item: Dishes) => total + Number(item.price), 0)
);

export default basketSlice.reducer;
