import React from "react";
import Header from "../header";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import StarshipPage from "../pages/starship-page";
import PeoplePage from "../pages/people-page";
import PlanetPage from "../pages/planet-page";
import { Record } from "../item-details";
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../swapi-service-context";
import { PersonDetails, PlanetDetails, StarshipDetails } from "../sw-components";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./app.css";

export default class App extends React.Component {
    swapiService = new SwapiService();
    state = {
        selectedItem: null,
        showRandomPlanet: true,
        hasError: false,
    };
    onItemSelected = (id) => {
        this.setState({
            selectedItem: id,
        });
        console.log(id);
    };
    toggleRandomPlanet = () => {
        const _showRandomPlanet = !this.state.showRandomPlanet;
        this.setState({
            showRandomPlanet: _showRandomPlanet,
        });
    };
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <div className="container-md">
                            <Header />
                            <Route path="/" exact>
                                <h1 className="text-center my-5">Welcome to STAR DB</h1>
                            </Route>
                            <Route path="/people" exact>
                                <PeoplePage />
                            </Route>
                            <Route path="/planets" exact>
                                <PlanetPage />
                            </Route>
                            <Route path="/starships" exact>
                                <StarshipPage />
                            </Route>
                            <Route
                                path="/people/:id"
                                render={({ match }) => {
                                    const { id } = match.params;
                                    return (
                                        <PersonDetails itemId={id}>
                                            <Record field="name" label="Name: " />
                                            <Record field="gender" label="Gender: " />
                                        </PersonDetails>
                                    );
                                }}
                            ></Route>
                            <Route
                                path="/planets/:id"
                                render={({ match }) => {
                                    const { id } = match.params;
                                    return (
                                        <PlanetDetails itemId={id}>
                                            <Record field="name" label="Name: " />
                                            <Record field="population" label="Population: " />
                                            <Record field="diameter" label="Diameter: " />
                                        </PlanetDetails>
                                    );
                                }}
                            ></Route>
                            <Route
                                path="/starships/:id"
                                render={({ match }) => {
                                    const { id } = match.params;
                                    return (
                                        <StarshipDetails itemId={id}>
                                            <Record field="model" label="Model: " />
                                            <Record field="length" label="Length: " />
                                            <Record field="costInCredits" label="Cost: " />
                                            <Record field="crew" label="Crew: " />
                                        </StarshipDetails>
                                    );
                                }}
                            ></Route>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
