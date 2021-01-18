import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorButton from '../error-button';
// import Row from '../row';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';

const Row = ({left, right}) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                { left }
            </div>
            <div className="col-md-6">
                { right }
            </div>
        </div>
    )
}

export default class PeoplePage extends Component {

    swapiService = new SwapiService(); 
    
    state = {
        selectedPerson: 3,
        hasError: false
    }

    componentDidCatch(error, info){
        //debugger;
        this.setState({hasError: true});
    }


    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };


    render() {
        if(this.state.hasError){
            return <ErrorIndicator />
        }

        const itemList =(
            <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>

                {(i) => (
                    `${i.name} (${i.gender}, ${i.birthYear})`
                )}

            </ItemList>
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
        );

        return (
            <div>
                <Row left={ itemList } right={ personDetails }/>  
                <Row left='Foo' right='Bar'/>    
            </div>
            
        )
    }
}
