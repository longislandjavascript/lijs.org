import React from 'react';
import styled from 'styled-components';
import { Section } from '../common';
const reactIcon = require('../../images/react-icon.svg');
const gatsbyIcon = require('../../images/gatsby-icon.svg');
const typescriptIcon = require('../../images/typescript-icon.svg');
const netlifyIcon = require('../../images/netlify-icon.svg');
const githubIcon = require('../../images/github-icon.svg');
const styledComponentsIcon = require('../../images/styled-components-icon.png');

const links = {
  react: 'https://www.reactjs.org',
  gatsby: 'https://www.gatsbyjs.org',
  typescript: 'https://www.typescriptlang.org',
  netlify: 'https://www.netlify.com/',
  styledComponents: 'https://www.styled-components.com',
};

const ItemWrapper = styled.div`
  margin: 10px;
`;

const ReactItem = () => (
  <ItemWrapper>
    Built on
    <a
      href={links.react}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <img height="50px" style={{ margin: '-10px' }} src={reactIcon} />
      <span style={{ fontSize: '30px' }}>React</span>
    </a>
  </ItemWrapper>
);

const Gatsby = () => (
  <ItemWrapper>
    Built with
    <a
      href={links.gatsby}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <img
        height="40px"
        style={{ margin: 0, paddingRight: '8px' }}
        src={gatsbyIcon}
      />{' '}
      <span style={{ fontSize: '30px' }}>Gatsby</span>
    </a>
  </ItemWrapper>
);

const StyledComponents = () => (
  <ItemWrapper>
    Styled with
    <a
      href={links.styledComponents}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <img
        height="40px"
        style={{ margin: 0, paddingRight: '8px' }}
        src={styledComponentsIcon}
      />{' '}
      <div style={{ fontSize: '20px' }}>Styled Components</div>
    </a>
  </ItemWrapper>
);

const TypeScript = () => (
  <ItemWrapper>
    Written in
    <a
      href={links.typescript}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <img height="35px" style={{ margin: 0 }} src={typescriptIcon} />
    </a>
  </ItemWrapper>
);

const Netlify = () => (
  <ItemWrapper>
    Deployed with
    <a
      href={links.netlify}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <img height="40px" style={{ margin: 0 }} src={netlifyIcon} />
    </a>
  </ItemWrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const AboutSite = () => {
  return (
    <Section bg="#efefef">
      <h2>About This Site</h2>
      <Wrapper>
        <ReactItem />
        <Gatsby />

        <TypeScript />
        {/* <StyledComponents /> */}
        <Netlify />
      </Wrapper>
      {/* <img style={{ fill: '#333' }} height="30" src={githubIcon} /> */}
    </Section>
  );
};

export default AboutSite;
