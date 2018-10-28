import React from 'react';
import SPINNER from '../../media/rotating-balls-spinner.gif';

const Spinner = () => {
  return (
    <div className="col-12 custom-card">
      <img
        src={SPINNER}
        alt="masmovil logo"
        className="figure-img img-fluid rounded"
      />
    </div>
  );
};

export default Spinner;
