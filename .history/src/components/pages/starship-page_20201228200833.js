import React from 'react';
import { StarshipList } from '../sw-components';
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

const StarshipPage = () => {
    return ( <
        StarshipList onItemSelected = {
            (itemId) => {
                const newPath = `/starships/${itemId}`;
            }
        }
        />
    )
}

export default StarshipPage