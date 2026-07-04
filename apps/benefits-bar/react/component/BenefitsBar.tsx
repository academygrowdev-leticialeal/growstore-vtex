import React from "react";
import { useCssHandles } from "vtex.css-handles";

const CSS_HANDLES = ["container"] as const;

type BenefitsBarProps = {
  name: string;
};

function BenefitsBar({ name }: BenefitsBarProps) {
  const { handles } = useCssHandles(CSS_HANDLES);

  return (
    <section className={handles.container}>
      <h2>Benefits Bar {name}</h2>
    </section>
  );
}

export default BenefitsBar;
