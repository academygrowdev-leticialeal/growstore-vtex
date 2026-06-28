import React from "react";
import { schema } from "./schemas/schema";
import CategoryCard from "./CategoryCard";
import { useCssHandles } from "vtex.css-handles";

type Category = {
  icon: string;
  text: string;
  link: string;
  qtde: string;
};

type Props = {
  categories: Category[];
};

const CSS_HANDLES = ["container", "card", "icon", "title", "count"] as const;

function ShelfItem({ categories = [] }: Props) {
  if (!categories || categories.length === 0) {
    return <div>Nenhuma categoria</div>;
  }

  const { handles } = useCssHandles(CSS_HANDLES);

  return (
    <section className={handles.container}>
      {categories.map(({ link, icon, text }, index) => {
        // Extrai o slug do link: "/camisetas" → "camisetas"
        const slug = link.replace("/", "").trim();

        return (
          <CategoryCard
            key={index}
            icon={icon}
            text={text}
            link={link}
            slug={slug}
          />
        );
      })}
    </section>
  );
}

ShelfItem.schema = schema;

export default ShelfItem;
