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
import { RootStackParamList } from "../types";
import { SingleOfferTypes } from "../types";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const SingleRestaurantScreen = () => {
  const navigation = useNavigation();

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
    });
  }, []);

  console.log(restaurant);

  return (
    <ScrollView>
      <View className="relative">
        {restaurant && (
          <Image
            className="h-40 w-full"
            width={20}
            source={{ uri: urlFor(restaurant!.image).width(256).url() }}
          />
        )}
        <Text>{restaurant?.title}</Text>
        <TouchableOpacity className="absolute top-5 left-5 rounded-full bg-white p-2">
          <ArrowLeftIcon
            onPress={() => {
              navigation.goBack();
            }}
            className="h-6 w-6"
            size={20}
            color="#00ccbb"
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SingleRestaurantScreen;
