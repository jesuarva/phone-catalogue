import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Table } from 'reactstrap';
import Pic from '../Pic/Pic';

export const PhoneDetailsComponent = (props) => {
  const { data } = props;

  // Get url-param and repalces dach-character with 'spaces'
  const model = props.match.params.model.replace(/-/g, ' ');

  // Get specific phone-details
  const phone = data.filter((phone) => phone.Model === model)[0];
  const { Model, image } = phone;

  let details = [];

  // Buil the details to display
  for (let key in phone) {
    if (key === 'image' || key === 'Model') continue;
    details.push(
      <tr key={Math.random() + Date.now()}>
        <th scope="row">{key}</th>
        <td>{phone[key]}</td>
      </tr>,
    );
  }

  return (
    <Fragment>
      <div className="row">
        <div className="col-12">
          <Link to="/">
            <h1>Back to catalogue</h1>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-4 card-phone-image">
          <Pic img={image} altAttribute={Model} />
        </div>
        <div className="col-12 col-8 card-phone-details">
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">{Model}</h1>
              <Table>
                <tbody>{details}</tbody>
              </Table>
            </Container>
          </Jumbotron>
        </div>
      </div>
    </Fragment>
  );
};

PhoneDetailsComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Model: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      model: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(PhoneDetailsComponent);
