import { SafeAreaView, Text } from "react-native";
import React, { useEffect } from "react";

import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const PreparingOrderScreen = () => {
  type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Delivery"
  >;

  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3003);
  }, []);

  return (
    <SafeAreaView className="bg-mainColor flex-1 justify-center items-center">
      <Animatable.Image
        className="w-96 h-96"
        iterationCount={1}
        animation="slideInUp"
        source={require("../assets/animatedOrder.gif")}
      />

      <Animatable.Text
        className="text-base my-10 text-white font-bold text-center"
        iterationCount={2}
        animation="slideInUp"
      >
        Waiting for the Restaurant to accept your order.
      </Animatable.Text>

      <Progress.Circle
        borderWidth={5}
        size={60}
        indeterminate={true}
        color="white"
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
