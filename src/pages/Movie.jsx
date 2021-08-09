import React, { useEffect, useState } from 'react';
import { api } from '../services/api.js';
import MovieDetails from '../shared/components/MovieDetails/index.jsx';

const Movie = (props) => {
  const { movieId } = props.match.params;
  const [film, setFilm] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFilm = async () => {
      setLoading(true);
      try {
        const { data } = await api.movies.get(movieId);
        const filmData = await data;
        setFilm(filmData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };

    getFilm();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <div>...Loading</div>;
  } else {
    return <MovieDetails film={film} />;
  }
};

export default Movie;
