import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';

import './planet-page.css';

export default class PlanetPage extends Component {

    swapiService = new SwapiService(); 
    
    state = {
        selectedPlanet: 3,
    }

    onPlanetSelected = (id) => {
        this.setState({
            selectedPlanet: id
        });
    };

    render() {

        const itemList =(
            <ItemList 
                onItemSelected={this.onPlanetSelected}
                getData={this.swapiService.getAllPlanets}>

                {(i) => (
                    `${i.name} (d: ${i.diameter})`
                )}

            </ItemList>
        );

        const planetDetails = (
            <ErrorBoundry>
                <ItemDetails planetId={this.state.selectedPlanet} />
            </ErrorBoundry>
        );
        
        return (
            <React.Fragment>
                <Row left={ itemList } right={ planetDetails }/>  
            </React.Fragment>
        )
        
    }
}
