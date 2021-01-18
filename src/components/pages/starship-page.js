import React from 'react';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom';
// import Row from '../row';

// export default class StarshipPage extends Component {

//     state = {
//         selectedItem: null
//     };

//     onItemSelected = (selectedItem) => {
//         this.setState({ selectedItem });
//     };

//     render() {

//         const { selectedItem } = this.state;

//         return (
//             <Row 
//                 left={<StarshipList onItemSelected={this.onItemSelected} />}
//                 right={<StarshipDetails itemId={selectedItem} />}
//             />
//         );
//     }
// }

const StarshipPage = ({ history }) => {
    return ( 
        <StarshipList onItemSelected = {(id) =>  history.push(id)} />
    )
}

export default withRouter(StarshipPage);//оборачиваем в withRouter для того чтобы можно было использовать history, match, location