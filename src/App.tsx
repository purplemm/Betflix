import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import Router from "routes";

import { theme } from "data/theme";
import { GlobalStyle } from "assets/styles/globalStyle";

function App() {
  // 배포 환경에서 console.log 지우기
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
  }


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
