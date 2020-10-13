import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import homePage from './pages/home';
import orphanages from './pages/orphanages';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        < Route exact path="/" component={homePage} />
        < Route exact path="/orfanatos" component={orphanages} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;