import React from 'react';
import ErrorBoundry from '../error-boundry';
import ItemDetails, { Record } from '../item-details/item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';

const PersonDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage}) => { //swapiService
                    return (
                        <ErrorBoundry>
                            <ItemDetails 
                                itemId={itemId} 
                                getData={getPerson}
                                getImageUrl={getPersonImage}>
                                <Record field="gender" label="Gender" />
                                <Record field="eyeColor" label="Eye Color" />   
                            </ItemDetails>
                        </ErrorBoundry>    
                    )
                }
            }
        </SwapiServiceConsumer>
    );
};
const PlanetDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => { //swapiService
                    return (
                        <ErrorBoundry>
                            <ItemDetails  
                                itemId={itemId} 
                                getData={getPlanet}
                                getImageUrl={getPlanetImage}>
                                <Record field="name" label="Name" />
                                <Record field="population" label="Population" />
                                <Record field="rotation_period" label="Rotation period" />
                                <Record field="diameter" label="Diameter" />
                            </ItemDetails>
                        </ErrorBoundry>    
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};
// const StarshipDetails = ({itemId}) => {
//     return (
//         <SwapiServiceConsumer>
//             {
//                 ({getStarship, getStarshipImage}) => { //swapiService
//                     return (
//                         <ErrorBoundry>
//                             <ItemDetails  
//                                 itemId={itemId} 
//                                 getData={getStarship}
//                                 getImageUrl={getStarshipImage}>
//                                 <Record field="model" label="Model" />
//                                 <Record field="length" label="Length" />
//                                 <Record field="costInCredits" label="Cost" />
//                             </ItemDetails>
//                         </ErrorBoundry>    
//                     )
//                 }
//             }
//         </SwapiServiceConsumer>
//     );
// };

export {
    PersonDetails,
    PlanetDetails,
    //StarshipDetails
};