export const getMovies = () => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`).then((res) => res.json());
}
