export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude",
    },
    {
      name: "long",
      type: "number",
      title: "Longtitude",
    },
    {
      name: "address",
      type: "string",
      title: "Address",
    },
    {
      name: "rating",
      type: "number",
      title: "Rating",
      validation: (rule) =>
        rule
          .required()
          .min(1)
          .max(5)
          .error("Please enter a valid rating between 1 and 5."),
    },
    {
      type: "reference",
      name: "category",
      title: "Category",
      validation: (rule) => rule.required(),
      to: [{ type: "category" }],
    },
    {
      type: "array",
      name: "dishes",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
