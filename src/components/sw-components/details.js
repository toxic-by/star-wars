import ItemDetails from "../item-details";
import { cardViewer } from "../hoc-helper/index";
import SwapiService from "../../services/swapi-service";
const swapiService = new SwapiService();
const { getPerson, getPlanet, getStarship, getPersonImage, getPlanetImage, getStarshipImage } = swapiService;

const PersonDetails = cardViewer(ItemDetails, getPerson, getPersonImage);
const PlanetDetails = cardViewer(ItemDetails, getPlanet, getPlanetImage);
const StarshipDetails = cardViewer(ItemDetails, getStarship, getStarshipImage);

export { PersonDetails, PlanetDetails, StarshipDetails };
