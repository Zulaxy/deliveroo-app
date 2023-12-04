import {defineField, defineType} from 'sanity'

export const restaurant = defineType({
  name: 'restaurant',
  type: 'document',
  title: 'Restaurant',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the restaurant',
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'Latitude',
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: 'Longitude',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address',
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Description',
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Rating',
      validation: (rule) =>
        rule.required().min(1).max(5).error('Please enter a valid rating between 1 and 5.'),
    }),
    defineField({
      type: 'reference',
      name: 'category',
      title: 'Category',
      validation: (rule) => rule.required(),
      to: [{type: 'category'}],
    }),
    defineField({
      type: 'array',
      name: 'dishes',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})
