export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "author_url",
      title: "Author URL",
      type: "string",
      description: "Do not use https://",
    },
    {
      name: "type",
      title: "Type",
      type: "reference",
      to: [{ type: "postType" }],
    },
    {
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Portuguese", value: "pt" },
        ],
      },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "code",
          title: "Code",
        },
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: `Describe the image for people who can't see it`,
              isHighlighted: true,
            },
          ],
        },
        {
          type: "block",
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
              {
                title: "Highlight",
                value: "highlight",
                blockEditor: {
                  icon: () => "H",
                },
              },
            ],
          },
        },
      ],
    },
  ],
};
