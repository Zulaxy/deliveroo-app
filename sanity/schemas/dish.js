export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of the Dish",
      validation: (rule) => rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (rule) => rule.required(),
    },
    {
      name: "price",
      type: "number",
      title: "Price of the Dish",
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Dish",
    },
  ],
};
