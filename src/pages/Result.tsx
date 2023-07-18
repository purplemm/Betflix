import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";

import { getSearchResult } from "api";
import { makeImgPath } from "utils";
import * as S from "assets/styles/componentsStyle";

const slideItemVariants = {
  normal: {
    scale: 1
  },
  hover: {
    scale: 1.3,
    zIndex: 10,
    transition: {
      delay: 0.3,
      duration: 0.2,
      type: "tween"
    }
  }
}

function Result() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  const { data, isLoading } = useQuery(["searchResult", keyword], () => keyword && getSearchResult(keyword));

  console.log(data);

  return (
    <S.ResultWrap>
      <S.ResultList>
        {data && data.results.map((item: IMovie) => {
          if(item.poster_path){
            return (
              <S.ResultItem 
                key={item.id}
                variants={slideItemVariants}
                initial="normal"
                whileHover="hover"
                transition={{type: "tween"}}
              >
                <img src={makeImgPath(item.poster_path)} alt={item.title} />
              </S.ResultItem>
            )
          }
        })}
      </S.ResultList>
    </S.ResultWrap>
  )
}

export default Result;