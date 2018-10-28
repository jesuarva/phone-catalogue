import PropTypes from 'prop-types';
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

Pic.propTypes = {
  img: PropTypes.string.isRequired,
  altAttribute: PropTypes.string.isRequired,
};

export default Pic;
