import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './item-list.css';
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {
    //swapiService = new SwapiService();

    state = {
        itemList: null,
        //loading: true,
       // error: false
    };

    componentDidMount(){

        const { getData } = this.props;
        getData()
            .then((itemList) => {
                this.setState({
                    itemList,
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
        return arr.map((item) => {
            const { id } = item;
            const label = this.props.renderItem(item);
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                        { label }
                </li>
            );
        });
    }

    render() {
        //const { peopleList, loading, error } = this.state;
        const { itemList } = this.state;
        // const hasData = !(loading || error)
        // const spinner = !loading ? <Spinner /> : null;
        if(!itemList){
            return <Spinner />;
        }

        const items = this.renderItems(itemList)

        return (
            <ul className="item-list list-group">
                { items }
            </ul>
        );
    }
}