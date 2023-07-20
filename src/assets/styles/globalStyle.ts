import { createGlobalStyle } from 'styled-components';

import NotoSansKRThinWoff from '../fonts/NotoSansKR-Thin.woff';
import NotoSansKRThinWoff2 from '../fonts/NotoSansKR-Thin.woff2';
import NotoSansKRLightWoff from '../fonts/NotoSansKR-Light.woff';
import NotoSansKRLightWoff2 from '../fonts/NotoSansKR-Light.woff2';
import NotoSansKRDemiLightWoff from '../fonts/NotoSansKR-DemiLight.woff';
import NotoSansKRDemiLightWoff2 from '../fonts/NotoSansKR-DemiLight.woff2';
import NotoSansKRRegularWoff from '../fonts/NotoSansKR-Regular.woff';
import NotoSansKRRegularWoff2 from '../fonts/NotoSansKR-Regular.woff2';
import NotoSansKRMediumWoff from '../fonts/NotoSansKR-Medium.woff';
import NotoSansKRMediumWoff2 from '../fonts/NotoSansKR-Medium.woff2';
import NotoSansKRBoldWoff from '../fonts/NotoSansKR-Bold.woff';
import NotoSansKRBoldWoff2 from '../fonts/NotoSansKR-Bold.woff2';
import NotoSansKRBlackWoff from '../fonts/NotoSansKR-Black.woff';
import NotoSansKRBlackWoff2 from '../fonts/NotoSansKR-Black.woff2';

export const GlobalStyle = createGlobalStyle`
  /* Noto Sans */
  @font-face {
      font-family:'Noto Sans KR';
      font-style:normal;
      font-weight:100;
      src:local('Noto Sans KR Thin'), local('NotoSansKR-Thin'), 
      url(${NotoSansKRThinWoff}) format('woff'),
      url(${NotoSansKRThinWoff2}) format('woff2');
  }
  @font-face {
      font-family:'Noto Sans KR';
      font-style:normal;
      font-weight:200;
      src:local('Noto Sans KR Light'), local('NotoSansKR-Light'), 
      url(${NotoSansKRLightWoff}) format('woff'),
      url(${NotoSansKRLightWoff2}) format('woff2');
  }
  @font-face {
      font-family:'Noto Sans KR';
      font-style:normal;
      font-weight:300;
      src:local('Noto Sans KR DemiLight'), local('NotoSansKR-DemiLight'), 
      url(${NotoSansKRDemiLightWoff}) format('woff'),
      url(${NotoSansKRDemiLightWoff2}) format('woff2');
  }
  @font-face {
      font-family:'Noto Sans KR';
      font-style:normal;
      font-weight:400;
      src:local('Noto Sans KR Regular'), local('NotoSansKR-Regular'), 
      url(${NotoSansKRRegularWoff}) format('woff'),
      url(${NotoSansKRRegularWoff2}) format('woff2');
  }
  @font-face {
      font-family:'Noto Sans KR';
      font-style:normal;
      font-weight:500;
      src:local('Noto Sans KR Medium'), local('NotoSansKR-Medium'),
      url(${NotoSansKRMediumWoff}) format('woff'),
      url(${NotoSansKRMediumWoff2}) format('woff2');
  }
  @font-face {
      font-family:'Noto Sans KR';
      font-style:normal;
      font-weight:700;
      src:local('Noto Sans KR Bold'), local('NotoSansKR-Bold'), 
      url(${NotoSansKRBoldWoff}) format('woff'),
      url(${NotoSansKRBoldWoff2}) format('woff2');
  }
  @font-face {
      font-family:'Noto Sans KR';
      font-style:normal;
      font-weight:900;
      src:local('Noto Sans KR Black'), local('NotoSansKR-Black'), 
      url(${NotoSansKRBlackWoff}) format('woff'),
      url(${NotoSansKRBlackWoff2}) format('woff2');
  }
  * {
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1;
    transition: background-color 0.3s ease-out;
  }
  nav, menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a, a:visited, a:visited, a:hover, a:focus, a:hover, a:active {
    color: inherit;
    text-decoration: none;
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
  input {
    outline: none;
    border: none;
    background: none;
  }
  .hide {
    visibility: hidden;
    position: absolute;
    top: 0:
    left: 0;
    width: 0;
    height: 0;
    margin: -1px;
    line-height: 0;
  }
`;