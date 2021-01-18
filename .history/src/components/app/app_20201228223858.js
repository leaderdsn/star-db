import React, { Component } from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundry from '../error-boundry';
import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetPage, StarshipPage, LoginPage, SecretPage } from '../pages';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import SwapiService from '../../services/swapi-service';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        swapiService: new SwapiService(),
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    }

    onServiceChange = () => {
            this.setState((swapiService) => {
            const Service = swapiService instanceof SwapiService ?
                                DummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            };
        });
    };

    render(){

        const { isLoggedIn } = this.state;
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={ this.state.swapiService }>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange}/>
                            <RandomPlanet />
                            <Switch>
                                <Route path='/' 
                                        render={() => <h2>Welcome to StarDB</h2>}
                                        exact />
                                {/* при испльзовнии Switch отрисовку <h2>People</h2> необходимо перенести в PeoplePage*/}
                                {/* <Route path='/people'  
                                        render={() => <h2>People</h2>}
                                        exact /> */}
                                <Route path='/people/:id?' component= {PeoplePage} />
                                <Route path='/planets' component= {PlanetPage} />
                                <Route path='/starships' exact component= {StarshipPage} />
                                <Route path='/starships/:id' 
                                        //в match содержаться параметры которые передали в это объект :id, 
                                        //в location содер-ся информаци о текущем состоянии (страницы) которая отображается
                                        //в history содержиться информация для того чтобы программно перейти на другую страницу
                                        render={({match, location, histoty}) => {
                                            const { id } = match.params;
                                            // console.log(match);
                                            return <StarshipDetails itemId={id} />
                                        }} 
                                        />
                                <Route path='/login' 
                                    render={() => (
                                        <LoginPage 
                                            isLoggedIn={isLoggedIn} 
                                            onLogin={this.onLogin}/>
                                    )} 
                                />
                                <Route path='/secret' 
                                    render={() => (
                                        <SecretPage isLoggedIn={isLoggedIn} />
                                    )} 
                                />
                                {/* Если ни один Route не сработал то загружаем стартовую страницу приложения*/}
                                {/* <Redirect to='/' />  */}
                                <Route render={() => <h2>Page not found </h2>} />
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>    
            </ErrorBoundry>
        );
    }

}