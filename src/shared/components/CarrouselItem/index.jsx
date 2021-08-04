import React from 'react';
import './index.css';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => {
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        {/* <div>
          <img
            className="carousel-item__details--img"
            src={PlayIcon}
            alt="Play icon"
          />
          <img
            className="carousel-item__details--img"
            src={PlusIcon}
            alt="Plus icon"
          />
        </div> */}
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {year} {contentRating} {duration} minutos
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;
