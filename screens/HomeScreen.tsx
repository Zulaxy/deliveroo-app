import React, { useLayoutEffect } from "react";
import { Text, View, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import Categories from "../components/Categories";

import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import OffersNearYou from "../components/OffersNearYou";
import Featured from "../components/Featured";
import TastyDiscounts from "../components/TastyDiscounts";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-600 tex-xs">Deliver Now</Text>
          <View className="flex-row items-center">
            <Text className="font-bold text-xl">Current Location</Text>
            <ChevronDownIcon size={20} color="#00ccbb" />
          </View>
        </View>
        <UserIcon size={35} color="#00ccbb" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row bg-gray-200 space-x-2 flex-1 p-3 items-center">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and Cuisine"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={25} color="#00ccbb" />
      </View>

      {/* Body */}

      <ScrollView className="bg-gray-100">
        <Categories />

        <OffersNearYou />

        <Featured />

        <TastyDiscounts />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
