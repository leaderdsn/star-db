import React, { Component } from 'react';
import ItemList from '../item-list';
import PlanetDetails from '../planet-details';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

import './planet-page.css';

export default class PlanetPage extends Component {

    swapiService = new SwapiService(); 
    
    state = {
        selectedPlanet: 3,
        hasError: false
    }

    componentDidCatch(){
        this.setState({hasError: true});
    }


    onPlanetSelected = (id) => {
        this.setState({
            selectedPlanet: id
        });
    };

    render() {
        if(this.state.hasError){
            return <ErrorIndicator />
        }

        const itemList =(
            <ItemList 
                onItemSelected={this.onPlanetSelected}
                getData={this.swapiService.getAllPlanets}>

                {(i) => (`${i.name} (d: ${i.diameter})`)}

            </ItemList>
        );

        const planetDetails = (
            <PlanetDetails planetId={this.state.selectedPlanet} />
        );
        
        return (
            <React.Fragment>
                <Row left={ itemList } right={ planetDetails }/>  
                <ErrorButton />
            </React.Fragment>
        )
        
    }
}