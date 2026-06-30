import React from "react";
import { useCssHandles } from "vtex.css-handles";

interface BannerHighlightProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}
const CSS_HANDLES = [
  "banner",
  "overlay",
  "content",
  "badge",
  "title",
  "description",
  "button"
] as const;

function BannerHighlight({
  image,
  title,
  description,
  buttonText,
  buttonLink
}: BannerHighlightProps) {
  const { handles } = useCssHandles(CSS_HANDLES);

  return (
    <section
      className={handles.banner}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={handles.overlay} />
      <div className={handles.content}>
        <span className={handles.badge}>⚡ OFERTA ESPECIAL</span>
        <h2 className={handles.title}>{title}</h2>
        <p className={handles.description}>{description}</p>
        <a href={buttonLink} className={handles.button}>
          {buttonText} →
        </a>
      </div>
    </section>
  );
}
BannerHighlight.schema = {
  title: "Banner Highlight",
  type: "object",
  properties: {
    image: {
      title: "Imagem",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    title: { title: "Título", type: "string" },
    description: {
      title: "Descrição",
      type: "string",
      widget: {
        "ui:widget": "textarea"
      }
    },
    buttonText: {
      title: "Texto do Botão",
      type: "string"
    },
    buttonLink: {
      title: "Link do Botão",
      type: "string"
    }
  }
};

export default BannerHighlight;
