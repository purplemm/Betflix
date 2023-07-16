import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import Router from "routes";

import { theme } from "data/theme";
import { GlobalStyle } from "assets/styles/globalStyle";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={Router} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
