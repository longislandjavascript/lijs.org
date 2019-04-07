import React from "react";
import { Section } from "../common";
import { link } from "fs";

export interface AboutSiteProps {}

const links = {
  gatsby: "https://www.gatsbyjs.org",
  typescript: "https://www.typescriptlang.org",
  netlify: "",
};

const AboutSite: React.SFC<AboutSiteProps> = () => {
  return (
    <Section bg="#efefef">
      <h2>About This Site</h2>
      Built with&nbsp;
      <a href={links.gatsby}>Gatsby</a>
      &nbsp;&amp;&nbsp;
      <a href={links.typescript}>TypeScript</a>
    </Section>
  );
};

export default AboutSite;
