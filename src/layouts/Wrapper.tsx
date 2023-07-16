import { Outlet } from "react-router-dom";

import Header from "layouts/Header";

import * as S from "assets/styles/layoutStyle";

function Wrapper() {
  return (
    <S.Wrap>
      <Header />
      <S.ContainerWrap>
        <Outlet />
      </S.ContainerWrap>
    </S.Wrap>
  )
}

export default Wrapper;