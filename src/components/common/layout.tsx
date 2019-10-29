import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../../theme";

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

export { Layout };
