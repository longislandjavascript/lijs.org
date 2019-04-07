import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import NextEvent from "../components/next-event";
import About from "../components/about";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <NextEvent />
    <About />

    {/* <div>
      <Link to="/page-2/">Go to page 2</Link>
    </div> */}
  </Layout>
);

export default IndexPage;
