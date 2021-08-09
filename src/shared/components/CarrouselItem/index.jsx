import React from 'react';
import './index.css';
const image_base_url = 'https://image.tmdb.org/t/p/w500/';

const CarouselItem = ({
  poster_path,
  title,
  release_date,
  popularity,
  duration = '2:00.00',
}) => {
  return (
    <div className="carousel-item">
      <img
        className="carousel-item__img"
        src={`${image_base_url}${poster_path}`}
        alt={title}
      />
      <div className="carousel-item__details">
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {release_date} {popularity} {duration} minutes
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;
