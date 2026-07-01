import React from "react";
import { useCssHandles } from "vtex.css-handles";

const CSS_HANDLES = ["container"] as const;

type Props = {
  name: string;
};

function BrandsHighlight({ name }: Props) {
  const { handles } = useCssHandles(CSS_HANDLES);
  return <div className={handles.container}>Hey, {name}</div>;
}

export default BrandsHighlight;
