import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home';
import OrphanagesMap from './pages/orphanages';
import Orphanage from './pages/orphanage';
import CreateOrphanage from './pages/createOrphanage';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        < Route exact path="/" component={HomePage} />
        < Route path="/app" component={OrphanagesMap} />
        < Route path="/orphanages/create" component={CreateOrphanage} />
        < Route path="/orphanages/:id" component={Orphanage} />
        
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;