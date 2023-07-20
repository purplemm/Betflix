import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import Loader from "components/Loader";
import Banner from "components/Banner";
import Slider from "components/Slider";

import { getNowPlayingMovies, getNowPopularMovies, getNowUpComingMovies } from "api";
import * as S from "assets/styles/componentsStyle";

interface IOffset {
  nowPlaying: number;
  popular: number;
  upComing: number;
}

interface ISlides {
  nowPlaying: IMovie[];
  popular: IMovie[];
  upComing: IMovie[];
}

function Home() {
  const { data: nowPlayingData, isLoading: nowPlayingIsLoading } = useQuery<IGetMoviesResult>(["movies", "nowPlaying"], getNowPlayingMovies);
  const { data: popularData, isLoading: popularDataIsLoading } = useQuery<IGetMoviesResult>(["movies", "popular"], getNowPopularMovies);
  const { data: upComingData, isLoading: upComingDataIsLoading } = useQuery<IGetMoviesResult>(["movies", "upComing"], getNowUpComingMovies);

  const [bannerMovie, setbannerMovie] = useState<IMovie>();
  const [offset, setOffset] = useState<IOffset>({
    nowPlaying: 6,
    popular: 6,
    upComing: 6
  });
  const [slides, setSlides] = useState<ISlides>();

  useEffect(() => {
    if(nowPlayingData && popularData && upComingData){
      setbannerMovie(nowPlayingData.results[0]);
      setSlides(() => ({
        nowPlaying: nowPlayingData.results,
        popular: popularData.results,
        upComing: upComingData.results
      }));
    }
  }, [nowPlayingData, popularData, upComingData]);

  return (
    <>
      {nowPlayingIsLoading ? <Loader /> : (
        <>
          {bannerMovie && <Banner data={bannerMovie} />}

          <div style={{ marginTop: "-6.5rem" }}>
            <S.SliderTitle>Now Playing</S.SliderTitle>
            {slides?.nowPlaying && <Slider offset={offset.nowPlaying} data={slides.nowPlaying.slice(1)} layoutId="nowPlaying" />}
          </div>

          <div>
            <S.SliderTitle>Popular</S.SliderTitle>
            {slides?.popular && <Slider offset={offset.popular} data={slides.popular.slice(1)} layoutId="popular" />}
          </div>

          <div>
            <S.SliderTitle>Upcoming</S.SliderTitle>
            {slides?.upComing && <Slider offset={offset.upComing} data={slides.upComing.slice(1)} layoutId="upComing" />}
          </div>
        </>
      )}
    </>
  )
}

export default Home;