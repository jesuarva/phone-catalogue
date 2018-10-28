import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PhoneListContainer from '../PhoneListContainer/PhoneListContainer';
import PhoneDetailsComponent from '../PhoneDetailComponent/PhoneDetailsComponent';

const MainContent = (props) => {
  const { fetched_Item } = props;
  const { pathname } = props.location;
  console.log(props.location.pathname);
  return (
    <Switch>
      <Route exact path="/" component={PhoneListContainer} />
      <Route path="/catalogue/:model" component={PhoneDetailsComponent} />
    </Switch>
  );
};

const mapStateToProps = (state, dispatch) => {
  return { fetched_Item: state.fetched_Item, dispatch };
};

export default withRouter(
  connect(
    mapStateToProps,
    {},
  )(MainContent),
);
