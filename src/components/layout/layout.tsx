import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./global-styles";

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <main>{children}</main>
      </>
    </ThemeProvider>
  );
};

export default Layout;
