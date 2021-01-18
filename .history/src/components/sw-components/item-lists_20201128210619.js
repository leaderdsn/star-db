import React, { Component } from 'react';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = swapiService;

const PersonList = () => {};
const PlanetList = () => {};
const StarshipList = () => {};

export {
    PersonList,
    PlanetList,
    StarshipList
};