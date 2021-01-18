import React, { Component } from 'react';
import './app.css';
import Header from '../header'
import RandomPlanet from '../random-planet'
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context';

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';

export default class App extends Component {

    swapiService = new SwapiService(); 

    state = {
        showRandomPlanet: true,
    };

    render(){
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />
                    { planet }
                    <PersonDetails itemId={20} />
                    <PlanetDetails itemId={18} />
                    <StarshipDetails itemId={5} />
                    <PersonList />
                    <StarshipList />
                    <PlanetList />
                </div>
            </ErrorBoundry>
        );
    }

}