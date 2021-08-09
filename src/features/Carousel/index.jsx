import React from 'react';
import './index.css';

const Carousel = (props) => {
  return (
    <section className="carousel">
      <div className="carousel__container">{props.children}</div>
    </section>
  );
};

export default Carousel;
