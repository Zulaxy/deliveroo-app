import { View, Image, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { DishTypes } from "../types";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import {
  addToBasket,
  selectBasketItems,
  removeFromBasket,
  selectBasketItemsById,
} from "../store/reducers/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

interface DishRowProps {
  dish: DishTypes;
}

const DishRow = ({ dish }: DishRowProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();

  const basketItems = useSelector(selectBasketItems);

  const basketItemsPerId = useSelector((state: RootState) =>
    selectBasketItemsById(state, dish._id)
  );

  const handleAddToBasket = (dish: DishTypes) => {
    dispatch(addToBasket(dish));
  };

  const handleRemoveFromBasket = (dish: DishTypes) => {
    if (basketItemsPerId.length === 0) return;
    dispatch(removeFromBasket(dish._id));
  };

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <>
      <TouchableOpacity
        onPress={handlePress}
        className={`bg-white border ${
          isPressed && "border-b-0"
        } p-4 border-gray-200`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{dish.name}</Text>
            <Text className="text-gray-400">{dish.short_description}</Text>
            <Text className="text-gray-600 mt-2">
              <Currency quantity={dish.price} currency="BGN" decimal="." />
            </Text>
          </View>

          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#f3f3f4" }}
              className="h-20 w-20 bg-gray-400 p-4"
              source={{ uri: urlFor(dish.image).url() }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View>
          <View className="flex-row items-center space-x-3 p-3 bg-white">
            <TouchableOpacity
              disabled={basketItemsPerId.length === 0}
              onPress={() => {
                handleRemoveFromBasket(dish);
              }}
            >
              <MinusCircleIcon
                size={40}
                color={basketItemsPerId.length === 0 ? "gray" : "#00ccbb"}
              />
            </TouchableOpacity>

            <Text>{basketItemsPerId.length}</Text>

            <TouchableOpacity
              onPress={() => {
                handleAddToBasket(dish);
              }}
            >
              <PlusCircleIcon size={40} color="#00ccbb" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
