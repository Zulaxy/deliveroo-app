import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";

interface CategoryCardProps {
  imgUrl?: string;
  title: string;
}

const CategoryCard = ({ imgUrl, title }: CategoryCardProps) => {
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-10 w-10 bg-gray-300 p-4 rounded"
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
