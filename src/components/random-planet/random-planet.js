import React from "react";
import SwapiService from "../../services/swapi-service";
import "./random-planet.scss";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
export default class RandomPlanet extends React.Component {
    SwapiService = new SwapiService();
    state = {
        planet: {},
        loading: true,
        error: false,
    };
    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 2500);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false, error: false });
    };
    updatePlanet = () => {
        const id = Math.floor(Math.random() * 17) + 2;
        this.SwapiService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
    };
    onError = () => {
        this.setState({ error: true, loading: false });
    };
    render() {
        const { planet, loading, error } = this.state;
        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;
        return (
            <div className="random-planet bg-secondary rounded mb-3">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}
const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;
    return (
        <React.Fragment>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="random planet img"></img>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item ">
                        <span className="">Population </span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item ">
                        <span>Rotation Speed </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item ">
                        <span>Diameter </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};
