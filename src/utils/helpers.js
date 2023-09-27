import { compareDesc, parseISO } from "date-fns";

// Return a string of classnames
export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

// Returns an array of sorted blogs in most recent order
export const sortBlogs = (blogs) => {
  return blogs.slice().sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)))
}