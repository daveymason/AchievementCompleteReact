import React, { Component } from 'react';
import Homepage from './homepage/HomeComponent';
import Dashboard from './webapp/Dashboard/Dashboard';
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
                    <Redirect to='/home' />
                </Switch>
               
            </div>
        );
    }
}

export default Main;