import axios from 'axios';

const tmdb_api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

const API_KEY = process.env.REACT_APP_TMDB_FILMS_API_KEY;
const releaseYear = 2021;

export const api = {
  movies: {
    list(currentPage) {
      const config = {
        method: 'GET',
        url: `/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&sort_by=popularity.desc&with_genres=&primary_release_year=${releaseYear}&page=${currentPage}`,
      };

      return tmdb_api(config);
    },
    get(movieId) {
      const config = {
        method: 'GET',
        url: `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
      };

      return tmdb_api(config);
    },
  },
};
