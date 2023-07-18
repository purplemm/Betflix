import { styled } from "styled-components";
import { motion } from "framer-motion";

// -------------------- wrapper --------------------
export const Wrap = styled.div`
  overflow-x: hidden;
  width: 100%;
  min-height: 200vh;
  background: ${(props) => props.theme.bgColor.normal};
  color: ${(props) => props.theme.textColor.normal};
`;


// -------------------- header --------------------
export const HeaderWrap = styled(motion.header)`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.25rem;
  padding: 0 3.75rem;
  background: transparent;
  transition: background-color 0.2s ease-out;
  z-index: 10;
`;

export const Logo = styled.h1`
  width: 5.8rem;
  margin-right: 3rem;
  cursor: pointer;

  img {
    width: 100%;
  }
`;

export const Gnb = styled.nav`
  display: flex;
  gap: 1.25rem;

  li {
    a{
      transition: color 0.3s ease-out;
      &:hover {
        color: ${(props) => props.theme.textColor.hover};
      }
      &.active {
        color: ${(props) => props.theme.textColor.active};
        font-weight: bold;
        pointer-events: none;
      }
    }
  }
`;

export const Etc = styled.ul`
  margin-left: auto;
`;


// -------------------- container --------------------
export const ContainerWrap = styled.div`
  width: 100%;
  height: 100%;
`;