import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

import icoSearch from "assets/images/ico_search.svg";
import icoClose from "assets/images/ico_close.svg";

const SearchBarWrap = styled.div`
  position: relative;
  height: 2.25rem;
`;

const SearchInput = styled(motion.input)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 0 2.5rem;
  border: 1px solid #fff;
  background: url(${icoSearch}) top 50% left 0.4rem no-repeat;
  color: #fff;
`;

const SearchBtn = styled.button<{$isOpen: boolean}>`
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

const DeleteBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 2.25rem;
  height: 2.25rem;
  background: url(${icoClose}) 50% 50% no-repeat;
  background-size: 1.5rem;
`;

function SearchBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget: { value } } = e;
    setSearchText(value);
  }

  const onClickBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget: { name } } = e;

    switch(name){
      case "search":
        setIsOpen(!isOpen);
        break;
      case "delete":
        setSearchText("");
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if(!isOpen){
      setSearchText("");
    }
  }, [isOpen]);

  return (
    <SearchBarWrap>
      {isOpen && <SearchInput value={searchText} initial={{width: 0}} animate={{width: "18rem"}} onChange={onChangeInput} />}
      {searchText ? (
        <DeleteBtn name="delete" onClick={onClickBtn}>
          <span className="hide">Delete</span>
        </DeleteBtn>
      ) : (
        <SearchBtn name="search" $isOpen={isOpen} onClick={onClickBtn}>
          <span className="hide">Search</span>
        </SearchBtn>
      )}
    </SearchBarWrap>
  )
}

export default SearchBar;