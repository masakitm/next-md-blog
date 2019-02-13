import * as React from "react";
import Link from "next/link";

interface Props {
  name: string;
  word: string;
}

const Header = (props: Props) => (
  <>
    <h1
      style={{
        fontSize: "2rem",
        textAlign: "center",
        margin: "4rem 0 0"
      }}
    >
      <Link href="/">
        <a>
          <span
            style={{
              color: "#ff9472"
            }}
          >
            {props.name}
          </span>
          {props.word}
        </a>
      </Link>
    </h1>
  </>
);

export default Header;
