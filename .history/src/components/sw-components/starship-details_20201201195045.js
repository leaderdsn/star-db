import React from 'react';
import ErrorBoundry from '../error-boundry';
import ItemDetails, { Record } from '../item-details/item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';

const StarshipDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getStarship, getStarshipImage}) => { //swapiService
                    return (
                        <ErrorBoundry>
                            <ItemDetails  
                                itemId={itemId} 
                                getData={getStarship}
                                getImageUrl={getStarshipImage}>
                                <Record field="model" label="Model" />
                                <Record field="length" label="Length" />
                                <Record field="costInCredits" label="Cost" />
                            </ItemDetails>
                        </ErrorBoundry>    
                    )
                }
            }
        </SwapiServiceConsumer>
    );
};

export default StarshipDetails;