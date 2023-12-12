import { View, Text, TouchableOpacity } from "react-native";
import Currency from "react-currency-formatter";
import { StackNavigationProp } from "@react-navigation/stack";

import React from "react";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../store/reducers/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation<BasketIconNavigationProp>();

  const basketTotal = useSelector(selectBasketTotal);
  type BasketIconNavigationProp = StackNavigationProp<
    RootStackParamList,
    "Basket"
  >;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Basket");
        }}
        className="mx-5 p-4 rounded-lg items-center bg-mainColor flex-row space-x-2"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01a296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-center text-white font-extrabold text-lg">
          View Basket
        </Text>
        <Text className="text-white font-extrabold">
          <Currency quantity={basketTotal} currency="BGN" decimal="." />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
