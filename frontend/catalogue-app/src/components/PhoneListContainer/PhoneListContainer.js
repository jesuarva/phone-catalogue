import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

const PhoneListContainer = (props) => {
  const { data } = props;
  return (
    <div className="row">
      {data.map((phone, i) => (
        <Card
          key={Math.random() + Date.now()}
          id={`phone-${i}`}
          phone={phone}
        />
      ))}
    </div>
  );
};

PhoneListContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(
  mapStateToProps,
  {},
)(PhoneListContainer);
