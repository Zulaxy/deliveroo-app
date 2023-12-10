import { createSlice } from "@reduxjs/toolkit";
import { SingleOfferTypes } from "../../types";
import { RootState } from "../store";

const initialState: SingleOfferTypes = {
  offer: {
    _id: "",
    id: 0,
    title: "",
    name: "",
    rating: 0,
    tag: "",
    address: "",
    image: {
      _type: "",
      asset: {
        _ref: "",
        _type: "",
      },
    },
    imgUrl: "",
    lat: "",
    long: "",
    dishes: [],
    short_description: "",
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.offer = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: RootState) => state.restaurant.offer;

export default restaurantSlice.reducer;
