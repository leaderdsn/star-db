import React, { Component } from 'react';
import './app.css';
import Header from '../header'
import RandomPlanet from '../random-planet'
import dummySwapiService from '../../services/dummy-swapi-service';
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

    //swapiService = new SwapiService(); 

    state = {
        showRandomPlanet: true,
        swapiService: dummySwapiService()
    };

    onServiceChange = () => {
        console.log('Change Context Value');
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