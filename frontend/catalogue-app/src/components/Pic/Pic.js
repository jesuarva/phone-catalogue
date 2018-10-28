import React from 'react';
import './Pic.css';

const Pic = ({ img, altAttribute }) => {
  return (
    <div className="pic">
      <figure className="figure">
        <img
          src={img}
          className="figure-img img-fluid rounded"
          alt={altAttribute}
        />
      </figure>
    </div>
  );
};

export default Pic;
