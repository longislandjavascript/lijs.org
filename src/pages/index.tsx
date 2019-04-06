import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SlackButton from "../components/SlackButton";
import GithubButton from "../components/GithubButton";
import { Button } from "../components/common";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <SlackButton />
    <GithubButton />

    {/* <div>
      <Link to="/page-2/">Go to page 2</Link>
    </div> */}
  </Layout>
);

export default IndexPage;
