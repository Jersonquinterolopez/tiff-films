import { useEffect, useState } from 'react';
import { api } from '../services/api.js';

const useGetFilmDetails = (movieId) => {
  const [film, setFilm] = useState();

  useEffect(() => {
    const getFilm = async () => {
      try {
        const { data } = await api.movies.get(movieId);
        const filmDetails = await data;
        setFilm(filmDetails);
      } catch (error) {
        console.log(error);
      }
    };

    getFilm();
  }, [movieId]);

  return film;
};

export default useGetFilmDetails;
