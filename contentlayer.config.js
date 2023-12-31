// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";

// ? remarkGfm supports tables and other elements in markdown files which are not included in typical markdown
// https://github.com/remarkjs/remark-gfm
import remarkGfm from "remark-gfm";

// ? rehype slug adds ids to our headings html
// https://www.npmjs.com/package/rehype-slug
import rehypeSlug from "rehype-slug";

// ? automatically creates href anchors to headings
// https://www.npmjs.com/package/rehype-autolink-headings#use
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// ? theme options for code block styles in markdown
// https://rehype-pretty-code.netlify.app/
import rehypePrettyCode from "rehype-pretty-code";

// ? generate a unique slug just like GitHub does for markdown headings.
import GithubSlugger from "github-slugger"

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  contentType: "mdx",
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
      type: "string",
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw)
    },
    toc:{
      type: "json",
      resolve: async (doc) => {
        // extract the headings in markdown denoted by #
        // we are capturing these '#' in a named capturing group called <flag>
        // we will used the length of <flag> to tell us the heading level by counting the '#'s
        // <content> will capture the title string after the space - (## heading two) etc
        const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(regulrExp)).map(({groups}) => {
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
            text: content,
            slug: content ? slugger.slug(content) : undefined
          }
        })
        return headings;
      }
    }
  },
}));

// ? List of theme options
// https://unpkg.com/browse/shiki@0.14.2/themes/
const codeOptions = {
  theme: 'github-dark-dimmed'
}

export default makeSource({ 
    contentDirPath: "content", 
    documentTypes: [Blog],
    mdx: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "append" }], [rehypePrettyCode, codeOptions] ] }
  });
