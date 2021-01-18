import React, { Component } from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withData } from '../hoc-helper';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceConsumer } from '../swapi-service-context';

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;

const PersonDetails = ({itemId}) => {
    return(
        <ItemDetails 
            itemId={itemId} 
            getData={getPerson}
            getImageUrl={getPersonImage}>

            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
                    
        </ItemDetails>
    );
};
const PlanetDetails = ({ itemId }) => {
    return(
        <ItemDetails  
            itemId={itemId} 
            getData={getPlanet}
            getImageUrl={getPlanetImage}>

            <Record field="name" label="Name" />
            <Record field="population" label="Population" />
            <Record field="rotation_period" label="Rotation period" />
            <Record field="diameter" label="Diameter" />

        </ItemDetails>
    )
};
const StarshipDetails = ({itemId}) => {
    return(
        <ItemDetails  
            itemId={itemId} 
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