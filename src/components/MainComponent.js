import React, { Component } from 'react';
import Homepage from './homepage/HomeComponent';
import Dashboard from './webapp/Dashboard/Dashboard';
import Motivation from './webapp/Dashboard/Motivation/Motivation';
import Productivity from './webapp/Dashboard/Productivity/Productivity';
import Goals from './webapp/Dashboard/Goals/Goals';
import Community from './webapp/Dashboard/Community/Community';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
        
        const HomePage = () => {
            return (
                <Homepage />
            );
        };

        return (
            <div>  
                <Switch>
                    <Route path='/home' component={Homepage} />
                    <Route exact path='/app' render={() => <Dashboard />} />
                    <Route exact path='/app/goals' render={() => <Goals />} /> 
                    <Route exact path='/app/productivity' render={() => <Productivity />} /> 
                    <Route exact path='/app/motivation' render={() => <Motivation />} /> 
                    <Route exact path='/app/community' render={() => <Community />} />                    
                    <Redirect to='/home' />
                </Switch>   
            </div>
        );
    }
}

export default Main;