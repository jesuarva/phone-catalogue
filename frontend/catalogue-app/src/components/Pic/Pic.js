import React from 'react';

const Pic = ({ img, altAttribute }) => {
  return (
    <div>
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
