import * as React from "react";
import Link from "next/link";

interface Props {
  href: string;
  title: string;
}

const ArticleItem = ({ href, title }: Props) => (
  <Link href={href}>
    <a
      style={{
        color: "#4b1980",
        fontWeight: "bold"
      }}
    >
      {title}
    </a>
  </Link>
);

export default ArticleItem;
