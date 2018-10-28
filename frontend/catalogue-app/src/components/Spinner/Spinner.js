import React from 'react';
import SPINNER from '../../media/rotating-balls-spinner.gif';

const Spinner = () => {
  return (
    <figure className="col-12 figure">
      <img
        src={SPINNER}
        alt="masmovil logo"
        className="figure-img img-fluid rounded"
      />
    </figure>
  );
};

export default Spinner;
