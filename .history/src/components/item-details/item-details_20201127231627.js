import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';

import './item-details.css';

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{ field }</span>
        </li>
    );
};
    
export {
    Record
};

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
                    alt="item" />
                <div className="card-body">
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        { this.props.children }
                    </ul>
                </div>
            </div>
        )
    }
}