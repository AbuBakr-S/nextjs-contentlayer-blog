import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const BlogLayoutTwo = ({ blog }) => {
  console.log(blog.title);
  return (
    <div className="group grid grid-cols-12 gap-4 items-center text-dark">
      <Link className="col-span-4 h-full rounded-xl overflow-hidden" href={blog.url}>
        <Image
          className="w-full h-full object-center object-cover aspect-square"
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          height={blog.image.height}
          width={blog.image.width}
        />
      </Link>
      <div className="w-full col-span-8">
        <span className="uppercase text-accent font-semibold text-sm">{blog.tags[0]}</span>
        <Link className="inline-block my-1" href={blog.url}>
          <h2 className="font-semibold capitalize text-lg dark:text-light">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
            >
              {blog.title}
            </span>
          </h2>
        </Link>
        <span className="capitalize text-dark/50 font-semibold dark:text-light text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  )
}

export default BlogLayoutTwo