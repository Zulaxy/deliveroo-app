import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getRestaurantById, urlFor } from "../sanity";
import { DishTypes, RootStackParamList } from "../types";
import { SingleOfferTypes } from "../types";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";

import { setRestaurant as setRestaurantAction } from "../store/reducers/restaurantSlice";

import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketItems } from "../store/reducers/basketSlice";

const SingleRestaurantScreen = () => {
  const fullConfig = resolveConfig(tailwindConfig);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems);

  const route = useRoute();
  const { id } = route.params as RootStackParamList["Restaurant"];

  const [restaurant, setRestaurant] = useState<
    SingleOfferTypes["offer"] | null
  >(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    getRestaurantById(id).then((data) => {
      setRestaurant(data);
      dispatch(setRestaurantAction(data));
    });
  }, []);

  return (
    <>
      {items.length > 0 && <BasketIcon />}
      <ScrollView>
        <View className="relative">
          {restaurant && (
            <Image
              className="h-40 w-full"
              width={20}
              source={{ uri: urlFor(restaurant!.image).width(256).url() }}
            />
          )}
          <TouchableOpacity className="absolute top-5 left-5 rounded-full bg-white p-2">
            <ArrowLeftIcon
              onPress={() => {
                navigation.goBack();
              }}
              className="h-6 w-6"
              size={20}
              color={fullConfig?.theme?.colors?.mainColor as string}
            />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="p-4">
            <Text className="text-3xl font-bold">{restaurant?.title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon size={15} color="#fde047" />

                <Text className={`text-sm font-bold`}>
                  {restaurant?.rating}
                </Text>

                <MapPinIcon size={15} color="gray" />

                <Text className="text-sm">Nearby - {restaurant?.address}</Text>
              </View>
            </View>
            <Text className="text-sm text-gray-600">
              {restaurant?.short_description ||
                "A very delicious restaurant in varna offering burgers with beef and other stuff."}
            </Text>
          </View>

          <TouchableOpacity className="flex-row items-center p-4 border-y border-gray-300">
            <View className="flex-row items-center space-x-2 flex-1">
              <QuestionMarkCircleIcon size={15} color="gray" />
              <Text className="text-sm font-bold">More info</Text>
            </View>
            <ChevronRightIcon
              size={15}
              color={fullConfig?.theme?.colors?.mainColor as string}
            />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="pt-6 mb-3 ml-4 font-bold text-xl">Menu</Text>

          {/* dishes */}
          {restaurant?.dishes &&
            restaurant?.dishes.map((dish: DishTypes) => (
              <DishRow dish={dish} key={dish._id} />
            ))}
        </View>
      </ScrollView>
    </>
  );
};

export default SingleRestaurantScreen;
