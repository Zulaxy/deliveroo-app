export interface SanityImage {
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export interface SingleOfferTypes {
  offer: {
    id: number;
    title: string;
    rating: number;
    tag: string;
    address: string;
    image: SanityImage;
    imgUrl: string;
    lat: string | number;
    long: string | number;
    dishes: string[];
    short_description: string;
  };
}
