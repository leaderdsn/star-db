import React, { Component } from 'react';
import './app.css';
import Header from '../header'
import RandomPlanet from '../random-planet'
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceConsumer, SwapiServiceProvider } from '../swapi-service-context';

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        swapiService: DummySwapiService()
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService

        });
    };

    render(){
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
        const {
                getPerson,
                getStarship,
                getPersonImage,
                getStarshipImage 
            } = this.state.swapiService;
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={ this.state.swapiService }>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>
                        {/* { planet } */}
                        <PersonDetails itemId={20} />
                        <PlanetDetails itemId={18} />
                        <StarshipDetails itemId={5} />
                        <PersonList />
                        <StarshipList />
                        <PlanetList />
                    </div>
                </SwapiServiceProvider>    
            </ErrorBoundry>
        );
    }

}