import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchingItems } from '../../actions';
import MAXMOVIL_LOGO from '../../media/Masmovillogo.svg.png';

class App extends Component {
  componentDidMount() {
    const { fetchingItems } = this.props;
    fetchingItems();
  }

  render() {
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
        <div className="row" />
      </div>
    );
  }
}

const mapStateToProps = (state, distpatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  { fetchingItems },
)(App);
