import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchingItems } from '../../actions';

class App extends Component {
  componentDidMount() {
    const { fetchingItems } = this.props;
    fetchingItems();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
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
