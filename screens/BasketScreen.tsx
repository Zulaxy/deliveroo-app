import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../store/reducers/restaurantSlice";
import { Dishes, selectBasketItems } from "../store/reducers/basketSlice";

const BasketScreen = () => {
  const navigation = useNavigation();

  const redtaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState<Record<
    string,
    Dishes[]
  > | null>(null);

  const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {} as Record<string, (typeof items)[0][]>);

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  console.log(groupedItemsInBasket);

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  );
};

export default BasketScreen;
