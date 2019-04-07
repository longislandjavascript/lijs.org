import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Map from "../components/Map";
import NextEvent from "../components/NextEvent";
import { Button } from "../components/common";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <NextEvent />

    <div style={{ textAlign: "center", marginTop: "30px", padding: "30px" }}>
      <h2>About Our Group</h2>
      <p>
        <span style={{ color: "steelblue", fontWeight: "bold" }}>
          Long Island JavaScript Group
        </span>{" "}
        is a space for JavaScript enthusiasts or newcomers interested in
        learning the language.
      </p>
      <b>
        We meet on the last Wednesday of the month at LaunchPad in Huntington,
        NY.
      </b>
      <Map />
    </div>

    {/* <div>
      <Link to="/page-2/">Go to page 2</Link>
    </div> */}
  </Layout>
);

export default IndexPage;
