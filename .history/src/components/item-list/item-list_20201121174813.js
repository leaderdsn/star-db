import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './item-list.css';
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {
    swapiService = new SwapiService();

    state = {
        peopleList: null,
        //loading: true,
       // error: false
    };

    componentDidMount(){
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList,
                    //loading: false
                })
            })
            // .catch((error) => {
            //     this.setState({
            //         error: true,
            //         loading: false
            //     })
            // })
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.propsOnItemSelected(person.id)}>
                        { name }
                </li>
            );
        });
    }

    render() {
        //const { peopleList, loading, error } = this.state;
        const { peopleList } = this.state;
        // const hasData = !(loading || error)
        // const spinner = !loading ? <Spinner /> : null;
        if(!peopleList){
            return <Spinner />;
        }

        const items = this.renderItems(peopleList)

        return (
            <ul className="item-list list-group">
                { items }
            </ul>
        );
    }
}