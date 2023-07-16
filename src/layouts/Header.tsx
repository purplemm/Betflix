import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import SearchBar from "components/SearchBar";

import { gnbIsActive } from "store/gnb";

import { gnb } from "data/gnb";
import logoUrl from "assets/images/logo_betflix.svg";
import * as S from "assets/styles/layoutStyle";

function Header() {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useRecoilState(gnbIsActive);

  const moveHome = () => {
    navigate("/");
  }

  const onClickNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { currentTarget: { dataset: { name } } } = e;
    if(name){
      setIsActive(name);
    }
  }

  return (
    <S.HeaderWrap>
      <S.Logo onClick={moveHome}>
        <img src={logoUrl} alt="BETFLIX Logo" />
      </S.Logo>
      <S.Gnb>
        {gnb && gnb.map((item) => (
          <li key={item.name}>
            <Link 
              to={item.path} 
              data-name={item.name}
              className={isActive === item.name ? "active" : ""}
              onClick={onClickNav}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </S.Gnb>
      <S.Etc>
          <li>
            <SearchBar />
          </li>
      </S.Etc>
    </S.HeaderWrap>
  )
}

export default Header;