import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchingItems } from '../../actions';
import MAXMOVIL_LOGO from '../../media/Masmovillogo.svg.png';
import MainContent from '../MainContent/MainContent';
import Spinner from '../Spinner/Spinner';
import './App.css';

export class App extends Component {
  componentDidMount() {
    const { fetchingItems } = this.props;
    fetchingItems();
  }

  render() {
    const { fetched_Item } = this.props;

    return (
      <div className="App container">
        <div className="header row">
          <h1 className="display-1 col-12">Phone catalogue</h1>
          <figure className="col-12 figure">
            <img
              src={MAXMOVIL_LOGO}
              alt="masmovil logo"
              className="figure-img img-fluid rounded"
            />
          </figure>
        </div>
        {fetched_Item ? <MainContent /> : <Spinner />}
      </div>
    );
  }
}

App.propTypes = {
  fetchingItems: PropTypes.func.isRequired,
  fetched_Item: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, dispatch) => {
  return { fetched_Item: state.fetched_Item, dispatch };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchingItems },
  )(App),
);
