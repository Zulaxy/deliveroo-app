import { TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";

import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

import { urlFor } from "../sanity";

import {SingleOfferTypes } from "../types";

const OfferCard = ({ offer }: SingleOfferTypes) => {
  let ratingColorClass = "text-black";

  if (offer.rating < 4 && offer.rating > 2) {
    ratingColorClass = "text-orange-400";
  }

  if (offer.rating < 2) {
    ratingColorClass = "text-red-400";
  }

  if (offer.rating > 4) {
    ratingColorClass = "text-green-800";
  }

  return (
    <TouchableOpacity className="mr-2 bg-white rounded-lg shadow">
      <Image
        className="w-64 h-36 rounded-t-lg"
        source={{
          uri: urlFor(offer.image).width(256).height(144).url(),
        }}
      />

      <View className="mx-3 flex justify-center flex-1 py-3">
        <Text className="text-lg font-bold">{offer.title}</Text>
        <View className="flex-row space-x-2 items-center">
          <StarIcon size={15} color="#fde047" />

          <Text className={`text-sm font-bold ${ratingColorClass}`}>
            {offer.rating}
          </Text>
          <Text className="text-sm ">{offer.tag}</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <MapPinIcon size={15} color="gray" />
          <Text className="text-sm">Nearby - {offer.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OfferCard;
