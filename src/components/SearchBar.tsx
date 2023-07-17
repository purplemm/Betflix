import { useEffect, useRef, useState } from "react";

import * as S from "assets/styles/componentsStyle";

function SearchBar() {
  const searchBarRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if(searchBarRef.current && !searchBarRef.current.contains(e.target as Node)){
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return() => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchBarRef]);

  return (
    <S.SearchBarWrap ref={searchBarRef}>
      {isOpen && (
        <S.SearchInput 
          value={searchText} 
          placeholder="Search for movie"
          initial={{scaleX: 0}} 
          animate={{scaleX: isOpen ? 1 : 0}} 
          onChange={onChangeInput} 
        />
      )}
      {searchText ? (
        <S.DeleteBtn name="delete" onClick={onClickBtn}>
          <span className="hide">Delete</span>
        </S.DeleteBtn>
      ) : (
        <S.SearchBtn name="search" $isOpen={isOpen} onClick={onClickBtn}>
          <span className="hide">Search</span>
        </S.SearchBtn>
      )}
    </S.SearchBarWrap>
  )
}

export default SearchBar;