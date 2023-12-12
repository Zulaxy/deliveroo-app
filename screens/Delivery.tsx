import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../store/reducers/restaurantSlice";
import { XMarkIcon } from "react-native-heroicons/solid";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

import * as Progress from "react-native-progress";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";

const Delivery = () => {
  const restaurant = useSelector(selectRestaurant);
  const fullConfig = resolveConfig(tailwindConfig);

  type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Delivery"
  >;

  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="bg-mainColor flex-1">
      <SafeAreaView className="z-50 mt-10">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <XMarkIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="text-white font-light text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">44-55 Minutes</Text>
            </View>
            <Image
              className="h-20 w-20"
              source={{ uri: "https://i.giphy.com/gsr9MG7bDvSRWWSD1Y.webp" }}
            />
          </View>
          <Progress.Bar
            width={150}
            color={fullConfig?.theme?.colors?.mainColor as string}
            indeterminate={true}
          />

          <Text className="mt-3 text-gray-600">
            Your order from {restaurant.title} is being prepared.
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        zoomControlEnabled={true}
        provider={PROVIDER_GOOGLE}
        mapType="mutedStandard"
        className="z-0 flex-1 -mt-12"
        initialRegion={{
          latitude: +restaurant.lat,
          longitude: +restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor={fullConfig?.theme?.colors?.mainColor as string}
          coordinate={{
            latitude: +restaurant.lat,
            longitude: +restaurant.long,
          }}
        />
      </MapView>

      <SafeAreaView className="bg-white py-2 flex-row items-center space-x-5 h-28">
        <Image
          className="w-12 h-12 rounded-full ml-5 bg-gray-300"
          source={{
            uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
          }}
        />
        <View className="flex-1">
          <Text className="text-large ">Galin Malchev</Text>
          <Text className="text-gray-600">Your Rider</Text>
        </View>
        <View>
          <Text className="text-mainColor mr-5 font-bold">Call Now</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Delivery;
