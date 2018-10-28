import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { fetchingItems } from '../../actions';
import MAXMOVIL_LOGO from '../../media/Masmovillogo.svg.png';
import Spinner from '../Spinner/Spinner';
import PhoneListContainer from '../PhoneListContainer/PhoneListContainer';

class App extends Component {
  componentDidMount() {
    const { fetchingItems } = this.props;
    fetchingItems();
  }

  render() {
    const { fetched_Item } = this.props;
    console.log({ FETCHED_ITEMS: fetched_Item });

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
        <div className="main row">
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                this.props.fetched_Item ? (
                  <Redirect to="catalogue" />
                ) : (
                  <div className="col-12">
                    <Spinner />
                  </div>
                )
              }
            />
            <Route path="/catalogue" component={PhoneListContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, dispatch) => {
  return { fetched_Item: state.fetched_Item, dispatch };
};

export default connect(
  mapStateToProps,
  { fetchingItems },
)(App);
