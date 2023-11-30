export default {
  name: "featured",
  title: "Featured Menu Categories",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Featured Category Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "short_Description",
      title: "Short Description",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "restaurants",
      title: "Restaurants",
      type: "array",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
};
