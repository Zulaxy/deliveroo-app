import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getRestaurantById, urlFor } from "../sanity";
import { RootStackParamList } from "../types";
import { SingleOfferTypes } from "../types";

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

  console.log(id);
  return (
    <ScrollView>
      <View>
        {restaurant && (
          <Image
            className="h-40 w-full"
            width={20}
            source={{ uri: urlFor(restaurant!.image).width(256).url() }}
          />
        )}
        <Text>{restaurant?.title}</Text>
      </View>
    </ScrollView>
  );
};

export default SingleRestaurantScreen;
