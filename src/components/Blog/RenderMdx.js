"use client"
import React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

//  Must import React Component in the MDX Components
const mdxComponents = {
  Image
}

const RenderMdx = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code)
  return (
    // 'prose' class for typography styles to vanilla HTML
    <div className="col-span-8 font-in prose max-w-max 
    prose-blockquote:bg-accent/20
      prose-blockquote:p-2
      prose-blockquote:px-6
    prose-blockquote:border-accent
      prose-blockquote:not-italic
      prose-blockquote:rounded-r-lg
    prose-li:marker:text-accent
    dark:text-light"
    >
      <MDXContent components={mdxComponents} />
    </div>
  )
}

export default RenderMdx