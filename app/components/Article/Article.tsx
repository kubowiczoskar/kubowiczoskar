import type { ReactNode } from "react";
import "./Article.css";

type ArticleProps = {
  children: ReactNode;
};

export default function Article({ children }: ArticleProps) {
  return (
    <article className="article-wrapper">
      {children}
    </article>
  );
}
