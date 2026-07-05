import React from "react";
import { useCssHandles } from "vtex.css-handles";

const CSS_HANDLES = [
  "container",
  "item",
  "iconWrapper",
  "icon",
  "content",
  "title",
  "subtitle"
] as const;

type Benefit={
  title: string;
  subtitle: string;
  iconUrl: string;
}

interface BenefitsBarProps {
  benefits: Benefit[];
};

function BenefitsBar({ benefits=[] }: BenefitsBarProps) {
  const { handles } = useCssHandles(CSS_HANDLES);

  return (
    <section className={handles.container}>
      {benefits.map(({title, subtitle, iconUrl}) => (
        <div key={title} className={handles.item}>
          <div className={handles.iconWrapper}>
            <img src={iconUrl} alt={title} className={handles.icon} />
          </div>
          <div className={handles.content}>
            <span className={handles.title}>{title}</span>
            <span className={handles.subtitle}>{subtitle}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default BenefitsBar;
