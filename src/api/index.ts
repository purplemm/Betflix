export const getMovies = () => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`).then((res) => res.json());
}

export const getMovieInfo = (movieId: number) => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`).then((res) => res.json());
}

export const getSearchResult = (keyword: string) => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/search/multi?query=${keyword}&api_key=${process.env.REACT_APP_API_KEY}`).then((res) => res.json());
}
