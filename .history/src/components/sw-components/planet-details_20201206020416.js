import React from 'react';
import ErrorBoundry from '../error-boundry';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from '../hoc-helper';

const PlanetDetails = (props) => {
    return (
        <ErrorBoundry>
            <ItemDetails {...props}>
                <Record field="name" label="Name" />
                <Record field="population" label="Population" />
                <Record field="rotation_period" label="Rotation period" />
                <Record field="diameter" label="Diameter" />
            </ItemDetails>
        </ErrorBoundry> 
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);