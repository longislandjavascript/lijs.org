/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  text-align: center;
`;

import './layout.css';
import Header from './sections/header';

const Layout = ({ children }) => <Main>{children}</Main>;

export default Layout;
