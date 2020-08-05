import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import { PrivateRoute } from './HOC/PrivateRoute';
import * as Containers from './containers';

const Routes = () => (
    <Switch>
        <Route exact={true} path="/" component={Containers.DashboardPage} />
        <Route path="/booking/:id" component={Containers.EventBooking} />
        <Redirect from="*" to="/" />
    </Switch>
);

export default Routes;