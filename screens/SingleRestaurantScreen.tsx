import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { getRestaurantById } from "../sanity";

type RestaurantScreenRouteProp = RouteProp<RootStackParamList, "Restaurant">;

const SingleRestaurantScreen = ({
  route,
}: {
  route: RestaurantScreenRouteProp;
}) => {
  const { id } = route.params;

  const [restaurant, setRestaurant] = React.useState([]);

  useEffect(() => {
    getRestaurantById(id).then((data) => {
      setRestaurant(data);
    });
  }, []);

  console.log(restaurant);

  console.log(id);
  return (
    <View>
      <Text>SingleRestaurantScreen</Text>
    </View>
  );
};

export default SingleRestaurantScreen;
