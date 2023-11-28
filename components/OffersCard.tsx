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
  return (
    <TouchableOpacity className="mr-2 bg-white rounded-lg">
      <Image
        className="w-64 h-36 rounded-t-lg"
        source={{
          uri: offer.imgUrl,
        }}
      />

      <View className="mx-3 flex justify-center flex-1 py-3">
        <Text className="text-lg font-bold">OffersCard</Text>
        <View className="flex-row space-x-2 items-center">
          <StarIcon size={15} color="green" />
          <Text className="text-sm font-bold">{offer.rating}</Text>
          <Text className="text-sm">{offer.tag}</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <MapPinIcon size={15} color="gray" />
          <Text className="text-sm ">Nearby - {offer.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OfferCard;
