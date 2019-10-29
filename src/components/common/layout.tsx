import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../../theme";
import styled from "styled-components";

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Main>{children}</Main>
      </>
    </ThemeProvider>
  );
};

export { Layout };

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
