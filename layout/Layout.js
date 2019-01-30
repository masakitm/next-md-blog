import React from "react";
import Head from "../components/Head";
import Header from "../components/Header";

const Layout = ({ children }) => (
  <div>
    <Head />
    <Header />
    {children}
  </div>
);

export default Layout;
