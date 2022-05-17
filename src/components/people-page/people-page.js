import React, { Component } from "react";
import ItemList from "../item-list";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import PageRow from "../page-row";
import "./people-page.css";
import ItemDetails, { Record } from "../item-details";

export default class PeoplePage extends Component {
    swapiService = new SwapiService();
    state = { selectedItem: 1 };

    onPersonSelected = (id) => {
        this.setState({
            selectedItem: id,
        });
    };
    render() {
        const { getPerson, getPersonImage } = this.swapiService;
        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPeople}>
                {(i) => `${i.name} (${i.birthYear})`}
            </ItemList>
        );
        const itemDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={this.state.selectedItem} getData={getPerson} getImageUrl={getPersonImage}>
                    <Record field="gender" label="Gender: " />
                    <Record field="eyeColor" label="Eye color: " />
                </ItemDetails>
            </ErrorBoundry>
        );
        return <PageRow left={itemList} right={itemDetails} />;
    }
}
