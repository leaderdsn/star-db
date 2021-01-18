import React, { Component } from 'react';
import { PersonDetails, PersonList } from '../sw-components';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

export default class PeoplePage extends Component {

    state = {
        selectedPerson: null
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
    };

    render() {

        const { selectedPerson } = this.state;

        return (
            <Row 
                left={<PersonList onPersonSelected={this.onPersonSelected} />}
                right={<PersonDetails itemId={selectedPerson} />}
            />
        );
    }
}

// import React, { Component } from 'react';
// import { PersonDetails, PersonList } from '../sw-components';
// import Row from '../row';

// export default class PeoplePage extends Component {

//     state = {
//         selectedItem: null
//     };

//     onItemSelected = (selectedItem) => {
//         this.setState({ selectedItem });
//     };

//     render() {
//         const { selectedItem } = this.state;

//         return (
//         <Row
//             left={<PersonList onItemSelected={this.onItemSelected} />}
//             right={<PersonDetails itemId={selectedItem} />} />
//         );
//     }

// }