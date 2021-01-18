import React, { Component } from 'react';
import ItemDetails, {Record} from '../item-details';
import { withData } from '../hoc-helper';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;

const PersonDetails = () => {
    return(
        <ItemDetails 
            itemId={11} 
            getData={getPerson}
            getImageUrl={getPersonImage}>

            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
                    
        </ItemDetails>
    );
};
const PlanetDetails = () => {};
const StarshipDetails = () => {
    return(
        <ItemDetails  
            itemId={5} 
            getData={getStarship}
            getImageUrl={getStarshipImage}>

            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />

        </ItemDetails>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};