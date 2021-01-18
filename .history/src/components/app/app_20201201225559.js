import React, { Component } from 'react';
import './app.css';
import Header from '../header'
import RandomPlanet from '../random-planet'
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context';
import Row from '../row'

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
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService

            console.log('switched to', Service.name);
            
            return {
                swapiService: new Service()
            };
        });
    };

    render(){
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={ this.state.swapiService }>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>
                        { planet }

                        <Row 
                            left={<PersonList />}
                            right={<PersonDetails itemId={20} />}
                        />
                        <Row 
                            left={<PlanetList />}
                            right={<PlanetDetails itemId={18} />}
                        />
                        <Row 
                            left={<StarshipList />}
                            right={<StarshipDetails itemId={5} />}
                        />
                    </div>
                </SwapiServiceProvider>    
            </ErrorBoundry>
        );
    }

}