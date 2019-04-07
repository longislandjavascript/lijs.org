/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Footer from "./Footer";

const Main = styled.main`
  text-align: center;
  padding-bottom: 150px;
`;

import Header from "./Header";
import "./layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <Main>{children}</Main>
          <Footer />
        </div>
      </>
    )}
  />
);

export default Layout;
