import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";

interface CategoryCardProps {
  imgUrl?: string;
  title: string;
}

const CategoryCard = ({ imgUrl, title }: CategoryCardProps) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 bg-gray-300 p-4 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
