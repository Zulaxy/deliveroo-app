import { createClient } from "@sanity/client";
import groq from "groq";
import imgUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "ikogi8rm",
  dataset: "production",
  apiVersion: "v2021-10-21",
  useCdn: true,
});

const builder = imgUrlBuilder(client);

export const urlFor = (source: string) => {
  return builder.image(source);
};

export async function getFeaturedCategoriies() {
  const data = await client.fetch(
    groq`*[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }`
  );
  return data;
}

export default client;
