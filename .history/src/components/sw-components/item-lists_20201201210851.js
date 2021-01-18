import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helper';
import SwapiService from '../../services/swapi-service';

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

const PersonList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapPersonMethodsToProps); 
const PlanetList = withData(withChildFunction(ItemList, renderName));
const StarshipList = withData(withChildFunction(ItemList, renderModelAndName));

export {
    PersonList,
    PlanetList,
    StarshipList
};