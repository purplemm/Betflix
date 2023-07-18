import { Link, useNavigate } from "react-router-dom";
import { useMotionValueEvent, useAnimation, useScroll } from "framer-motion";

import { useRecoilState } from "recoil";

import SearchBar from "components/SearchBar";

import { gnbIsActive } from "store/gnb";

import { gnb } from "data/gnb";
import logoUrl from "assets/images/logo_betflix.svg";
import * as S from "assets/styles/layoutStyle";

const headerAniVariants = {
  top: {
    backgroundColor: "rgba(20, 20, 20, 0)"
  },
  scroll: {
    backgroundColor: "rgba(20, 20, 20, 1)"
  }
}

function Header() {
  const navigate = useNavigate();

  const { scrollY } = useScroll();
  const headerAnimation = useAnimation();

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

  useMotionValueEvent(scrollY, "change", (latest) => {
    if(scrollY.get() > 60) {
      headerAnimation.start("scroll");
    }else {
      headerAnimation.start("top");
    }
  });

  return (
    <S.HeaderWrap
      variants={headerAniVariants}
      animate={headerAnimation}
      initial="top"
    >
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