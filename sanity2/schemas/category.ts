import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  type: 'document',
  title: 'Menu Category',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Category Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of Category',
    }),
  ],
})
