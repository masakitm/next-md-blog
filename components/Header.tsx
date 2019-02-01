import * as React from "react";
import Link from "next/link";

const Header = () => (
  <h1>
    <Link href="/">
      <a>Next Markdown Blog</a>
    </Link>
  </h1>
);

export default Header;
