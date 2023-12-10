import { SanityAsset } from "@sanity/image-url/lib/types/types";

export interface DishTypes {
  description?: string;
  id?: string;
  image: SanityAsset;
  short_description: string;
  _type: string;
  name: string;
  _id: string;
  _updatedAt: string;
  price: number;
  _createdAt: string;
  _rev: string;
}

export interface SingleOfferTypes {
  offer: {
    _id: string;
    id: number;
    title: string;
    name: string;
    rating: number;
    tag: string;
    address: string;
    image: SanityAsset;
    imgUrl: string;
    lat: string | number;
    long: string | number;
    dishes: DishTypes[];
    short_description: string;
  };
}

export type RootStackParamList = {
  Index: Object;
  Home: undefined;
  Basket: undefined;
  Restaurant: { id: string };
};
