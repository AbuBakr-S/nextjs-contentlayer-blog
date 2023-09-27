import Link from "next/link";
import React from "react";
import { cx } from "../../utils/helpers";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block bg-dark py-3 px-10 text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
