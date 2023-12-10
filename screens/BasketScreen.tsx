import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../store/reducers/restaurantSlice";
import {
  Dishes,
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../store/reducers/basketSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigation = useNavigation();

  const restaurant = useSelector(selectRestaurant);
  const basketTotal = useSelector(selectBasketTotal);
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

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00ccbb] bg-white shadow-xs">
          <View className="">
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon size={50} color="#00ccbb" />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            className="w-7 h-7 rounded-full bg-gray-300 p4"
            source={{
              uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
            }}
          />
          <Text className="flex-1">Deliver in 50 minutes</Text>
          <TouchableOpacity>
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1">
          <ScrollView className="divide-y-[0.5px] divide-gray-500">
            {groupedItemsInBasket &&
              Object.entries(groupedItemsInBasket).map(([key, items]) => (
                <View
                  key={key}
                  className="flex-row items-center space-x-3 bg-white py-2 px-5"
                >
                  <Text className="text-[#00ccbb]">{items.length} x</Text>
                  <Image
                    className="w-12 h-12 rounded-full"
                    source={{ uri: urlFor(items[0]?.image).url() }}
                  />
                  <Text className="flex-1">{items[0]?.name}</Text>

                  <Text className="flex-1">
                    <Currency
                      quantity={+items[0].price}
                      currency="BGN"
                      decimal="."
                    />
                  </Text>
                  <TouchableOpacity>
                    <Text
                      className="text-[#00ccbb] text-xs"
                      onPress={() => {
                        dispatch(removeFromBasket(items[0]._id));
                      }}
                    >
                      Remove 1
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
          </ScrollView>
        </View>
        <View className="p-5 bg-white mt-y space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="BGN" decimal="." />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={5.99} currency="BGN" decimal="." />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="font-extrabold text-lg">Basket Total</Text>
            <Text className="font-extrabold text-lg">
              <Currency quantity={5.99} currency="BGN" decimal="." />
            </Text>
          </View>
          <TouchableOpacity className="rounded-lg bg-[#00ccbb] p-4">
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
