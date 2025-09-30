export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Описание (короткое)',
      type: 'text',
    },
    {
      name: 'details',
      title: 'Подробное описание',
      type: 'blockContent',
    },
    {
      name: 'price',
      title: 'Цена (€)',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Фото',
      type: 'image',
      options: {hotspot: true},
    },
  ],
}
