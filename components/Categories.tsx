import React from "react";

import { Text, ScrollView } from "react-native";

import CategoryCard from "./CategoryCard";

const DUMMY_CATEGORIES = [
  {
    title: "Category1",
    imgUrl: "https://picsum.photos/400",
  },
  {
    title: "Category2",
    imgUrl: "https://picsum.photos/400",
  },
  {
    title: "Category3",
    imgUrl: "https://picsum.photos/400",
  },
  {
    title: "Category4",
    imgUrl: "https://picsum.photos/400",
  },
  {
    title: "Category5",
    imgUrl: "https://picsum.photos/400",
  },
  {
    title: "Category6",
    imgUrl: "https://picsum.photos/400",
  },
];

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {DUMMY_CATEGORIES.map((category) => (
        <CategoryCard
          key={category.title}
          title={category.title}
          imgUrl={category.imgUrl}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
