import { styled } from "styled-components";
import { motion } from "framer-motion";

import icoSearch from "assets/images/ico_search.svg";
import icoClose from "assets/images/ico_close.svg";

// -------------------- Loader --------------------
export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;


// -------------------- SearchBar --------------------
export const SearchBarWrap = styled.div`
  position: relative;
  height: 2.25rem;

  form {
    height: 100%;
  }
`;

export const SearchInput = styled(motion.input)`
  width: 18rem;
  height: 100%;
  padding: 0 2.5rem;
  border: 1px solid #fff;
  background: rgba(0, 0, 0, 0.8) url(${icoSearch}) top 50% left 0.4rem no-repeat;
  color: #fff;
  transform-origin: center right;
`;

export const SearchBtn = styled.button<{$isOpen: boolean}>`
  position: absolute;
  top: 0;
  right: 0;
  width: 2.25rem;
  height: 2.25rem;
  ${(props) => props.$isOpen ? "" : `background-image: url(${icoSearch})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1.5rem;
  cursor: ${(props) => props.$isOpen ? "default" : "pointer"};
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 2.25rem;
  height: 2.25rem;
  background: url(${icoClose}) 50% 50% no-repeat;
  background-size: 1.5rem;
`;


// -------------------- Banner --------------------
export const Banner = styled.div<{ $bgImg: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0 3.75rem;
  background: linear-gradient(rgba(20, 20, 20, 0), rgba(20, 20, 20, 1)), url(${(props) => props.$bgImg}) center no-repeat;
  background-size: cover;
`;

export const BannerTitle = styled.h2`
  margin-bottm: 1.25rem;
  font-size: 4.25rem;
`;

export const Overview = styled.div`
  width: 50%;
  font-size: 2.25rem;
`;


// -------------------- Slider --------------------
export const SliderWrap = styled.div`
  position: relative;
  margin-top: -12.5rem;
  margin-bottom: 1.5rem;
  padding: 0 3.75rem;
`;

export const SlideRow = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.7rem;
  position: absolute;
  width: calc(100% - 7.5rem);
`;

export const SlideItem = styled(motion.div)<{ $bgImg: string }>`
  position: relative;
  height: 400px;
  border-radius: 0.17rem;
  background: #000 url(${(props) => props.$bgImg}) center no-repeat;
  background-size: cover;
  cursor: pointer;

  &:first-child {
    transform-origin: center left;
  }

  &:last-child {
    transform-origin: center right;
  }
`;

export const MovieInfo = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.25rem;
  background-color: ${(props) => props.theme.bgColor.normal};
  text-align: center;
  opacity: 0;
`;

export const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 100;
`;

export const DetailModal = styled(motion.div)`
  overflow: hidden;
  position: fixed;
  top: 2rem;
  right: 0;
  left: 0;
  max-width: 66rem;
  width: 95vw;
  height: 100vh;
  margin: 0 auto;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.bgColor.normal};
  transform-origin: center !important;
  z-index: 100;

  .modalWrap {
    overflow: auto;
    position: relative;
    width: 100%;
    height: 100%;

    .btnClose {
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 50%;
      background: ${(props) => props.theme.bgColor.dark} url(${icoClose}) 50% 50% no-repeat;
      background-size: 1.2rem; 
      z-index: 10;
    }

    .preview {
      position: relative;
      width: 100%;
      height: 45%;

      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, #141414, transparent 50%);
      }

      h2 {
        position: absolute;
        bottom: 7rem;
        left: 2rem;
        font-size: 3rem;
      }

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
}`;


// -------------------- ResultList --------------------
export const ResultWrap = styled.div`
  width: 100%;
  padding: 10rem 3.75rem;
`;

export const ResultList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.7rem;
  width: 100%;
`;

export const ResultItem = styled(motion.div)`
  transform-origin: center;

  &:first-child {
    transform-origin: center left;
  }

  &:last-child {
    transform-origin: center right;
  }
  
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;