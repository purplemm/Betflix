import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import Loader from "components/Loader";
import Banner from "components/Banner";
import Slider from "components/Slider";

import { getMovies } from "api"

function Home() {
  const { data, isLoading } = useQuery<IGetMoviesResult>(["movies", "nowPlaying"], getMovies);
  const [bannerMovie, setbannerMovie] = useState<IMovie>();
  const [offset, setOffset] = useState(6);
  const [slides, setSlides] = useState<IMovie[]>();

  useEffect(() => {
    if(data){
      setbannerMovie(data.results[0]);
      setSlides(data.results);
    }
  }, [data]);

  return (
    <>
      {isLoading ? <Loader /> : (
        <>
          {bannerMovie && <Banner data={bannerMovie} />}
          {slides && <Slider offset={offset} data={slides.slice(1)} />}
        </>
      )}
    </>
  )
}

export default Home;