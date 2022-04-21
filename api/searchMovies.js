const searchMovies = async (setData, setLoading, query) => {
  setLoading(true);

  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false&query=${query}`);
    const json = await response.json();
    setData(json.results);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

export default searchMovies;