import React, { Component } from 'react';
import './planet-page.css';
import ItemList from '../item-list';
import PlanetDetails from '../planet-details';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';

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
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList 
                    onItemSelected={this.onPlanetSelected}
                    getData={this.swapiService.getAllPlanets}
                    renderItem={(item) => item.name}/>
                </div>
                <div className="col-md-6">
                    <PlanetDetails planetId={this.state.selectedPlanet} />
                    <ErrorButton />
                </div>
            </div>
        )
        
    }
}