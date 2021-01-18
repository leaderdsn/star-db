import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';

import './item-details.css';

const Record = () => {
    return (
        <li className="list-group-item">
            <span className="term">Gender: { gender }</span>
        </li>
    )
}

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        image: null
    };

    componentDidMount(){
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if(this.props.itemId !== prevProps.itemId){
            this.updateItem();
        }
    }

    updateItem(){
        const { itemId, getData, getImageUrl} = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                })
            })
    }

    render() {

        const { item, image } = this.state;
        
        if (!item) {
            return <span>Select a person from a list</span>;
        }

        const { id, name, gender,
                birthYear, eyeColor } = item;

        return (
        <div className="item-details card">
            <img className="item-image" 
                src={ image }
                alt="character" />
            <div className="card-body">
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender: { gender }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year: { birthYear }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color: { eyeColor }</span>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}