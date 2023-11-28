import { View, Text, ScrollView } from "react-native";
import React from "react";

import { ArrowRightIcon } from "react-native-heroicons/outline";
import OfferCard from "./OffersCard";
import FeaturedRow from "./FeaturedRow";

function getRandomCoordinate() {
  // Generates a random coordinate within a specific range
  return Math.random() * (180 - -180) + -180;
}

const MOCK_OFFERS = [
  {
    id: 1,
    title: "Pappa Burgers",
    rating: 4.8,
    tag: "Burger",
    location: "General Kolev 1",
    imgUrl:
      "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    short_description: "Delicious burgers for the whole family.",
    dishes: ["Classic Burger", "Cheeseburger", "Bacon Burger"],
    lat: getRandomCoordinate(),
    long: getRandomCoordinate(),
  },
  {
    id: 2,
    title: "Sushi Haven",
    rating: 4.5,
    tag: "Sushi",
    location: "Main Street 42",
    imgUrl:
      "https://images.pexels.com/photos/1148086/pexels-photo-1148086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    short_description: "Authentic sushi experience with a variety of rolls.",
    dishes: ["Dragon Roll", "Sashimi Platter", "California Roll"],
    lat: getRandomCoordinate(),
    long: getRandomCoordinate(),
  },
  {
    id: 3,
    title: "Mamma Mia Pizza",
    rating: 4.2,
    tag: "Pizza",
    location: "Oak Avenue 7",
    imgUrl:
      "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    short_description: "Traditional Italian pizza with a touch of Mama's love.",
    dishes: ["Margherita Pizza", "Pepperoni Pizza", "Vegetarian Delight"],
    lat: getRandomCoordinate(),
    long: getRandomCoordinate(),
  },
  {
    id: 4,
    title: "Grill Master",
    rating: 4.7,
    tag: "Grill",
    location: "Maple Lane 15",
    imgUrl:
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    short_description: "Sizzling grills with a masterful touch.",
    dishes: ["BBQ Ribs", "Grilled Chicken", "Steakhouse Special"],
    lat: getRandomCoordinate(),
    long: getRandomCoordinate(),
  },
  {
    id: 5,
    title: "Cheesy Delight",
    rating: 4.4,
    tag: "Cheese",
    location: "Cedar Street 3",
    imgUrl:
      "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    short_description: "A paradise for cheese lovers.",
    dishes: ["Four Cheese Pasta", "Cheese Fondue", "Caprese Salad"],
    lat: getRandomCoordinate(),
    long: getRandomCoordinate(),
  },
  {
    id: 6,
    title: "Taco Fiesta",
    rating: 4.9,
    tag: "Taco",
    location: "Pine Avenue 25",
    imgUrl:
      "https://images.pexels.com/photos/831130/pexels-photo-831130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    short_description: "Spicy and flavorful tacos for a festive fiesta.",
    dishes: ["Spicy Beef Tacos", "Fish Tacos", "Vegetarian Tacos"],
    lat: getRandomCoordinate(),
    long: getRandomCoordinate(),
  },
];

const OffersNearYou = () => {
  return (
    <View className="mt-4">
      <FeaturedRow
        title={"Offers Near You!"}
        subtitle="Why not support your local restaurants tonight!"
      />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {MOCK_OFFERS.map((offer) => (
          <OfferCard offer={offer} key={offer.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default OffersNearYou;
