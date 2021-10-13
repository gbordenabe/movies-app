const getMovies = async (category) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=6e993083b050fd8d52fd449621017db7&language=en-US&query=${category}&page=1&include_adult=false`;
  const resp = await fetch(url);
  const { results } = await resp.json();

  const movies = results.map(
    ({ id, title, poster_path, overview, vote_average, release_date }) => {
      return {
        id: id,
        title: title,
        url: `https://image.tmdb.org/t/p/original${poster_path}`,
        overview: overview,
        rating: vote_average,
        release_date: release_date,
      };
    }
  );
  console.log(movies);
  return movies;
};

export default getMovies;
