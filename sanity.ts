import { createClient } from "@sanity/client";
import groq from "groq";
import imgUrlBuilder from "@sanity/image-url";
import { SanityImage } from "./types";

const client = createClient({
  projectId: "ikogi8rm",
  dataset: "production",
  apiVersion: "v2021-10-21",
  useCdn: false,
});

const builder = imgUrlBuilder(client);

export const urlFor = (source: SanityImage) => {
  return builder.image(source);
};

/**
 * Fetches all featured categories from the database.
 *
 * @returns {Promise<Object[]>} A promise that resolves to an array of featured categories.
 */
export async function getFeaturedCategories() {
  const data = await client.fetch(
    groq`*[_type == "featured"] {
      ...,
    }`
  );
  return data;
}

/**
 * Fetches a specific featured category by its ID and the restaurants in it.
 *
 * @param {string} id - The ID of the featured category to fetch.
 * @returns {Promise<Object>} A promise that resolves to the featured category object.
 */
export async function getRestaurantsForSpecificCategory(id: string) {
  const data = await client.fetch(
    groq`*[_type == "featured" && _id == "${id}"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }[0]`
  );
  return data;
}

/**
 * Fetches a specific restaurant by its ID.
 *
 * @param {string} id - The ID of the restaurant to fetch.
 * @returns {Promise<Object>} A promise that resolves to the restaurant object.
 */
export async function getRestaurantById(id: string) {
  const data = await client.fetch(
    groq`*[_type == "restaurant" && _id == "${id}"] {
      ...,
      "category": category->,
      dishes[]->,
    }[0]`
  );
  return data;
}

/**
 * Fetches all featured categories from the CMS.
 *
 * @returns {Promise<Object>} A promise that resolves to the featured category object.
 */
export async function getAllCategories() {
  const data = await client.fetch(groq`*[_type == "category"]`);
  return data;
}

export default client;
