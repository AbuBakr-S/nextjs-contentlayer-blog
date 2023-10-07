import { allBlogs } from "contentlayer/generated";
import Tag from "@/src/components/Elements/Tag"
import Image from "next/image";
import BlogDetails from "../../../components/Blog/BlogDetails";
import RenderMdx from "../../../components/Blog/RenderMdx";
import { slug } from "github-slugger";
import siteMetadata from "../../../utils/siteMetaData";

// statically generate the tag params
// this is a unique list of categories which will be routes to our category pages via the URL param
export const generateStaticParams = async () => {
  return allBlogs.map(blog => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {
  const blog = allBlogs.find(blog => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  // store the images in an array
  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    // check whether the blog has a cover image
    imageList = typeof blog.image.filePath === "string"
      ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
      : blog.image;
  }

  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: "en_GB",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  }
}

export default function BlogPage({ params }) {
  const blog = allBlogs.find(blog => blog._raw.flattenedPath === params.slug);

  // store the images in an array
  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    // check whether the blog has a cover image
    imageList = typeof blog.image.filePath === "string"
      ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
      : blog.image;
  }

  // ? add google's s structured json for linking data - rich results in google
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata#json-ld
  // https://developers.google.com/search/docs/appearance/structured-data/article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": blog.title,
    "description": blog.description,
    "image": imageList,
    "datePublished": new Date(blog.publishedAt).toISOString(),
    "dateModified": new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    "author": [
      {
        "@type": "Person",
        "name": blog?.author ? [blog.author] : siteMetadata.author,
        "url": siteMetadata.siteUrl + blog.url
      }
    ]
  }
  
  return (
    <>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
          <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Tag 
              name={blog.tags[0]} 
              link={`/categories/${slug(blog.tags[0])}`} 
              className="px-6 text-sm py-2"
            />
            <h1 className="inline-block mt-6 font-semibold capitalize text-xl sm:text-2xl text-light md:text-3xl lg:text-5xl leading-normal relative w-5/6">{blog.title}</h1>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full bg-dark/40">
            <Image
              className="w-full h-full object-center object-cover aspect-square"
              src={blog.image.filePath.replace("../public", "")}
              placeholder="blur"
              blurDataURL={blog.image.blurhashDataUrl}
              alt={blog.title}
              height={blog.image.height}
              width={blog.image.width}
              priority
              sizes="100vw"
            />
          </div>
        </div>
        <BlogDetails blog={blog} slug={params.slug} />
        <div className="grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
          <div className="col-span-12 lg:col-span-4">
          <details
              className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
              open
            >
              <summary className="text-lg font-semibold capitalize cursor-pointer">
                Table Of Content
              </summary>
              <ul className="mt-4 font-in text-base">
                {blog.toc.map((heading) => {
                  return (
                    <li key={`#${heading.slug}`} className="py-1">
                      <a
                        href={`#${heading.slug}`}
                        data-level={heading.level}
                        // conditional classes per heading level using data attributes
                        className="data-[level=two]:pl-0 data-[level=two]:pt-2
                          data-[level=two]:border-t border-solid border-dark/40
                          data-[level=three]:pl-4
                          sm:data-[level=three]:pl-6
                          flex items-center justify-start"
                      >
                        {/* custom bullet point for <h3> */}
                        {heading.level === "three" ?(
                          <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                            &nbsp;
                          </span>
                        ) : null}
                        <span className="hover:underline">{heading.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </div>
          <RenderMdx blog={blog} />
        </div>
      </article>
    </>
  )
}