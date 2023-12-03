import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import FeaturedRow from "./FeaturedRow";
import OfferCard from "./OffersCard";
import { getRestaurantsForSpecificCategory } from "../sanity";

interface FeaturedRowComponentProps {
  id: "string";
  title: "string";
  description: "string";
}

const FeaturedRowComponent = ({
  id,
  title,
  description,
}: FeaturedRowComponentProps) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurantsForSpecificCategory(id).then((data) => {
      setRestaurants(data?.restaurants);
    });
  }, []);

  return (
    <View className="mt-4">
      <FeaturedRow title={title} subtitle={description} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {restaurants.map((offer: any) => (
          <OfferCard offer={offer} key={offer._id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRowComponent;
