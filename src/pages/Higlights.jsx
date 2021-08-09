import React from 'react';
import Carousel from '../features/Carousel';
import Categories from '../features/Categories';
import useGetFilms from '../hooks/useGetFilms.js';
import { renderList } from '../shared/utils/renderList.js';

const Higlights = () => {
  const films = useGetFilms();

  return (
    <div>
      {films.length > 0 && (
        <Categories title="Highlights">
          <Carousel>{renderList(films)}</Carousel>
        </Categories>
      )}
    </div>
  );
};

export default Higlights;
