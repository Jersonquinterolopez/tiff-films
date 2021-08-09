import { useEffect, useState } from 'react';
import { api } from '../services/api.js';
import { filterByPopularity } from '../shared/utils/filterByPopularity.js';

const useGetFilms = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const { data } = await api.movies.list();
        const results = await data.results;
        return results;
      } catch (error) {
        console.log(error);
      }
    };

    const fetchAndFilter = async () => {
      try {
        const unFilteredFilms = await fetchFilms();
        const filteredFilms = await filterByPopularity(unFilteredFilms);
        setFilms(filteredFilms);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAndFilter();
  }, []);

  return films;
};

export default useGetFilms;
