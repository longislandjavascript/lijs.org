import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SlackButton from "../components/SlackButton";
import GithubButton from "../components/GithubButton";
import MeetupButton from "../components/MeetupButton";
import { Button } from "../components/common";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <MeetupButton />
    <SlackButton />
    <GithubButton />

    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div>
        We meet the last wednesday of every month at LaunchPad Huntington.
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.0293071831616!2d-73.431064684884!3d40.87123103579625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8287816d84b91%3A0x9a83753169b72bea!2sLaunchPad+Huntington!5e0!3m2!1sen!2sus!4v1554572075808!5m2!1sen!2sus"
          width="600"
          height="450"
          // frameborder="0"
          // allowfullscreen
          style={{ border: 0, maxWidth: "90vw" }}
        />
      </div>
    </div>

    {/* <div>
      <Link to="/page-2/">Go to page 2</Link>
    </div> */}
  </Layout>
);

export default IndexPage;
