import React, { Component } from 'react';
import './planet-page.css';
import ItemList from '../item-list';
import PlanetDetails from '../planet-details';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';

const Row = ({left, right}) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                { left }
            </div>
            <div className="col-md-6">
                { right }
            </div>
        </div>
    )
}

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

        const itemList =(<ItemList 
                            onItemSelected={this.onPlanetSelected}
                            getData={this.swapiService.getAllPlanets}>

                            {(i) => (`${i.name} (d: ${i.diameter})`)}
                            
                        </ItemList>);
        return (
            <React.Fragment>
                <Row left={ itemList } right={ personDetails }/>  
                    <PlanetDetails planetId={this.state.selectedPlanet} />
                    <ErrorButton />
            </React.Fragment>
        )
        
    }
}
