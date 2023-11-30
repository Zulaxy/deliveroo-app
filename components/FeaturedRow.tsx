import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { ArrowRightIcon } from "react-native-heroicons/outline";

interface FeaturedRowProps {
  title: string;
  subtitle: string;
}

const FeaturedRow = ({ title, subtitle }: FeaturedRowProps) => {
  return (
    <View className="mx-4">
      <View className="flex-row">
        <Text className="font-bold text-xl flex-1">
          {title}
        </Text>
        <ArrowRightIcon size={25} color="#00ccbb" />
      </View>
      <Text className="font-bold text-gray-400 tex-xs">
        {subtitle}
      </Text>
    </View>
  );
};

export default FeaturedRow;

