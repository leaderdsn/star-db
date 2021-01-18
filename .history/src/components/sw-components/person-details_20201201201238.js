import React from 'react';
import ErrorBoundry from '../error-boundry';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from '../hoc-helper';

const PersonDetails = ({itemId, swapiService}) => {
    const { getPerson, getPersonImage } = swapiService;
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

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getImageUrl
    }
}

export default withSwapiService(PersonDetails, mapMethodsToProps);