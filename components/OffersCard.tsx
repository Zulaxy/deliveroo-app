import { TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";

import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

interface OfferCardProps {
  offer: {
    id: number;
    title: string;
    rating: number;
    tag: string;
    location: string;
    imgUrl: string;
    lat: string | number;
    long: string | number;
    dishes: string[];
    short_description: string;
  };
}

const OfferCard = ({ offer }: OfferCardProps) => {
  let ratingColorClass = "text-black"; // Default color for ratings 3 and above

  if (offer.rating < 4 && offer.rating > 2) {
    ratingColorClass = "text-orange-400"; // Orange for ratings below 3
  }

  if (offer.rating < 2) {
    ratingColorClass = "text-red-400"; // Red for ratings below 2
  }

  if (offer.rating > 4) {
    ratingColorClass = "text-green-800";
  }

  return (
    <TouchableOpacity className="mr-2 bg-white rounded-lg shadow">
      <Image
        className="w-64 h-36 rounded-t-lg"
        source={{
          uri: offer.imgUrl,
        }}
      />

      <View className="mx-3 flex justify-center flex-1 py-3">
        <Text className="text-lg font-bold">OffersCard</Text>
        <View className="flex-row space-x-2 items-center">
          <StarIcon size={15} color="#fde047" />

          <Text className={`text-sm font-bold ${ratingColorClass}`}>
            {offer.rating}
          </Text>
          <Text className="text-sm ">{offer.tag}</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <MapPinIcon size={15} color="gray" />
          <Text className="text-sm">Nearby - {offer.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OfferCard;
