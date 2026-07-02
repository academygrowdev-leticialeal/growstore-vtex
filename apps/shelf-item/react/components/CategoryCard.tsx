import React from "react";
import { useQuery } from "react-apollo";
import CATEGORY_COUNT_QUERY from "../graphql/categoryCount.gql";
import { useCssHandles } from "vtex.css-handles";

type Props = {
  icon: string;
  text: string;
  link: string;
  slug: string;
};
const CSS_HANDLES = ["card", "icon", "title", "count"] as const;

function CategoryCard({ icon, text, link, slug }: Props) {
  const { data, loading, error } = useQuery(CATEGORY_COUNT_QUERY, {
    variables: {
      category: slug
    }
  });

  console.log(
    "slug:",
    slug,
    "data:",
    data,
    "error:",
    error ? error.message : ""
  );

  const count = data?.productSearch?.recordsFiltered ?? 0;

  const { handles } = useCssHandles(CSS_HANDLES);

  return (
    <a href={link} className={handles.card}>
      <span className={handles.icon}>{icon}</span>
      <span className={handles.title}>{text}</span>
      <span className={handles.count}>
        {loading ? "..." : count === 1 ? `${count} item` : `${count} items`}
      </span>
    </a>
  );
}

export default CategoryCard;
