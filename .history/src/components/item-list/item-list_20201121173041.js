import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './item-list.css';
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {
    swapiService = new SwapiService();

    state = {
        peopleList: null,
        loading: true,
        error: false
    };

    componentDidMount(){
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList,
                    loading: false
                })
            })
            .catch((error) => {
                this.setState({
                    error: true,
                    loading: false
                })
            })
    }

    render() {
        const { peopleList, loading, error } = this.state;
        const spinner = loading ? <Spinner /> : null;

        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    Luke Skywalker
                </li>
                <li className="list-group-item">
                    Darth Vader
                </li>
                <li className="list-group-item">
                    R2-D2
                </li>
            </ul>
        );
    }
}