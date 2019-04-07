import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import NextEvent from "../components/next-event";
// import About from "../components/about";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <NextEvent />
    {/* <About /> */}
  </Layout>
);

export default IndexPage;
