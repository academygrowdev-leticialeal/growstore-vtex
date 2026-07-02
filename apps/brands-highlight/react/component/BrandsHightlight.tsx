import React from "react";
import { useCssHandles } from "vtex.css-handles";
import { schema } from "./schemas/schema";

const CSS_HANDLES = [
  "container",
  "subtitle",
  "grid",
  "card",
  "logo",
  "content",
  "title",
  "description",
  "arrow"
] as const;

type Brand = {
  name: string;
  description: string;
  link: string;
};

interface BrandsHighlightProps {
  brands: Brand[];
}

function BrandsHighlight({ brands = [] }: BrandsHighlightProps) {
  const { handles } = useCssHandles(CSS_HANDLES);

  return (
    <section className={handles.container}>
      <span className={handles.subtitle}>NOSSAS MARCAS</span>

      <div className={handles.grid}>
        {brands.map((brand) => (
          <a key={brand.name} href={brand.link} className={handles.card}>
            <div className={handles.logo}>G</div>

            <div className={handles.content}>
              <h3 className={handles.title}>{brand.name}</h3>
              <p className={handles.description}>{brand.description}</p>
            </div>

            <span className={handles.arrow}>&#10230;</span>
          </a>
        ))}
      </div>
    </section>
  );
}

BrandsHighlight.schema = schema;

export default BrandsHighlight;
