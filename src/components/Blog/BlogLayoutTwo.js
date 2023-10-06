import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className="group grid grid-cols-12 gap-4 items-center text-dark dark:text-light">
      <Link className="col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden" href={blog.url}>
        <Image
          className="w-full h-full object-center object-cover aspect-square"
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          height={blog.image.height}
          width={blog.image.width}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="w-full col-span-12 lg:col-span-8">
        <span className="w-full inline-block uppercase text-accen dark:text-accentDark font-semibold text-xs sm:text-sm">{blog.tags[0]}</span>
        <Link className="inline-block my-1" href={blog.url}>
          <h2 className="font-semibold capitalize text-base sm:text-lg dark:text-light">
            <span
              className="bg-gradient-to-r from-accent/50 dark:from-accentDark/50 to-accent/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
            >
              {blog.title}
            </span>
          </h2>
        </Link>
        <span className="w-full inline-block capitalize text-gray dark:text-light/50 font-semibold text-xs sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  )
}

export default BlogLayoutTwo