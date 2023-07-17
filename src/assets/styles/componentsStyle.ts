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
`;

export const SearchInput = styled(motion.input)`
  width: 18rem;
  height: 100%;
  padding: 0 2.5rem;
  border: 1px solid #fff;
  background: url(${icoSearch}) top 50% left 0.4rem no-repeat;
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
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${(props) => props.$bgImg}) center no-repeat;
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
`;

export const SlideRow = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.7rem;
  position: absolute;
  width: 100%;
`;

export const SlideItem = styled(motion.div)<{ $bgImg: string }>`
  position: relative;
  height: 12.5rem;
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