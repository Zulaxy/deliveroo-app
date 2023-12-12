import { Text, View } from "react-native";
import React from "react";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";

import { ArrowRightIcon } from "react-native-heroicons/outline";

interface FeaturedRowProps {
  title: string;
  subtitle: string;
}

const FeaturedRow = ({ title, subtitle }: FeaturedRowProps) => {
  const fullConfig = resolveConfig(tailwindConfig);

  return (
    <View className="mx-4">
      <View className="flex-row">
        <Text className="font-bold text-xl flex-1">{title}</Text>
        <ArrowRightIcon
          size={25}
          color={fullConfig?.theme?.colors?.mainColor as string}
        />
      </View>
      <Text className="font-bold text-gray-400 tex-xs">{subtitle}</Text>
    </View>
  );
};

export default FeaturedRow;
