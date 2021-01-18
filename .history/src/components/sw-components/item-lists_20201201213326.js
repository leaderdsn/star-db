import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helper';

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = ({ name }) => <span>{ name }</span>;
const renderModelAndName = ({ model, name}) => <span>{ name } ({ model })</span>

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanet
    };
};
const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarship
    };
};

const PersonList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapPersonMethodsToProps); 
const PlanetList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapPlanetMethodsToProps);
const StarshipList = withSwapiService(withData(withChildFunction(ItemList, renderModelAndName)), mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
};