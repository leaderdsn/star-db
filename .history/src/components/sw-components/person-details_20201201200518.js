import React from 'react';
import ErrorBoundry from '../error-boundry';
import ItemDetails, { Record } from '../item-details/item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';
import { withSwapiService } from '../hoc-helper';

const PersonDetails = ({itemId}) => {
    return (
        <ErrorBoundry>
            <ItemDetails 
                itemId={itemId} 
                getData={getPerson}
                getImageUrl={getPersonImage}>
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />   
            </ItemDetails>
        </ErrorBoundry>    
    )
};

export default PersonDetails;