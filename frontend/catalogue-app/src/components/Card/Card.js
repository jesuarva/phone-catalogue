import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';
import Pic from '../Pic/Pic';
import './Card.css';

const Card = ({ phone }) => {
  const { image, Model } = phone;
  const urlModel = Model.replace(/\s/g, '-');
  return (
    <div className="col-12 col-md-4 custom-card">
      <Link to={`/catalogue/${urlModel}`}>
        <Jumbotron className="custom-card">
          <Pic img={image} altAttribute={Model} />
          <h1 className="display-6">{Model}</h1>
        </Jumbotron>
      </Link>
    </div>
  );
};

export default Card;
