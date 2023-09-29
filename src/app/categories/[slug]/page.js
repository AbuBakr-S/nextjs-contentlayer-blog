import { allBlogs } from '@/.contentLayer/generated';
import { slug } from 'github-slugger';
import Categories from '../../../components/Blog/Categories';
import BlogLayoutThree from '../../../components/Blog/BlogLayoutThree';

const CategoryPage = ({ params }) => {

  const allCategories = ["all"];

  // populate the all catagories array with unique tags
  // return a list of blogs for a given category via params field
  const blogs = allBlogs.filter(blog => {
    // tags is an array of tags
    // check whether at least one tag matches the params
    return blog.tags.some(tag => {
      // sanitise the tag
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      //  return all the blogs
      if (params.slug === "all") {
        return true;
      }
      // return the blog with at least one matched category
      return slugified === params.slug
    })
  })

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
    </div>
    <Categories categories={allCategories} currentSlug={params.slug} />
    <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
      {blogs.map((blog, index) => (
        <article key={index} className="col-span-1 row-span-1 relative">
          <BlogLayoutThree blog={blog} />
        </article>
      ))}
    </div>
  </article>)
}

export default CategoryPage;