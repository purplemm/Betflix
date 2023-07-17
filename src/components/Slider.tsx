import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { makeImgPath } from "utils";
import * as S from "assets/styles/componentsStyle";

interface SliderProps {
  offset: number;
  data: IMovie[];
}

const slideRowVariants = {
  hidden: {
    x: window.outerWidth + 10
  },
  visible: {
    x: 0
  },
  exit: {
    x: -window.outerWidth - 10
  }
}

const slideItemVariants = {
  normal: {
    scale: 1
  },
  hover: {
    scale: 1.3,
    y: -50,
    zIndex: 10,
    transition: {
      delay: 0.3,
      duration: 0.2,
      type: "tween"
    }
  }
}

const movieInfoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.2,
      type: "tween"
    }
  }
}

function Slider({ offset, data }: SliderProps) {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const incraseIndex = () => {
    if(data) {
      if(leaving) return;
      toggleLeaving();

      const totalMovies = data.length;
      const maxIndex = Math.floor(totalMovies / offset) - 1;

      setIndex((prev) => prev === maxIndex ? 0 : prev + 1);
    }
  }

  const toggleLeaving = () => {
    setLeaving(!leaving);
  }

  const onClickItem = (movieId: number) => {
    navigate(`movie/${movieId}`);
  }

  console.log(data);

  console.log("offset: ", offset, "index: ", index);

  return (
    <S.SliderWrap>
      <AnimatePresence onExitComplete={toggleLeaving}>
        <S.SlideRow 
          key={index} 
          variants={slideRowVariants} 
          initial="hidden" 
          animate="visible" 
          exit="exit" 
          transition={{type: "tween", duration: 1}}
        >
          {data && data.slice(offset * index, offset * index + offset).map((item) => (
            <S.SlideItem 
              key={item.id} 
              $bgImg={makeImgPath(item.poster_path, "w500")} 
              variants={slideItemVariants}
              initial="normal"
              whileHover="hover"
              transition={{type: "tween"}}
              onClick={() => onClickItem(item.id)}
            >
              <S.MovieInfo variants={movieInfoVariants}>
                {item.title}
              </S.MovieInfo>
            </S.SlideItem>
          ))}
        </S.SlideRow>
      </AnimatePresence>
    </S.SliderWrap>
  )
}

export default Slider;