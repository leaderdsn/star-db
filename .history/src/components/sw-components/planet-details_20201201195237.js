import React from 'react';
import ErrorBoundry from '../error-boundry';
import ItemDetails, { Record } from '../item-details/item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';

const PlanetDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => { //swapiService
                    return (
                        <ErrorBoundry>
                            <ItemDetails  
                                itemId={itemId} 
                                getData={getPlanet}
                                getImageUrl={getPlanetImage}>
                                <Record field="name" label="Name" />
                                <Record field="population" label="Population" />
                                <Record field="rotation_period" label="Rotation period" />
                                <Record field="diameter" label="Diameter" />
                            </ItemDetails>
                        </ErrorBoundry>    
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};

export default PlanetDetails;