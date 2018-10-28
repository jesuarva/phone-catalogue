import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PhoneDetailsComponent from '../PhoneDetailComponent/PhoneDetailsComponent';
import PhoneListContainer from '../PhoneListContainer/PhoneListContainer';

const MainContent = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={PhoneListContainer} />
      <Route path="/catalogue/:model" component={PhoneDetailsComponent} />
    </Switch>
  );
};

export default MainContent;
