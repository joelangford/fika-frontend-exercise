const getGenres = async (setGenres) => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US');
    const json = await response.json();
    setGenres(json.genres);
  } catch (error) {
    console.error(error);
  }
}

export default getGenres;