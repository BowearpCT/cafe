import React from "react";
import { Layout } from "antd";

import Nav from "./Nav";
const { Header, Footer, Content } = Layout;
const Page1 = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Nav />
      </Header>
      <Content>{children}</Content>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
};

export default Page1;
