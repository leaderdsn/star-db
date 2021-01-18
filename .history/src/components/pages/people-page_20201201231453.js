import React, { Component } from 'react';
import { PersonDetails, PersonList } from '../sw-components';
// import ItemList from '../item-list/item-list';
// import ItemDetails from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import './people-page.css';
import { PersonList } from '../sw-components';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: null
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
    };

    render() {

        const { selectedPerson } = this.state;

        return (
            <Row 
                left={<PersonList onPersonSelected={this.onPersonSelected} />}
                right={<PersonDetails itemId={selectedPerson} />}
            />
        );
    }
}