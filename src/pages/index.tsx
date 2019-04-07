import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import NextEvent from "../components/NextEvent";
import About from "../components/About";

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
