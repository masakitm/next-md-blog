import * as React from "react";
import NextHead from "next/head";
import { Global, css } from "@emotion/core";

interface Props {
  title?: string;
  description?: string;
}

const Head = (props: Props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ""}</title>
    <meta name="description" content={props.description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:description" content={props.description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto"
      rel="stylesheet"
    />
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          text-decoration: none;
          box-sizing: border-box;
        }
      `}
    />
  </NextHead>
);

export default Head;
