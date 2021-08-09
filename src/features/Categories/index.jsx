import React from 'react';
import './index.css';

const Categories = (props) => {
  const { title } = props;
  return (
    <div>
      <h3 className="categories__title mt-3">{title}:</h3>
      {props.children}
    </div>
  );
};

export default Categories;
