// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    image: { type: "image" },
    publishedAt: { type: "date", required: true },
    updatedAt: { type: "date", required: true },
    isPublished: { type: "boolean", default: true },
    author: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
  },
  computedFields: {
    url: {
      type: "string", resolve: (blog) => `/blogs/${blog._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({ contentDirPath: "blogs", documentTypes: [Blog] });
