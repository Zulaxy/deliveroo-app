import {defineField, defineType} from 'sanity'

export const dish = defineType({
  name: 'dish',
  type: 'document',
  title: 'Dish',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name of the Dish',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price of the Dish',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the Dish',
    }),
  ],
})
