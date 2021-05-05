import React from 'react';
import {Switch,Route} from "react-router-dom";
import Login from '../components/Login';
import TodoDashboard from '../components/TodoDashboard';
import { PrivateRoute } from './ProtectedRoute';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component = {Login}/>
                <PrivateRoute exact path="/dashboard" component={TodoDashboard} />
                <Route path="*" component={() => <h1>404 Not Found</h1>} />
            </Switch>
        </div>
    )
}
