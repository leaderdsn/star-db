import React, { Component } from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SwapiService from '../../services/swapi-service';

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
            this.setState((swapiService) => {
            const Service = swapiService instanceof SwapiService ?
                                DummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            };
        });
    };

    render(){
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={ this.state.swapiService }>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange}/>
                            <RandomPlanet />
                            <Route path='/' 
                                    render={() => <h2>Welcom to StarDB</h2>}
                                    exact />
                            <Route path='/people' component= {PeoplePage} />
                            <Route path='/planets' component= {PlanetPage} />
                            <Route path='/starships' component= {StarshipPage} />
                        </div>
                    </Router>
                </SwapiServiceProvider>    
            </ErrorBoundry>
        );
    }

}