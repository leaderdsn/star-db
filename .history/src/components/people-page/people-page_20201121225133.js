import React, { Component } from 'react';
import './people-page.css';

export default class PeoplePage extends Component {

    state = {
        selectedPerson: 3
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        return <p > People Page </p>
    }
}
