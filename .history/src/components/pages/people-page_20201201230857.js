import React, { Component } from 'react';
import { PersonDetails, PersonList } from '../sw-components';
import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
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

        // const itemList = (
        //     <ItemList
        //         onItemSelected={this.onPersonSelected}
        //         getData={this.swapiService.getAllPeople}>

        //         {(i) => (
        //         `${i.name} (${i.birthYear})`
        //         )}

        //     </ItemList>
        // );

        // const personDetails = (
        //     <ErrorBoundry>
        //         <ItemDetails itemId={this.state.selectedPerson} />
        //     </ErrorBoundry>
        // );

        return (
            <Row 
                left={<PersonList />}
                right={<PersonDetails itemId={20} />}
            />
        );
    }
}