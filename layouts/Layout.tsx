import * as React from "react";
import { css } from "@emotion/core";
import Head from "../components/Head";
import Header from "../components/Header";

interface InitState {
  pageInfo?: {
    title: string;
    name: string;
    word: string;
    description: string;
  };
}

const initState: InitState = {
  pageInfo: {
    title: "Masaki Tomotsuka Blog",
    name: "Masaki Tomotsuka",
    word: " Blog",
    description: "願わくば、その生が愛し愛されんことを"
  }
};

const background = css({
  width: "100vw",
  height: "100vh"
});

const Layout = ({ children }) => {
  return (
    <div className={background.styles}>
      <Head
        title={initState.pageInfo.title}
        description={initState.pageInfo.description}
      />
      <Header name={initState.pageInfo.name} word={initState.pageInfo.word} />
      {children}
    </div>
  );
};

export default Layout;
