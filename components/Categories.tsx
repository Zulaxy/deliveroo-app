import React, { useEffect, useState } from "react";

import { ScrollView } from "react-native";

import CategoryCard from "./CategoryCard";
import { getAllCategories, urlFor } from "../sanity";

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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category: any) => (
        <CategoryCard
          key={category._id}
          title={category.name}
          imgUrl={urlFor(category.image).width(144).height(144).url()}
          // imgUrl={category.imgUrl}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
