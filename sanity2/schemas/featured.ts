import {defineField, defineType} from 'sanity'

export const featured = defineType({
  name: 'featured',
  type: 'document',
  title: 'Featured Menu Categories',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Featured Category Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'short_Description',
      type: 'string',
      title: 'Short Description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    }),
  ],
})
