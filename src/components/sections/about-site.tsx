import React from 'react';
import { Section } from '../common';
const gatsbyIcon = require('../../images/gatsby-icon.svg');
const typescriptIcon = require('../../images/typescript-icon.svg');

const links = {
  gatsby: 'https://www.gatsbyjs.org',
  typescript: 'https://www.typescriptlang.org',
  netlify: '',
};

const AboutSite = () => {
  return (
    <Section bg="#efefef">
      <h2>About This Site</h2>
      Built with&nbsp;
      <a href={links.gatsby}>
        <img height="20px" src={gatsbyIcon} />
        Gatsby
      </a>
      &nbsp;&amp;&nbsp;
      <a href={links.typescript}>
        {' '}
        <img height="20px" src={typescriptIcon} />
        TypeScript
      </a>
    </Section>
  );
};

export default AboutSite;
